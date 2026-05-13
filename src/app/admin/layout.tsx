import type { ReactNode } from "react";
import AdminRouteView from "../../components/AdminRouteView";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminRouteView>{children}</AdminRouteView>;
}
