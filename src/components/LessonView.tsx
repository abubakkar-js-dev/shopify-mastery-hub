'use client';
import { LuAward as Award, LuChevronRight as ChevronRight, LuLock as Lock, LuPlay as Play } from 'react-icons/lu';
import { FiCheckCircle as CheckCircle, FiCircle as Circle } from 'react-icons/fi';
import { cn } from '../lib/utils';
import type { Lesson } from '../types';

export default function LessonView({
  lesson,
  onBack,
  completedTasks,
  onToggleTask,
  activeVideoId,
  onSelectVideo,
  completedVideos,
  onToggleVideo,
}: {
  lesson: Lesson;
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
      const selected = lesson.videos.find((v) => v.id === activeVideoId);
      if (selected) return selected;
    }
    for (let i = 0; i < lesson.videos.length; i++) {
      const v = lesson.videos[i];
      const unlocked =
        i === 0 || (completedVideos || []).includes(lesson.videos[i - 1].id);
      const completed = (completedVideos || []).includes(v.id);
      if (unlocked && !completed) return v;
    }
    return lesson.videos[0];
  };

  const activeVideo = getStartingVideo();
  const completedTaskCount = lesson.tasks.filter((t) =>
    completedTasks.includes(t.id),
  ).length;
  const progressPercent = lesson.tasks.length
    ? Math.round((completedTaskCount / lesson.tasks.length) * 100)
    : 0;

  const isVideoUnlocked = (videoId: string) => {
    const videoIndex = lesson.videos.findIndex((v) => v.id === videoId);
    if (videoIndex === 0) return true;
    const prevVideo = lesson.videos[videoIndex - 1];
    return (completedVideos || []).includes(prevVideo.id);
  };

  const isVideoCompleted = (videoId: string) =>
    (completedVideos || []).includes(videoId);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white/40 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors group"
        >
          <ChevronRight
            size={14}
            className="rotate-180 group-hover:-translate-x-1 transition-transform"
          />
          Module Index
        </button>
        <span className="font-mono text-xs text-brand-primary font-bold">
          SESSION ID: {lesson.id.toUpperCase()}
        </span>
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
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">
                Assignment Phase
              </h2>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                Complete the tasks below to finalize this session
              </p>
            </div>
          )}
        </div>

        <div className="bg-brand-bg flex flex-col h-full overflow-hidden border-l border-white/5">
          <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-white/60">
              Workshop Playlist
            </h3>
            <span className="text-[10px] font-mono text-brand-primary">
              {lesson.videos.filter((v) => isVideoCompleted(v.id)).length} /{" "}
              {lesson.videos.length}
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
                    !unlocked && "opacity-30 cursor-not-allowed",
                  )}
                >
                  <div className="mt-1 relative">
                    {completed ? (
                      <CheckCircle
                        size={14}
                        className="text-brand-primary fill-brand-primary"
                      />
                    ) : isActive ? (
                      <Play
                        size={12}
                        className="text-brand-primary fill-brand-primary animate-pulse"
                      />
                    ) : !unlocked ? (
                      <Lock size={12} className="text-white/20" />
                    ) : (
                      <span className="text-[10px] font-mono font-bold text-white/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={cn(
                        "text-[11px] font-bold uppercase tracking-tight leading-tight mb-1",
                        isActive
                          ? "text-brand-primary"
                          : completed
                            ? "text-white/60"
                            : "text-white/80",
                      )}
                    >
                      {v?.title}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-[9px] font-mono text-white/40">
                        {v.duration}
                      </p>
                      {completed && (
                        <span className="text-[8px] font-black text-brand-primary uppercase">
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
            {lesson.videos.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-[10px] text-white/20 font-black uppercase tracking-widest">
                  No video content for this assignment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-12 pt-4 md:pt-6">
        <div className="flex-1 max-w-4xl w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
            <div className="flex items-center gap-3 md:gap-4">
              <span className="section-label">Active Workshop</span>
              <div className="h-px w-10 bg-white/10" />
              <span className="text-[10px] font-mono text-white/60">
                {`L-${lesson.order} // ${lesson.difficulty}`}
              </span>
            </div>
            {activeVideo && (
              <button
                onClick={() => onToggleVideo(activeVideo.id)}
                className={cn(
                  "flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-[10px] font-black uppercase tracking-widest transition-all border w-full sm:w-auto justify-center",
                  isVideoCompleted(activeVideo.id)
                    ? "bg-brand-primary text-black border-brand-primary"
                    : "bg-white/5 text-brand-primary border-brand-primary/40 hover:bg-brand-primary/10",
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
          <h1 className="title-lg mb-6 md:mb-8 italic">{lesson?.title}</h1>

          <div className="mb-8 md:mb-12">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-4 md:mb-6 font-mono text-left">
              Internal Task Checklist — {progressPercent}%
            </h3>
            <div className="grid gap-px bg-white/10 border border-white/10">
              {lesson.tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => onToggleTask(task.id)}
                  className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-brand-bg hover:bg-white/5 transition-colors cursor-pointer group"
                >
                  <button
                    className={cn(
                      "w-6 h-6 border transition-all flex items-center justify-center",
                      completedTasks.includes(task.id)
                        ? "bg-brand-primary border-brand-primary text-black"
                        : "border-white/20 text-transparent group-hover:border-white/40",
                    )}
                  >
                    {completedTasks.includes(task.id) && (
                      <CheckCircle size={14} />
                    )}
                  </button>
                  <span
                    className={cn(
                      "text-sm font-bold uppercase tracking-tight transition-colors",
                      completedTasks.includes(task.id)
                        ? "text-white/20 line-through"
                        : "text-white/80",
                    )}
                  >
                    {task.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
