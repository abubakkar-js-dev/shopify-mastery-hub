import { FiCheckCircle as CheckCircle } from "react-icons/fi";
import { cn } from "../../../lib/utils";
import { Task } from "../../../types";

interface LessonTaskListProps {
  tasks: Task[];
  completedTasks: string[];
  onToggleTask: (id: string) => void;
  progressPercent: number;
}

export function LessonTaskList({
  tasks,
  completedTasks,
  onToggleTask,
  progressPercent,
}: LessonTaskListProps) {
  return (
    <div className="mb-8 md:mb-12">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-4 md:mb-6 font-mono text-left">
        Internal Task Checklist — {progressPercent}%
      </h3>
      <div className="grid gap-px bg-white/10 border border-white/10">
        {tasks.map((task) => (
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
              {completedTasks.includes(task.id) && <CheckCircle size={14} />}
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
  );
}
