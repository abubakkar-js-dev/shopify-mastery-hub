import { LuAward as Award } from "react-icons/lu";
import { Video } from "../../../types";

interface LessonVideoPlayerProps {
  activeVideo: Video | null;
}

export function LessonVideoPlayer({ activeVideo }: LessonVideoPlayerProps) {
  return (
    <div className="aspect-video bg-black relative flex-1">
      {activeVideo ? (
        <iframe
          className="w-full h-full relative z-10"
          src={
            activeVideo.embedUrl ||
            `https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&color=white`
          }
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
  );
}
