import { collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { Lesson, Module } from "../../../types";
import { INITIAL_LESSONS, INITIAL_MODULES } from "../../modules/seed";
import toast from "react-hot-toast";

export const adminService = {
  async seedData() {
    if (!confirm("This will populate the database with initial roadmap content. Continue?")) {
      return false;
    }
    
    try {
      for (const mod of INITIAL_MODULES) {
        await setDoc(doc(db, "modules", mod.id), mod);
        const moduleLessons = INITIAL_LESSONS.filter((l) => l.moduleId === mod.id);
        for (const lesson of moduleLessons) {
          await setDoc(doc(db, `modules/${mod.id}/lessons`, lesson.id), lesson);
        }
      }
      toast.success("Data seeded successfully!");
      return true;
    } catch (error) {
      console.error("Error seeding data:", error);
      toast.error("Failed to seed data.");
      return false;
    }
  },

  async importJson(json: string) {
    if (!json.trim()) {
      toast.error("Please paste JSON data first");
      return false;
    }

    try {
      const parsedData = JSON.parse(json);
      if (!parsedData.modules || !Array.isArray(parsedData.modules)) {
        toast.error("Invalid JSON format. Expected { modules: [...] }");
        return false;
      }

      toast.loading("Saving imported modules...", { id: "import" });

      for (const modData of parsedData.modules) {
        await setDoc(
          doc(db, "modules", modData.id),
          { ...modData, id: modData.id },
          { merge: true }
        );

        if (modData.lessons && Array.isArray(modData.lessons)) {
          const lessonsRef = collection(db, `modules/${modData.id}/lessons`);
          for (const lesson of modData.lessons) {
            await setDoc(
              doc(lessonsRef, lesson.id),
              { ...lesson, id: lesson.id, moduleId: modData.id },
              { merge: true }
            );
          }
        }
      }

      toast.success("Modules imported successfully!", { id: "import" });
      return true;
    } catch (error) {
      console.error("Import failed:", error);
      toast.error("Failed to import JSON. Please check the format.", { id: "import" });
      return false;
    }
  },

  async deleteModule(moduleId: string) {
    if (confirm("Delete module and all associated lessons?")) {
      await deleteDoc(doc(db, "modules", moduleId));
      return true;
    }
    return false;
  },

  async deleteLesson(moduleId: string, lessonId: string) {
    if (confirm("Delete lesson?")) {
      await deleteDoc(doc(db, `modules/${moduleId}/lessons`, lessonId));
      return true;
    }
    return false;
  },

  async updateModuleOrder(moduleId1: string, order1: number, moduleId2: string, order2: number) {
    await updateDoc(doc(db, "modules", moduleId1), { order: order2 });
    await updateDoc(doc(db, "modules", moduleId2), { order: order1 });
  },

  async updateLessonOrder(moduleId: string, lessonId1: string, order1: number, lessonId2: string, order2: number) {
    const lessonsRef = `modules/${moduleId}/lessons`;
    await updateDoc(doc(db, lessonsRef, lessonId1), { order: order2 });
    await updateDoc(doc(db, lessonsRef, lessonId2), { order: order1 });
  },

  async saveModule(module: Module) {
    await setDoc(doc(db, "modules", module.id), module);
  },

  async saveLesson(lesson: Lesson) {
    await setDoc(doc(db, `modules/${lesson.moduleId}/lessons`, lesson.id), lesson);
  },

  async toggleAdmin(uid: string, isAdmin: boolean) {
    if (isAdmin) {
      await setDoc(doc(db, "admins", uid), { uid, updatedAt: new Date().toISOString() });
    } else {
      await deleteDoc(doc(db, "admins", uid));
    }
  },

  async deleteUser(uid: string) {
    if (confirm("Delete this user's data from Firestore? This cannot be undone.")) {
      await deleteDoc(doc(db, "profiles", uid));
      return true;
    }
    return false;
  }
};
