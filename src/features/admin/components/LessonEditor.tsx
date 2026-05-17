"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  LuChevronDown as ChevronDown,
  LuChevronUp as ChevronUp,
  LuFileText as FileText,
  LuLink as LinkIcon,
  LuTrash2 as Trash2,
  LuX as X,
  LuYoutube as Youtube,
} from "react-icons/lu";
import { Lesson, Task, Video } from "../../../types";
import { InputGroup } from "./ModuleEditor";

type LessonEditorProps = {
  lesson: Lesson;
  onClose: () => void;
  onSave: (l: Lesson) => void;
};

export default function LessonEditor({
  lesson,
  onClose,
  onSave,
}: LessonEditorProps) {
  const [data, setData] = useState<Lesson>(lesson);
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newResource, setNewResource] = useState({ title: "", url: "" });

  const addVideo = () => {
    const match = newVideoUrl.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]{11})/,
    );
    const youtubeId = match ? match[1] : "";
    if (youtubeId) {
      const newVideo: Video = {
        id: `vid-${Date.now()}`,
        title: "New Video Segment",
        youtubeId,
        duration: "00:00",
      };
      setData({ ...data, videos: [...data.videos, newVideo] });
      setNewVideoUrl("");
    }
  };

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: `task-${Date.now()}`,
        title: newTaskTitle.trim(),
      };
      setData({ ...data, tasks: [...data.tasks, newTask] });
      setNewTaskTitle("");
    }
  };

  const addResource = () => {
    if (newResource.title && newResource.url) {
      const newRes = {
        id: `res-${Date.now()}`,
        title: newResource.title,
        url: newResource.url,
        type: "blog", // Default type
      }
      setData({
        ...data,
        resources: [...(data.resources || []), { ...newRes }],
      });
      setNewResource({ title: "", url: "" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-70 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <div className="bg-[#111] border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-8 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-1">
              Lesson Synthesis
            </h2>
            <p className="text-xs text-white/40 uppercase tracking-widest">
              Construct tactical session data
            </p>
          </div>
          <button onClick={onClose} className="text-white/20 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="p-8 space-y-8 overflow-y-auto flex-1 custom-scrollbar">
          <InputGroup
            label="Title"
            value={data.title}
            onChange={(v) => setData({ ...data, title: v })}
          />

          <div className="grid grid-cols-2 gap-6">
            <InputGroup
              label="Order"
              type="number"
              value={data.order.toString()}
              onChange={(v) => setData({ ...data, order: parseInt(v) })}
            />
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">
                Difficulty
              </label>
              <select
                value={data.difficulty}
                onChange={(e) =>
                  setData({
                    ...data,
                    difficulty: e.target.value as
                      | "Beginner"
                      | "Intermediate"
                      | "Advanced",
                  })
                }
                className="w-full bg-black border border-white/10 p-4 text-sm uppercase font-bold focus:border-brand-primary outline-none"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 block">
              Abstract
            </label>
            <textarea
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              className="w-full h-24 bg-black border border-white/10 p-4 text-sm uppercase tracking-tight focus:border-brand-primary outline-none resize-none"
            />
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 block">
              Video Assets
            </label>
            <div className="space-y-3 mb-4">
              {data.videos.map((v, i) => (
                <div
                  key={v.id}
                  className="p-4 bg-black border border-white/5 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <button
                        disabled={i === 0}
                        onClick={() => {
                          const vids = [...data.videos];
                          const temp = vids[i - 1];
                          vids[i - 1] = vids[i];
                          vids[i] = temp;
                          setData({ ...data, videos: vids });
                        }}
                        className="text-white/20 hover:text-brand-primary disabled:opacity-0 transition-colors"
                      >
                        <ChevronUp size={12} />
                      </button>
                      <button
                        disabled={i === data.videos.length - 1}
                        onClick={() => {
                          const vids = [...data.videos];
                          const temp = vids[i + 1];
                          vids[i + 1] = vids[i];
                          vids[i] = temp;
                          setData({ ...data, videos: vids });
                        }}
                        className="text-white/20 hover:text-brand-primary disabled:opacity-0 transition-colors"
                      >
                        <ChevronDown size={12} />
                      </button>
                    </div>
                    <Youtube className="text-red-500 shrink-0" size={18} />
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-3">
                      <input
                        className="bg-transparent text-xs uppercase font-bold outline-none border-b border-white/10 focus:border-brand-primary"
                        value={v.title}
                        placeholder="Video Title"
                        onChange={(e) => {
                          const vids = [...data.videos];
                          vids[i].title = e.target.value;
                          setData({ ...data, videos: vids });
                        }}
                      />
                      <input
                        className="bg-transparent text-[10px] font-mono text-white/40 outline-none border-b border-white/10 focus:border-brand-primary"
                        value={v.duration}
                        placeholder="Duration (00:00)"
                        onChange={(e) => {
                          const vids = [...data.videos];
                          vids[i].duration = e.target.value;
                          setData({ ...data, videos: vids });
                        }}
                      />
                      <input
                        className="bg-transparent text-[10px] font-mono text-white/40 outline-none border-b border-white/10 focus:border-brand-primary"
                        value={v.youtubeId}
                        placeholder="YouTube ID"
                        onChange={(e) => {
                          const vids = [...data.videos];
                          vids[i].youtubeId = e.target.value;
                          setData({ ...data, videos: vids });
                        }}
                      />
                      <div className="text-[10px] font-mono text-white/30 flex items-center gap-1">
                        Edit ID &amp; Title
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setData({
                          ...data,
                          videos: data.videos.filter((vid) => vid.id !== v.id),
                        })
                      }
                      className="shrink-0 p-1"
                    >
                      <Trash2
                        size={14}
                        className="text-white/20 hover:text-red-400 transition-colors"
                      />
                    </button>
                  </div>
                  <div className="pl-9">
                    <input
                      className="w-full bg-transparent text-[10px] font-mono text-white/30 outline-none border-b border-white/10 focus:border-brand-primary"
                      value={v.embedUrl || ""}
                      placeholder="Custom Embed URL (optional, overrides YouTube)"
                      onChange={(e) => {
                        const vids = [...data.videos];
                        vids[i].embedUrl = e.target.value;
                        setData({ ...data, videos: vids });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                placeholder="YOUTUBE URL OR ID"
                className="flex-1 bg-white/5 border border-white/10 p-3 text-[10px] uppercase font-bold focus:border-brand-primary outline-none"
                value={newVideoUrl}
                onChange={(e) => setNewVideoUrl(e.target.value)}
              />
              <button
                onClick={addVideo}
                className="px-4 bg-brand-primary text-black text-[10px] font-black uppercase transition-all"
              >
                Attach
              </button>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 block">
              Checklist Tasks
            </label>
            <div className="space-y-2 mb-4">
              {data.tasks.map((task, i) => (
                <div
                  key={task.id}
                  className="flex items-center gap-4 p-3 bg-black border border-white/5"
                >
                  <FileText className="text-brand-primary" size={16} />
                  <input
                    className="flex-1 bg-transparent text-xs uppercase font-bold outline-none"
                    value={task.title}
                    onChange={(e) => {
                      const tasks = [...data.tasks];
                      tasks[i].title = e.target.value;
                      setData({ ...data, tasks });
                    }}
                  />
                  <button
                    onClick={() =>
                      setData({
                        ...data,
                        tasks: data.tasks.filter((t) => t.id !== task.id),
                      })
                    }
                  >
                    <Trash2
                      size={12}
                      className="text-white/20 hover:text-red-400"
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                placeholder="TASK TITLE"
                className="flex-1 bg-white/5 border border-white/10 p-3 text-[10px] uppercase font-bold focus:border-brand-primary outline-none"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <button
                onClick={addTask}
                className="px-4 bg-brand-primary text-black text-[10px] font-black uppercase transition-all"
              >
                Add
              </button>
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4 block">
              Technical Resources
            </label>
            <div className="space-y-2 mb-4">
              {data.resources?.map((res, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 bg-black border border-white/5"
                >
                  <LinkIcon className="text-blue-400" size={16} />
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <input
                      className="bg-transparent text-xs uppercase font-bold outline-none border-b border-white/10 focus:border-brand-primary"
                      value={res.title}
                      onChange={(e) => {
                        const resources = [...(data.resources || [])];
                        resources[i] = { ...resources[i], title: e.target.value };
                        setData({ ...data, resources });
                      }}
                    />
                    <input
                      className="bg-transparent text-[10px] font-mono text-white/40 outline-none border-b border-white/10 focus:border-brand-primary"
                      value={res.url}
                      onChange={(e) => {
                        const resources = [...(data.resources || [])];
                        resources[i] = { ...resources[i], url: e.target.value };
                        setData({ ...data, resources });
                      }}
                    />
                  </div>
                  <button
                    onClick={() =>
                      setData({
                        ...data,
                        resources: data.resources?.filter(
                          (_, index) => index !== i,
                        ),
                      })
                    }
                  >
                    <Trash2
                      size={12}
                      className="text-white/20 hover:text-red-400"
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input
                placeholder="RESOURCE LABEL"
                className="bg-white/5 border border-white/10 p-3 text-[10px] uppercase font-bold focus:border-brand-primary outline-none"
                value={newResource.title}
                onChange={(e) =>
                  setNewResource({ ...newResource, title: e.target.value })
                }
              />
              <input
                placeholder="RESOURCE URL"
                className="bg-white/5 border border-white/10 p-3 text-[10px] font-mono focus:border-brand-primary outline-none"
                value={newResource.url}
                onChange={(e) =>
                  setNewResource({ ...newResource, url: e.target.value })
                }
              />
            </div>
            <button
              onClick={addResource}
              className="w-full py-3 bg-white/5 border border-white/10 text-[10px] font-black uppercase hover:bg-white/10 transition-all"
            >
              Attach Resource
            </button>
          </div>
        </div>
        <div className="p-8 bg-white/2 border-t border-white/10 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-4 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(data)}
            className="flex-1 py-4 bg-brand-primary text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Save Session
          </button>
        </div>
      </div>
    </motion.div>
  );
}
