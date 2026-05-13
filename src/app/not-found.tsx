"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowLeft, FiAlertCircle } from "react-icons/fi";
import { LuCircleDot } from "react-icons/lu";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("404 - Node Not Found");

  return (
    <div className="min-h-screen bg-brand-bg text-white flex flex-col overflow-x-hidden relative">
      {/* Dynamic Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(149,255,0,0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-10 py-20">
        <div className="max-w-2xl w-full">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-400 uppercase tracking-[0.2em]">
              ERROR: 404
            </span>
            <div className="h-px w-12 bg-white/10" />
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest flex items-center gap-2">
              <FiAlertCircle className="text-red-400" size={10} />
              Node Disconnected
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9] italic"
          >
            <span className="block">SYSTEM</span>
            <span className="block text-red-400">NODE</span>
            <span className="block text-white">NOT FOUND.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 font-medium leading-relaxed tracking-tight max-w-xl border-l-2 border-red-400/30 pl-6 mb-12"
          >
            The requested endpoint does not exist in our architecture. Return to
            the main terminal and re-sync your session.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/"
              className="px-10 py-5 bg-brand-primary text-black text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-[0_0_40px_rgba(149,255,0,0.2)] flex items-center justify-center gap-3"
            >
              <FiArrowLeft size={16} />
              Return to Terminal
            </Link>
            <Link
              href="/dashboard"
              className="px-10 py-5 bg-white/5 border border-white/10 text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
            >
              <LuCircleDot className="text-brand-primary" size={16} />
              Go to Dashboard
            </Link>
          </motion.div>

          {/* System Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                Mastery_v2.4_Stable
              </span>
            </div>
            <p className="text-[8px] text-white/20 uppercase tracking-[0.2em] font-black">
              Build: Global_IX_4.2.0
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
