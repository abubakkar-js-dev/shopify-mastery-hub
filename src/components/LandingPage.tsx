'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FiArrowRight, FiShield, FiZap, FiTarget, FiBox } from 'react-icons/fi';
import { LuCircleDot } from 'react-icons/lu';
import { cn } from '../lib/utils';
import { usePageTitle } from '../hooks/usePageTitle';

export default function LandingPage({ onLogin }: { onLogin: () => void }) {
  usePageTitle("Uncompromised Learning");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-bg text-white flex flex-col overflow-x-hidden relative">
      {/* Dynamic Background System */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(149,255,0,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />

        {/* Animated Grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-white/5 bg-[#0A0A0A]/80">
        <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 md:h-24 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-brand-primary flex items-center justify-center text-black font-black italic">M</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase leading-none">Mastery</span>
              <span className="text-[8px] font-bold text-brand-primary tracking-[0.3em] uppercase">Shopify Edition</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {['Curriculum', 'Ecosystem', 'Pricing'].map((item, i) => (
              <motion.button 
                key={item} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-brand-primary transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLogin}
            className="px-6 py-3 bg-white/5 border border-white/10 hover:border-brand-primary/50 text-[10px] font-black uppercase tracking-widest transition-all group flex items-center gap-3"
          >
            Terminal Access
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col">
        <section className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-20">
          <motion.div style={{ opacity, scale }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8 md:mb-12"
            >
              <span className="px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">
                Status: Operational
              </span>
              <div className="h-px w-12 bg-white/10" />
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest flex items-center gap-2">
                <LuCircleDot className="text-brand-primary animate-pulse" size={10} />
                Global Node Active
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 md:mb-12 leading-[0.9] italic">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="block"
              >ENGINEER THE</motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block text-brand-primary"
              >NEXT ERA</motion.span> 
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-white"
              >OF COMMERCE.</motion.span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-8"
              >
                <p className="text-lg md:text-2xl text-white/60 font-medium leading-relaxed tracking-tight max-w-xl border-l-2 border-brand-primary/30 pl-6">
                  Not just a course. A high-performance development environment for elite Shopify engineers. Master Liquid, Headless, and App Architecture.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={onLogin}
                    className="px-10 py-5 bg-brand-primary text-black text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-[0_0_40px_rgba(149,255,0,0.2)]"
                  >
                    Initialize Career Sync
                  </button>
                  <button className="px-10 py-5 bg-white/5 border border-white/10 text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-colors">
                    View Blueprint
                  </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { label: 'Uptime', val: '99.9%', icon: FiShield },
                  { label: 'Latency', val: '14ms', icon: FiZap },
                  { label: 'Throughput', val: '5GB/s', icon: FiBox },
                  { label: 'Precision', val: '100%', icon: FiTarget },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 group hover:border-brand-primary/30 transition-all">
                    <stat.icon className="text-brand-primary mb-4" size={20} />
                    <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">{stat.label}</p>
                    <p className="text-2xl font-black italic">{stat.val}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Feature Grid */}
        <section className="bg-[#0A0A0A] border-y border-white/5 py-24 md:py-40 relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full -mr-64 -mt-64" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-10">
              <div className="max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6 block w-fit"
                >
                  Core Architecture
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-none"
                >
                  Deterministic <br />
                  <span className="text-brand-primary">Learning</span> Cycles.
                </motion.h2>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm md:text-base text-white/30 max-w-sm leading-relaxed uppercase tracking-widest font-bold border-l border-white/10 pl-8"
              >
                Every unit is engineered to deliver immediate production-grade output. No fluff, just architecture.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tag: "01 // BUILD",
                  title: "Theme Engineering",
                  desc: "Go beyond settings. Learn Liquid, JSON templates, and the Theme CLI like a founding engineer.",
                  color: "rgba(149, 255, 0, 0.15)",
                  borderColor: "hover:border-brand-primary/40"
                },
                {
                  tag: "02 // SCALE",
                  title: "App Infrastructure",
                  desc: "Build Shopify apps that handle enterprise load using Node.js, Remix, and the App Bridge.",
                  color: "rgba(59, 130, 246, 0.15)",
                  borderColor: "hover:border-blue-500/40"
                },
                {
                  tag: "03 // OPTIMIZE",
                  title: "CRO & Performance",
                  desc: "Master the psychology of high-conversion design and technical Lighthouse optimization.",
                  color: "rgba(168, 85, 247, 0.15)",
                  borderColor: "hover:border-purple-500/40"
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ y: -8 }}
                  className={cn(
                    "p-10 md:p-14 relative overflow-hidden group cursor-crosshair bg-white/[0.02] border border-white/5 transition-all duration-500",
                    feature.borderColor
                  )}
                >
                  {/* Glassmorphic Background Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${feature.color}, transparent 70%)` }}
                  />
                  
                  <span className="text-[10px] font-mono text-brand-primary mb-16 block tracking-[0.4em] font-black relative z-10">{feature.tag}</span>
                  <h3 className="text-3xl md:text-4xl font-black uppercase mb-8 tracking-tighter italic relative z-10 leading-none group-hover:translate-x-2 transition-transform duration-500">{feature.title}</h3>
                  <p className="text-sm text-white/30 uppercase tracking-[0.15em] font-bold leading-loose relative z-10">{feature.desc}</p>

                  <div className="mt-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 relative z-10 flex items-center gap-3 text-brand-primary text-[10px] font-black uppercase tracking-widest">
                    Initialize Module <FiArrowRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-48 md:py-72 text-center relative overflow-hidden">
          {/* Concentric Sonar Rings - More subtle */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute w-64 h-64 border border-brand-primary/5 rounded-full"
              />
            ))}
            <div className="absolute inset-0 bg-brand-primary/[0.03] blur-[140px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <motion.span 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary mb-8 block"
            >
              Finalize System Integration
            </motion.span>
            <h2 className="text-6xl md:text-[11rem] font-black uppercase tracking-tighter italic mb-16 md:mb-24 leading-none">
              READY TO <br /> <span className="text-brand-primary">SYNC?</span>
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onLogin}
                className="px-20 py-10 bg-brand-primary text-black text-sm font-black uppercase tracking-[0.5em] shadow-[0_0_50px_rgba(149,255,0,0.15)] hover:shadow-[0_0_70px_rgba(149,255,0,0.25)] transition-all"
              >
                Sync Terminal
              </motion.button>
              
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-2 text-brand-primary">
                   <motion.div 
                     animate={{ opacity: [0.4, 1, 0.4] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="w-2 h-2 rounded-full bg-current shadow-[0_0_10px_rgba(149,255,0,0.5)]" 
                   />
                   <span className="text-xs font-mono uppercase tracking-widest">Mastery_v2.4_Stable</span>
                </div>
                <p className="text-[10px] text-white/20 uppercase font-black tracking-widest">
                  Authentication Layer: RSA-4096 / AES-GCM
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#0A0A0A] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Brand Cluster */}
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-brand-primary flex items-center justify-center text-black font-black italic shadow-[0_0_20px_rgba(149,255,0,0.2)]">M</div>
              <div className="flex flex-col">
                <span className="text-sm font-black uppercase tracking-widest text-white">Mastery Hub</span>
                <span className="text-[8px] font-bold text-brand-primary tracking-[0.4em] uppercase">Shopify Edition</span>
              </div>
            </div>

            {/* Navigation Nodes */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {['Protocol', 'Ecosystem', 'Security', 'Intel'].map((item) => (
                <button key={item} className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-primary transition-all group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Technical Cluster */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                 <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">System_Node_01 // Operational</span>
              </div>
              <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.2em]">Build: Global_IX_4.2.0</span>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/10">
              © 2024 Shopify Mastery Hub // All Rights Reserved
            </p>
            <div className="flex gap-8">
              {['Privacy', 'Legal', 'Terms'].map(item => (
                <button key={item} className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-brand-primary transition-colors">{item}</button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
