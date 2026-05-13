import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiCheckCircle as CheckCircle } from "react-icons/fi";
import { LuLock as Lock, LuPlay as Play } from "react-icons/lu";
import { cn } from "../../../lib/utils";
import { Lesson, Video } from "../../../types";

interface LessonPlaylistProps {
  lesson: Lesson;
  activeVideo: Video | null;
  currentVideoIndex: number;
  isVideoUnlocked: (id: string) => boolean;
  isVideoCompleted: (id: string) => boolean;
  onSelectVideo: (id: string) => void;
  viewMode: "standard" | "theater" | "focus";
}

export function LessonPlaylist({
  lesson,
  activeVideo,
  currentVideoIndex,
  isVideoUnlocked,
  isVideoCompleted,
  onSelectVideo,
  viewMode,
}: LessonPlaylistProps) {
  const [isPlaylistCollapsed, setIsPlaylistCollapsed] = useState(false);

  if (viewMode === "focus") return null;

  return (
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
  );
}
