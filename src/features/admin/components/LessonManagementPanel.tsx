"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LuChevronDown as ChevronDown,
  LuChevronUp as ChevronUp,
  LuPencilLine as Edit3,
  LuFilter as Filter,
  LuPlus as Plus,
  LuSearch as Search,
  LuTrash2 as Trash2,
} from "react-icons/lu";
import { cn } from "../../../lib/utils";
import { Lesson } from "../../../types";
import { useAdminContent } from "../hooks/useAdminContent";
import LessonEditor from "./LessonEditor";

export default function LessonManagementPanel() {
  const searchParams = useSearchParams();
  const { modules, lessons, deleteLesson, updateLessonOrder, saveLesson } =
    useAdminContent();

  const [isEditingLesson, setIsEditingLesson] = useState<Lesson | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<string>(
    modules[0]?.id || "",
  );
  const [searchQuery, setSearchQuery] = useState("");

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const moduleIdFromUrl = searchParams.get("moduleId");
    if (moduleIdFromUrl) {
      setSelectedModuleId(moduleIdFromUrl);
    } else if (modules.length > 0 && !selectedModuleId) {
      setSelectedModuleId(modules[0].id);
    }
  }, [searchParams, modules, selectedModuleId]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const filteredLessons = lessons
    .filter((l) => !selectedModuleId || l.moduleId === selectedModuleId)
    .filter((l) => l.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => a.order - b.order);

  const currentModule = modules.find((m) => m.id === selectedModuleId);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-10"
    >
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter italic mb-4">
            Session Synthesis
          </h1>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold">
            Manage granular lesson content, video assets, and task lists
          </p>
        </div>
        <button
          onClick={() => {
            const nextOrder =
              filteredLessons.length > 0
                ? Math.max(...filteredLessons.map((l) => l.order)) + 1
                : 1;
            setIsEditingLesson({
              id: `lesson-${Date.now()}`,
              moduleId: selectedModuleId,
              title: "",
              videos: [],
              description: "",
              order: nextOrder,
              difficulty: "Beginner",
              tasks: [],
            });
          }}
          className="flex items-center gap-2 bg-brand-primary text-black px-6 py-3 font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform"
        >
          <Plus size={16} /> New Lesson
        </button>
      </header>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 space-y-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20"
              size={14}
            />
            <input
              type="text"
              placeholder="Search lessons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black border border-white/10 p-3 pl-10 text-[10px] uppercase font-bold focus:border-brand-primary outline-none"
            />
          </div>

          <div className="bg-brand-surface border border-white/10 p-4">
            <div className="flex items-center gap-2 mb-4 text-white/40">
              <Filter size={12} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Filter by Module
              </span>
            </div>
            <div className="space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
              <button
                onClick={() => setSelectedModuleId("")}
                className={cn(
                  "w-full text-left p-3 text-[10px] font-black uppercase transition-all border",
                  selectedModuleId === ""
                    ? "bg-brand-primary/10 border-brand-primary text-brand-primary"
                    : "bg-white/5 border-transparent text-white/40 hover:bg-white/10",
                )}
              >
                All Modules
              </button>
              {modules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={cn(
                    "w-full text-left p-3 text-[10px] font-black uppercase transition-all border",
                    selectedModuleId === mod.id
                      ? "bg-brand-primary/10 border-brand-primary text-brand-primary"
                      : "bg-white/5 border-transparent text-white/40 hover:bg-white/10",
                  )}
                >
                  {mod.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between bg-white/2 p-4 border border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-brand-primary font-bold">
                {selectedModuleId
                  ? `Module: ${currentModule?.title}`
                  : "All Modules"}
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest">
                {filteredLessons.length} Sessions Found
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {filteredLessons.map((lesson, lessonIdx) => (
              <div
                key={lesson.id}
                className="flex items-center justify-between p-4 bg-brand-surface border border-white/10 hover:border-brand-primary/20 transition-colors group/lesson"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <button
                      disabled={lessonIdx === 0}
                      onClick={() =>
                        updateLessonOrder(
                          lesson.moduleId,
                          lesson.id,
                          lesson.order,
                          filteredLessons[lessonIdx - 1].id,
                          filteredLessons[lessonIdx - 1].order,
                        )
                      }
                      className="text-white/10 hover:text-brand-primary disabled:opacity-0 transition-colors"
                    >
                      <ChevronUp size={12} />
                    </button>
                    <button
                      disabled={lessonIdx === filteredLessons.length - 1}
                      onClick={() =>
                        updateLessonOrder(
                          lesson.moduleId,
                          lesson.id,
                          lesson.order,
                          filteredLessons[lessonIdx + 1].id,
                          filteredLessons[lessonIdx + 1].order,
                        )
                      }
                      className="text-white/10 hover:text-brand-primary disabled:opacity-0 transition-colors"
                    >
                      <ChevronDown size={12} />
                    </button>
                  </div>
                  {lesson.videos[0] ? (
                    <Image
                      src={`https://img.youtube.com/vi/${lesson.videos[0].youtubeId}/mqdefault.jpg`}
                      alt="thumbnail"
                      width={80}
                      height={48}
                      className="w-20 h-12 object-cover border border-white/10"
                    />
                  ) : (
                    <div className="w-20 h-12 bg-white/5 flex items-center justify-center text-[8px] uppercase font-black text-white/20 border border-white/10 border-dashed">
                      No Video
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight">
                      {lesson.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span
                        className={cn(
                          "text-[8px] font-black px-1.5 py-0.5 border uppercase",
                          lesson.difficulty === "Beginner"
                            ? "border-blue-500/40 text-blue-400"
                            : lesson.difficulty === "Intermediate"
                              ? "border-orange-500/40 text-orange-400"
                              : "border-red-500/40 text-red-400",
                        )}
                      >
                        {lesson.difficulty}
                      </span>
                      <span className="text-[9px] text-white/20 uppercase tracking-widest">
                        {lesson.videos.length} Videos •{" "}
                        {lesson.tasks?.length || 0} Tasks
                      </span>
                      <span className="text-[9px] text-white/20 uppercase tracking-widest">
                        {modules.find((m) => m.id === lesson.moduleId)?.title}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsEditingLesson(lesson)}
                    className="p-2 text-white/20 hover:text-white transition-colors"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    onClick={() => deleteLesson(lesson.moduleId, lesson.id)}
                    className="p-2 text-white/20 hover:text-red-400 transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}

            {filteredLessons.length === 0 && (
              <div className="p-12 border border-dashed border-white/5 text-center">
                <p className="text-[10px] text-white/20 uppercase tracking-widest italic">
                  No sessions found in this view.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isEditingLesson && (
          <LessonEditor
            lesson={isEditingLesson}
            onClose={() => setIsEditingLesson(null)}
            onSave={async (lesson) => {
              await saveLesson(lesson);
              setIsEditingLesson(null);
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
