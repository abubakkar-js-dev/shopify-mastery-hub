"use client";

import YouTubeImportPanel from "@/features/admin/components/YouTubeImportPanel";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function AdminImportPage() {
  usePageTitle("Import Playlist");
  return <YouTubeImportPanel />;
}
