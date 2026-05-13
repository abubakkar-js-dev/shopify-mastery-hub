import React from 'react';
import { 
  FiCheckCircle as CheckCircle, 
  FiLayout as Layout, 
  FiTrendingUp as TrendingUp, 
  FiZap as Zap,
  FiStar as Star
} from 'react-icons/fi';
import { LuShieldCheck as ShieldCheck } from 'react-icons/lu';
import { motion } from 'motion/react';
import { UserProfile, Module, Lesson } from '../../../types';
import { DashboardMetrics } from './DashboardMetrics';
import { TrajectoryChart } from './TrajectoryChart';
import { SkillDistribution } from './SkillDistribution';
import { ActivityLog } from './ActivityLog';
import { AIStrategicSummary } from './AIStrategicSummary';

interface UserDashboardShellProps {
  profile: UserProfile;
  modules: Module[];
  lessons: Lesson[];
  isAdmin: boolean;
}

export function UserDashboardShell({ profile, modules, lessons, isAdmin }: UserDashboardShellProps) {
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

  const stats = [
    { label: 'Completion', value: `${completionPercentage}%`, icon: TrendingUp, color: 'text-brand-primary' },
    { label: 'Lessons Done', value: completedLessonsCount, icon: CheckCircle, color: 'text-blue-400' },
    { label: 'Videos Watched', value: profile.completedVideos?.length || 0, icon: Layout, color: 'text-purple-400' },
    { label: 'Tasks Finished', value: profile.completedTasks?.length || 0, icon: Zap, color: 'text-orange-400' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
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

      <DashboardMetrics stats={stats} />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <TrajectoryChart data={monthProgress} />
        <SkillDistribution data={difficultyBreakdown} />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <ActivityLog completedLessons={profile.completedLessons} lessons={lessons} />
        <AIStrategicSummary profile={profile} modules={modules} />
      </section>
    </div>
  );
}
