import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../../../lib/firebase";
import { firestorePaths } from "../../../shared/lib/firestorePaths";
import { AdminRecord, Lesson, Module, UserProfile } from "../../../types";
import { INITIAL_LESSONS, INITIAL_MODULES } from "../../modules/seed";

export const adminService = {
  async seedData() {
    if (
      !confirm(
        "This will populate the database with initial roadmap content. Continue?",
      )
    ) {
      return false;
    }

    try {
      for (const mod of INITIAL_MODULES) {
        await setDoc(doc(db, firestorePaths.module(mod.id)), mod);
        const moduleLessons = INITIAL_LESSONS.filter(
          (l) => l.moduleId === mod.id,
        );
        for (const lesson of moduleLessons) {
          await setDoc(
            doc(db, firestorePaths.lessons(mod.id), lesson.id),
            lesson,
          );
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
          doc(db, firestorePaths.module(modData.id)),
          { ...modData, id: modData.id },
          { merge: true },
        );

        if (modData.lessons && Array.isArray(modData.lessons)) {
          const lessonsRef = collection(db, firestorePaths.lessons(modData.id));
          for (const lesson of modData.lessons) {
            await setDoc(
              doc(lessonsRef, lesson.id),
              { ...lesson, id: lesson.id, moduleId: modData.id },
              { merge: true },
            );
          }
        }
      }

      toast.success("Modules imported successfully!", { id: "import" });
      return true;
    } catch (error) {
      console.error("Import failed:", error);
      toast.error("Failed to import JSON. Please check the format.", {
        id: "import",
      });
      return false;
    }
  },

  async deleteModule(moduleId: string) {
    if (confirm("Delete module and all associated lessons?")) {
      await deleteDoc(doc(db, firestorePaths.module(moduleId)));
      return true;
    }
    return false;
  },

  async deleteLesson(moduleId: string, lessonId: string) {
    if (confirm("Delete lesson?")) {
      await deleteDoc(doc(db, firestorePaths.lessons(moduleId), lessonId));
      return true;
    }
    return false;
  },

  async updateModuleOrder(
    moduleId1: string,
    order1: number,
    moduleId2: string,
    order2: number,
  ) {
    await updateDoc(doc(db, firestorePaths.module(moduleId1)), {
      order: order2,
    });
    await updateDoc(doc(db, firestorePaths.module(moduleId2)), {
      order: order1,
    });
  },

  async updateLessonOrder(
    moduleId: string,
    lessonId1: string,
    order1: number,
    lessonId2: string,
    order2: number,
  ) {
    await updateDoc(doc(db, firestorePaths.lessons(moduleId), lessonId1), {
      order: order2,
    });
    await updateDoc(doc(db, firestorePaths.lessons(moduleId), lessonId2), {
      order: order1,
    });
  },

  async saveModule(module: Module) {
    await setDoc(doc(db, firestorePaths.module(module.id)), module);
  },

  async saveLesson(lesson: Lesson) {
    await setDoc(
      doc(db, firestorePaths.lessons(lesson.moduleId), lesson.id),
      lesson,
    );
  },

  async toggleAdmin(uid: string, shouldBeAdmin: boolean) {
    if (shouldBeAdmin) {
      await setDoc(doc(db, firestorePaths.admin(uid)), {
        uid,
        updatedAt: new Date().toISOString(),
      });
    } else {
      await deleteDoc(doc(db, firestorePaths.admin(uid)));
    }
  },

  async deleteUser(uid: string) {
    if (
      confirm("Delete this user's data from Firestore? This cannot be undone.")
    ) {
      await deleteDoc(doc(db, firestorePaths.user(uid)));
      return true;
    }
    return false;
  },

  async checkAdmin(uid: string, email?: string | null): Promise<boolean> {
    const adminDocRef = doc(db, firestorePaths.admin(uid));
    const adminDoc = await getDoc(adminDocRef);
    return (
      adminDoc.exists() || email?.toLowerCase() === "mdabubakkars182@gmail.com"
    );
  },

  syncUsers(callback: (users: UserProfile[]) => void): () => void {
    return onSnapshot(
      query(collection(db, firestorePaths.users())),
      (snapshot) => {
        callback(snapshot.docs.map((d) => d.data() as UserProfile));
      },
      (error) => {
        console.error("Error syncing users:", error);
      },
    );
  },

  syncAdmins(callback: (admins: AdminRecord[]) => void): () => void {
    return onSnapshot(
      query(collection(db, firestorePaths.admins())),
      (snapshot) => {
        callback(snapshot.docs.map((d) => d.data() as AdminRecord));
      },
      (error) => {
        console.error("Error syncing admins:", error);
      },
    );
  },
};
