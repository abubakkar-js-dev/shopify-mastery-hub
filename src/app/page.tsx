'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  LuBookOpen as BookOpen, 
  LuCircle as Circle, 
  LuPlay as Play, 
  LuUser as UserIcon, 
  LuLogOut as LogOut, 
  LuChevronRight as ChevronRight, 
  LuAward as Award,
  LuSparkles as Sparkles,
  LuCode as Code,
  LuHardDrive as HardDrive,
  LuLock as Lock,
  LuShieldCheck as ShieldCheck
} from 'react-icons/lu';
import {
  FiCheckCircle as CheckCircle,
  FiLayout as Layout
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'motion/react';
import { auth, signInWithGoogle, logout, db } from '../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../lib/firestore-errors';
import { cn } from '../lib/utils';
import { Module, Lesson, UserProfile } from '../types';
import { INITIAL_MODULES, INITIAL_LESSONS } from '../data/modules';
import { generatePersonalizedPath } from '../services/geminiService';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [modules, setModules] = useState<Module[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [showPathGenerator, setShowPathGenerator] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await Promise.all([
          fetchProfile(firebaseUser.uid),
          checkAdmin(firebaseUser.uid)
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
      setModules(INITIAL_MODULES);
      setLessons(INITIAL_LESSONS);
      return;
    }

    const qModules = query(collection(db, 'modules'), orderBy('order'));
    const lessonUnsubscribes: { [key: string]: () => void } = {};

    const unsubModules = onSnapshot(qModules, (snapshot) => {
      const fetchedModules = snapshot.docs.map(doc => doc.data() as Module);
      setModules(fetchedModules.length > 0 ? fetchedModules : INITIAL_MODULES);
      
      if (!selectedModule && fetchedModules.length > 0) {
        setSelectedModule(fetchedModules[0]);
      } else if (!selectedModule && INITIAL_MODULES.length > 0) {
        setSelectedModule(INITIAL_MODULES[0]);
      }

      fetchedModules.forEach(mod => {
        if (!lessonUnsubscribes[mod.id]) {
          const qLessons = query(collection(db, `modules/${mod.id}/lessons`), orderBy('order'));
          lessonUnsubscribes[mod.id] = onSnapshot(qLessons, (lSnap) => {
            setLessons(prev => {
              const fetchedLessons = lSnap.docs.map(d => d.data() as Lesson);
              if (fetchedLessons.length === 0) return prev.length > 0 ? prev : INITIAL_LESSONS; 
              const filtered = prev.filter(l => l.moduleId !== mod.id);
              return [...filtered, ...fetchedLessons];
            });
          }, (error) => {
            handleFirestoreError(error, OperationType.LIST, `modules/${mod.id}/lessons`);
          });
        }
      });

      if (snapshot.empty) {
        setLessons(INITIAL_LESSONS);
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'modules');
    });

    return () => {
      unsubModules();
      Object.values(lessonUnsubscribes).forEach(unsub => unsub());
    };
  }, [user]);

  const checkAdmin = async (uid: string) => {
    try {
      const adminDocRef = doc(db, 'admins', uid);
      const adminDoc = await getDoc(adminDocRef);
      if (adminDoc.exists()) {
        setIsAdmin(true);
      } else if (auth.currentUser?.email?.toLowerCase() === 'mdabubakkars182@gmail.com') {
        await setDoc(adminDocRef, {
          uid,
          email: auth.currentUser.email,
          addedAt: new Date().toISOString()
        });
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error: any) {
      setIsAdmin(false);
    }
  };

  const fetchProfile = async (uid: string) => {
    const path = `users/${uid}`;
    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data() as UserProfile);
      } else {
        const newProfile: UserProfile = {
          uid,
          displayName: auth.currentUser?.displayName || 'User',
          email: auth.currentUser?.email || '',
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
      ? profile.completedLessons.filter(id => id !== lessonId)
      : [...profile.completedLessons, lessonId];
    setProfile({ ...profile, completedLessons: newCompleted });
    const path = `users/${user.uid}`;
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        completedLessons: newCompleted,
        lastActive: new Date().toISOString()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const toggleVideoCompletion = async (videoId: string) => {
    if (!user || !profile) return;
    const isCompleted = profile.completedVideos?.includes(videoId);
    const newCompleted = isCompleted
      ? (profile.completedVideos || []).filter(id => id !== videoId)
      : [...(profile.completedVideos || []), videoId];
    setProfile({ ...profile, completedVideos: newCompleted });
    const path = `users/${user.uid}`;
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        completedVideos: newCompleted,
        lastActive: new Date().toISOString()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const toggleTaskCompletion = async (taskId: string) => {
    if (!user || !profile) return;
    const isCompleted = profile.completedTasks?.includes(taskId);
    const newCompleted = isCompleted
      ? (profile.completedTasks || []).filter(id => id !== taskId)
      : [...(profile.completedTasks || []), taskId];
    setProfile({ ...profile, completedTasks: newCompleted });
    const path = `users/${user.uid}`;
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        completedTasks: newCompleted,
        lastActive: new Date().toISOString()
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
            lastUpdated: new Date().toISOString()
          }
        };
        setProfile(updatedProfile);
        await updateDoc(doc(db, 'users', user.uid), {
          personalizedPath: updatedProfile.personalizedPath
        });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${user.uid}`);
    }
    setIsGenerating(false);
    setShowPathGenerator(false);
  };

  const filteredModules = modules.filter(m => m.month === selectedMonth);
  const months = Array.from(new Set(modules.map(m => m.month))).sort((a, b) => (a as number) - (b as number));

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
      {/* Sidebar */}
      <aside className="w-80 bg-brand-bg border-r border-white/10 flex flex-col">
        <div className="p-10 border-b border-white/10">
          <div className="flex flex-col mb-8">
            <span className="text-3xl font-black tracking-tighter uppercase leading-none">Mastery</span>
            <span className="text-[10px] font-bold text-brand-primary tracking-[0.2em] uppercase mt-1">Shopify Edition</span>
          </div>
          
            <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-none">
              <div className="w-10 h-10 rounded-none bg-brand-primary flex items-center justify-center text-black font-black">
                {profile?.displayName?.[0] || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-black text-xs uppercase truncate tracking-tight">{profile?.displayName}</p>
                <div className="flex items-center gap-1">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest truncate">{profile?.email}</p>
                  {isAdmin && <ShieldCheck size={10} className="text-brand-primary" />}
                </div>
              </div>
              <button onClick={logout} className="text-white/40 hover:text-white transition-colors">
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

          <nav className="flex-1 overflow-y-auto pt-6 space-y-1">
            <div className="px-10 mb-6 text-left">
              <h3 className="section-label">Learning Path</h3>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {months.map((m: number) => {
                  const isUnlocked = m === 1 || (() => {
                    const prevMonthModules = modules.filter(mod => mod.month === m - 1);
                    return prevMonthModules.every(mod => {
                      const moduleLessons = lessons.filter(l => l.moduleId === mod.id);
                      return moduleLessons.length > 0 && moduleLessons.every(l => (profile?.completedLessons || []).includes(l.id));
                    });
                  })();

                  return (
                    <button
                      key={m}
                      disabled={!isUnlocked}
                      onClick={() => {
                        setSelectedMonth(m);
                        const firstOfMonth = modules.find(mod => mod.month === m);
                        if (firstOfMonth) {
                          setSelectedModule(firstOfMonth);
                          setSelectedLesson(null);
                        }
                      }}
                      className={cn(
                        "flex-1 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all border min-w-[80px]",
                        selectedMonth === m
                          ? "bg-brand-primary text-black border-brand-primary"
                          : isUnlocked 
                            ? "bg-white/5 text-white/40 border-white/10 hover:border-white/30"
                            : "bg-white/5 text-white/10 border-white/5 cursor-not-allowed opacity-50"
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
              
              <p className="text-[10px] text-white/40 mt-3 uppercase tracking-widest">{filteredModules.length} Modules in month {selectedMonth}</p>
            </div>
            {filteredModules.map((mod, idx) => {
              const isModuleFinished = (mId: string) => {
                const moduleLessons = lessons.filter(l => l.moduleId === mId);
                return moduleLessons.length > 0 && moduleLessons.every(l => (profile?.completedLessons || []).includes(l.id));
              };

              const isUnlocked = idx === 0 || isModuleFinished(filteredModules[idx - 1].id);

            return (
              <button
                key={mod.id}
                disabled={!isUnlocked}
                onClick={() => {
                  setSelectedModule(mod);
                  setSelectedLesson(null);
                }}
                className={cn(
                  "w-full flex items-center gap-4 px-10 py-6 transition-all group border-b border-white/5",
                  selectedModule?.id === mod.id 
                    ? "bg-white/5 border-l-4 border-brand-primary" 
                    : "hover:bg-white/5 border-l-4 border-transparent",
                  !isUnlocked && "opacity-30 cursor-not-allowed"
                )}
              >
                <span className={cn(
                  "font-mono text-xs font-bold",
                  selectedModule?.id === mod.id ? "text-brand-primary" : "text-white/20"
                )}>
                  {isUnlocked ? String(idx + 1).padStart(2, '0') : <Lock size={12} />}
                </span>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className={cn(
                      "font-black uppercase leading-tight text-sm tracking-tight",
                      selectedModule?.id === mod.id ? "text-white" : "text-white/60 group-hover:text-white"
                    )}>
                      {mod?.title}
                    </h3>
                    {isModuleFinished(mod.id) && (
                      <CheckCircle size={12} className="text-brand-primary" />
                    )}
                  </div>
                  {selectedModule?.id === mod.id && (
                     <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">Active</p>
                  )}
                  {!isUnlocked && (
                    <p className="text-[8px] text-brand-primary mt-1 uppercase tracking-widest font-bold">Locked - Finish Week {idx} First</p>
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        <div className="p-10 border-t border-white/10">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-white/40">Overall Progress</span>
            <div className="w-full h-1 bg-white/10 relative">
              <div 
                className="absolute left-0 top-0 h-full bg-brand-primary transition-all duration-500" 
                style={{ width: `${(profile?.completedLessons.length || 0) / (lessons.length || 1) * 100}%` }}
              />
            </div>
            <div className="flex justify-between items-baseline mt-1">
              <span className="text-[10px] font-mono text-brand-primary font-bold">
                {profile?.completedLessons.length} / {lessons.length}
              </span>
              <span className="text-[10px] text-white/40 uppercase">Days Completed</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[#0F0F0F]">
        {/* Header */}
        <header className="h-20 bg-brand-bg border-b border-white/10 px-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Module</span>
            <ChevronRight size={14} className="text-white/20" />
            <span className="font-black text-sm uppercase tracking-tight">{selectedModule?.title}</span>
          </div>

          <button 
            onClick={() => setShowPathGenerator(true)}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-primary border border-brand-primary/20 px-4 py-2 hover:bg-brand-primary/10 transition-all"
          >
            <Sparkles size={14} />
            AI Training Path
          </button>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            {!selectedModule ? (
              <div className="flex items-center justify-center h-64 text-white/20 uppercase font-black tracking-widest italic">
                Initializing Intelligence Systems...
              </div>
            ) : selectedLesson ? (
              <LessonView 
                lesson={selectedLesson} 
                isCompleted={profile?.completedLessons.includes(selectedLesson.id) || false}
                onToggleComplete={() => toggleLessonCompletion(selectedLesson.id)}
                onBack={() => {
                  setSelectedLesson(null);
                  setActiveVideo(null);
                }}
                completedTasks={profile?.completedTasks || []}
                onToggleTask={toggleTaskCompletion}
                activeVideoId={activeVideo || selectedLesson.videos[0]?.id || ''}
                onSelectVideo={setActiveVideo}
                completedVideos={profile?.completedVideos || []}
                onToggleVideo={toggleVideoCompletion}
              />
            ) : (
              <ModuleOverview 
                module={selectedModule} 
                lessons={lessons.filter(l => l.moduleId === selectedModule.id)}
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
              <div className="p-10 border-b border-white/10 bg-brand-primary text-black">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-8 h-8" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter">AI Training Path</h2>
                </div>
                <p className="text-black/60 text-xs font-bold uppercase tracking-widest leading-relaxed">Define your objective. Our AI will synthesize a deterministic learning cycle based on your technical goals.</p>
              </div>
              <div className="p-10">
                <textarea 
                  placeholder="e.g., I want to build a bespoke Shopify theme using Liquid and later transition into full-stack app engineering with Remix."
                  className="w-full h-40 p-6 bg-brand-bg rounded-none border border-white/10 focus:border-brand-primary outline-none transition-all resize-none text-sm text-white/80 placeholder:text-white/20 uppercase tracking-tight font-medium"
                  id="goals-input"
                />
                <div className="mt-8 flex gap-4">
                  <button 
                    onClick={() => setShowPathGenerator(false)}
                    className="flex-1 secondary-btn py-4"
                  >
                    Abort
                  </button>
                  <button 
                    disabled={isGenerating}
                    onClick={() => {
                      const input = (document.getElementById('goals-input') as HTMLTextAreaElement).value;
                      if (input) handleGeneratePath([input]);
                    }}
                    className="flex-1 shopify-btn py-4 flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        <Sparkles size={18} />
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

function LandingPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="min-h-screen bg-brand-bg text-white flex flex-col overflow-x-hidden">
      <nav className="max-w-7xl mx-auto w-full px-10 py-10 flex justify-between items-center bg-[#0A0A0A]">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black tracking-tighter uppercase">Mastery</span>
          <span className="text-xs font-bold text-brand-primary tracking-[0.2em] uppercase">Shopify Edition</span>
        </div>
        <button onClick={onLogin} className="shopify-btn">Access Hub</button>
      </nav>

      <main className="max-w-7xl mx-auto px-10 py-20 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <span className="section-label inline-block mb-10">All-Inclusive Training Environment</span>
          <h1 className="title-xl mb-12">
            UNCOMPROMISED<br />
            <span className="text-brand-primary">SHOPIFY</span> MASTERY.
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
            <p className="text-xl text-white/40 font-medium leading-tight tracking-tight uppercase max-w-lg">
              A specialized curriculum covering setup, theme customization, CRO, liquid development, and enterprise app engineering.
            </p>
            
            <div className="flex gap-4">
              <button onClick={onLogin} className="shopify-btn text-lg px-10 py-5 h-auto">
                Sign In With Google
              </button>
              <button className="secondary-btn text-lg px-10 py-5 h-auto">
                Path Overview
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10"
        >
          {[
            { tag: "BUILD", title: "Theme Dev", desc: "Master Liquid & Storefront APIs" },
            { tag: "ENGINEER", title: "App Systems", desc: "Remix, Node.js, & Polaris Auth" },
            { tag: "DYNAMIC", title: "AI Paths", desc: "Deterministic Learning Cycles" },
          ].map((feature, i) => (
            <div key={i} className="p-10 bg-brand-bg group hover:bg-white/5 transition-colors cursor-crosshair">
              <span className="text-[10px] font-mono text-brand-primary mb-6 block tracking-widest">{feature.tag}</span>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter italic">{feature.title}</h3>
              <p className="text-sm text-white/40 uppercase tracking-widest font-bold leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

function ModuleOverview({ 
  module, 
  lessons, 
  completedLessons, 
  onSelectLesson, 
  onToggleComplete,
  profile
}: { 
  module: Module; 
  lessons: Lesson[]; 
  completedLessons: string[]; 
  onSelectLesson: (l: Lesson) => void; 
  onToggleComplete: (id: string) => void;
  profile: UserProfile | null;
}) {
  const isRecommended = profile?.personalizedPath?.recommendedModules.includes(module.id);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end gap-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-label">Module Overview</span>
            {isRecommended && (
              <span className="text-[10px] font-black bg-brand-primary text-black px-2 py-0.5 uppercase tracking-widest">AI Priority Selection</span>
            )}
          </div>
          <h1 className="title-lg mb-6">{module?.title}</h1>
          <p className="text-xl text-white/60 font-medium leading-relaxed tracking-tight max-w-2xl">
            {module.description}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Completion Rate</span>
          <div className="text-6xl font-black italic tracking-tighter text-brand-primary">
            {lessons.length > 0 ? Math.round((lessons.filter(l => (profile?.completedLessons || []).includes(l.id)).length / lessons.length) * 100) : 0}%
          </div>
        </div>
      </div>

      <div className="grid gap-px bg-white/10 border border-white/10">
        {lessons.map((lesson, idx) => {
          const isUnlocked = idx === 0 || completedLessons.includes(lessons[idx - 1].id);

          return (
            <div 
              key={lesson.id}
              className={cn(
                "group relative bg-brand-bg p-8 transition-all flex flex-col md:flex-row items-center gap-10",
                isUnlocked ? "hover:bg-white/5 cursor-pointer" : "opacity-40 cursor-not-allowed"
              )}
              onClick={() => isUnlocked && onSelectLesson(lesson)}
            >
              <div className="relative w-full md:w-64 flex-shrink-0">
                <div className={cn(
                  "aspect-video bg-black/40 overflow-hidden relative border transition-colors",
                  isUnlocked ? "border-white/5 group-hover:border-brand-primary/40" : "border-white/5"
                )}>
                  {lesson.videos[0] ? (
                    <img 
                      src={`https://img.youtube.com/vi/${lesson.videos[0].youtubeId}/mqdefault.jpg`} 
                      alt={lesson?.title}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-500 grayscale",
                        isUnlocked && "group-hover:opacity-100 group-hover:grayscale-0",
                        !isUnlocked ? "opacity-20" : "opacity-60"
                      )}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/10 uppercase font-black text-xs">Assignment</div>
                  )}
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center transition-opacity",
                    isUnlocked ? "opacity-0 group-hover:opacity-100" : "opacity-0"
                  )}>
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                      <Play className="text-black fill-black" size={20} />
                    </div>
                  </div>
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock size={32} className="text-white/20" />
                    </div>
                  )}
                </div>
                {isUnlocked && (
                  <div className="absolute top-0 right-0 bg-brand-primary text-black text-[10px] px-2 py-0.5 font-bold uppercase tracking-widest translate-x-1/2 -translate-y-1/2">
                    {lesson.videos.length} Videos
                  </div>
                )}
                {isUnlocked && lesson.videos.length > 0 && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                    <div 
                      className="h-full bg-brand-primary"
                      style={{ width: `${(lesson.videos.filter(v => (profile?.completedVideos || []).includes(v.id)).length / lesson.videos.length) * 100}%` }}
                    />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-brand-primary font-bold">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className={cn(
                    "text-[10px] font-black px-2 py-0.5 uppercase tracking-widest border",
                    lesson.difficulty === 'Beginner' ? "border-blue-500/40 text-blue-400" :
                    lesson.difficulty === 'Intermediate' ? "border-orange-500/40 text-orange-400" :
                    "border-red-500/40 text-red-400"
                  )}>
                    {lesson.difficulty}
                  </span>
                  {!isUnlocked && (
                    <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest flex items-center gap-1">
                      <Lock size={10} /> Locked
                    </span>
                  )}
                </div>
                <h3 className={cn(
                  "text-2xl font-black uppercase tracking-tighter italic mb-2 transition-colors",
                  isUnlocked ? "group-hover:text-brand-primary" : "text-white/40"
                )}>{lesson?.title}</h3>
                <p className="text-white/40 text-sm uppercase tracking-widest font-bold leading-relaxed line-clamp-2">
                  {isUnlocked ? lesson.description : "Complete the previous day to unlock this content."}
                </p>
              </div>

              <button 
                disabled={!isUnlocked}
                onClick={(e) => {
                  if (!isUnlocked) return;
                  e.stopPropagation();
                  onToggleComplete(lesson.id);
                }}
                className={cn(
                  "p-4 border transition-all",
                  completedLessons.includes(lesson.id) 
                    ? "bg-brand-primary border-brand-primary text-black" 
                    : isUnlocked 
                      ? "bg-transparent border-white/10 text-white/20 hover:border-white/40"
                      : "bg-transparent border-white/5 text-white/5 cursor-not-allowed"
                )}
              >
                {completedLessons.includes(lesson.id) ? <CheckCircle size={24} /> : <Circle size={24} />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LessonView({ 
  lesson, 
  isCompleted, 
  onToggleComplete, 
  onBack,
  completedTasks,
  onToggleTask,
  activeVideoId,
  onSelectVideo,
  completedVideos,
  onToggleVideo
}: { 
  lesson: Lesson; 
  isCompleted: boolean; 
  onToggleComplete: () => void;
  onBack: () => void;
  completedTasks: string[];
  onToggleTask: (id: string) => void;
  activeVideoId: string;
  onSelectVideo: (id: string) => void;
  completedVideos: string[];
  onToggleVideo: (id: string) => void;
}) {
  const getStartingVideo = () => {
    if (activeVideoId) {
      const selected = lesson.videos.find(v => v.id === activeVideoId);
      if (selected) return selected;
    }
    for (let i = 0; i < lesson.videos.length; i++) {
      const v = lesson.videos[i];
      const unlocked = i === 0 || (completedVideos || []).includes(lesson.videos[i-1].id);
      const completed = (completedVideos || []).includes(v.id);
      if (unlocked && !completed) return v;
    }
    return lesson.videos[0];
  };

  const activeVideo = getStartingVideo();
  const completedTaskCount = lesson.tasks.filter(t => completedTasks.includes(t.id)).length;
  const progressPercent = lesson.tasks.length ? Math.round((completedTaskCount / lesson.tasks.length) * 100) : 0;

  const isVideoUnlocked = (videoId: string) => {
    const videoIndex = lesson.videos.findIndex(v => v.id === videoId);
    if (videoIndex === 0) return true;
    const prevVideo = lesson.videos[videoIndex - 1];
    return (completedVideos || []).includes(prevVideo.id);
  };

  const isVideoCompleted = (videoId: string) => (completedVideos || []).includes(videoId);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-white/40 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors group"
        >
          <ChevronRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          Module Index
        </button>
        <span className="font-mono text-xs text-brand-primary font-bold">SESSION ID: {lesson.id.toUpperCase()}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="lg:col-span-3 aspect-video bg-black relative">
          {activeVideo ? (
            <iframe 
              className="w-full h-full relative z-10"
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&color=white`}
              title={activeVideo?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center">
              <Award className="w-16 h-16 text-brand-primary mb-6" />
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">Assignment Phase</h2>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Complete the tasks below to finalize this session</p>
            </div>
          )}
        </div>

        <div className="bg-brand-bg flex flex-col h-full overflow-hidden border-l border-white/5">
          <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-white/60">Workshop Playlist</h3>
            <span className="text-[10px] font-mono text-brand-primary">
              {lesson.videos.filter(v => isVideoCompleted(v.id)).length} / {lesson.videos.length}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto">
            {lesson.videos.map((v, i) => {
              const unlocked = isVideoUnlocked(v.id);
              const completed = isVideoCompleted(v.id);
              const isActive = activeVideo?.id === v.id;

              return (
                <button
                  key={v.id}
                  disabled={!unlocked}
                  onClick={() => onSelectVideo(v.id)}
                  className={cn(
                    "w-full p-4 flex items-start gap-4 transition-colors border-b border-white/5 text-left group relative",
                    isActive ? "bg-brand-primary/10" : "hover:bg-white/5",
                    !unlocked && "opacity-30 cursor-not-allowed"
                  )}
                >
                  <div className="mt-1 relative">
                    {completed ? (
                      <CheckCircle size={14} className="text-brand-primary fill-brand-primary" />
                    ) : isActive ? (
                      <Play size={12} className="text-brand-primary fill-brand-primary animate-pulse" />
                    ) : !unlocked ? (
                      <Lock size={12} className="text-white/20" />
                    ) : (
                      <span className="text-[10px] font-mono font-bold text-white/20">{String(i + 1).padStart(2, '0')}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={cn(
                      "text-[11px] font-bold uppercase tracking-tight leading-tight mb-1",
                      isActive ? "text-brand-primary" : completed ? "text-white/60" : "text-white/80"
                    )}>
                      {v?.title}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-[9px] font-mono text-white/40">{v.duration}</p>
                      {completed && <span className="text-[8px] font-black text-brand-primary uppercase">Completed</span>}
                    </div>
                  </div>
                </button>
              );
            })}
            {lesson.videos.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-[10px] text-white/20 font-black uppercase tracking-widest">No video content for this assignment.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pt-6">
        <div className="flex-1 max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="section-label">Active Workshop</span>
              <div className="h-px w-10 bg-white/10" />
              <span className="text-[10px] font-mono text-white/60">L-{lesson.order} // {lesson.difficulty}</span>
            </div>
            {activeVideo && (
              <button
                onClick={() => onToggleVideo(activeVideo.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all border",
                  isVideoCompleted(activeVideo.id)
                    ? "bg-brand-primary text-black border-brand-primary"
                    : "bg-white/5 text-brand-primary border-brand-primary/40 hover:bg-brand-primary/10"
                )}
              >
                {isVideoCompleted(activeVideo.id) ? (
                  <>
                    <CheckCircle size={14} />
                    Video Completed
                  </>
                ) : (
                  <>
                    <Circle size={14} />
                    Mark as Viewed
                  </>
                )}
              </button>
            )}
          </div>
          <h1 className="title-lg mb-8 italic">{lesson?.title}</h1>
          
          <div className="mb-12">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-6 font-mono text-left">Internal Task Checklist — {progressPercent}%</h3>
            <div className="grid gap-px bg-white/10 border border-white/10">
              {lesson.tasks.map((task) => (
                <div 
                  key={task.id}
                  onClick={() => onToggleTask(task.id)}
                  className="flex items-center gap-4 p-6 bg-brand-bg hover:bg-white/5 transition-colors cursor-pointer group"
                >
                  <button className={cn(
                    "w-6 h-6 border transition-all flex items-center justify-center",
                    completedTasks.includes(task.id) 
                      ? "bg-brand-primary border-brand-primary text-black" 
                      : "border-white/20 text-transparent group-hover:border-white/40"
                  )}>
                    {completedTasks.includes(task.id) && <CheckCircle size={14} />}
                  </button>
                  <span className={cn(
                    "text-sm font-bold uppercase tracking-tight transition-colors",
                    completedTasks.includes(task.id) ? "text-white/20 line-through" : "text-white/80"
                  )}>
                    {task?.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-white/5 border-l-2 border-brand-primary">
            <p className="text-xl text-white/60 leading-relaxed font-medium tracking-tight">
              {lesson.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-72">
          <button 
            onClick={onToggleComplete}
            className={cn(
              "flex items-center justify-center gap-3 w-full py-6 font-black uppercase tracking-widest text-sm transition-all",
              isCompleted 
                ? "bg-white/10 text-white border border-white/20" 
                : "bg-brand-primary text-black hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            {isCompleted ? (
              <>
                <CheckCircle size={20} />
                SESSION COMPLETE
              </>
            ) : (
              <>
                <Play size={20} />
                FINALIZE SESSION
              </>
            )}
          </button>
          
          {lesson.resources && lesson.resources.length > 0 && (
            <div className="space-y-4 pt-4">
              <span className="text-[10px] font-black uppercase text-white/40 tracking-widest">Resources</span>
              {lesson.resources.map((res, i) => (
                <a 
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn w-full py-4 text-[10px] flex items-center justify-between group"
                >
                  {res?.title}
                  <ChevronRight size={12} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          )}
          
          <button className="secondary-btn w-full py-4 text-[10px] opacity-40">TECHNICAL DOCS</button>
        </div>
      </div>
    </div>
  );
}
