"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiCheckCircle as CheckCircle, FiTrendingUp } from "react-icons/fi";
import {
  LuLock as Lock,
  LuLogOut as LogOut,
  LuShieldCheck as ShieldCheck,
  LuUser as UserIcon,
} from "react-icons/lu";
import { useAuth } from "../../../context/AuthContext";
import { useAdmin } from "../../../context/AdminContext";
import { useLearningData } from "../../../context/LearningDataContext";
import { logout } from "../../../lib/firebase";
import { cn } from "../../../lib/utils";

type DashboardSidebarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  activeMonth: number;
  setSelectedMonth: (month: number) => void;
};

export default function DashboardSidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  activeMonth,
  setSelectedMonth,
}: DashboardSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { profile } = useAuth();
  const { isAdmin } = useAdmin();
  const { modules, lessons } = useLearningData();

  const handleLogout = async () => {
    await logout();
    router.push("/auth");
  };

  const isModuleFinished = (mId: string) => {
    const moduleLessons = lessons.filter((l) => l.moduleId === mId);
    return (
      moduleLessons.length > 0 &&
      moduleLessons.every((l) =>
        (profile?.completedLessons || []).includes(l.id),
      )
    );
  };

  const months = Array.from(new Set(modules.map((m) => Number(m.month))))
    .filter((m) => !isNaN(m))
    .sort((a, b) => a - b);

  const filteredModules = modules.filter(
    (m) => Number(m.month) === Number(activeMonth),
  );

  const activeModuleId = pathname.split("/modules/")[1]?.split("/")[0] || null;

  return (
    <>
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
          "fixed md:relative z-50 h-full w-72 md:w-96 bg-brand-bg border-r border-white/10 flex flex-col transition-transform duration-300",
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="p-6 md:p-10 border-b border-white/10">
          <div className="flex flex-col mb-6 md:mb-8">
            <Link href="/dashboard/modules" className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none">
                Mastery
              </span>
              <span className="text-[10px] font-bold text-brand-primary tracking-[0.2em] uppercase mt-1">
                Shopify Edition
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-none mb-6">
            <div className="w-10 h-10 rounded-none bg-brand-primary flex items-center justify-center text-black font-black">
              <UserIcon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-xs uppercase truncate tracking-tight">
                {profile?.displayName}
              </p>
              <div className="flex flex-col gap-0.5">
                <p className="text-[8px] text-white/40 uppercase tracking-widest font-bold">
                  Student/Learner
                </p>
                {isAdmin && (
                  <p className="text-[8px] text-brand-primary uppercase tracking-widest font-black flex items-center gap-1">
                    <ShieldCheck size={10} /> Admin
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-white/40 hover:text-white transition-colors"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto pt-4 md:pt-6 space-y-1">
          <div className="px-6 md:px-10 mb-8 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/dashboard/account"
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "flex items-center justify-center gap-2 px-3 py-4 border transition-all group",
                  pathname === "/dashboard/account"
                    ? "bg-white/10 border-white/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                )}
              >
                <UserIcon
                  size={14}
                  className="text-brand-primary group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-black uppercase tracking-[0.1em] text-center">
                  Account
                </span>
              </Link>

              <Link
                href="/dashboard/progress"
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "flex items-center justify-center gap-2 px-3 py-4 border transition-all group",
                  pathname === "/dashboard/progress"
                    ? "bg-white/10 border-white/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                )}
              >
                <FiTrendingUp
                  size={14}
                  className="text-brand-primary group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-black uppercase tracking-[0.1em] text-center">
                  Metrics
                </span>
              </Link>
            </div>

            {isAdmin && (
              <Link
                href="/admin"
                className="w-full flex items-center justify-center gap-3 px-4 py-4 bg-brand-primary text-black hover:scale-105 active:scale-95 transition-all group shadow-[0_0_20px_rgba(149,255,0,0.1)]"
              >
                <ShieldCheck
                  size={16}
                  className="group-hover:rotate-12 transition-transform"
                />
                <span className="text-[11px] font-black uppercase tracking-[0.1em]">
                  Admin Dashboard
                </span>
              </Link>
            )}
          </div>

          <div className="px-6 md:px-10 mb-4 md:mb-6 text-left">
            <h3 className="section-label">Learning Path</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {months.map((m: number) => {
                const isUnlocked =
                  m === 1 ||
                  (() => {
                    const prevMonthModules = modules.filter(
                      (mod) => mod.month === m - 1,
                    );
                    return prevMonthModules.every((mod) => {
                      const moduleLessons = lessons.filter(
                        (l) => l.moduleId === mod.id,
                      );
                      return (
                        moduleLessons.length > 0 &&
                        moduleLessons.every((l) =>
                          (profile?.completedLessons || []).includes(l.id),
                        )
                      );
                    });
                  })();

                return (
                  <button
                    key={m}
                    disabled={!isUnlocked}
                    onClick={() => {
                      setSelectedMonth(m);
                      const firstOfMonth = modules.find(
                        (mod) => mod.month === m,
                      );
                      if (firstOfMonth) {
                        router.push(`/dashboard/modules/${firstOfMonth.id}`);
                      }
                      setIsSidebarOpen(false);
                    }}
                    className={cn(
                      "flex-1 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all border min-w-[70px]",
                      activeMonth === m
                        ? "bg-brand-primary text-black border-brand-primary"
                        : isUnlocked
                          ? "bg-white/5 text-white/40 border-white/10 hover:border-white/30"
                          : "bg-white/5 text-white/10 border-white/5 cursor-not-allowed opacity-50",
                    )}
                  >
                    <div className="flex items-center justify-center gap-1">
                      {!isUnlocked && <Lock size={10} />}
                      Month {m}
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="text-[10px] text-white/40 mt-3 uppercase tracking-widest">
              {filteredModules.length} Modules in month {activeMonth}
            </p>
          </div>
          {filteredModules.map((mod, idx) => {
            const isUnlocked =
              idx === 0 || isModuleFinished(filteredModules[idx - 1].id);

            return (
              <Link
                key={mod.id}
                href={isUnlocked ? `/dashboard/modules/${mod.id}` : "#"}
                onClick={(e) => {
                  if (!isUnlocked) e.preventDefault();
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-4 px-6 md:px-10 py-4 md:py-6 transition-all group border-b border-white/5",
                  activeModuleId === mod.id
                    ? "bg-white/5 border-l-4 border-brand-primary"
                    : "hover:bg-white/5 border-l-4 border-transparent",
                  !isUnlocked && "opacity-30 cursor-not-allowed",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs font-bold",
                    activeModuleId === mod.id
                      ? "text-brand-primary"
                      : "text-white/20",
                  )}
                >
                  {isUnlocked ? (
                    String(idx + 1).padStart(2, "0")
                  ) : (
                    <Lock size={12} />
                  )}
                </span>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <h3
                      className={cn(
                        "font-black uppercase leading-tight text-sm tracking-tight",
                        activeModuleId === mod.id
                          ? "text-white"
                          : "text-white/60 group-hover:text-white",
                      )}
                    >
                      {mod?.title}
                    </h3>
                    {isModuleFinished(mod.id) && (
                      <CheckCircle size={12} className="text-brand-primary" />
                    )}
                  </div>
                  {activeModuleId === mod.id && (
                    <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">
                      Active
                    </p>
                  )}
                  {!isUnlocked && (
                    <p className="text-[8px] text-brand-primary mt-1 uppercase tracking-widest font-bold">
                      Locked - Finish Week {idx} First
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 md:p-8 border-t border-white/10 bg-black/20">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold">
                Overall Progress
              </span>
              <span className="text-[10px] font-mono text-brand-primary font-black">
                {Math.round(
                  ((profile?.completedLessons.length || 0) /
                    (lessons.length || 1)) *
                    100,
                )}
                %
              </span>
            </div>
            <div className="w-full h-[2px] bg-white/5 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${((profile?.completedLessons.length || 0) / (lessons.length || 1)) * 100}%`,
                }}
                className="absolute left-0 top-0 h-full bg-brand-primary shadow-[0_0_10px_rgba(149,255,0,0.3)]"
              />
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-[10px] font-mono text-white/60 font-bold">
                {profile?.completedLessons.length || 0} / {lessons.length || 0}
              </span>
              <span className="text-[8px] text-white/20 uppercase tracking-widest font-black">
                Units Secured
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
