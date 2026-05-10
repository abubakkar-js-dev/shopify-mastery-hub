"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiCheckCircle as CheckCircle, FiTrendingUp } from "react-icons/fi";
import {
  LuChevronRight as ChevronRight,
  LuLock as Lock,
  LuLogOut as LogOut,
  LuMenu as Menu,
  LuShieldCheck as ShieldCheck,
  LuSparkles as Sparkles,
  LuUser as UserIcon,
} from "react-icons/lu";
import LessonView from "../../components/LessonView";
import ModuleOverview from "../../components/ModuleOverview";
import UserDashboard from "../../components/UserDashboard";
import { db, logout } from "../../lib/firebase";
import { handleFirestoreError, OperationType } from "../../lib/firestore-errors";
import { cn } from "../../lib/utils";
import { generatePersonalizedPath } from "../../services/geminiService";
import { Lesson } from "../../types";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../context/AppContext";
import { doc, updateDoc } from "firebase/firestore";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, isAdmin, modules, lessons, loading } = useAppContext();
  usePageTitle(profile?.displayName ? `${profile.displayName}'s Terminal` : "Operational Hub");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [showPathGenerator, setShowPathGenerator] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const activeModule = modules.find(m => m.id === selectedModuleId) || (modules.length > 0 ? modules[0] : null);

  const toggleLessonCompletion = async (lessonId: string) => {
    if (!user || !profile) return;
    const isCompleted = profile.completedLessons.includes(lessonId);
    const newCompleted = isCompleted
      ? profile.completedLessons.filter((id) => id !== lessonId)
      : [...profile.completedLessons, lessonId];
    
    const path = `users/${user.uid}`;
    try {
      await updateDoc(doc(db, "users", user.uid), {
        completedLessons: newCompleted,
        lastActive: new Date().toISOString(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const toggleVideoCompletion = async (videoId: string) => {
    if (!user || !profile) return;
    const isCompleted = profile.completedVideos?.includes(videoId);
    const newCompleted = isCompleted
      ? (profile.completedVideos || []).filter((id) => id !== videoId)
      : [...(profile.completedVideos || []), videoId];

    const path = `users/${user.uid}`;
    try {
      await updateDoc(doc(db, "users", user.uid), {
        completedVideos: newCompleted,
        lastActive: new Date().toISOString(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const toggleTaskCompletion = async (taskId: string) => {
    if (!user || !profile) return;
    const isCompleted = profile.completedTasks?.includes(taskId);
    const newCompleted = isCompleted
      ? (profile.completedTasks || []).filter((id) => id !== taskId)
      : [...(profile.completedTasks || []), taskId];

    const path = `users/${user.uid}`;
    try {
      await updateDoc(doc(db, "users", user.uid), {
        completedTasks: newCompleted,
        lastActive: new Date().toISOString(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const handleGeneratePath = async (goals: string[]) => {
    if (!user || !profile) return;
    setIsGenerating(true);
    try {
      const pathValue = await generatePersonalizedPath(goals);
      if (pathValue) {
        await updateDoc(doc(db, "users", user.uid), {
          personalizedPath: {
            ...pathValue,
            goals,
            lastUpdated: new Date().toISOString(),
          },
        });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${user.uid}`);
    }
    setIsGenerating(false);
    setShowPathGenerator(false);
  };

  const filteredModules = modules.filter(
    (m) => Number(m.month) === Number(selectedMonth),
  );
  const months = Array.from(new Set(modules.map((m) => Number(m.month))))
    .filter((m) => !isNaN(m))
    .sort((a, b) => a - b);

  const handleLogout = async () => {
    await logout();
    router.push("/auth");
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0A0A0A]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-brand-bg text-[#F5F5F5]">
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
            <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none">
              Mastery
            </span>
            <span className="text-[10px] font-bold text-brand-primary tracking-[0.2em] uppercase mt-1">
              Shopify Edition
            </span>
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
            <button
              onClick={() => {
                setShowDashboard(true);
                setIsSidebarOpen(false);
              }}
              className="w-full flex items-center justify-center gap-3 px-4 py-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <FiTrendingUp size={16} className="text-brand-primary group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-black uppercase tracking-[0.1em]">Metrics & Analytics</span>
            </button>

            {isAdmin && (
              <Link
                href="/admin"
                className="w-full flex items-center justify-center gap-3 px-4 py-4 bg-brand-primary/10 border border-brand-primary/20 hover:bg-brand-primary/20 transition-all group"
              >
                <ShieldCheck size={16} className="text-brand-primary group-hover:rotate-12 transition-transform" />
                <span className="text-[11px] font-black uppercase tracking-[0.1em] text-brand-primary">Admin Dashboard</span>
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
                        setSelectedModuleId(firstOfMonth.id);
                        setSelectedLesson(null);
                        setShowDashboard(false);
                      }
                      setIsSidebarOpen(false);
                    }}
                    className={cn(
                      "flex-1 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all border min-w-[70px]",
                      selectedMonth === m
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
              {filteredModules.length} Modules in month {selectedMonth}
            </p>
          </div>
          {filteredModules.map((mod, idx) => {
            const isModuleFinished = (mId: string) => {
              const moduleLessons = lessons.filter((l) => l.moduleId === mId);
              return (
                moduleLessons.length > 0 &&
                moduleLessons.every((l) =>
                  (profile?.completedLessons || []).includes(l.id),
                )
              );
            };

            const isUnlocked =
              idx === 0 || isModuleFinished(filteredModules[idx - 1].id);

            return (
              <button
                key={mod.id}
                disabled={!isUnlocked}
                onClick={() => {
                  setSelectedModuleId(mod.id);
                  setSelectedLesson(null);
                  setShowDashboard(false);
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-4 px-6 md:px-10 py-4 md:py-6 transition-all group border-b border-white/5",
                  activeModule?.id === mod.id
                    ? "bg-white/5 border-l-4 border-brand-primary"
                    : "hover:bg-white/5 border-l-4 border-transparent",
                  !isUnlocked && "opacity-30 cursor-not-allowed",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs font-bold",
                    activeModule?.id === mod.id
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
                        activeModule?.id === mod.id
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
                  {activeModule?.id === mod.id && (
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
              </button>
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
                {Math.round(((profile?.completedLessons.length || 0) / (lessons.length || 1)) * 100)}%
              </span>
            </div>
            <div className="w-full h-[2px] bg-white/5 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ 
                  width: `${((profile?.completedLessons.length || 0) / (lessons.length || 1)) * 100}%` 
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[#0F0F0F]">
        {/* Header */}
        <header className="h-16 md:h-20 bg-brand-bg border-b border-white/10 px-4 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-white/60 hover:text-white transition-colors"
            >
              <Menu size={24} />
            </button>
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest hidden sm:block">
              Module
            </span>
            <ChevronRight size={14} className="text-white/20 hidden sm:block" />
            <span className="font-black text-xs md:text-sm uppercase tracking-tight truncate max-w-[200px] sm:max-w-none">
              {activeModule?.title}
            </span>
          </div>

          <button
            onClick={() => setShowPathGenerator(true)}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-primary border border-brand-primary/20 px-3 md:px-4 py-2 hover:bg-brand-primary/10 transition-all"
          >
            <Sparkles size={14} />
            <span className="hidden sm:inline">AI Training Path</span>
          </button>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            {!activeModule && !showDashboard ? (
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
                <div className="relative w-64 h-px bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-brand-primary to-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="text-white/20 uppercase font-black tracking-[0.4em] italic text-sm animate-pulse">
                    Initializing Intelligence Systems
                  </h2>
                  <p className="text-[10px] text-white/5 uppercase tracking-[0.2em] font-bold">
                    Synchronizing encrypted roadmap data...
                  </p>
                </div>
              </div>
            ) : showDashboard && profile ? (
              <UserDashboard
                profile={profile}
                modules={modules}
                lessons={lessons}
                isAdmin={isAdmin}
                onClose={() => setShowDashboard(false)}
              />
            ) : selectedLesson ? (() => {
              const moduleLessons = lessons
                .filter(l => l.moduleId === activeModule?.id)
                .sort((a, b) => a.order - b.order);
              const currentIndex = moduleLessons.findIndex(l => l.id === selectedLesson.id);
              const prevLesson = currentIndex > 0 ? moduleLessons[currentIndex - 1] : null;
              const nextLesson = currentIndex < moduleLessons.length - 1 ? moduleLessons[currentIndex + 1] : null;
              
              const currentVideoId = activeVideo || selectedLesson.videos[0]?.id || "";
              const currentVideoIndex = selectedLesson.videos.findIndex(v => v.id === currentVideoId);
              
              const hasNextVideo = currentVideoIndex < selectedLesson.videos.length - 1;
              const hasPrevVideo = currentVideoIndex > 0;

              const isNextVideoUnlocked = hasNextVideo && (profile?.completedVideos || []).includes(currentVideoId);
              
              const handleNext = () => {
                if (hasNextVideo) {
                  if (isNextVideoUnlocked) {
                    setActiveVideo(selectedLesson.videos[currentVideoIndex + 1].id);
                  }
                } else if (nextLesson && profile?.completedLessons.includes(selectedLesson.id)) {
                  setSelectedLesson(nextLesson);
                  setActiveVideo(null);
                }
              };

              const handlePrev = () => {
                if (hasPrevVideo) {
                  setActiveVideo(selectedLesson.videos[currentVideoIndex - 1].id);
                } else if (prevLesson) {
                  setSelectedLesson(prevLesson);
                  setActiveVideo(null);
                }
              };

              const isNextDisabled = hasNextVideo 
                ? !isNextVideoUnlocked 
                : !profile?.completedLessons.includes(selectedLesson.id);

              return (
                <LessonView
                  lesson={selectedLesson}
                  module={activeModule!}
                  onBack={() => {
                    setSelectedLesson(null);
                    setActiveVideo(null);
                  }}
                  completedTasks={profile?.completedTasks || []}
                  onToggleTask={toggleTaskCompletion}
                  activeVideoId={currentVideoId}
                  onSelectVideo={setActiveVideo}
                  completedVideos={profile?.completedVideos || []}
                  onToggleVideo={toggleVideoCompletion}
                  onPrev={handlePrev}
                  onNext={handleNext}
                  isNextDisabled={isNextDisabled}
                  onToggleLesson={() => toggleLessonCompletion(selectedLesson.id)}
                  isLessonCompleted={profile?.completedLessons.includes(selectedLesson.id)}
                />
              );
            })() : activeModule ? (
              <ModuleOverview
                module={activeModule}
                lessons={lessons.filter(
                  (l) => l.moduleId === activeModule.id,
                )}
                completedLessons={profile?.completedLessons || []}
                onSelectLesson={setSelectedLesson}
                onToggleComplete={toggleLessonCompletion}
                profile={profile}
              />
            ) : (
              <div className="flex items-center justify-center h-64 text-white/20 uppercase font-black tracking-widest italic text-center">
                Select a module from the roadmap to begin<br />your technical mastery journey.
              </div>
            )}
          </div>
        </div>
      </main>

      {/* AI Path Modal */}
      <AnimatePresence>
        {showPathGenerator && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-brand-surface border border-white/10 rounded-none shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="p-6 md:p-10 border-b border-white/10 bg-brand-primary text-black">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-6 md:w-8 h-6 md:h-8" />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                    AI Training Path
                  </h2>
                </div>
                <p className="text-black/60 text-xs font-bold uppercase tracking-widest leading-relaxed">
                  Define your objective. Our AI will synthesize a deterministic
                  learning cycle based on your technical goals.
                </p>
              </div>
              <div className="p-6 md:p-10">
                <textarea
                  placeholder="e.g., I want to build a bespoke Shopify theme using Liquid and later transition into full-stack app engineering with Remix."
                  className="w-full h-32 md:h-40 p-4 md:p-6 bg-brand-bg rounded-none border border-white/10 focus:border-brand-primary outline-none transition-all resize-none text-sm text-white/80 placeholder:text-white/20 uppercase tracking-tight font-medium"
                  id="goals-input"
                />
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button
                    onClick={() => setShowPathGenerator(false)}
                    className="flex-1 secondary-btn py-3 md:py-4"
                  >
                    Abort
                  </button>
                  <button
                    disabled={isGenerating}
                    onClick={() => {
                      const input = (
                        document.getElementById(
                          "goals-input",
                        ) as HTMLTextAreaElement
                      ).value;
                      if (input) handleGeneratePath([input]);
                    }}
                    className="flex-1 shopify-btn py-3 md:py-4 flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <div className="w-4 md:w-5 h-4 md:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        <Sparkles size={16} />
                        Synthesize Path
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
