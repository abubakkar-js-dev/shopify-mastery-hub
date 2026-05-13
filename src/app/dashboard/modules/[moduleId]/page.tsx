"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../../context/AuthContext";
import { useLearningData } from "../../../../context/LearningDataContext";
import ModuleOverview from "../../../../components/ModuleOverview";
import { lessonService } from "../../../../features/lessons/services/lessonService";
import { Lesson } from "../../../../types";

type ModulePageProps = {
  params: Promise<{
    moduleId: string;
  }>;
};

export default function ModulePage({ params }: ModulePageProps) {
  const router = useRouter();
  const { moduleId } = use(params);
  const { user, profile, loading } = useAuth();
  const { modules, lessons } = useLearningData();

  const activeModule = modules.find((m) => m.id === moduleId);

  const openLesson = (lesson: Lesson) => {
    router.push(`/dashboard/modules/${moduleId}/lessons/${lesson.id}`);
  };

  const toggleLessonCompletion = async (lessonId: string) => {
    if (!user || !profile) return;
    await lessonService.toggleLessonCompletion(user.uid, profile, lessonId);
  };

  if (loading) return null;
  if (!activeModule) return <div>Module not found</div>;

  return (
    <ModuleOverview
      module={activeModule}
      lessons={lessons.filter((l) => l.moduleId === activeModule.id)}
      completedLessons={profile?.completedLessons || []}
      onSelectLesson={openLesson}
      onToggleComplete={toggleLessonCompletion}
      profile={profile}
    />
  );
}
