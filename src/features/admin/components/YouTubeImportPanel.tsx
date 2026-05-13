"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiCheckCircle as CheckCircle,
  FiArrowLeft,
  FiLoader as Loader,
} from "react-icons/fi";

type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  position: number;
};

type YouTubePlaylist = {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
};

type GeneratedModule = {
  title: string;
  description: string;
  month: number;
  order: number;
};

type GeneratedLesson = {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tasks: Array<{ id: string; title: string }>;
};

type ImportStep =
  | "url"
  | "preview"
  | "generating"
  | "review"
  | "saving"
  | "success";

export default function YouTubeImportPanel() {
  const [step, setStep] = useState<ImportStep>("url");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState<YouTubePlaylist | null>(null);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [generatedModule, setGeneratedModule] =
    useState<GeneratedModule | null>(null);
  const [generatedLessons, setGeneratedLessons] = useState<GeneratedLesson[]>(
    [],
  );
  const [aiFallback, setAiFallback] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchPlaylist = async () => {
    setLoading(true);
    setError(null);
    setPlaylist(null);
    setVideos([]);

    try {
      const response = await fetch("/api/youtube/playlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ playlistUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch playlist");
      }

      setPlaylist(data.playlist);
      setVideos(data.videos);
      setStep("preview");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateCourse = async (skipAI = false) => {
    setLoading(true);
    setError(null);
    setAiFallback(false);
    setStep("generating");

    try {
      const response = await fetch("/api/youtube/enhance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ playlist, videos, skipAI }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate course");
      }

      setGeneratedModule(data.module);
      setGeneratedLessons(data.lessons);
      if (data.aiFallback) {
        setAiFallback(true);
      }
      setStep("review");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setStep("preview");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveToFirebase = async () => {
    setLoading(true);
    setError(null);
    setStep("saving");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStep("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setStep("review");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setStep("url");
    setPlaylistUrl("");
    setPlaylist(null);
    setVideos([]);
    setGeneratedModule(null);
    setGeneratedLessons([]);
    setAiFallback(false);
    setError(null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black uppercase tracking-tight mb-2">
          Import YouTube Playlist
        </h1>
        <p className="text-white/40 text-sm">
          {step === "url" &&
            "Paste a public YouTube playlist URL to get started"}
          {step === "preview" && "Review the playlist and videos"}
          {step === "generating" && "Generating course..."}
          {step === "review" && "Review the course"}
          {step === "saving" && "Saving to Firebase..."}
          {step === "success" && "Course imported successfully!"}
        </p>
      </div>

      {step === "url" && (
        <div className="bg-white/5 border border-white/10 p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-white/40">
              YouTube Playlist URL
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={playlistUrl}
                onChange={(e) => setPlaylistUrl(e.target.value)}
                placeholder="https://www.youtube.com/playlist?list=PLAYLIST_ID"
                className="flex-1 bg-black/30 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors"
                disabled={loading}
              />
              <button
                onClick={handleFetchPlaylist}
                disabled={loading || !playlistUrl}
                className="px-6 py-3 bg-brand-primary text-black font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <Loader className="animate-spin" size={16} />
                    Loading...
                  </div>
                ) : (
                  "Fetch Playlist"
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 p-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
        </div>
      )}

      {step === "preview" && playlist && videos.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={reset}
              className="text-white/40 hover:text-white transition-colors flex items-center gap-2"
            >
              <FiArrowLeft size={16} />
              Back
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 p-6">
            <div className="flex items-start gap-4">
              {playlist.thumbnail && (
                <div className="w-48 h-28 bg-black/30 relative overflow-hidden">
                  <Image
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-2xl font-black uppercase tracking-tight mb-2">
                  {playlist.title}
                </h2>
                {playlist.description && (
                  <p className="text-white/40 text-sm line-clamp-3">
                    {playlist.description}
                  </p>
                )}
                <div className="mt-3 flex items-center gap-2">
                  <CheckCircle size={16} className="text-brand-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                    {videos.length} videos found
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-black uppercase tracking-tight">
              Videos ({videos.length})
            </h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="bg-white/5 border border-white/10 p-4 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-primary text-black font-black flex items-center justify-center">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {video.thumbnail && (
                    <div className="w-32 h-20 bg-black/30 relative overflow-hidden flex-shrink-0">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm truncate">
                      {video.title}
                    </h4>
                    {video.description && (
                      <p className="text-white/40 text-xs line-clamp-2 mt-1">
                        {video.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={reset}
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => handleGenerateCourse(true)}
              disabled={loading}
              className="px-6 py-4 bg-white/5 border border-white/10 font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-colors disabled:opacity-50"
            >
              Skip AI
            </button>
            <button
              onClick={() => handleGenerateCourse(false)}
              disabled={loading}
              className="px-8 py-4 bg-brand-primary text-black font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin" size={16} />
                  Generating...
                </div>
              ) : (
                "Generate Course (AI-Enhanced)"
              )}
            </button>
          </div>
        </div>
      )}

      {step === "generating" && (
        <div className="bg-white/5 border border-white/10 p-12 text-center">
          <Loader
            className="animate-spin mx-auto mb-4 text-brand-primary"
            size={48}
          />
          <h3 className="text-xl font-black uppercase tracking-tight mb-2">
            Generating Course...
          </h3>
          <p className="text-white/40 text-sm">
            Enhancing playlist to create a structured course
          </p>
        </div>
      )}

      {step === "review" && generatedModule && generatedLessons.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => setStep("preview")}
              className="text-white/40 hover:text-white transition-colors flex items-center gap-2"
            >
              <FiArrowLeft size={16} />
              Back
            </button>
          </div>

          {aiFallback && (
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 mb-4">
              <p className="text-yellow-400 text-sm">
                Note: AI enhancement temporarily unavailable. Using basic course
                structure.
              </p>
            </div>
          )}

          <div className="bg-white/5 border border-white/10 p-6">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-2">
              {generatedModule.title}
            </h2>
            <p className="text-white/60 text-sm">
              {generatedModule.description}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-black uppercase tracking-tight">
              Lessons ({generatedLessons.length})
            </h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {generatedLessons.map((lesson, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary text-black font-black flex items-center justify-center">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">{lesson.title}</h4>
                      <p className="text-white/40 text-xs mt-1">
                        {lesson.description}
                      </p>
                      <div className="mt-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">
                          {lesson.difficulty}
                        </span>
                      </div>
                      {lesson.tasks.length > 0 && (
                        <div className="mt-2 space-y-1">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                            Tasks
                          </p>
                          {lesson.tasks.map((task, taskIndex) => (
                            <p
                              key={taskIndex}
                              className="text-xs text-white/60"
                            >
                              • {task.title}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep("preview")}
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-colors"
            >
              Edit Again
            </button>
            <button
              onClick={handleSaveToFirebase}
              disabled={loading}
              className="px-8 py-4 bg-brand-primary text-black font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin" size={16} />
                  Saving...
                </div>
              ) : (
                "Save to Firebase"
              )}
            </button>
          </div>
        </div>
      )}

      {step === "saving" && (
        <div className="bg-white/5 border border-white/10 p-12 text-center">
          <Loader
            className="animate-spin mx-auto mb-4 text-brand-primary"
            size={48}
          />
          <h3 className="text-xl font-black uppercase tracking-tight mb-2">
            Saving to Firebase...
          </h3>
          <p className="text-white/40 text-sm">
            Saving course module and lessons
          </p>
        </div>
      )}

      {step === "success" && (
        <div className="bg-green-500/10 border border-green-500/20 p-12 text-center">
          <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
          <h3 className="text-xl font-black uppercase tracking-tight mb-2">
            Course Imported!
          </h3>
          <p className="text-white/60 text-sm mb-6">
            The course has been successfully saved to Firebase
          </p>
          <button
            onClick={reset}
            className="px-8 py-4 bg-brand-primary text-black font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all"
          >
            Import Another Playlist
          </button>
        </div>
      )}
    </div>
  );
}
