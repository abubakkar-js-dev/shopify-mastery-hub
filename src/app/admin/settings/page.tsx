"use client";

import SettingsPanel from "@/features/admin/components/SettingsPanel";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function AdminSettingsPage() {
  usePageTitle("Settings");
  return <SettingsPanel />;
}
