'use client';
import React, { useState } from 'react';
import { 
  RiBrainLine, 
  RiPulseFill,
  RiCheckDoubleFill,
  RiLoader4Line,
  RiErrorWarningLine,
  RiInformationLine
} from 'react-icons/ri';
import { HiSparkles } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'motion/react';
import { generateSyllabusChunk } from '../../services/geminiService';
import { db } from '../../lib/firebase';
import { doc, setDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { cn } from '../../lib/utils';

interface AISynthesisLabProps {
  onSuccess: () => void;
}

export default function AISynthesisLab({ onSuccess }: AISynthesisLabProps) {
  const [niche, setNiche] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'synthesizing' | 'securing' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState('');

  const runSynthesis = async () => {
    if (!niche.trim()) return;
    
    setIsGenerating(true);
    setStatus('analyzing');
    setProgress(10);
    setCurrentStage('Analyzing Industry Standards...');

    try {
      // 12 Weeks = 12 Modules (4 per Month)
      const TOTAL_WEEKS = 12;
      
      for (let week = 1; week <= TOTAL_WEEKS; week++) {
        const month = Math.ceil(week / 4);
        const weekInMonth = week % 4 === 0 ? 4 : week % 4;
        
        setCurrentStage(`Synthesizing Month ${month} | Week ${weekInMonth}...`);
        setStatus('synthesizing');
        
        // 0. Fetch Existing Data for this week to prevent overwriting
        const moduleId = `week-${week}`;
        const existingLessonsSnap = await getDocs(collection(db, `modules/${moduleId}/lessons`));
        const existingLessons = existingLessonsSnap.docs.map(d => d.data());
        
        // 1. Generate the chunk with context
        const chunk = await generateSyllabusChunk(niche, month, week, {
          moduleId,
          existingLessons
        });
        
        if (chunk && chunk.module && chunk.lessons) {
          setStatus('securing');
          
          // 2. Save/Update Module
          await setDoc(doc(db, "modules", moduleId), {
            ...chunk.module,
            id: moduleId,
          }, { merge: true });

          // 3. Save/Update Lessons
          const lessonsRef = collection(db, `modules/${moduleId}/lessons`);
          for (const lesson of chunk.lessons) {
            const lessonId = lesson.id || `day-${((week-1)*7) + lesson.order}`;
            await setDoc(doc(lessonsRef, lessonId), {
              ...lesson,
              id: lessonId,
              moduleId: moduleId
            }, { merge: true });
          }
        }
        
        setProgress(Math.round((week / TOTAL_WEEKS) * 100));
      }

      setStatus('idle');
      setNiche('');
      setProgress(100);
      setCurrentStage('Syllabus Architecture Secured.');
      onSuccess();
    } catch (error) {
      console.error("Synthesis Failed:", error);
      setStatus('error');
    } finally {
      setIsGenerating(false);
    }
  };

  const suggestions = [
    "Shopify SEO Mastery",
    "Advanced Liquid Architect",
    "Headless Hydrogen Storefronts",
    "CRO & UX Engineering"
  ];

  return (
    <div className="w-full bg-[#0F0F0F] border border-white/5 p-8 mb-12 relative overflow-hidden group">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <HiSparkles className="text-brand-primary animate-pulse" size={20} />
            <div className="flex items-center gap-2 group/hint relative">
              <h2 className="text-xl font-black uppercase tracking-tighter italic text-brand-primary">AI Synthesis Lab</h2>
              <RiInformationLine className="text-white/20 hover:text-brand-primary transition-colors cursor-help" size={16} />
              
              {/* Tooltip Hint */}
              <div className="absolute left-full ml-4 top-0 w-64 p-4 bg-[#1a1a1a] border border-white/10 rounded-lg opacity-0 invisible group-hover/hint:opacity-100 group-hover/hint:visible transition-all z-50 pointer-events-none">
                <p className="text-[10px] text-white/60 leading-relaxed font-medium uppercase tracking-wider">
                  The Syllabus Engine uses a <span className="text-brand-primary">Soft-Merge</span> protocol. It identifies empty modules and lessons to populate them with high-performance content while <span className="text-white font-bold">preserving your existing YouTube URLs and custom data.</span>
                </p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em] mb-6">Generate a complete 12-week high-performance roadmap instantly</p>
          
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button 
                key={s}
                onClick={() => setNiche(s)}
                className="px-3 py-1 bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-brand-primary hover:border-brand-primary/30 transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full lg:w-auto">
          <div className="relative flex-1 sm:min-w-[400px]">
            <input 
              type="text" 
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              placeholder="ENTER NICHE (E.G. SHOPIFY SEO MASTERY)"
              className="w-full bg-black/40 border border-white/10 px-6 py-4 text-[10px] font-black uppercase tracking-widest outline-none focus:border-brand-primary transition-all placeholder:text-white/10"
              disabled={isGenerating}
            />
            {isGenerating && (
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute bottom-0 left-0 h-[2px] bg-brand-primary shadow-[0_0_10px_rgba(149,255,0,0.5)]"
              />
            )}
          </div>

          <button 
            onClick={runSynthesis}
            disabled={isGenerating || !niche}
            className={cn(
              "px-8 py-4 bg-brand-primary text-black font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-20",
              isGenerating ? "animate-pulse" : "hover:scale-105"
            )}
          >
            {isGenerating ? (
              <>
                <RiLoader4Line className="animate-spin" size={18} />
                Processing
              </>
            ) : (
              <>
                <RiBrainLine size={18} />
                Syllabus Engine
              </>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isGenerating && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <RiPulseFill className="text-brand-primary animate-pulse" size={14} />
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{currentStage}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
               <span className="text-[10px] font-mono text-brand-primary font-black">{progress}%</span>
               <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-brand-primary"
                  />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {status === 'error' && (
        <div className="mt-6 p-4 bg-red-500/5 border border-red-500/10 flex items-center gap-3 text-red-500">
          <RiErrorWarningLine size={16} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Neural Link Distorted. Check logs and retry.</span>
        </div>
      )}
    </div>
  );
}
