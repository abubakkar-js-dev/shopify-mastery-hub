"use client";

import { useAuth } from "../../../context/AuthContext";
import { useAdmin } from "../../../context/AdminContext";
import { useLearningData } from "../../../context/LearningDataContext";
import { UserDashboardShell } from "../../../features/dashboard/components/UserDashboardShell";

export default function ProgressPage() {
  const { profile } = useAuth();
  const { isAdmin } = useAdmin();
  const { modules, lessons } = useLearningData();

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
