"use client";

import { useAuth } from "@/context/AuthContext";
import { useLearningData } from "@/context/LearningDataContext";
import { lessonService } from "@/features/lessons/services/lessonService";
import ModuleOverview from "@/features/modules/components/ModuleOverview";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Lesson } from "@/types";
import { useParams, useRouter } from "next/navigation";

export default function ModulePage() {
  const router = useRouter();
  const { moduleId } = useParams<{ moduleId: string }>();
  const { user, profile, loading } = useAuth();
  const { modules, lessons } = useLearningData();

  const activeModule = modules.find((m) => m.id === moduleId);

  usePageTitle(activeModule?.title || "Module");

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
