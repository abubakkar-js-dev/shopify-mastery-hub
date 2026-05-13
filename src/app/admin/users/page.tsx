"use client";

import UserManagementPanel from "@/features/admin/components/UserManagementPanel";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function AdminUsersPage() {
  usePageTitle("User Management");
  return <UserManagementPanel />;
}
