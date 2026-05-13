"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { LuChevronRight as ChevronRight, LuMenu as Menu, LuSparkles as Sparkles } from "react-icons/lu";
import { useAuth } from "../../../context/AuthContext";
import { useLearningData } from "../../../context/LearningDataContext";
import { usePathname } from "next/navigation";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { handleFirestoreError, OperationType } from "../../../lib/firestore-errors";
import { generatePersonalizedPath } from "../../../services/geminiService";

type DashboardHeaderProps = {
  setIsSidebarOpen: (open: boolean) => void;
};

export default function DashboardHeader({ setIsSidebarOpen }: DashboardHeaderProps) {
  const pathname = usePathname();
  const { user, profile } = useAuth();
  const { modules } = useLearningData();
  const [showPathGenerator, setShowPathGenerator] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Extract active module title from modules list based on pathname
  const activeModuleId = pathname.split("/modules/")[1]?.split("/")[0] || null;
  const activeModule = modules.find(m => m.id === activeModuleId);

  const handleGeneratePath = async (goals: string[]) => {
    if (!user || !profile) return;
    setIsGenerating(true);
    try {
      const pathValue = await generatePersonalizedPath(goals);
      if (pathValue) {
        await updateDoc(doc(db, "users", user.uid), {
          personalizedPath: {
            ...pathValue,
            goals,
            lastUpdated: new Date().toISOString(),
          },
        });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${user.uid}`);
    }
    setIsGenerating(false);
    setShowPathGenerator(false);
  };

  return (
    <>
      <header className="h-16 md:h-20 bg-brand-bg border-b border-white/10 px-4 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden text-white/60 hover:text-white transition-colors"
          >
            <Menu size={24} />
          </button>
          <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest hidden sm:block">
            Module
          </span>
          <ChevronRight size={14} className="text-white/20 hidden sm:block" />
          <span className="font-black text-xs md:text-sm uppercase tracking-tight truncate max-w-[200px] sm:max-w-none">
            {activeModule?.title || "Operational Hub"}
          </span>
        </div>

        <button
          onClick={() => setShowPathGenerator(true)}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-primary border border-brand-primary/20 px-3 md:px-4 py-2 hover:bg-brand-primary/10 transition-all"
        >
          <Sparkles size={14} />
          <span className="hidden sm:inline">AI Training Path</span>
        </button>
      </header>

      {/* AI Path Modal */}
      <AnimatePresence>
        {showPathGenerator && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-brand-surface border border-white/10 rounded-none shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="p-6 md:p-10 border-b border-white/10 bg-brand-primary text-black">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-6 md:w-8 h-6 md:h-8" />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                    AI Training Path
                  </h2>
                </div>
                <p className="text-black/60 text-xs font-bold uppercase tracking-widest leading-relaxed">
                  Define your objective. Our AI will synthesize a deterministic
                  learning cycle based on your technical goals.
                </p>
              </div>
              <div className="p-6 md:p-10">
                <textarea
                  placeholder="e.g., I want to build a bespoke Shopify theme using Liquid and later transition into full-stack app engineering with Remix."
                  className="w-full h-32 md:h-40 p-4 md:p-6 bg-brand-bg rounded-none border border-white/10 focus:border-brand-primary outline-none transition-all resize-none text-sm text-white/80 placeholder:text-white/20 uppercase tracking-tight font-medium"
                  id="goals-input"
                />
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button
                    onClick={() => setShowPathGenerator(false)}
                    className="flex-1 secondary-btn py-3 md:py-4"
                  >
                    Abort
                  </button>
                  <button
                    disabled={isGenerating}
                    onClick={() => {
                      const input = (
                        document.getElementById(
                          "goals-input",
                        ) as HTMLTextAreaElement
                      ).value;
                      if (input) handleGeneratePath([input]);
                    }}
                    className="flex-1 shopify-btn py-3 md:py-4 flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <div className="w-4 md:w-5 h-4 md:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        <Sparkles size={16} />
                        Synthesize Path
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
