"use client";

import { usePageTitle } from "@/hooks/usePageTitle";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";
import AdminDashboardShell from "./AdminDashboardShell";
import { adminService } from "@/features/admin/services/adminService";

type AdminRouteViewProps = {
  children?: ReactNode;
};

export default function AdminRouteView({ children }: AdminRouteViewProps) {
  usePageTitle("Central Command");
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const isUserAdmin = await adminService.checkAdmin(
            firebaseUser.uid,
            firebaseUser.email,
          );
          if (isUserAdmin) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
            router.push("/");
          }
        } catch (error) {
          console.error("AdminRouteView: Error checking admin status:", error);
          setIsAdmin(false);
          router.push("/");
        }
      } else {
        setIsAdmin(false);
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (isAdmin === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-brand-bg">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <>
      <AdminDashboardShell onClose={() => router.push("/")}>
        {children}
      </AdminDashboardShell>
    </>
  );
}
