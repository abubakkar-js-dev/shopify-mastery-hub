"use client";

import { motion } from "motion/react";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function DashboardModulesPage() {
  usePageTitle("Modules");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
      <div className="relative w-64 h-px bg-white/5 overflow-hidden">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-brand-primary to-transparent"
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-white/20 uppercase font-black tracking-[0.4em] italic text-sm animate-pulse">
          Select a module from the roadmap to begin
        </h2>
        <p className="text-[10px] text-white/5 uppercase tracking-[0.2em] font-bold">
          Synchronizing encrypted roadmap data...
        </p>
      </div>
    </div>
  );
}
