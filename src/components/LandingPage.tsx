'use client';
import { motion } from 'motion/react';

export default function LandingPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="min-h-screen bg-brand-bg text-white flex flex-col overflow-x-hidden">
      <nav className="max-w-7xl mx-auto w-full px-4 md:px-10 py-6 md:py-10 flex justify-between items-center bg-[#0A0A0A]">
        <div className="flex items-baseline gap-2">
          <span className="text-xl md:text-3xl font-black tracking-tighter uppercase">
            Mastery
          </span>
          <span className="text-[8px] md:text-xs font-bold text-brand-primary tracking-[0.2em] uppercase">
            Shopify Edition
          </span>
        </div>
        <button
          onClick={onLogin}
          className="shopify-btn text-xs md:text-base px-4 md:px-6 py-2 md:py-3"
        >
          Access Hub
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <span className="section-label inline-block mb-6 md:mb-10">
            All-Inclusive Training Environment
          </span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-12">
            UNCOMPROMISED
            <br />
            <span className="text-brand-primary">SHOPIFY</span> MASTERY.
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20 items-start md:items-end">
            <p className="text-base md:text-xl text-white/40 font-medium leading-tight tracking-tight uppercase max-w-full md:max-w-lg">
              A specialized curriculum covering setup, theme customization, CRO,
              liquid development, and enterprise app engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <button
                onClick={onLogin}
                className="shopify-btn text-sm md:text-lg px-6 md:px-10 py-4 md:py-5 h-auto w-full sm:w-auto"
              >
                Sign In With Google
              </button>
              <button className="secondary-btn text-sm md:text-lg px-6 md:px-10 py-4 md:py-5 h-auto w-full sm:w-auto">
                Path Overview
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10"
        >
          {[
            { tag: "BUILD", title: "Theme Dev", desc: "Master Liquid & Storefront APIs" },
            { tag: "ENGINEER", title: "App Systems", desc: "Remix, Node.js, & Polaris Auth" },
            { tag: "DYNAMIC", title: "AI Paths", desc: "Deterministic Learning Cycles" },
          ].map((feature, i) => (
            <div key={i} className="p-6 md:p-10 bg-brand-bg group hover:bg-white/5 transition-colors cursor-crosshair">
              <span className="text-[10px] font-mono text-brand-primary mb-4 md:mb-6 block tracking-widest">{feature.tag}</span>
              <h3 className="text-xl md:text-2xl font-black uppercase mb-3 md:mb-4 tracking-tighter italic">{feature.title}</h3>
              <p className="text-xs md:text-sm text-white/40 uppercase tracking-widest font-bold leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
