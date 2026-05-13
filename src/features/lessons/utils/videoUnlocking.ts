import type { Lesson } from "../../../types";

type LessonVideoStateInput = {
  lesson: Lesson;
  activeVideoId: string;
  completedVideos: string[];
};

type LessonNavigationStateInput = {
  moduleLessons: Lesson[];
  selectedLesson: Lesson;
  activeVideoId: string;
  completedVideos: string[];
  completedLessons: string[];
};

export function getStartingVideo({
  lesson,
  activeVideoId,
  completedVideos,
}: LessonVideoStateInput) {
  if (activeVideoId) {
    const selected = lesson.videos.find((video) => video.id === activeVideoId);
    if (selected) return selected;
  }

  for (let i = 0; i < lesson.videos.length; i++) {
    const video = lesson.videos[i];
    const unlocked =
      i === 0 || completedVideos.includes(lesson.videos[i - 1].id);
    const completed = completedVideos.includes(video.id);
    if (unlocked && !completed) return video;
  }

  return lesson.videos[0];
}

export function isLessonVideoUnlocked(
  lesson: Lesson,
  videoId: string,
  completedVideos: string[],
) {
  const videoIndex = lesson.videos.findIndex((video) => video.id === videoId);
  if (videoIndex < 0) return false;
  if (videoIndex === 0) return true;

  const prevVideo = lesson.videos[videoIndex - 1];
  return completedVideos.includes(prevVideo.id);
}

export function getLessonVideoState(input: LessonVideoStateInput) {
  const { lesson, activeVideoId, completedVideos } = input;
  const activeVideo = getStartingVideo(input);
  const currentVideoIndex = lesson.videos.findIndex(
    (video) => video.id === activeVideoId,
  );

  return {
    activeVideo,
    currentVideoIndex,
    hasNextVideo: currentVideoIndex < lesson.videos.length - 1,
    hasPrevVideo: currentVideoIndex > 0,
    isVideoUnlocked: (videoId: string) =>
      isLessonVideoUnlocked(lesson, videoId, completedVideos),
    isVideoCompleted: (videoId: string) => completedVideos.includes(videoId),
  };
}

export function getLessonNavigationState({
  moduleLessons,
  selectedLesson,
  activeVideoId,
  completedVideos,
  completedLessons,
}: LessonNavigationStateInput) {
  const currentLessonIndex = moduleLessons.findIndex(
    (lesson) => lesson.id === selectedLesson.id,
  );
  const prevLesson =
    currentLessonIndex > 0 ? moduleLessons[currentLessonIndex - 1] : null;
  const nextLesson =
    currentLessonIndex < moduleLessons.length - 1
      ? moduleLessons[currentLessonIndex + 1]
      : null;
  const currentVideoIndex = selectedLesson.videos.findIndex(
    (video) => video.id === activeVideoId,
  );
  const hasNextVideo = currentVideoIndex < selectedLesson.videos.length - 1;
  const hasPrevVideo = currentVideoIndex > 0;
  const isNextVideoUnlocked =
    hasNextVideo && completedVideos.includes(activeVideoId);
  const isLastLesson = currentLessonIndex === moduleLessons.length - 1;
  const isNextDisabled = isLastLesson
    ? true
    : hasNextVideo
      ? !isNextVideoUnlocked
      : !completedLessons.includes(selectedLesson.id);

  return {
    currentLessonIndex,
    prevLesson,
    nextLesson,
    currentVideoIndex,
    hasNextVideo,
    hasPrevVideo,
    isNextVideoUnlocked,
    isLastLesson,
    isNextDisabled,
  };
}
