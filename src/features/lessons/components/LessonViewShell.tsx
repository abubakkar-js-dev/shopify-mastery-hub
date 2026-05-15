"use client";
import ChatCoPilot from "@/features/ai/components/ChatCoPilot";
import { cn } from "@/lib/utils";
import type { Lesson, Module } from "@/types";
import { useState } from "react";
import {
  FiCheckCircle as CheckCircle,
  FiCircle as Circle,
  FiArrowLeft,
  FiArrowRight,
  FiLayout as Layout,
} from "react-icons/fi";
import {
  LuChevronRight as ChevronRight,
  LuMaximize2 as Maximize,
  LuMonitor as Monitor,
} from "react-icons/lu";
import { getLessonVideoState } from "../utils/videoUnlocking";
import { LessonNavigation } from "./LessonNavigation";
import { LessonPlaylist } from "./LessonPlaylist";
import { LessonResources } from "./LessonResources";
import { LessonTaskList } from "./LessonTaskList";
import { LessonVideoPlayer } from "./LessonVideoPlayer";

export interface LessonViewShellProps {
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
}

export function LessonViewShell({
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
}: LessonViewShellProps) {
  const [viewMode, setViewMode] = useState<"standard" | "theater" | "focus">(
    "standard",
  );

  const {
    activeVideo,
    currentVideoIndex,
    hasNextVideo,
    hasPrevVideo,
    isVideoUnlocked,
    isVideoCompleted,
  } = getLessonVideoState({
    lesson,
    activeVideoId,
    completedVideos: completedVideos || [],
  });

  const completedTaskCount = lesson.tasks.filter((t) =>
    completedTasks.includes(t.id),
  ).length;
  const progressPercent = lesson.tasks.length
    ? Math.round((completedTaskCount / lesson.tasks.length) * 100)
    : 0;

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header / Top Navigation */}
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
                  <div className="absolute -bottom-0.5 left-0 w-full h-px bg-brand-primary shadow-[0_0_100px_#95FF00]" />
                )}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-brand-primary font-bold">
            SESSION ID: {lesson.id.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Main Video & Playlist Section */}
      <div
        className={cn(
          "flex flex-col bg-white/10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-300",
          viewMode === "standard" ? "lg:flex-row" : "lg:flex-col",
        )}
      >
        <LessonVideoPlayer activeVideo={activeVideo} />

        <LessonPlaylist
          lesson={lesson}
          activeVideo={activeVideo}
          currentVideoIndex={currentVideoIndex}
          isVideoUnlocked={isVideoUnlocked}
          isVideoCompleted={isVideoCompleted}
          onSelectVideo={onSelectVideo}
          viewMode={viewMode}
        />
      </div>

      {/* Content Info & Task List */}
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

          <LessonTaskList
            tasks={lesson.tasks}
            completedTasks={completedTasks}
            onToggleTask={onToggleTask}
            progressPercent={progressPercent}
          />

          <LessonResources resources={lesson.resources} />

          <LessonNavigation
            onNext={onNext}
            onPrev={onPrev}
            isNextDisabled={isNextDisabled}
            isLastLesson={isLastLesson}
            hasNextVideo={hasNextVideo}
            hasPrevVideo={hasPrevVideo}
          />
        </div>
      </div>
      <ChatCoPilot lesson={lesson} module={module} />
    </div>
  );
}
