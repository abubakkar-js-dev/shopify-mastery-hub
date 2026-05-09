"use client";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiCheckCircle as CheckCircle } from "react-icons/fi";
import {
  LuChevronRight as ChevronRight,
  LuLock as Lock,
  LuLogOut as LogOut,
  LuMenu as Menu,
  LuShieldCheck as ShieldCheck,
  LuSparkles as Sparkles,
} from "react-icons/lu";
import LandingPage from "../components/LandingPage";
import LessonView from "../components/LessonView";
import ModuleOverview from "../components/ModuleOverview";
import { INITIAL_LESSONS, INITIAL_MODULES } from "../data/modules";
import { auth, db, logout, signInWithGoogle } from "../lib/firebase";
import { handleFirestoreError, OperationType } from "../lib/firestore-errors";
import { cn } from "../lib/utils";
import { generatePersonalizedPath } from "../services/geminiService";
import { Lesson, Module, UserProfile } from "../types";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [modules, setModules] = useState<Module[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [showPathGenerator, setShowPathGenerator] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await Promise.all([
          (async (uid) => {
            const path = `users/${uid}`;
            try {
              const docRef = doc(db, "users", uid);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                setProfile(docSnap.data() as UserProfile);
              } else {
                const newProfile: UserProfile = {
                  uid,
                  displayName: auth.currentUser?.displayName || "User",
                  email: auth.currentUser?.email || "",
                  completedLessons: [],
                  completedVideos: [],
                  completedTasks: [],
                  lastActive: new Date().toISOString(),
                };
                await setDoc(docRef, newProfile);
                setProfile(newProfile);
              }
            } catch (error) {
              handleFirestoreError(error, OperationType.GET, path);
            }
          })(firebaseUser.uid),
          (async (uid) => {
            try {
              const adminDocRef = doc(db, "admins", uid);
              const adminDoc = await getDoc(adminDocRef);
              if (adminDoc.exists()) {
                setIsAdmin(true);
              } else if (
                auth.currentUser?.email?.toLowerCase() ===
                "mdabubakkars182@gmail.com"
              ) {
                await setDoc(adminDocRef, {
                  uid,
                  email: auth.currentUser.email,
                  addedAt: new Date().toISOString(),
                });
                setIsAdmin(true);
              } else {
                setIsAdmin(false);
              }
            } catch (error: string | unknown) {
              console.error(error);
              setIsAdmin(false);
            }
          })(firebaseUser.uid),
        ]);
      } else {
        setProfile(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      // defer state update to next tick to avoid cascading renders
      Promise.resolve().then(() => setModules(INITIAL_MODULES));
      Promise.resolve().then(() => setLessons(INITIAL_LESSONS));
      return;
    }

    const qModules = query(collection(db, "modules"), orderBy("order"));
    const lessonUnsubscribes: { [key: string]: () => void } = {};

    const unsubModules = onSnapshot(
      qModules,
      (snapshot) => {
        const fetchedModules = snapshot.docs.map((doc) => doc.data() as Module);
        setModules(
          fetchedModules.length > 0 ? fetchedModules : INITIAL_MODULES,
        );

        if (!selectedModule && fetchedModules.length > 0) {
          setSelectedModule(fetchedModules[0]);
        } else if (!selectedModule && INITIAL_MODULES.length > 0) {
          setSelectedModule(INITIAL_MODULES[0]);
        }

        fetchedModules.forEach((mod) => {
          if (!lessonUnsubscribes[mod.id]) {
            const qLessons = query(
              collection(db, `modules/${mod.id}/lessons`),
              orderBy("order"),
            );
            lessonUnsubscribes[mod.id] = onSnapshot(
              qLessons,
              (lSnap) => {
                setLessons((prev) => {
                  const fetchedLessons = lSnap.docs.map(
                    (d) => d.data() as Lesson,
                  );
                  if (fetchedLessons.length === 0)
                    return prev.length > 0 ? prev : INITIAL_LESSONS;
                  const filtered = prev.filter((l) => l.moduleId !== mod.id);
                  return [...filtered, ...fetchedLessons];
                });
              },
              (error) => {
                handleFirestoreError(
                  error,
                  OperationType.LIST,
                  `modules/${mod.id}/lessons`,
                );
              },
            );
          }
        });

        if (snapshot.empty) {
          setLessons(INITIAL_LESSONS);
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, "modules");
      },
    );

    return () => {
      unsubModules();
      Object.values(lessonUnsubscribes).forEach((unsub) => unsub());
    };
  }, [selectedModule, user]);

  const checkAdmin = async (uid: string) => {
    try {
      const adminDocRef = doc(db, "admins", uid);
      const adminDoc = await getDoc(adminDocRef);
      if (adminDoc.exists()) {
        setIsAdmin(true);
      } else if (
        auth.currentUser?.email?.toLowerCase() === "mdabubakkars182@gmail.com"
      ) {
        await setDoc(adminDocRef, {
          uid,
          email: auth.currentUser.email,
          addedAt: new Date().toISOString(),
        });
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error: string | unknown) {
      console.error(error);
      setIsAdmin(false);
    }
  };

  const fetchProfile = async (uid: string) => {
    const path = `users/${uid}`;
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data() as UserProfile);
      } else {
        const newProfile: UserProfile = {
          uid,
          displayName: auth.currentUser?.displayName || "User",
          email: auth.currentUser?.email || "",
          completedLessons: [],
          completedVideos: [],
          completedTasks: [],
          lastActive: new Date().toISOString(),
        };
        await setDoc(docRef, newProfile);
        setProfile(newProfile);
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, path);
    }
  };

  const toggleLessonCompletion = async (lessonId: string) => {
    if (!user || !profile) return;
    const isCompleted = profile.completedLessons.includes(lessonId);
    const newCompleted = isCompleted
      ? profile.completedLessons.filter((id) => id !== lessonId)
      : [...profile.completedLessons, lessonId];
    setProfile({ ...profile, completedLessons: newCompleted });
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
    setProfile({ ...profile, completedVideos: newCompleted });
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
    setProfile({ ...profile, completedTasks: newCompleted });
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
    if (!user) return;
    setIsGenerating(true);
    try {
      const pathValue = await generatePersonalizedPath(goals);
      if (pathValue) {
        const updatedProfile = {
          ...profile!,
          personalizedPath: {
            ...pathValue,
            goals,
            lastUpdated: new Date().toISOString(),
          },
        };
        setProfile(updatedProfile);
        await updateDoc(doc(db, "users", user.uid), {
          personalizedPath: updatedProfile.personalizedPath,
        });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${user.uid}`);
    }
    setIsGenerating(false);
    setShowPathGenerator(false);
  };

  const filteredModules = modules.filter((m) => m.month === selectedMonth);
  const months = Array.from(new Set(modules.map((m) => m.month))).sort(
    (a, b) => (a as number) - (b as number),
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0A0A0A]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <LandingPage onLogin={signInWithGoogle} />;
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

          <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-none">
            <div className="w-10 h-10 rounded-none bg-brand-primary flex items-center justify-center text-black font-black">
              {profile?.displayName?.[0] || "U"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-black text-xs uppercase truncate tracking-tight">
                {profile?.displayName}
              </p>
              <div className="flex items-center gap-1">
                <p className="text-[10px] text-white/40 uppercase tracking-widest truncate">
                  {profile?.email}
                </p>
                {isAdmin && (
                  <ShieldCheck size={10} className="text-brand-primary" />
                )}
              </div>
            </div>
            <button
              onClick={logout}
              className="text-white/40 hover:text-white transition-colors"
            >
              <LogOut size={16} />
            </button>
          </div>
          {isAdmin && (
            <Link
              href="/admin"
              className="w-full mt-2 py-3 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-widest hover:bg-brand-primary/20 transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck size={14} /> Admin Dashboard
            </Link>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto pt-4 md:pt-6 space-y-1">
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
                        setSelectedModule(firstOfMonth);
                        setSelectedLesson(null);
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
                  setSelectedModule(mod);
                  setSelectedLesson(null);
                  setIsSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-4 px-6 md:px-10 py-4 md:py-6 transition-all group border-b border-white/5",
                  selectedModule?.id === mod.id
                    ? "bg-white/5 border-l-4 border-brand-primary"
                    : "hover:bg-white/5 border-l-4 border-transparent",
                  !isUnlocked && "opacity-30 cursor-not-allowed",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs font-bold",
                    selectedModule?.id === mod.id
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
                        selectedModule?.id === mod.id
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
                  {selectedModule?.id === mod.id && (
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

        <div className="p-6 md:p-10 border-t border-white/10">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Overall Progress
            </span>
            <div className="w-full h-1 bg-white/10 relative">
              <div
                className="absolute left-0 top-0 h-full bg-brand-primary transition-all duration-500"
                style={{
                  width: `${((profile?.completedLessons.length || 0) / (lessons.length || 1)) * 100}%`,
                }}
              />
            </div>
            <div className="flex justify-between items-baseline mt-1">
              <span className="text-[10px] font-mono text-brand-primary font-bold">
                {profile?.completedLessons.length} / {lessons.length}
              </span>
              <span className="text-[10px] text-white/40 uppercase">
                Days Completed
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
              {selectedModule?.title}
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
            {!selectedModule ? (
              <div className="flex items-center justify-center h-64 text-white/20 uppercase font-black tracking-widest italic">
                Initializing Intelligence Systems...
              </div>
            ) : selectedLesson ? (
              <LessonView
                lesson={selectedLesson}
                isCompleted={
                  profile?.completedLessons.includes(selectedLesson.id) || false
                }
                onToggleComplete={() =>
                  toggleLessonCompletion(selectedLesson.id)
                }
                onBack={() => {
                  setSelectedLesson(null);
                  setActiveVideo(null);
                }}
                completedTasks={profile?.completedTasks || []}
                onToggleTask={toggleTaskCompletion}
                activeVideoId={
                  activeVideo || selectedLesson.videos[0]?.id || ""
                }
                onSelectVideo={setActiveVideo}
                completedVideos={profile?.completedVideos || []}
                onToggleVideo={toggleVideoCompletion}
              />
            ) : (
              <ModuleOverview
                module={selectedModule}
                lessons={lessons.filter(
                  (l) => l.moduleId === selectedModule.id,
                )}
                completedLessons={profile?.completedLessons || []}
                onSelectLesson={setSelectedLesson}
                onToggleComplete={toggleLessonCompletion}
                profile={profile}
              />
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
