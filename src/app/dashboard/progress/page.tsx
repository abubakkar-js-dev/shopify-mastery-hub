"use client";

import { useRouter } from "next/navigation";
import { useAppContext } from "../../../context/AppContext";
import UserDashboard from "../../../components/UserDashboard";

export default function ProgressPage() {
  const router = useRouter();
  const { profile, modules, lessons, isAdmin } = useAppContext();

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
