'use client';
import React, { useState } from 'react';
import { 
  RiBrainLine, 
  RiPulseFill,
  RiCheckDoubleFill,
  RiLoader4Line,
  RiErrorWarningLine,
  RiInformationLine,
  RiCheckLine,
  RiCloseLine
} from 'react-icons/ri';
import { HiSparkles } from 'react-icons/hi2';
import { motion, AnimatePresence } from 'motion/react';
import { generateSyllabusChunk } from '../../services/geminiService';
import { db } from '../../lib/firebase';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { cn } from '../../lib/utils';
import { Module, Lesson } from '../../types';
import toast from 'react-hot-toast';

interface GeneratedChunk {
  module: Module;
  lessons: Lesson[];
}

interface AISynthesisLabProps {
  onSuccess: () => void;
}

export default function AISynthesisLab({ onSuccess }: AISynthesisLabProps) {
  const [niche, setNiche] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'synthesizing' | 'securing' | 'error' | 'preview'>('idle');
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState('');
  const [generatedData, setGeneratedData] = useState<GeneratedChunk[]>([]);

  const generateAllChunks = async () => {
    if (!niche.trim()) return;
    
    setIsGenerating(true);
    setStatus('analyzing');
    setProgress(10);
    setCurrentStage('Analyzing Industry Standards...');
    toast.loading('Generating roadmap with AI...', { id: 'generate' });

    try {
      const TOTAL_WEEKS = 12;
      const chunks: GeneratedChunk[] = [];
      
      for (let week = 1; week <= TOTAL_WEEKS; week++) {
        const month = Math.ceil(week / 4);
        const weekInMonth = week % 4 === 0 ? 4 : week % 4;
        
        setCurrentStage(`Synthesizing Month ${month} | Week ${weekInMonth}...`);
        setStatus('synthesizing');
        
        const moduleId = `week-${week}`;
        const existingLessonsSnap = await getDocs(collection(db, `modules/${moduleId}/lessons`));
        const existingLessons = existingLessonsSnap.docs.map(d => d.data());
        
        const chunk = await generateSyllabusChunk(niche, month, week, {
          moduleId,
          existingLessons
        });
        
        if (chunk && chunk.module && chunk.lessons) {
          chunks.push(chunk as GeneratedChunk);
        }
        
        setProgress(Math.round((week / TOTAL_WEEKS) * 100));
      }

      setGeneratedData(chunks);
      setStatus('preview');
      setCurrentStage('Synthesis complete. Review and confirm.');
      toast.success('Roadmap generated successfully!', { id: 'generate' });
    } catch (error) {
      console.error("Synthesis Failed:", error);
      setStatus('error');
      toast.error('Failed to generate roadmap. Please try again.', { id: 'generate' });
    } finally {
      setIsGenerating(false);
    }
  };

  const saveGeneratedData = async () => {
    setIsSaving(true);
    setStatus('securing');
    setCurrentStage('Securing syllabus to database...');
    toast.loading('Saving roadmap...', { id: 'save' });

    try {
      for (const chunk of generatedData) {
        const moduleId = chunk.module.id;
        
        await setDoc(doc(db, "modules", moduleId), {
          ...chunk.module,
          id: moduleId,
        }, { merge: true });

        const lessonsRef = collection(db, `modules/${moduleId}/lessons`);
        for (const lesson of chunk.lessons) {
          const lessonId = lesson.id;
          await setDoc(doc(lessonsRef, lessonId), {
            ...lesson,
            id: lessonId,
            moduleId: moduleId
          }, { merge: true });
        }
      }

      setStatus('idle');
      setNiche('');
      setProgress(100);
      setCurrentStage('Syllabus Architecture Secured.');
      setGeneratedData([]);
      toast.success('Roadmap saved successfully!', { id: 'save' });
      onSuccess();
    } catch (error) {
      console.error("Save Failed:", error);
      setStatus('error');
      toast.error('Failed to save roadmap. Please try again.', { id: 'save' });
    } finally {
      setIsSaving(false);
    }
  };

  const cancelPreview = () => {
    setStatus('idle');
    setGeneratedData([]);
    setNiche('');
    setProgress(0);
    setCurrentStage('');
    toast('Roadmap discarded. No changes were made.', {
      icon: 'ℹ️',
    });
  };

  const updateModule = (index: number, field: keyof Module, value: any) => {
    setGeneratedData(prev => {
      const newData = [...prev];
      newData[index] = {
        ...newData[index],
        module: { ...newData[index].module, [field]: value }
      };
      return newData;
    });
  };

  const updateLesson = (chunkIndex: number, lessonIndex: number, field: keyof Lesson, value: any) => {
    setGeneratedData(prev => {
      const newData = [...prev];
      const newLessons = [...newData[chunkIndex].lessons];
      newLessons[lessonIndex] = { ...newLessons[lessonIndex], [field]: value };
      newData[chunkIndex] = { ...newData[chunkIndex], lessons: newLessons };
      return newData;
    });
  };

  const suggestions = [
    "Shopify SEO Mastery",
    "Advanced Liquid Architect",
    "Headless Hydrogen Storefronts",
    "CRO & UX Engineering"
  ];

  return (
    <div className="w-full bg-[#0F0F0F] border border-white/5 p-8 mb-12 relative overflow-hidden group">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <HiSparkles className="text-brand-primary animate-pulse" size={20} />
              <div className="flex items-center gap-2 group/hint relative">
                <h2 className="text-xl font-black uppercase tracking-tighter italic text-brand-primary">AI Synthesis Lab</h2>
                <RiInformationLine className="text-white/20 hover:text-brand-primary transition-colors cursor-help" size={16} />
                
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
                  disabled={isGenerating || isSaving || status === 'preview'}
                  className="px-3 py-1 bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-brand-primary hover:border-brand-primary/30 transition-all disabled:opacity-30"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {status !== 'preview' && (
            <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full lg:w-auto">
              <div className="relative flex-1 sm:min-w-[400px]">
                <input 
                  type="text" 
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="ENTER NICHE (E.G. SHOPIFY SEO MASTERY)"
                  className="w-full bg-black/40 border border-white/10 px-6 py-4 text-[10px] font-black uppercase tracking-widest outline-none focus:border-brand-primary transition-all placeholder:text-white/10"
                  disabled={isGenerating || isSaving}
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
                onClick={generateAllChunks}
                disabled={isGenerating || isSaving || !niche}
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
          )}
        </div>

        <AnimatePresence>
          {(isGenerating || isSaving) && (
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

        {status === 'preview' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 space-y-6"
          >
            <div className="flex items-center justify-between border-t border-white/5 pt-8">
              <div className="flex items-center gap-3">
                <RiCheckDoubleFill className="text-brand-primary" size={24} />
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-white">Preview Generated Syllabus</h3>
                  <p className="text-[9px] text-white/40 uppercase tracking-widest">Review and edit before saving</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={cancelPreview}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white/60 font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-white/10 transition-all"
                >
                  <RiCloseLine size={16} />
                  Cancel
                </button>
                <button
                  onClick={saveGeneratedData}
                  disabled={isSaving}
                  className="px-6 py-3 bg-brand-primary text-black font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:scale-105 transition-all disabled:opacity-50"
                >
                  {isSaving ? (
                    <>
                      <RiLoader4Line className="animate-spin" size={16} />
                      Saving...
                    </>
                  ) : (
                    <>
                      <RiCheckLine size={16} />
                      Confirm & Save
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-8 max-h-[600px] overflow-y-auto pr-2">
              {generatedData.map((chunk, chunkIndex) => (
                <div key={chunk.module.id} className="bg-black/40 border border-white/10 p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-mono text-brand-primary font-bold">
                        M{chunk.module.month} W{chunk.module.order}
                      </span>
                      <h4 className="text-sm font-black uppercase tracking-tight text-white">Module</h4>
                    </div>
                    <input
                      type="text"
                      value={chunk.module.title}
                      onChange={(e) => updateModule(chunkIndex, 'title', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white outline-none focus:border-brand-primary transition-all mb-2"
                    />
                    <textarea
                      value={chunk.module.description}
                      onChange={(e) => updateModule(chunkIndex, 'description', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 px-4 py-2 text-[10px] text-white/70 outline-none focus:border-brand-primary transition-all resize-none h-16"
                    />
                  </div>

                  <div className="space-y-4">
                    {chunk.lessons.map((lesson, lessonIndex) => (
                      <div key={lesson.id} className="bg-white/[0.02] border border-white/5 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[8px] font-mono text-white/40 font-bold">
                            Day {lesson.order}
                          </span>
                          <span className={cn(
                            "text-[8px] font-black px-2 py-0.5 border uppercase",
                            lesson.difficulty === 'Beginner'
                              ? "border-blue-500/40 text-blue-400"
                              : lesson.difficulty === 'Intermediate'
                                ? "border-orange-500/40 text-orange-400"
                                : "border-red-500/40 text-red-400",
                          )}>
                            {lesson.difficulty}
                          </span>
                        </div>
                        <input
                          type="text"
                          value={lesson.title}
                          onChange={(e) => updateLesson(chunkIndex, lessonIndex, 'title', e.target.value)}
                          className="w-full bg-white/5 border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white outline-none focus:border-brand-primary transition-all mb-1"
                        />
                        <textarea
                          value={lesson.description}
                          onChange={(e) => updateLesson(chunkIndex, lessonIndex, 'description', e.target.value)}
                          className="w-full bg-white/5 border border-white/10 px-3 py-1.5 text-[9px] text-white/60 outline-none focus:border-brand-primary transition-all resize-none h-12"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {status === 'error' && (
          <div className="mt-6 p-4 bg-red-500/5 border border-red-500/10 flex items-center gap-3 text-red-500">
            <RiErrorWarningLine size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Neural Link Distorted. Check logs and retry.</span>
          </div>
        )}
      </div>
    </div>
  );
}
