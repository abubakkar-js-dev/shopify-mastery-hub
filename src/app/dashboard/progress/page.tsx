"use client";

import { usePageTitle } from "@/hooks/usePageTitle";
import { useAdmin } from "../../../context/AdminContext";
import { useAuth } from "../../../context/AuthContext";
import { useLearningData } from "../../../context/LearningDataContext";
import { UserDashboardShell } from "../../../features/dashboard/components/UserDashboardShell";

export default function ProgressPage() {
  const { profile } = useAuth();
  const { isAdmin } = useAdmin();
  const { modules, lessons } = useLearningData();

  usePageTitle("Progress");

  if (!profile) return null;

  return (
    <UserDashboardShell
      profile={profile}
      modules={modules}
      lessons={lessons}
      isAdmin={isAdmin}
    />
  );
}
