"use client";

import { useAuth } from "@/context/AuthContext";
import { useLearningData } from "@/context/LearningDataContext";
import { getCurrentProgress } from "@/features/modules/utils/progressUtils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const { profile } = useAuth();
  const { modules, lessons } = useLearningData();

  useEffect(() => {
    if (!profile) return;

    const progress = getCurrentProgress({ modules, lessons, profile });
    if (progress) {
      if (progress.videoId) {
        router.replace(
          `/dashboard/modules/${progress.module.id}/lessons/${progress.lesson.id}?v=${progress.videoId}`,
        );
      } else {
        router.replace(
          `/dashboard/modules/${progress.module.id}/lessons/${progress.lesson.id}`,
        );
      }
    } else {
      router.replace("/dashboard/modules");
    }
  }, [modules, lessons, profile, router]);

  return null;
}
