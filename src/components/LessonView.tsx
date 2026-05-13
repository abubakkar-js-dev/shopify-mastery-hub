"use client";
import { useState } from "react";
import {
  FiCheckCircle as CheckCircle,
  FiCircle as Circle,
  FiArrowLeft,
  FiArrowRight,
  FiChevronDown,
  FiLayout as Layout,
} from "react-icons/fi";
import {
  LuAward as Award,
  LuChevronRight as ChevronRight,
  LuLock as Lock,
  LuMaximize2 as Maximize,
  LuMonitor as Monitor,
  LuPlay as Play,
} from "react-icons/lu";
import { cn } from "../lib/utils";
import type { Lesson, Module } from "../types";
import ChatCoPilot from "./ChatCoPilot";

export default function LessonView({
  lesson,
  module,
  onBack,
  completedTasks,
  onToggleTask,
  activeVideoId,
  onSelectVideo,
  completedVideos,
  onToggleVideo,
  onNext,
  onPrev,
  isNextDisabled,
  isLastLesson,
  onToggleLesson,
  isLessonCompleted,
}: {
  lesson: Lesson;
  module: Module;
  onBack: () => void;
  completedTasks: string[];
  onToggleTask: (id: string) => void;
  activeVideoId: string;
  onSelectVideo: (id: string) => void;
  completedVideos: string[];
  onToggleVideo: (id: string) => void;
  onNext?: () => void;
  onPrev?: () => void;
  isNextDisabled?: boolean;
  isLastLesson?: boolean;
  onToggleLesson?: () => void;
  isLessonCompleted?: boolean;
}) {
  const [viewMode, setViewMode] = useState<"standard" | "theater" | "focus">(
    "standard",
  );
  const [isPlaylistCollapsed, setIsPlaylistCollapsed] = useState(false);

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
  console.log("Active Video:", activeVideo);
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

  const currentVideoIndex = lesson.videos.findIndex(
    (v) => v.id === activeVideoId,
  );
  const hasNextVideo = currentVideoIndex < lesson.videos.length - 1;
  const hasPrevVideo = currentVideoIndex > 0;

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
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

          {(onPrev || onNext) && (
            <div className="hidden sm:flex items-center gap-1 border-l border-white/10 ml-2 pl-3">
              <button
                onClick={onPrev}
                disabled={!onPrev}
                className={cn(
                  "p-2 transition-all",
                  onPrev
                    ? "text-white/40 hover:text-white hover:bg-white/5"
                    : "text-white/10 cursor-not-allowed",
                )}
                title="Previous Session"
              >
                <FiArrowLeft size={14} />
              </button>
              <button
                onClick={onNext}
                disabled={!onNext || isNextDisabled}
                className={cn(
                  "p-2 transition-all",
                  onNext && !isNextDisabled
                    ? "text-white/40 hover:text-white hover:bg-white/5"
                    : "text-white/10 cursor-not-allowed",
                )}
                title={
                  isNextDisabled
                    ? isLastLesson
                      ? "Week Completed — No Next Session"
                      : hasNextVideo
                        ? "Watch current video to unlock next"
                        : "Complete this lesson to unlock next"
                    : hasNextVideo
                      ? "Next Video"
                      : "Next Session"
                }
              >
                <FiArrowRight size={14} />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 p-0.5">
            {[
              { id: "standard", icon: Monitor, label: "STD" },
              { id: "theater", icon: Layout, label: "THTR" },
              { id: "focus", icon: Maximize, label: "FOCUS" },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() =>
                  setViewMode(mode.id as "standard" | "theater" | "focus")
                }
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 transition-all relative group",
                  viewMode === mode.id
                    ? "bg-brand-primary text-black"
                    : "text-white/30 hover:text-white hover:bg-white/5",
                )}
              >
                <mode.icon size={12} />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                  {mode.label}
                </span>
                {viewMode === mode.id && (
                  <div className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-brand-primary shadow-[0_0_100px_#95FF00]" />
                )}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-brand-primary font-bold">
            SESSION ID: {lesson.id.toUpperCase()}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col bg-white/10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-300",
          viewMode === "standard" ? "lg:flex-row" : "lg:flex-col",
        )}
      >
        <div className="aspect-video bg-black relative flex-1">
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

        {viewMode !== "focus" && (
          <div
            className={cn(
              "bg-brand-bg flex flex-col overflow-hidden transition-all duration-300",
              viewMode === "standard"
                ? "lg:w-[350px] border-l border-white/5"
                : "w-full border-t border-white/10",
            )}
          >
            <button
              onClick={() => setIsPlaylistCollapsed(!isPlaylistCollapsed)}
              className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center hover:bg-white/10 transition-colors group/header"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "transition-transform duration-300",
                    isPlaylistCollapsed ? "-rotate-90" : "rotate-0",
                  )}
                >
                  <FiChevronDown
                    size={14}
                    className="text-white/40 group-hover/header:text-brand-primary"
                  />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  Workshop Playlist
                </h3>
              </div>
              <span className="text-[10px] font-mono text-brand-primary">
                {currentVideoIndex >= 0 ? currentVideoIndex + 1 : 0} /{" "}
                {lesson.videos.length}
              </span>
            </button>

            <div
              className={cn(
                "flex-1 overflow-y-auto transition-all duration-500 ease-in-out",
                isPlaylistCollapsed
                  ? "max-h-0 opacity-0 invisible"
                  : "max-h-[1000px] opacity-100 visible",
              )}
            >
              <div className="flex-1 overflow-y-auto max-h-[500px] lg:max-h-none">
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
        )}
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
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              {activeVideo && (
                <button
                  onClick={() => onToggleVideo(activeVideo.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-[10px] font-black uppercase tracking-widest transition-all border w-full sm:w-auto justify-center",
                    isVideoCompleted(activeVideo.id)
                      ? "bg-brand-primary/10 text-brand-primary border-brand-primary/20"
                      : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10",
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

              <button
                onClick={onToggleLesson}
                className={cn(
                  "flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-[10px] font-black uppercase tracking-widest transition-all border w-full sm:w-auto justify-center",
                  isLessonCompleted
                    ? "bg-brand-primary text-black border-brand-primary"
                    : "bg-white/5 text-brand-primary border-brand-primary/40 hover:bg-brand-primary/10",
                )}
              >
                {isLessonCompleted ? (
                  <>
                    <CheckCircle size={14} />
                    Session Secured
                  </>
                ) : (
                  <>
                    <Circle size={14} />
                    Complete Session
                  </>
                )}
              </button>
            </div>
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

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-white/5">
            {onPrev && (
              <button
                onClick={onPrev}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all text-white/60 group"
              >
                <FiArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                {hasPrevVideo ? "Previous Video" : "Previous Session"}
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                disabled={isNextDisabled}
                className={cn(
                  "w-full sm:flex-1 flex items-center justify-center gap-3 px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all group",
                  isNextDisabled
                    ? "bg-white/5 border border-white/5 text-white/10 cursor-not-allowed"
                    : "bg-brand-primary text-black border-brand-primary hover:scale-[1.01] shadow-[0_0_30px_rgba(149,255,0,0.15)] hover:shadow-[0_0_40px_rgba(149,255,0,0.25)]",
                )}
              >
                {isNextDisabled ? (
                  <>
                    <Lock size={14} />
                    {isLastLesson
                      ? "Week Completed — No Next Session"
                      : hasNextVideo
                        ? "Next Video Locked"
                        : "Next Session Locked"}
                  </>
                ) : (
                  <>
                    {hasNextVideo ? "Next Video" : "Next Session"}
                    <FiArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      <ChatCoPilot lesson={lesson} module={module} />
    </div>
  );
}
