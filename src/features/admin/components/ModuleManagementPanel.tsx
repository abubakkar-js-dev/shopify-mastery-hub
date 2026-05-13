"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  LuChevronDown as ChevronDown,
  LuChevronRight as ChevronRight,
  LuChevronUp as ChevronUp,
  LuDatabase as Database,
  LuPencilLine as Edit3,
  LuLoader as Loader,
  LuPlus as Plus,
  LuTrash2 as Trash2,
} from "react-icons/lu";
import { useAdminContent } from "../hooks/useAdminContent";
import { Module } from "../../../types";
import ModuleEditor from "./ModuleEditor";

export default function ModuleManagementPanel() {
  const { 
    modules, 
    seedData, 
    deleteModule, 
    updateModuleOrder, 
    saveModule 
  } = useAdminContent();
  
  const [isEditingModule, setIsEditingModule] = useState<Module | null>(null);
  const [isSeeding, setIsSeeding] = useState(false);
  const [collapsedMonths, setCollapsedMonths] = useState<Set<number>>(new Set());

  const handleSeed = async () => {
    setIsSeeding(true);
    await seedData();
    setIsSeeding(false);
  };

  const toggleMonth = (month: number) => {
    setCollapsedMonths((prev) => {
      const next = new Set(prev);
      if (next.has(month)) next.delete(month);
      else next.add(month);
      return next;
    });
  };

  const months = Array.from(new Set([...modules.map((m) => m.month), 1, 2, 3])).sort((a, b) => a - b);

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
            Module Architecture
          </h1>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold">
            Define the high-level roadmap and phase structure
          </p>
        </div>
        <div className="flex gap-4">
          {modules.length === 0 && (
            <button
              onClick={handleSeed}
              disabled={isSeeding}
              className="flex items-center gap-2 bg-white/5 border border-white/10 text-brand-primary px-6 py-3 font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all"
            >
              {isSeeding ? <Loader className="animate-spin" size={16} /> : <Database size={16} />}
              Initialize Roadmap
            </button>
          )}
          <button
            onClick={() => {
              const nextOrder = modules.length > 0 ? Math.max(...modules.map((m) => m.order)) + 1 : 1;
              setIsEditingModule({
                id: `module-${Date.now()}`,
                title: "",
                description: "",
                order: nextOrder,
                month: 1,
              });
            }}
            className="flex items-center gap-2 bg-brand-primary text-black px-6 py-3 font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform"
          >
            <Plus size={16} /> New Module
          </button>
        </div>
      </header>

      <div className="space-y-12">
        {months.map((month) => {
          const monthModules = modules.filter((m) => m.month === month).sort((a, b) => a.order - b.order);
          const isCollapsed = collapsedMonths.has(month);

          return (
            <div key={month} className="space-y-6">
              <button onClick={() => toggleMonth(month)} className="w-full flex items-center gap-4 text-left">
                <div className="flex items-center gap-2">
                  {isCollapsed ? <ChevronRight className="text-brand-primary" size={20} /> : <ChevronDown className="text-brand-primary" size={20} />}
                  <h2 className="text-2xl font-black uppercase tracking-tighter italic text-brand-primary">Month {month}</h2>
                </div>
                <div className="h-px flex-1 bg-brand-primary/20" />
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{monthModules.length} Modules</span>
              </button>

              <AnimatePresence initial={false}>
                {!isCollapsed && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    {monthModules.length === 0 ? (
                      <div className="p-8 border border-dashed border-white/5 text-center mt-6">
                        <p className="text-[10px] text-white/20 uppercase tracking-widest italic">No modules in month {month}.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {monthModules.map((mod, modIdx) => (
                          <div key={mod.id} className="bg-brand-surface border border-white/10 p-6 flex flex-col justify-between group">
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                <span className="font-mono text-[10px] text-brand-primary font-bold">M{mod.month} P{mod.order}</span>
                                <div className="flex items-center gap-1">
                                  <button onClick={() => setIsEditingModule(mod)} className="p-2 text-white/20 hover:text-white hover:bg-white/5 transition-all"><Edit3 size={14} /></button>
                                  <button onClick={() => deleteModule(mod.id)} className="p-2 text-white/20 hover:text-red-400 hover:bg-red-400/5 transition-all"><Trash2 size={14} /></button>
                                </div>
                              </div>
                              <h3 className="font-black uppercase tracking-tight text-lg mb-2">{mod.title}</h3>
                              <p className="text-[10px] text-white/40 uppercase tracking-widest line-clamp-2">{mod.description}</p>
                            </div>
                            
                            <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                              <div className="flex gap-2">
                                <button disabled={modIdx === 0} onClick={() => updateModuleOrder(mod.id, mod.order, monthModules[modIdx-1].id, monthModules[modIdx-1].order)} className="p-1 text-white/20 hover:text-brand-primary disabled:opacity-0 transition-colors">
                                  <ChevronUp size={16} />
                                </button>
                                <button disabled={modIdx === monthModules.length - 1} onClick={() => updateModuleOrder(mod.id, mod.order, monthModules[modIdx+1].id, monthModules[modIdx+1].order)} className="p-1 text-white/20 hover:text-brand-primary disabled:opacity-0 transition-colors">
                                  <ChevronDown size={16} />
                                </button>
                              </div>
                              <button 
                                onClick={() => {/* Navigate to lessons for this module? */}}
                                className="text-[9px] font-black uppercase tracking-widest text-brand-primary/60 hover:text-brand-primary transition-colors"
                              >
                                View Lessons
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {isEditingModule && (
          <ModuleEditor
            module={isEditingModule}
            onClose={() => setIsEditingModule(null)}
            onSave={async (mod) => {
              await saveModule(mod);
              setIsEditingModule(null);
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
