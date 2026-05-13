import { Lesson, Module } from "../../../types";

export function sortModules(modules: Module[]): Module[] {
  return [...modules].sort((a, b) => a.order - b.order);
}

export function sortLessons(lessons: Lesson[]): Lesson[] {
  return [...lessons].sort((a, b) => a.order - b.order);
}

export function calculateModuleProgress(
  moduleLessons: Lesson[],
  completedLessons: string[]
): number {
  if (moduleLessons.length === 0) return 0;
  const completedCount = moduleLessons.filter((lesson) =>
    completedLessons.includes(lesson.id)
  ).length;
  return Math.round((completedCount / moduleLessons.length) * 100);
}

export function calculateLessonProgress(
  lesson: Lesson,
  completedVideos: string[],
  completedTasks: string[]
): { videosProgress: number; tasksProgress: number } {
  const videosProgress =
    lesson.videos.length > 0
      ? Math.round(
          (lesson.videos.filter((v) => completedVideos.includes(v.id)).length /
            lesson.videos.length) *
            100
        )
      : 100;

  const tasksProgress =
    lesson.tasks.length > 0
      ? Math.round(
          (lesson.tasks.filter((t) => completedTasks.includes(t.id)).length /
            lesson.tasks.length) *
            100
        )
      : 100;

  return { videosProgress, tasksProgress };
}
