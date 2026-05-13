"use client";

import AnalyticsPanel from "@/features/admin/components/AnalyticsPanel";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function AdminPage() {
  usePageTitle("Analytics");
  return <AnalyticsPanel />;
}
