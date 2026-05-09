import React from 'react';
import { 
  FiBookOpen as BookOpen, 
  FiCheckCircle as CheckCircle, 
  FiClock as Clock, 
  FiLayout as Layout, 
  FiTrendingUp as TrendingUp, 
  FiZap as Zap,
  FiStar as Star,
  FiTarget as Target,
  FiX as X
} from 'react-icons/fi';
import { LuShieldCheck as ShieldCheck } from 'react-icons/lu';
import { motion } from 'motion/react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell
} from 'recharts';
import { UserProfile, Module, Lesson } from '../types';
import { cn } from '../lib/utils';

interface UserDashboardProps {
  profile: UserProfile;
  modules: Module[];
  lessons: Lesson[];
  isAdmin: boolean;
  onClose: () => void;
}

export default function UserDashboard({ profile, modules, lessons, isAdmin, onClose }: UserDashboardProps) {
  // Calculate Stats
  const completedLessonsCount = profile.completedLessons.length;
  const totalLessonsCount = lessons.length;
  const completionPercentage = totalLessonsCount > 0 
    ? Math.round((completedLessonsCount / totalLessonsCount) * 100) 
    : 0;

  const difficultyBreakdown = [
    { name: 'Beginner', value: lessons.filter(l => l.difficulty === 'Beginner' && profile.completedLessons.includes(l.id)).length, total: lessons.filter(l => l.difficulty === 'Beginner').length },
    { name: 'Intermediate', value: lessons.filter(l => l.difficulty === 'Intermediate' && profile.completedLessons.includes(l.id)).length, total: lessons.filter(l => l.difficulty === 'Intermediate').length },
    { name: 'Advanced', value: lessons.filter(l => l.difficulty === 'Advanced' && profile.completedLessons.includes(l.id)).length, total: lessons.filter(l => l.difficulty === 'Advanced').length },
  ];

  const monthProgress = [1, 2, 3].map(m => {
    const monthLessons = lessons.filter(l => {
      const mod = modules.find(rm => rm.id === l.moduleId);
      return mod?.month === m;
    });
    const completed = monthLessons.filter(l => profile.completedLessons.includes(l.id)).length;
    return {
      name: `Month ${m}`,
      completed,
      total: monthLessons.length,
      percentage: monthLessons.length > 0 ? (completed / monthLessons.length) * 100 : 0
    };
  });

  const COLORS = ['#95FF00', '#3b82f6', '#f97316'];

  const stats = [
    { label: 'Completion', value: `${completionPercentage}%`, icon: TrendingUp, color: 'text-brand-primary' },
    { label: 'Lessons Done', value: completedLessonsCount, icon: CheckCircle, color: 'text-blue-400' },
    { label: 'Videos Watched', value: profile.completedVideos?.length || 0, icon: Layout, color: 'text-purple-400' },
    { label: 'Tasks Finished', value: profile.completedTasks?.length || 0, icon: Zap, color: 'text-orange-400' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-brand-bg overflow-hidden animate-in fade-in duration-300">
      {/* Header */}
      <header className="h-20 border-b border-white/10 flex items-center justify-between px-8 md:px-12 bg-brand-bg">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-black uppercase tracking-tighter italic">Personal Dashboard</h2>
            <div className="flex items-center gap-2">
              <span className="section-label">Performance Analytics</span>
              {isAdmin && <ShieldCheck size={12} className="text-brand-primary" />}
            </div>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-white/5 transition-colors border border-white/10 group"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-4 md:p-12">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Top Profile Card */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#0F0F0F] border border-white/10 p-8 flex flex-col md:flex-row items-center gap-8 group">
              <div className="w-32 h-32 bg-brand-primary flex items-center justify-center text-black text-5xl font-black italic relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                {profile.displayName?.charAt(0) || 'U'}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 italic">{profile.displayName}</h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <div className="flex flex-col items-center md:items-start">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Learner Status</span>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-tighter flex items-center gap-1">
                      <Star size={10} fill="currentColor" /> Mastery Student
                    </span>
                  </div>
                  {isAdmin && (
                    <div className="flex flex-col items-center md:items-start border-l border-white/10 pl-4">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest">Authority Level</span>
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-tighter flex items-center gap-1">
                        <ShieldCheck size={10} /> Platform Admin
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col items-center md:items-start border-l border-white/10 pl-4">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Email Identity</span>
                    <span className="text-xs font-medium text-white/60 lowercase italic truncate max-w-[200px]">
                      {profile.email}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                   <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest">
                     LVL {Math.floor(completedLessonsCount / 5) + 1}
                   </div>
                   <div className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 text-[10px] font-black uppercase tracking-widest text-brand-primary">
                     {completedLessonsCount} Lessons Secured
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0F0F0F] border border-white/10 p-8 flex flex-col justify-center">
              <div className="flex justify-between items-end mb-4">
                <span className="section-label">Target Progress</span>
                <span className="font-mono text-2xl font-black text-brand-primary">{completionPercentage}%</span>
              </div>
              <div className="w-full h-2 bg-white/5 mb-6">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${completionPercentage}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-brand-primary shadow-[0_0_15px_rgba(149,255,0,0.5)]"
                />
              </div>
              <p className="text-[10px] text-white/40 uppercase tracking-wider leading-relaxed">
                You have completed <span className="text-white font-bold">{completedLessonsCount}</span> out of <span className="text-white font-bold">{totalLessonsCount}</span> lessons. Your current output efficiency is optimized.
              </p>
            </div>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="p-8 bg-[#0F0F0F] group hover:bg-white/5 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <stat.icon size={40} />
                </div>
                <stat.icon className={cn("w-5 h-5 mb-6 relative z-10", stat.color)} />
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2 relative z-10">{stat.label}</p>
                <h3 className="text-3xl font-black italic tracking-tighter relative z-10">{stat.value}</h3>
              </div>
            ))}
          </section>

          {/* Charts Row */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Completion Chart - Keeping the Requested High Performance Style */}
            <div className="bg-[#0F0F0F] border border-white/10 p-8 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-white/40 border-l-2 border-brand-primary pl-3">Monthly Trajectory</h3>
                <span className="text-[10px] font-mono text-white/20 uppercase">Learning Velocity</span>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthProgress}>
                    <defs>
                      <linearGradient id="colorTrajectory" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#95FF00" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#95FF00" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="#444" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false}
                      dy={10}
                    />
                    <YAxis 
                      stroke="#444" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                      itemStyle={{ color: '#95FF00' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="percentage" 
                      stroke="#95FF00" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorTrajectory)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="bg-[#0F0F0F] border border-white/10 p-8">
               <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-white/40 border-l-2 border-brand-primary pl-3">Technical Proficiency</h3>
                <span className="text-[10px] font-mono text-white/20 uppercase">Skill Distribution</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={difficultyBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                        animationDuration={1500}
                      >
                        {difficultyBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '0', fontSize: '10px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-6">
                  {difficultyBreakdown.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{item.name}</span>
                        <span className="text-[10px] font-mono text-white/40">{item.value} / {item.total}</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.total > 0 ? (item.value / item.total) * 100 : 0}%` }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full transition-all duration-1000"
                          style={{ 
                            backgroundColor: COLORS[i]
                          }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Activity Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Recent Lessons */}
            <div className="lg:col-span-2 bg-[#0F0F0F] border border-white/10 p-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-8 px-2 border-l-2 border-brand-primary">Terminal Log: Activity</h3>
              <div className="space-y-4">
                {profile.completedLessons.length > 0 ? (
                  profile.completedLessons.slice(-5).reverse().map((lessonId, i) => {
                    const lesson = lessons.find(l => l.id === lessonId);
                    return (
                      <div key={i} className="flex items-center justify-between p-4 bg-black/40 border border-white/5 hover:border-brand-primary/20 transition-all group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-colors">
                            <BookOpen size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-black uppercase tracking-tight">{lesson?.title || 'Unknown Lesson'}</p>
                            <p className="text-[10px] text-white/20 uppercase tracking-widest mt-0.5">Session Completed</p>
                          </div>
                        </div>
                        <CheckCircle size={14} className="text-brand-primary" />
                      </div>
                    );
                  })
                ) : (
                  <div className="p-8 border border-dashed border-white/5 text-center">
                    <p className="text-[10px] text-white/20 uppercase tracking-widest italic">No activity logs recorded in current epoch.</p>
                  </div>
                )}
              </div>
            </div>

            {/* AI Summary Card */}
            <div className="bg-[#0F0F0F] border border-[#95FF00]/10 p-8 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <Target size={120} />
              </div>
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <Target className="text-brand-primary" size={20} />
                <h3 className="text-xs font-black uppercase tracking-widest text-white/40">AI Strategic Overview</h3>
              </div>
              
              {profile.personalizedPath ? (
                <div className="flex-1 flex flex-col relative z-10">
                  <div className="p-6 bg-brand-primary/5 border border-brand-primary/10 mb-6 group-hover:border-brand-primary/30 transition-colors">
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-brand-primary mb-2 block">Primary Objectives</span>
                    <p className="text-xs text-white/80 leading-relaxed uppercase tracking-tight font-medium italic">
                      &quot;{profile.personalizedPath.goals[0]}&quot;
                    </p>
                  </div>
                  <div className="space-y-4 mb-8">
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20">Next Recommended Module</span>
                    <div className="text-sm font-black uppercase italic tracking-tighter text-white">
                      {modules.find(m => profile.personalizedPath?.recommendedModules.includes(m.id))?.title || 'Next Tier Unlocked'}
                    </div>
                  </div>
                  <button className="mt-auto w-full py-4 bg-brand-primary text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(149,255,0,0.2)]">
                    Recalibrate Path
                  </button>
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-center text-center p-6 border border-dashed border-white/5 opacity-40 relative z-10">
                  <Clock size={24} className="mx-auto mb-4" />
                  <p className="text-[10px] uppercase tracking-widest italic">Personalized Path Analysis Pending Initiation.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
