"use client";

import LessonManagementPanel from "@/features/admin/components/LessonManagementPanel";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function AdminLessonsPage() {
  usePageTitle("Lesson Management");
  return <LessonManagementPanel />;
}
