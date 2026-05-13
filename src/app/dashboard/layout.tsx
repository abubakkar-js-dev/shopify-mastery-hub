"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLearningData } from "../../context/LearningDataContext";
import Header from "../../features/dashboard/components/Header";
import Sidebar from "../../features/dashboard/components/Sidebar";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, profile, loading } = useAuth();
  const { modules } = useLearningData();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);

  usePageTitle(
    profile?.displayName
      ? `${profile.displayName}'s Terminal`
      : "Operational Hub",
  );

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (pathname.includes("/modules/")) {
      const moduleId = pathname.split("/modules/")[1]?.split("/")[0];
      if (moduleId) {
        const mod = modules.find((m) => m.id === moduleId);
        if (mod && mod.month !== selectedMonth) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setSelectedMonth(mod.month);
        }
      }
    }
  }, [pathname, modules, selectedMonth]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0A0A0A]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-brand-bg text-[#F5F5F5]">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      <main className="flex-1 flex flex-col overflow-hidden bg-[#0F0F0F]">
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto">{children}</div>
        </div>
      </main>
    </div>
  );
}
