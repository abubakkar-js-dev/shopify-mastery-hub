import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { LuLock as Lock } from "react-icons/lu";
import { cn } from "../../../lib/utils";

interface LessonNavigationProps {
  onNext?: () => void;
  onPrev?: () => void;
  isNextDisabled?: boolean;
  isLastLesson?: boolean;
  hasNextVideo: boolean;
  hasPrevVideo: boolean;
}

export function LessonNavigation({
  onNext,
  onPrev,
  isNextDisabled,
  isLastLesson,
  hasNextVideo,
  hasPrevVideo,
}: LessonNavigationProps) {
  return (
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
  );
}
