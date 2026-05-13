"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { useAdmin } from "../../../context/AdminContext";
import { useLearningData } from "../../../context/LearningDataContext";
import UserDashboard from "../../../components/UserDashboard";

export default function ProgressPage() {
  const router = useRouter();
  const { profile } = useAuth();
  const { isAdmin } = useAdmin();
  const { modules, lessons } = useLearningData();

  if (!profile) return null;

  return (
    <UserDashboard
      profile={profile}
      modules={modules}
      lessons={lessons}
      isAdmin={isAdmin}
      onClose={() => router.push("/dashboard/modules")}
    />
  );
}
