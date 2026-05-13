import { Lesson, Module, UserProfile } from "../../../types";

export function getCurrentProgress({
  modules,
  lessons,
  profile,
}: {
  modules: Module[];
  lessons: Lesson[];
  profile: UserProfile | null;
}) {
  const completedLessons = profile?.completedLessons || [];
  const completedVideos = profile?.completedVideos || [];

  const sortedModules = [...modules].sort((a, b) => a.order - b.order);

  for (const mod of sortedModules) {
    const moduleLessons = lessons
      .filter((l) => l.moduleId === mod.id)
      .sort((a, b) => a.order - b.order);

    if (moduleLessons.length === 0) continue;

    for (const lesson of moduleLessons) {
      const isLessonCompleted = completedLessons.includes(lesson.id);

      if (!isLessonCompleted) {
        let currentVideoId: string | null = null;

        for (let i = 0; i < lesson.videos.length; i++) {
          const video = lesson.videos[i];
          const isVideoCompleted = completedVideos.includes(video.id);
          const isPreviousVideoCompleted =
            i === 0 || completedVideos.includes(lesson.videos[i - 1].id);

          if (!isVideoCompleted && isPreviousVideoCompleted) {
            currentVideoId = video.id;
            break;
          }
        }

        if (!currentVideoId && lesson.videos.length > 0) {
          currentVideoId = lesson.videos[0].id;
        }

        return {
          module: mod,
          lesson,
          videoId: currentVideoId,
        };
      }
    }
  }

  if (sortedModules.length > 0) {
    const firstModule = sortedModules[0];
    const firstModuleLessons = lessons
      .filter((l) => l.moduleId === firstModule.id)
      .sort((a, b) => a.order - b.order);

    if (firstModuleLessons.length > 0) {
      const firstLesson = firstModuleLessons[0];
      const firstVideo = firstLesson.videos[0];
      return {
        module: firstModule,
        lesson: firstLesson,
        videoId: firstVideo?.id || null,
      };
    }
  }

  return null;
}
