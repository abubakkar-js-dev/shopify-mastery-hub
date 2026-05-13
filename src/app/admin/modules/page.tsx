"use client";

import ModuleManagementPanel from "@/features/admin/components/ModuleManagementPanel";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function AdminModulesPage() {
  usePageTitle("Module Management");
  return <ModuleManagementPanel />;
}
