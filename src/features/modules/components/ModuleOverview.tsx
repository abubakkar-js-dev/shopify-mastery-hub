'use client';
import { LuLock as Lock, LuPlay as Play } from 'react-icons/lu';
import { FiCheckCircle as CheckCircle, FiCircle as Circle } from 'react-icons/fi';
import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import type { Lesson, UserProfile } from '@/types';

export default function ModuleOverview({
  module,
  lessons,
  completedLessons,
  onSelectLesson,
  onToggleComplete,
  profile,
}: {
  module: { id: string; title: string; description: string };
  lessons: Lesson[];
  completedLessons: string[];
  onSelectLesson: (l: Lesson) => void;
  onToggleComplete: (id: string) => void;
  profile: UserProfile | null;
}) {
  const isRecommended = profile?.personalizedPath?.recommendedModules.includes(
    module.id,
  );

  return (
    <div className="space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <span className="section-label">Module Overview</span>
            {isRecommended && (
              <span className="text-[10px] font-black bg-brand-primary text-black px-2 py-0.5 uppercase tracking-widest">
                AI Priority Selection
              </span>
            )}
          </div>
          <h1 className="title-lg mb-4 md:mb-6">{module?.title}</h1>
          <p className="text-base md:text-xl text-white/60 font-medium leading-relaxed tracking-tight max-w-2xl">
            {module.description}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
            Completion Rate
          </span>
          <div className="text-4xl md:text-6xl font-black italic tracking-tighter text-brand-primary">
            {lessons.length > 0
              ? Math.round(
                (lessons.filter((l) =>
                  (profile?.completedLessons || []).includes(l.id),
                ).length /
                  lessons.length) *
                100,
              )
              : 0}
            %
          </div>
        </div>
      </div>

      <div className="grid gap-px bg-white/10 border border-white/10">
        {lessons.map((lesson, idx) => {
          const isUnlocked =
            idx === 0 || completedLessons.includes(lessons[idx - 1].id);

          return (
            <div
              key={lesson.id}
              className={cn(
                "group relative bg-brand-bg p-6 md:p-8 transition-all flex flex-col md:flex-row items-center gap-6 md:gap-10",
                isUnlocked
                  ? "hover:bg-white/5 cursor-pointer"
                  : "opacity-40 cursor-not-allowed",
              )}
              onClick={() => isUnlocked && onSelectLesson(lesson)}
            >
              <div className="relative w-full md:w-64 flex-shrink-0">
                <div
                  className={cn(
                    "aspect-video bg-black/40 overflow-hidden relative border transition-colors",
                    isUnlocked
                      ? "border-white/5 group-hover:border-brand-primary/40"
                      : "border-white/5",
                  )}
                >
                  {lesson.videos[0]?.youtubeId ? (
                    <div className="w-full h-full relative group/thumb overflow-hidden bg-[#0A0A0A]">
                      <Image
                        src={`https://img.youtube.com/vi/${lesson.videos[0].youtubeId}/mqdefault.jpg`}
                        alt={lesson?.title}
                        width={256}
                        height={144}
                        className={cn(
                          "w-full h-full object-cover transition-all duration-700 grayscale",
                          isUnlocked &&
                          "group-hover/thumb:scale-110 group-hover/thumb:grayscale-0 group-hover/thumb:opacity-40",
                          !isUnlocked ? "opacity-10" : "opacity-40",
                        )}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.parentElement?.querySelector('.fallback-thumb') as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Grid Overlay for Premium Feel */}
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

                      <div className="fallback-thumb absolute inset-0 hidden flex-col items-center justify-center p-4 text-center">
                        <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center mb-3 relative">
                          <div className="absolute inset-0 rounded-full bg-brand-primary/5 animate-ping" />
                          <Play size={18} className="text-white/20" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">
                          Media Pending
                        </span>
                        <p className="text-[7px] text-white/10 uppercase tracking-widest font-mono">
                          ID: {lesson.id.split('-')[1]} NODE_READY
                        </p>
                      </div>

                      {/* Animated Scanner Line */}
                      {isUnlocked && (
                        <motion.div
                          initial={{ top: "-100%" }}
                          animate={{ top: "100%" }}
                          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                          className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent pointer-events-none z-10"
                        />
                      )}
                    </div>
                  ) : (
                    <div className="w-full h-full relative flex flex-col items-center justify-center bg-[#0F0F0F] border border-white/5 overflow-hidden group/empty">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-50" />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-3 group-hover/empty:border-brand-primary/30 transition-colors">
                          <div className="w-1 h-1 bg-brand-primary animate-pulse" />
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-brand-primary/60">
                          Workshop Active
                        </span>
                        <span className="text-[6px] font-mono text-white/10 mt-1 uppercase">
                          Phase: Construction 00:00
                        </span>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white/5 to-transparent" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center transition-opacity",
                      isUnlocked
                        ? "opacity-0 group-hover:opacity-100"
                        : "opacity-0",
                    )}
                  >
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
                      style={{
                        width: `${(lesson.videos.filter((v) => (profile?.completedVideos || []).includes(v.id)).length / lesson.videos.length) * 100}%`,
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-brand-primary font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "text-[10px] font-black px-2 py-0.5 uppercase tracking-widest border",
                      lesson.difficulty === "Beginner"
                        ? "border-blue-500/40 text-blue-400"
                        : lesson.difficulty === "Intermediate"
                          ? "border-orange-500/40 text-orange-400"
                          : "border-red-500/40 text-red-400",
                    )}
                  >
                    {lesson.difficulty}
                  </span>
                  {!isUnlocked && (
                    <span className="text-[8px] font-black text-brand-primary uppercase tracking-widest flex items-center gap-1">
                      <Lock size={10} /> Locked
                    </span>
                  )}
                </div>
                <h3 className={cn(
                  "text-2xl font-black uppercase tracking-tighter italic mb-2 transition-colors",
                  isUnlocked ? "group-hover:text-brand-primary" : "text-white/40"
                )}>{lesson?.title}</h3>
                <p className="text-white/40 text-sm uppercase tracking-widest font-bold leading-relaxed line-clamp-2">
                  {isUnlocked ? (lesson.description.length > 200 ? lesson.description.substring(0, 200) + "..." : lesson.description) : "Complete the previous day to unlock this content."}
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
