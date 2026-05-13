import { useAppContext } from "../../../context/AppContext";
import { adminService } from "../services/adminService";
import { Lesson, Module } from "../../../types";

export function useAdminContent() {
  const { modules, lessons, profile } = useAppContext();

  const seedData = async () => {
    return await adminService.seedData();
  };

  const deleteModule = async (moduleId: string) => {
    return await adminService.deleteModule(moduleId);
  };

  const deleteLesson = async (moduleId: string, lessonId: string) => {
    return await adminService.deleteLesson(moduleId, lessonId);
  };

  const updateModuleOrder = async (m1: string, o1: number, m2: string, o2: number) => {
    return await adminService.updateModuleOrder(m1, o1, m2, o2);
  };

  const updateLessonOrder = async (mid: string, l1: string, o1: number, l2: string, o2: number) => {
    return await adminService.updateLessonOrder(mid, l1, o1, l2, o2);
  };

  const saveModule = async (module: Module) => {
    return await adminService.saveModule(module);
  };

  const saveLesson = async (lesson: Lesson) => {
    return await adminService.saveLesson(lesson);
  };

  return {
    modules,
    lessons,
    profile,
    seedData,
    deleteModule,
    deleteLesson,
    updateModuleOrder,
    updateLessonOrder,
    saveModule,
    saveLesson,
  };
}
