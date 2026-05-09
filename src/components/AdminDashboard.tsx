import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  LuUsers as Users, 
  LuBookOpen as BookOpen, 
  LuSettings as Settings, 
  LuPlus as Plus, 
  LuTrash2 as Trash2, 
  LuSave as Save, 
  LuX as X,
  LuChevronRight as ChevronRight,
  LuChevronUp as ChevronUp,
  LuChevronDown as ChevronDown,
  LuYoutube as Youtube,
  LuClock as Clock,
  LuFileText as FileText,
  LuLink as LinkIcon,
  LuDatabase as Database,
} from 'react-icons/lu';
import {
  FiBarChart2 as BarChart3,
  FiEdit2 as Edit3,
  FiLayout as Layout,
  FiCheckCircle as CheckCircle,
  FiAlertCircle as AlertCircle,
  FiLoader as Loader2
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'motion/react';
import { 
  collection, 
  query, 
  onSnapshot, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  getDocs,
  orderBy
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { cn } from '../lib/utils';
import { Module, Lesson, UserProfile, Video, Task } from '../types';
import { INITIAL_MODULES, INITIAL_LESSONS } from '../data/modules';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { format } from 'date-fns';

type Tab = 'overview' | 'content' | 'users' | 'settings';

export default function AdminDashboard({ onClose }: { onClose?: () => void }) {
  const navigate = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [admins, setAdmins] = useState<any[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isEditingModule, setIsEditingModule] = useState<Module | null>(null);
  const [isEditingLesson, setIsEditingLesson] = useState<Lesson | null>(null);
  const [isSeeding, setIsSeeding] = useState(false);

  useEffect(() => {
    const qUsers = query(collection(db, 'users'));
    const unsubUsers = onSnapshot(qUsers, (snapshot) => {
      setUsers(snapshot.docs.map(doc => doc.data() as UserProfile));
    }, (error) => {
      console.error("Users list error:", error);
    });

    const qAdmins = query(collection(db, 'admins'));
    const unsubAdmins = onSnapshot(qAdmins, (snapshot) => {
      setAdmins(snapshot.docs.map(doc => doc.data()));
    }, (error) => {
      console.error("Admins list error:", error);
    });

    const qModules = query(collection(db, 'modules'), orderBy('order'));
    const lessonUnsubscribes: { [key: string]: () => void } = {};

    const unsubModules = onSnapshot(qModules, (snapshot) => {
      const fetchedModules = snapshot.docs.map(doc => doc.data() as Module);
      setModules(fetchedModules);
      
      // Fetch lessons for all modules
      fetchedModules.forEach(mod => {
        if (!lessonUnsubscribes[mod.id]) {
          const qLessons = query(collection(db, `modules/${mod.id}/lessons`), orderBy('order'));
          lessonUnsubscribes[mod.id] = onSnapshot(qLessons, (lSnap) => {
            setLessons(prev => {
              const fetchedLessons = lSnap.docs.map(d => d.data() as Lesson);
              const filtered = prev.filter(l => l.moduleId !== mod.id);
              return [...filtered, ...fetchedLessons];
            });
          }, (error) => {
            console.error(`Lessons list error for ${mod.id}:`, error);
          });
        }
      });
    }, (error) => {
      console.error("Modules list error:", error);
    });

    return () => {
      unsubUsers();
      unsubAdmins();
      unsubModules();
      Object.values(lessonUnsubscribes).forEach(unsub => unsub());
    };
  }, []);

  const seedData = async () => {
    if (!confirm('This will populate the database with initial roadmap content. Continue?')) return;
    setIsSeeding(true);
    try {
      for (const mod of INITIAL_MODULES) {
        await setDoc(doc(db, 'modules', mod.id), mod);
        const moduleLessons = INITIAL_LESSONS.filter(l => l.moduleId === mod.id);
        for (const lesson of moduleLessons) {
          await setDoc(doc(db, `modules/${mod.id}/lessons`, lesson.id), lesson);
        }
      }
      alert('Data seeded successfully!');
    } catch (error) {
      console.error("Error seeding data:", error);
      alert('Failed to seed data.');
    }
    setIsSeeding(false);
  };

  const stats = [
    { label: 'Total Users', value: users.length, icon: Users, color: 'text-blue-400' },
    { label: 'Active Modules', value: modules.length, icon: BookOpen, color: 'text-brand-primary' },
    { label: 'Total Lessons', value: lessons.length, icon: Layout, color: 'text-purple-400' },
    { label: 'Avg. Progress', value: `${Math.round(users.reduce((acc, u) => acc + (u.completedLessons.length || 0), 0) / (users.length || 1))}`, icon: BarChart3, color: 'text-orange-400' },
  ];

  // Chart Data
  const progressData = users.map(u => ({
    name: u.displayName?.split(' ')[0] || 'User',
    completed: u.completedLessons.length
  })).slice(0, 10);

  const difficultyData = [
    { name: 'Beginner', value: lessons.filter(l => l.difficulty === 'Beginner').length },
    { name: 'Intermediate', value: lessons.filter(l => l.difficulty === 'Intermediate').length },
    { name: 'Advanced', value: lessons.filter(l => l.difficulty === 'Advanced').length },
  ];

  const COLORS = ['#3b82f6', '#f97316', '#ef4444'];

  return (
    <div className="fixed inset-0 z-50 flex bg-[#0A0A0A]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0F0F0F] flex flex-col">
        <div className="p-8 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter italic">Admin</h2>
            <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest">Control Panel</p>
          </div>
          <button onClick={() => onClose ? onClose() : navigate.push('/')} className="text-white/20 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <TabButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
            icon={BarChart3} 
            label="Overview" 
          />
          <TabButton 
            active={activeTab === 'content'} 
            onClick={() => setActiveTab('content')} 
            icon={BookOpen} 
            label="Content" 
          />
          <TabButton 
            active={activeTab === 'users'} 
            onClick={() => setActiveTab('users')} 
            icon={Users} 
            label="Users" 
          />
          <TabButton 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')} 
            icon={Settings} 
            label="Settings" 
          />
        </nav>

        <div className="p-6 border-t border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-black font-black text-xs">A</div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-tight">Admin User</p>
            <p className="text-[8px] text-white/40 uppercase tracking-widest">System Master</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-12 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div 
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-10"
              >
                <header>
                  <h1 className="text-4xl font-black uppercase tracking-tighter italic mb-4">Platform Overview</h1>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Real-time system diagnostics and user metrics</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-8 bg-[#0F0F0F] group hover:bg-white/5 transition-colors">
                      <stat.icon className={cn("w-6 h-6 mb-6", stat.color)} />
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                      <h3 className="text-4xl font-black italic tracking-tighter">{stat.value}</h3>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="bg-[#0F0F0F] border border-white/10 p-8">
                    <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-8 px-2 border-l-2 border-brand-primary">Top User Completion</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={progressData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                          <XAxis dataKey="name" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                          <YAxis stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#111', border: '1px solid #333', fontSize: '10px', textTransform: 'uppercase' }}
                            itemStyle={{ color: '#00ff00' }}
                          />
                          <Bar dataKey="completed" fill="#00ff00" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-[#0F0F0F] border border-white/10 p-8">
                    <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-8 px-2 border-l-2 border-brand-primary">Content Difficulty Spread</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={difficultyData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                          >
                            {difficultyData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#111', border: '1px solid #333', fontSize: '10px', textTransform: 'uppercase' }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="flex justify-center gap-6 mt-4">
                        {difficultyData.map((d, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                            <span className="text-[10px] uppercase font-bold text-white/40">{d.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'content' && (
              <motion.div 
                key="content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <header className="flex justify-between items-end">
                  <div>
                    <h1 className="text-4xl font-black uppercase tracking-tighter italic mb-4">Course Architecture</h1>
                    <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Manage modules, lessons, and video content across the 3-month cycle</p>
                  </div>
                  <div className="flex gap-4">
                    {modules.length === 0 && (
                      <button 
                        onClick={seedData}
                        disabled={isSeeding}
                        className="flex items-center gap-2 bg-white/5 border border-white/10 text-brand-primary px-6 py-3 font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all"
                      >
                        {isSeeding ? <Loader2 className="animate-spin" size={16} /> : <Database size={16} />} 
                        Initialize Roadmap
                      </button>
                    )}
                    <button 
                      onClick={() => {
                        const nextOrder = modules.length > 0 ? Math.max(...modules.map(m => m.order)) + 1 : 1;
                        setIsEditingModule({ id: `module-${Date.now()}`, title: '', description: '', order: nextOrder, month: 1 });
                      }}
                      className="flex items-center gap-2 bg-brand-primary text-black px-6 py-3 font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform"
                    >
                      <Plus size={16} /> New Module
                    </button>
                  </div>
                </header>

                <div className="space-y-16">
                  {Array.from(new Set([...modules.map(m => m.month), 1, 2, 3])).sort((a, b) => a - b).map(month => {
                    const monthModules = modules
                      .filter(m => m.month === month)
                      .sort((a, b) => a.order - b.order);
                    
                    return (
                      <div key={month} className="space-y-6">
                        <div className="flex items-center gap-4">
                          <h2 className="text-2xl font-black uppercase tracking-tighter italic text-brand-primary">Month {month}</h2>
                          <div className="h-px flex-1 bg-brand-primary/20" />
                          <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{monthModules.length} Modules</span>
                        </div>

                        {monthModules.length === 0 ? (
                          <div className="p-8 border border-dashed border-white/5 text-center">
                            <p className="text-[10px] text-white/20 uppercase tracking-widest italic leading-relaxed">
                              No modules assigned to month {month}.<br />
                              Create a new module and set its month value to {month}.
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            {monthModules.map((mod, modIdx) => (
                              <div key={mod.id} className="bg-[#141414] border border-white/10 overflow-hidden">
                                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                                  <div className="flex items-center gap-4">
                                    <div className="flex flex-col">
                                      <button 
                                        disabled={modIdx === 0}
                                        onClick={async () => {
                                          const prev = monthModules[modIdx - 1];
                                          await updateDoc(doc(db, 'modules', mod.id), { order: prev.order });
                                          await updateDoc(doc(db, 'modules', prev.id), { order: mod.order });
                                        }}
                                        className="text-white/20 hover:text-brand-primary disabled:opacity-0 transition-colors"
                                      >
                                        <ChevronUp size={16} />
                                      </button>
                                      <button 
                                        disabled={modIdx === monthModules.length - 1}
                                        onClick={async () => {
                                          const next = monthModules[modIdx + 1];
                                          await updateDoc(doc(db, 'modules', mod.id), { order: next.order });
                                          await updateDoc(doc(db, 'modules', next.id), { order: mod.order });
                                        }}
                                        className="text-white/20 hover:text-brand-primary disabled:opacity-0 transition-colors"
                                      >
                                        <ChevronDown size={16} />
                                      </button>
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="font-mono text-[10px] text-brand-primary font-bold">M{mod.month} P{mod.order}</span>
                                        <h3 className="font-black uppercase tracking-tight text-lg">{mod?.title}</h3>
                                      </div>
                                      <p className="text-[10px] text-white/40 uppercase tracking-widest">{lessons.filter(l => l.moduleId === mod.id).length} Lessons</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button 
                                      onClick={() => setIsEditingModule(mod)}
                                      className="p-2 text-white/20 hover:text-white hover:bg-white/5 transition-all"
                                    >
                                      <Edit3 size={16} />
                                    </button>
                                    <button 
                                      onClick={async () => {
                                        if (confirm('Delete module and all associated lessons?')) {
                                          await deleteDoc(doc(db, 'modules', mod.id));
                                        }
                                      }}
                                      className="p-2 text-white/20 hover:text-red-400 hover:bg-red-400/5 transition-all"
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </div>

                                <div className="p-6 space-y-4">
                                  {lessons
                                    .filter(l => l.moduleId === mod.id)
                                    .sort((a, b) => a.order - b.order)
                                    .map((lesson, lessonIdx, filteredLessons) => (
                                      <div key={lesson.id} className="flex items-center justify-between p-4 bg-black/40 border border-white/5 hover:border-white/10 transition-colors group/lesson">
                                        <div className="flex items-center gap-4">
                                        <div className="flex flex-col">
                                          <button 
                                            disabled={lessonIdx === 0}
                                            onClick={async () => {
                                              const prev = filteredLessons[lessonIdx - 1];
                                              await updateDoc(doc(db, `modules/${mod.id}/lessons`, lesson.id), { order: prev.order });
                                              await updateDoc(doc(db, `modules/${mod.id}/lessons`, prev.id), { order: lesson.order });
                                            }}
                                            className="text-white/10 hover:text-brand-primary disabled:opacity-0 transition-colors"
                                          >
                                            <ChevronUp size={12} />
                                          </button>
                                          <button 
                                            disabled={lessonIdx === filteredLessons.length - 1}
                                            onClick={async () => {
                                              const next = filteredLessons[lessonIdx + 1];
                                              await updateDoc(doc(db, `modules/${mod.id}/lessons`, lesson.id), { order: next.order });
                                              await updateDoc(doc(db, `modules/${mod.id}/lessons`, next.id), { order: lesson.order });
                                            }}
                                            className="text-white/10 hover:text-brand-primary disabled:opacity-0 transition-colors"
                                          >
                                            <ChevronDown size={12} />
                                          </button>
                                        </div>
                                          {lesson.videos[0] ? (
                                            <img 
                                              src={`https://img.youtube.com/vi/${lesson.videos[0].youtubeId}/mqdefault.jpg`} 
                                              className="w-16 h-10 object-cover opacity-60" 
                                            />
                                          ) : (
                                            <div className="w-16 h-10 bg-white/5 flex items-center justify-center text-[8px] uppercase font-black text-white/20">Task</div>
                                          )}
                                          <div>
                                            <h4 className="text-sm font-bold uppercase tracking-tight">{lesson?.title}</h4>
                                            <div className="flex items-center gap-3 mt-1">
                                              <span className={cn(
                                                "text-[8px] font-black px-1.5 py-0.5 border uppercase",
                                                lesson.difficulty === 'Beginner' ? "border-blue-500/40 text-blue-400" :
                                                lesson.difficulty === 'Intermediate' ? "border-orange-500/40 text-orange-400" :
                                                "border-red-500/40 text-red-400"
                                              )}>
                                                {lesson.difficulty}
                                              </span>
                                              <span className="text-[9px] text-white/20 uppercase tracking-widest">{lesson.videos.length} Videos • {lesson.tasks?.length || 0} Tasks</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                          <button 
                                            onClick={() => setIsEditingLesson(lesson)}
                                            className="p-2 text-white/20 hover:text-white transition-colors"
                                          >
                                            <Edit3 size={14} />
                                          </button>
                                          <button 
                                            onClick={async () => {
                                              if (confirm('Delete lesson?')) {
                                                await deleteDoc(doc(db, `modules/${mod.id}/lessons`, lesson.id));
                                              }
                                            }}
                                            className="p-2 text-white/20 hover:text-red-400 opacity-0 group-hover/lesson:opacity-100 transition-all"
                                          >
                                            <Trash2 size={14} />
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  <button 
                                    onClick={() => {
                                      const modLessons = lessons.filter(l => l.moduleId === mod.id);
                                      const nextOrder = modLessons.length > 0 ? Math.max(...modLessons.map(l => l.order)) + 1 : 1;
                                      setIsEditingLesson({ 
                                        id: `lesson-${Date.now()}`, 
                                        moduleId: mod.id, 
                                        title: '', 
                                        videos: [], 
                                        description: '', 
                                        order: nextOrder, 
                                        difficulty: 'Beginner', 
                                        tasks: [] 
                                      });
                                    }}
                                    className="w-full py-3 border border-dashed border-white/10 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-brand-primary hover:border-brand-primary/40 transition-all flex items-center justify-center gap-2"
                                  >
                                    <Plus size={14} /> Add Lesson
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === 'users' && (
              <motion.div 
                key="users"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <header>
                  <h1 className="text-4xl font-black uppercase tracking-tighter italic mb-4">User Database</h1>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Real-time tracking of student progress and engagement</p>
                </header>

                <div className="bg-[#141414] border border-white/10 overflow-hidden">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10">
                        <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Student</th>
                        <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Completion</th>
                        <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Last Active</th>
                        <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/40 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {users.map(user => (
                        <tr key={user.uid} className="hover:bg-white/[0.02] transition-colors group">
                          <td className="px-8 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black uppercase">
                                {user.displayName?.[0] || 'U'}
                              </div>
                              <div>
                                <p className="text-sm font-bold uppercase tracking-tight">{user.displayName}</p>
                                <p className="text-[10px] text-white/20 uppercase truncate max-w-[200px]">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-4 text-xs">
                            <div className="flex items-center gap-4">
                              <div className="flex-1 h-1 bg-white/10 w-24">
                                <div 
                                  className="h-full bg-brand-primary" 
                                  style={{ width: `${(user.completedLessons.length / (lessons.length || 1)) * 100}%` }} 
                                />
                              </div>
                              <span className="font-mono text-brand-primary font-bold">{user.completedLessons.length}d</span>
                            </div>
                          </td>
                          <td className="px-8 py-4">
                            <span className="text-[10px] text-white/40 uppercase tracking-widest">
                              {user.lastActive ? format(new Date(user.lastActive), 'MMM dd, HH:mm') : '—'}
                            </span>
                          </td>
                          <td className="px-8 py-4 text-right">
                            <button className="text-[10px] font-black uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              Analytic Detail
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div 
                key="settings"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <header>
                  <h1 className="text-4xl font-black uppercase tracking-tighter italic mb-4">Platform Configuration</h1>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Global variables and system security</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="p-8 bg-[#141414] border border-white/10">
                    <h3 className="section-label mb-8">Course Policy</h3>
                    <div className="space-y-6">
                      <ToggleSetting label="Strict Path Progression" description="Force users to complete previous sessions before unlocking." active />
                      <ToggleSetting label="AI Synthesizer Access" description="Allow users to generate personalized training paths." active />
                      <ToggleSetting label="Legacy Content Mode" description="Disable modern Shopify storefront engine content." />
                    </div>
                  </div>

                  <div className="p-8 bg-[#141414] border border-white/10">
                    <h3 className="section-label mb-8">Admin Access</h3>
                    <div className="space-y-4">
                      {admins.length > 0 ? admins.map((a, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-black/40 border border-white/5">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-brand-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{a.email}</span>
                          </div>
                          <span className="text-[8px] font-black uppercase bg-brand-primary text-black px-1.5 py-0.5">Primary</span>
                        </div>
                      )) : (
                        <div className="p-4 bg-black/40 border border-white/5 text-center">
                          <p className="text-[10px] text-white/40 uppercase tracking-widest">Registering admin records...</p>
                        </div>
                      )}
                      <button 
                        onClick={() => alert("To add more admins, they must sign in once, or you can manually add their UID to the 'admins' collection.")}
                        className="w-full py-4 border border-dashed border-white/10 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-brand-primary hover:border-brand-primary/40 transition-all font-mono"
                      >
                        + SYNC NEW AUTHORITIES
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-[#141414] border border-white/10">
                  <h3 className="section-label mb-8">System Maintenance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-black/40 border border-white/5">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Database Initialization</h4>
                      <p className="text-xs text-white/60 mb-6 leading-relaxed">Population of the Firestore database with the underlying roadmap architecture. This will merge existing data with static seed content.</p>
                      <button 
                        onClick={seedData}
                        disabled={isSeeding}
                        className="w-full py-4 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                      >
                        {isSeeding ? 'Synchronizing...' : 'Seed Initial Content'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Editor Overlays */}
      <AnimatePresence>
        {isEditingModule && (
          <ModuleEditor 
            module={isEditingModule} 
            onClose={() => setIsEditingModule(null)} 
            onSave={async (mod) => {
              await setDoc(doc(db, 'modules', mod.id), mod);
              setIsEditingModule(null);
            }} 
          />
        )}
        {isEditingLesson && (
          <LessonEditor 
            lesson={isEditingLesson} 
            onClose={() => setIsEditingLesson(null)} 
            onSave={async (lesson) => {
              await setDoc(doc(db, `modules/${lesson.moduleId}/lessons`, lesson.id), lesson);
              setIsEditingLesson(null);
            }} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function TabButton({ active, onClick, icon: Icon, label }: { active: boolean, onClick: () => void, icon: any, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 px-6 py-4 transition-all uppercase tracking-widest font-black text-[10px]",
        active ? "bg-brand-primary text-black" : "text-white/40 hover:bg-white/5 hover:text-white"
      )}
    >
      <Icon size={16} />
      {label}
    </button>
  );
}

function ToggleSetting({ label, description, active = false }: { label: string, description: string, active?: boolean }) {
  return (
    <div className="flex items-center justify-between group">
      <div>
        <p className="text-xs font-black uppercase tracking-tight group-hover:text-brand-primary transition-colors">{label}</p>
        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{description}</p>
      </div>
      <div className={cn(
        "w-10 h-5 p-1 transition-colors",
        active ? "bg-brand-primary" : "bg-white/10"
      )}>
        <div className={cn(
          "w-3 h-3 transition-transform",
          active ? "bg-black translate-x-5" : "bg-white/40"
        )} />
      </div>
    </div>
  );
}

function ModuleEditor({ module, onClose, onSave }: { module: Module, onClose: () => void, onSave: (m: Module) => void }) {
  const [data, setData] = useState<Module>(module);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <div className="bg-[#111] border border-white/10 w-full max-w-xl overflow-hidden">
        <div className="p-8 border-b border-white/10">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">Module Architect</h2>
          <p className="text-xs text-white/40 uppercase tracking-widest">Define strategic learning boundaries</p>
        </div>
        <div className="p-8 space-y-6">
          <InputGroup label="Title" value={data.title} onChange={v => setData({ ...data, title: v })} />
          <div className="grid grid-cols-2 gap-6">
            <InputGroup label="Order" type="number" value={data.order.toString()} onChange={v => setData({ ...data, order: parseInt(v) })} />
            <InputGroup label="Month" type="number" value={data.month.toString()} onChange={v => setData({ ...data, month: parseInt(v) })} />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">Abstract</label>
            <textarea 
              value={data.description}
              onChange={e => setData({ ...data, description: e.target.value })}
              className="w-full h-32 bg-black border border-white/10 p-4 text-sm uppercase tracking-tight focus:border-brand-primary outline-none resize-none"
            />
          </div>
        </div>
        <div className="p-8 bg-white/[0.02] border-t border-white/10 flex gap-4">
          <button onClick={onClose} className="flex-1 py-4 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">Cancel</button>
          <button 
            onClick={() => onSave(data)}
            className="flex-1 py-4 bg-brand-primary text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <Save size={16} /> Deploy Module
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function LessonEditor({ lesson, onClose, onSave }: { lesson: Lesson, onClose: () => void, onSave: (l: Lesson) => void }) {
  const [data, setData] = useState<Lesson>(lesson);
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newResource, setNewResource] = useState({ title: '', url: '' });

  const addVideo = () => {
    const match = newVideoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]{11})/);
    const youtubeId = match ? match[1] : '';
    if (youtubeId) {
      const newVideo: Video = {
        id: `vid-${Date.now()}`,
        title: 'New Video Segment',
        youtubeId,
        duration: '00:00'
      };
      setData({ ...data, videos: [...data.videos, newVideo] });
      setNewVideoUrl('');
    }
  };

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: `task-${Date.now()}`,
        title: newTaskTitle.trim()
      };
      setData({ ...data, tasks: [...data.tasks, newTask] });
      setNewTaskTitle('');
    }
  };

  const addResource = () => {
    if (newResource.title && newResource.url) {
      setData({ 
        ...data, 
        resources: [...(data.resources || []), { ...newResource }] 
      });
      setNewResource({ title: '', url: '' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <div className="bg-[#111] border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-8 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-1">Lesson Synthesis</h2>
            <p className="text-xs text-white/40 uppercase tracking-widest">Construct tactical session data</p>
          </div>
          <button onClick={onClose} className="text-white/20 hover:text-white"><X size={24} /></button>
        </div>
        <div className="p-8 space-y-8 overflow-y-auto flex-1 custom-scrollbar">
          <InputGroup label="Title" value={data.title} onChange={v => setData({ ...data, title: v })} />
          
          <div className="grid grid-cols-2 gap-6">
            <InputGroup label="Order" type="number" value={data.order.toString()} onChange={v => setData({ ...data, order: parseInt(v) })} />
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">Difficulty</label>
              <select 
                value={data.difficulty}
                onChange={e => setData({ ...data, difficulty: e.target.value as any })}
                className="w-full bg-black border border-white/10 p-4 text-sm uppercase font-bold focus:border-brand-primary outline-none"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 block">Abstract</label>
            <textarea 
              value={data.description}
              onChange={e => setData({ ...data, description: e.target.value })}
              className="w-full h-24 bg-black border border-white/10 p-4 text-sm uppercase tracking-tight focus:border-brand-primary outline-none resize-none"
            />
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 block">Video Assets</label>
            <div className="space-y-2 mb-4">
              {data.videos.map((v, i) => (
                <div key={v.id} className="flex items-center gap-4 p-3 bg-black border border-white/5">
                  <Youtube className="text-red-500" size={16} />
                  <input 
                    className="flex-1 bg-transparent text-xs uppercase font-bold outline-none" 
                    value={v.title}
                    onChange={e => {
                      const vids = [...data.videos];
                      vids[i].title = e.target.value;
                      setData({ ...data, videos: vids });
                    }}
                  />
                  <span className="text-[8px] font-mono text-white/20">{v.youtubeId}</span>
                  <button onClick={() => setData({ ...data, videos: data.videos.filter(vid => vid.id !== v.id) })}>
                    <Trash2 size={12} className="text-white/20 hover:text-red-400" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input 
                placeholder="YOUTUBE URL OR ID"
                className="flex-1 bg-white/5 border border-white/10 p-3 text-[10px] uppercase font-bold focus:border-brand-primary outline-none"
                value={newVideoUrl}
                onChange={e => setNewVideoUrl(e.target.value)}
              />
              <button 
                onClick={addVideo}
                className="px-4 bg-brand-primary text-black text-[10px] font-black uppercase transition-all"
              >
                Attach
              </button>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 block">Checklist Tasks</label>
            <div className="space-y-2 mb-4">
              {data.tasks.map((task, i) => (
                <div key={task.id} className="flex items-center gap-4 p-3 bg-black border border-white/5">
                  <FileText className="text-brand-primary" size={16} />
                  <input 
                    className="flex-1 bg-transparent text-xs uppercase font-bold outline-none" 
                    value={task.title}
                    onChange={e => {
                      const tasks = [...data.tasks];
                      tasks[i].title = e.target.value;
                      setData({ ...data, tasks });
                    }}
                  />
                  <button onClick={() => setData({ ...data, tasks: data.tasks.filter(t => t.id !== task.id) })}>
                    <Trash2 size={12} className="text-white/20 hover:text-red-400" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input 
                placeholder="TASK TITLE"
                className="flex-1 bg-white/5 border border-white/10 p-3 text-[10px] uppercase font-bold focus:border-brand-primary outline-none"
                value={newTaskTitle}
                onChange={e => setNewTaskTitle(e.target.value)}
              />
              <button 
                onClick={addTask}
                className="px-4 bg-brand-primary text-black text-[10px] font-black uppercase transition-all"
              >
                Add
              </button>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 block">Technical Resources</label>
            <div className="space-y-2 mb-4">
              {data.resources?.map((res, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-black border border-white/5">
                  <LinkIcon className="text-blue-400" size={16} />
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <input 
                      className="bg-transparent text-xs uppercase font-bold outline-none border-b border-white/10 focus:border-brand-primary" 
                      value={res.title}
                      onChange={e => {
                        const resources = [...(data.resources || [])];
                        resources[i].title = e.target.value;
                        setData({ ...data, resources });
                      }}
                    />
                    <input 
                      className="bg-transparent text-[10px] font-mono text-white/40 outline-none border-b border-white/10 focus:border-brand-primary" 
                      value={res.url}
                      onChange={e => {
                        const resources = [...(data.resources || [])];
                        resources[i].url = e.target.value;
                        setData({ ...data, resources });
                      }}
                    />
                  </div>
                  <button onClick={() => setData({ ...data, resources: data.resources?.filter((_, index) => index !== i) })}>
                    <Trash2 size={12} className="text-white/20 hover:text-red-400" />
                  </button>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input 
                placeholder="RESOURCE LABEL"
                className="bg-white/5 border border-white/10 p-3 text-[10px] uppercase font-bold focus:border-brand-primary outline-none"
                value={newResource.title}
                onChange={e => setNewResource({ ...newResource, title: e.target.value })}
              />
              <input 
                placeholder="RESOURCE URL"
                className="bg-white/5 border border-white/10 p-3 text-[10px] font-mono focus:border-brand-primary outline-none"
                value={newResource.url}
                onChange={e => setNewResource({ ...newResource, url: e.target.value })}
              />
            </div>
            <button 
              onClick={addResource}
              className="w-full py-3 bg-white/5 border border-white/10 text-[10px] font-black uppercase hover:bg-white/10 transition-all"
            >
              Attach Resource
            </button>
          </div>
        </div>
        <div className="p-8 bg-white/[0.02] border-t border-white/10 flex gap-4">
          <button onClick={onClose} className="flex-1 py-4 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">Cancel</button>
          <button 
            onClick={() => onSave(data)}
            className="flex-1 py-4 bg-brand-primary text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Save Session
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function InputGroup({ label, value, onChange, type = 'text' }: { label: string, value: string, onChange: (v: string) => void, type?: string }) {
  return (
    <div>
      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">{label}</label>
      <input 
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-black border border-white/10 p-4 text-sm uppercase font-bold focus:border-brand-primary outline-none"
      />
    </div>
  );
}
