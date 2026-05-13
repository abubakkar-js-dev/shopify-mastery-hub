"use client";

import { use } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useAuth } from "../../../../../../context/AuthContext";
import { useLearningData } from "../../../../../../context/LearningDataContext";
import LessonView from "../../../../../../components/LessonView";
import { useLessonProgress } from "../../../../../../features/lessons/hooks/useLessonProgress";
import { getLessonNavigationState } from "../../../../../../features/lessons/utils/videoUnlocking";

import { Lesson } from "../../../../../../types";

type LessonPageProps = {
  params: Promise<{
    moduleId: string;
    lessonId: string;
  }>;
};

export default function LessonPage({ params }: LessonPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { moduleId, lessonId } = use(params);
  const { user, profile, loading } = useAuth();
  const { modules, lessons } = useLearningData();
  const { toggleLesson, toggleVideo, toggleTask } = useLessonProgress();

  const selectedLesson = lessons.find((lesson) => lesson.id === lessonId);
  const activeModule = modules.find((m) => m.id === moduleId);

  if (loading || !user || !profile || !selectedLesson || !activeModule) {
    return null;
  }

  const moduleLessons = lessons
    .filter((l) => l.moduleId === activeModule.id)
    .sort((a, b) => a.order - b.order);

  const activeVideoId = searchParams.get("v");
  const currentVideoId = activeVideoId || selectedLesson.videos[0]?.id || "";

  const {
    currentVideoIndex,
    hasNextVideo,
    hasPrevVideo,
    isNextVideoUnlocked,
    isLastLesson,
    isNextDisabled,
    prevLesson,
    nextLesson,
  } = getLessonNavigationState({
    moduleLessons,
    selectedLesson,
    activeVideoId: currentVideoId,
    completedVideos: profile.completedVideos || [],
    completedLessons: profile.completedLessons || [],
  });

  const updateVideoParam = (videoId: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("v", videoId);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const openLesson = (lesson: Lesson) => {
    router.push(`/dashboard/modules/${moduleId}/lessons/${lesson.id}`);
  };

  const handleNext = () => {
    if (hasNextVideo) {
      if (isNextVideoUnlocked) {
        updateVideoParam(selectedLesson.videos[currentVideoIndex + 1].id);
      }
    } else if (nextLesson && profile.completedLessons.includes(selectedLesson.id)) {
      openLesson(nextLesson);
    }
  };

  const handlePrev = () => {
    if (hasPrevVideo) {
      updateVideoParam(selectedLesson.videos[currentVideoIndex - 1].id);
    } else if (prevLesson) {
      openLesson(prevLesson);
    }
  };

  return (
    <LessonView
      lesson={selectedLesson}
      module={activeModule}
      onBack={() => router.push(`/dashboard/modules/${moduleId}`)}
      completedTasks={profile.completedTasks || []}
      onToggleTask={toggleTask}
      activeVideoId={currentVideoId}
      onSelectVideo={updateVideoParam}
      completedVideos={profile.completedVideos || []}
      onToggleVideo={toggleVideo}
      onPrev={handlePrev}
      onNext={handleNext}
      isNextDisabled={isNextDisabled}
      isLastLesson={isLastLesson}
      onToggleLesson={() => toggleLesson(selectedLesson.id)}
      isLessonCompleted={profile.completedLessons.includes(selectedLesson.id)}
    />
  );
}
