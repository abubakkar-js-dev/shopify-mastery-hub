"use client";

import { AnimatePresence } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiBarChart2 as BarChart3,
  FiUsers as Users,
} from "react-icons/fi";
import {
  LuBookOpen as BookOpen,
  LuMenu as Menu,
  LuSettings as Settings,
  LuX as X,
} from "react-icons/lu";
import { cn } from "../../../lib/utils";
import TabButton from "./TabButton";
import {
  LuBook as Book,
  LuCpu as Cpu,
  LuLayers as Layers,
} from "react-icons/lu";

export type AdminTab = "overview" | "modules" | "lessons" | "ai" | "users" | "settings";

function getAdminTabFromPath(pathname: string): AdminTab {
  if (pathname.startsWith("/admin/users")) return "users";
  if (pathname.startsWith("/admin/settings")) return "settings";
  if (pathname.startsWith("/admin/modules")) return "modules";
  if (pathname.startsWith("/admin/lessons")) return "lessons";
  if (pathname.startsWith("/admin/ai")) return "ai";
  return "overview";
}

export default function AdminDashboardShell({
  activeTab,
  onClose,
  children,
}: {
  activeTab?: AdminTab;
  onClose?: () => void;
  children?: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentTab = activeTab ?? getAdminTabFromPath(pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex bg-brand-bg">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:relative z-50 h-full w-72 md:w-80 border-r border-white/10 bg-[#0F0F0F] flex flex-col transition-transform duration-300",
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter italic">
              Admin
            </h2>
            <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest">
              Control Panel
            </p>
          </div>
          <button
            onClick={() => (onClose ? onClose() : router.push("/"))}
            className="text-white/20 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          <TabButton
            active={currentTab === "overview"}
            onClick={() => {
              setIsSidebarOpen(false);
              router.push("/admin");
            }}
            icon={BarChart3}
            label="Overview"
          />
          <TabButton
            active={currentTab === "modules"}
            onClick={() => {
              setIsSidebarOpen(false);
              router.push("/admin/modules");
            }}
            icon={Layers}
            label="Modules"
          />
          <TabButton
            active={currentTab === "lessons"}
            onClick={() => {
              setIsSidebarOpen(false);
              router.push("/admin/lessons");
            }}
            icon={Book}
            label="Lessons"
          />
          <TabButton
            active={currentTab === "ai"}
            onClick={() => {
              setIsSidebarOpen(false);
              router.push("/admin/ai");
            }}
            icon={Cpu}
            label="AI Lab"
          />
          <TabButton
            active={currentTab === "users"}
            onClick={() => {
              setIsSidebarOpen(false);
              router.push("/admin/users");
            }}
            icon={Users}
            label="Users"
          />
          <TabButton
            active={currentTab === "settings"}
            onClick={() => {
              setIsSidebarOpen(false);
              router.push("/admin/settings");
            }}
            icon={Settings}
            label="Settings"
          />
        </nav>

        <div className="p-6 border-t border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-black font-black text-xs">
            A
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-tight">
              Admin User
            </p>
            <p className="text-[8px] text-white/40 uppercase tracking-widest">
              System Master
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-12 max-w-7xl mx-auto">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden mb-6 text-white/60 hover:text-white transition-colors"
          >
            <Menu size={24} />
          </button>

          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
