"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  LuLoader as Loader,
  LuFileCode as RiFileLine,
  LuSave as Save,
  LuX as X,
} from "react-icons/lu";
import { useAdmin } from "../../../context/AdminContext";
import { cn } from "../../../lib/utils";
import { adminService } from "../services/adminService";

export default function SettingsPanel() {
  const { admins } = useAdmin();
  const [isSeeding, setIsSeeding] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importJson, setImportJson] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleSeed = async () => {
    setIsSeeding(true);
    await adminService.seedData();
    setIsSeeding(false);
  };

  const handleImport = async () => {
    setIsSaving(true);
    const success = await adminService.importJson(importJson);
    if (success) {
      setIsImportModalOpen(false);
      setImportJson("");
    }
    setIsSaving(false);
  };

  const handleResetProgress = async () => {
    setIsResetting(true);
    await adminService.resetAllUserProgress();
    setIsResetting(false);
  };

  const getExampleJson = () => {
    return JSON.stringify(
      {
        modules: [
          {
            id: "week-1",
            title: "Week 1: Example Module",
            description: "Example module description",
            order: 1,
            month: 1,
            lessons: [
              {
                id: "day-1",
                moduleId: "week-1",
                title: "Day 1: Example Lesson",
                description: "Example lesson description",
                order: 1,
                difficulty: "Beginner",
                videos: [],
                tasks: [],
              },
            ],
          },
        ],
      },
      null,
      2,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-10"
    >
      <header>
        <h1 className="text-4xl font-black uppercase tracking-tighter italic mb-4">
          Platform Configuration
        </h1>
        <p className="text-white/40 uppercase tracking-widest text-xs font-bold">
          Global variables and system security
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-8 bg-brand-surface border border-white/10">
          <h3 className="section-label mb-8">Course Policy</h3>
          <div className="space-y-6">
            <ToggleSetting
              label="Strict Path Progression"
              description="Force users to complete previous sessions before unlocking."
              active
            />
            <ToggleSetting
              label="AI Synthesizer Access"
              description="Allow users to generate personalized training paths."
              active
            />
            <ToggleSetting
              label="Legacy Content Mode"
              description="Disable modern Shopify storefront engine content."
            />
          </div>
        </div>

        <div className="p-8 bg-brand-surface border border-white/10">
          <h3 className="section-label mb-8">Admin Access</h3>
          <div className="space-y-4">
            {admins.length > 0 ? (
              admins.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-black/40 border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {a.email}
                    </span>
                  </div>
                  <span className="text-[8px] font-black uppercase bg-brand-primary text-black px-1.5 py-0.5">
                    Primary
                  </span>
                </div>
              ))
            ) : (
              <div className="p-4 bg-black/40 border border-white/5 text-center">
                <p className="text-[10px] text-white/40 uppercase tracking-widest">
                  Registering admin records...
                </p>
              </div>
            )}
            <button
              onClick={() =>
                alert(
                  "To add more admins, they must sign in once, or you can manually add their UID to the 'admins' collection.",
                )
              }
              className="w-full py-4 border border-dashed border-white/10 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-brand-primary hover:border-brand-primary/40 transition-all font-mono"
            >
              + SYNC NEW AUTHORITIES
            </button>
          </div>
        </div>
      </div>

      <div className="p-8 bg-brand-surface border border-white/10">
        <h3 className="section-label mb-8">System Maintenance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-black/40 border border-white/5">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">
              Database Initialization
            </h4>
            <p className="text-xs text-white/60 mb-6 leading-relaxed">
              Population of the Firestore database with the underlying roadmap
              architecture.
            </p>
            <button
              onClick={handleSeed}
              disabled={isSeeding}
              className="w-full py-4 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              {isSeeding ? "Synchronizing..." : "Seed Initial Content"}
            </button>
          </div>

          <div className="p-6 bg-black/40 border border-white/5">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">
              Content Portability
            </h4>
            <p className="text-xs text-white/60 mb-6 leading-relaxed">
              Import course modules and lessons from a structured JSON file.
            </p>
            <button
              onClick={() => setIsImportModalOpen(true)}
              className="w-full py-4 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <RiFileLine size={16} /> Import from JSON
            </button>
          </div>

          <div className="p-6 bg-black/40 border border-red-500/30">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-4">
              Reset User Progress
            </h4>
            <p className="text-xs text-white/60 mb-6 leading-relaxed">
              Reset ALL user progress (completed lessons, videos, and tasks).
              Start fresh from day one.
            </p>
            <button
              onClick={handleResetProgress}
              disabled={isResetting}
              className="w-full py-4 bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-black uppercase tracking-widest hover:bg-red-500/20 transition-all flex items-center justify-center gap-2"
            >
              {isResetting ? "Resetting..." : "Reset All Progress"}
            </button>
          </div>
        </div>
      </div>

      {/* Import Modal */}
      <AnimatePresence>
        {isImportModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80"
            onClick={() => setIsImportModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0F0F0F] border border-white/10 p-8 w-full max-w-4xl max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black uppercase tracking-tighter italic text-brand-primary">
                  Import Modules from JSON
                </h3>
                <button
                  onClick={() => setIsImportModalOpen(false)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-2">
                    Paste your JSON data below:
                  </label>
                  <textarea
                    value={importJson}
                    onChange={(e) => setImportJson(e.target.value)}
                    placeholder='{"modules": [...]}'
                    className="w-full bg-black/40 border border-white/10 px-4 py-4 text-[10px] text-white/70 outline-none focus:border-brand-primary transition-all resize-none h-64 font-mono"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-2">
                    Example Format (click to copy):
                  </label>
                  <textarea
                    readOnly
                    value={getExampleJson()}
                    onClick={async (e) => {
                      e.currentTarget.select();
                      try {
                        await navigator.clipboard.writeText(getExampleJson());
                        toast.success("Example copied to clipboard!");
                      } catch {
                        toast.error("Failed to copy");
                      }
                    }}
                    className="w-full bg-black/20 border border-white/5 px-4 py-4 text-[9px] text-white/50 outline-none resize-none h-48 font-mono cursor-pointer"
                  />
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setIsImportModalOpen(false)}
                    className="px-6 py-3 bg-white/5 border border-white/10 text-white/60 font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleImport}
                    disabled={isSaving || !importJson.trim()}
                    className="px-6 py-3 bg-brand-primary text-black font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:scale-105 transition-all disabled:opacity-50"
                  >
                    {isSaving ? (
                      <>
                        <Loader className="animate-spin" size={16} />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save size={16} />
                        Import & Save
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ToggleSetting({
  label,
  description,
  active = false,
}: {
  label: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between group">
      <div>
        <p className="text-xs font-black uppercase tracking-tight group-hover:text-brand-primary transition-colors">
          {label}
        </p>
        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
          {description}
        </p>
      </div>
      <div
        className={cn(
          "w-10 h-5 p-1 transition-colors",
          active ? "bg-brand-primary" : "bg-white/10",
        )}
      >
        <div
          className={cn(
            "w-3 h-3 transition-transform",
            active ? "bg-black translate-x-5" : "bg-white/40",
          )}
        />
      </div>
    </div>
  );
}
