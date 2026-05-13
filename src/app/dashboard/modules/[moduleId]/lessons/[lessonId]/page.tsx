"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../../../../../context/AppContext";
import LessonView from "../../../../../../components/LessonView";
import { lessonService } from "../../../../../../features/lessons/services/lessonService";
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
  const { moduleId, lessonId } = use(params);
  const { user, profile, modules, lessons, loading } = useAppContext();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const selectedLesson = lessons.find((lesson) => lesson.id === lessonId);
  const activeModule = modules.find((m) => m.id === moduleId);

  if (loading || !user || !profile || !selectedLesson || !activeModule) {
    return null;
  }

  const moduleLessons = lessons
    .filter((l) => l.moduleId === activeModule.id)
    .sort((a, b) => a.order - b.order);

  const currentVideoId = activeVideo || selectedLesson.videos[0]?.id || "";
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

  const openLesson = (lesson: Lesson) => {
    router.push(`/dashboard/modules/${moduleId}/lessons/${lesson.id}`);
    setActiveVideo(null);
  };

  const handleNext = () => {
    if (hasNextVideo) {
      if (isNextVideoUnlocked) {
        setActiveVideo(selectedLesson.videos[currentVideoIndex + 1].id);
      }
    } else if (nextLesson && profile.completedLessons.includes(selectedLesson.id)) {
      openLesson(nextLesson);
    }
  };

  const handlePrev = () => {
    if (hasPrevVideo) {
      setActiveVideo(selectedLesson.videos[currentVideoIndex - 1].id);
    } else if (prevLesson) {
      openLesson(prevLesson);
    }
  };

  const toggleLessonCompletion = async (id: string) => {
    await lessonService.toggleLessonCompletion(user.uid, profile, id);
  };

  const toggleVideoCompletion = async (videoId: string) => {
    await lessonService.toggleVideoCompletion(user.uid, profile, videoId);
  };

  const toggleTaskCompletion = async (taskId: string) => {
    await lessonService.toggleTaskCompletion(user.uid, profile, taskId);
  };

  return (
    <LessonView
      lesson={selectedLesson}
      module={activeModule}
      onBack={() => router.push(`/dashboard/modules/${moduleId}`)}
      completedTasks={profile.completedTasks || []}
      onToggleTask={toggleTaskCompletion}
      activeVideoId={currentVideoId}
      onSelectVideo={setActiveVideo}
      completedVideos={profile.completedVideos || []}
      onToggleVideo={toggleVideoCompletion}
      onPrev={handlePrev}
      onNext={handleNext}
      isNextDisabled={isNextDisabled}
      isLastLesson={isLastLesson}
      onToggleLesson={() => toggleLessonCompletion(selectedLesson.id)}
      isLessonCompleted={profile.completedLessons.includes(selectedLesson.id)}
    />
  );
}
