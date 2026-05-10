'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
  RiSendPlane2Fill, 
  RiChat3Line, 
  RiExpandDiagonalLine, 
  RiCollapseDiagonalLine,
  RiRobot2Fill,
  RiSettings4Line
} from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { HiSparkles, HiUser } from 'react-icons/hi2';
import { CgSpinner } from 'react-icons/cg';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { getCoPilotResponse } from '../services/geminiService';
import { Lesson, Module } from '../types';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'model';
  parts: string;
  timestamp: string;
}

interface ChatCoPilotProps {
  lesson: Lesson;
  module: Module;
}

export default function ChatCoPilot({ lesson, module }: ChatCoPilotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      parts: `Hello! I'm your AI Technical Co-Pilot. I have access to the **${lesson.title}** session details and Shopify's core documentation. How can I help you with your workshop today?`,
      timestamp: new Date().toISOString()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      parts: input.trim(),
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getCoPilotResponse(
        userMessage.parts,
        messages.map(m => ({ role: m.role, parts: m.parts })),
        { lesson, module }
      );

      const aiMessage: Message = {
        role: 'model',
        parts: response,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-40 bg-brand-primary text-black p-4 shadow-[0_0_30px_rgba(149,255,0,0.3)] hover:scale-110 active:scale-95 transition-all group rounded-none"
          >
            <div className="relative">
              <RiRobot2Fill size={24} className="group-hover:rotate-12 transition-transform" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white border-2 border-brand-primary rounded-full animate-ping" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              y: 50, 
              scale: 0.9,
              height: isMinimized ? '80px' : '600px',
              width: isMinimized ? '320px' : '400px'
            }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '80px' : '600px',
              width: isMinimized ? '320px' : '400px'
            }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 200,
              height: { duration: 0.4 },
              width: { duration: 0.4 }
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={cn(
              "fixed bottom-8 right-8 z-50 bg-[#0F0F0F]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden origin-bottom-right",
              isMinimized ? "rounded-xl ring-1 ring-brand-primary/20" : "rounded-none"
            )}
          >
            {/* Header */}
            <div className={cn(
              "flex-shrink-0 bg-brand-bg/50 border-b border-white/10 px-4 flex items-center justify-between transition-all duration-500",
              isMinimized ? "h-20 w-full" : "h-16 w-full"
            )}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/20 rounded-lg">
                  <RiRobot2Fill size={20} />
                </div>
                <div>
                  <h3 className="text-[12px] font-black uppercase tracking-widest leading-none mb-1">AI Co-Pilot</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(149,255,0,0.8)]" />
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter italic">L-{lesson.order} // Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {!isMinimized ? (
                  <button 
                    onClick={() => setIsMinimized(true)}
                    className="p-2 hover:bg-white/5 transition-colors text-white/40 hover:text-white"
                  >
                    <RiCollapseDiagonalLine size={16} />
                  </button>
                ) : (
                  <button 
                    onClick={() => setIsMinimized(false)}
                    className="p-2 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary hover:bg-brand-primary/20 transition-all rounded-md animate-pulse"
                  >
                    <RiExpandDiagonalLine size={16} />
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/5 transition-colors text-white/40 hover:text-white"
                >
                  <IoClose size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div 
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar bg-black/40 scroll-smooth"
                >
                  {messages.map((m, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",
                        m.role === 'user' ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md border",
                        m.role === 'user' 
                          ? "bg-white/5 border-white/10 text-white" 
                          : "bg-brand-primary/10 border-brand-primary/20 text-brand-primary"
                      )}>
                        {m.role === 'user' ? <HiUser size={16} /> : <HiSparkles size={16} />}
                      </div>
                      <div className={cn(
                        "max-w-[85%] p-4 text-[13px] leading-relaxed transition-all",
                        m.role === 'user' 
                          ? "bg-white/5 border border-white/10 text-white/90 rounded-2xl rounded-tr-none shadow-lg" 
                          : "bg-brand-primary/5 border border-brand-primary/10 text-white/95 rounded-2xl rounded-tl-none font-medium shadow-[0_0_15px_rgba(149,255,0,0.02)]"
                      )}>
                        <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10">
                          <ReactMarkdown>{m.parts}</ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3 animate-pulse">
                      <div className="w-8 h-8 flex-shrink-0 bg-brand-primary/5 border border-brand-primary/10 rounded-md flex items-center justify-center">
                        <CgSpinner className="animate-spin text-brand-primary" size={16} />
                      </div>
                      <div className="max-w-[80%] p-4 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl rounded-tl-none">
                        <div className="flex gap-1.5">
                          <span className="w-1.5 h-1.5 bg-brand-primary/40 rounded-full animate-bounce [animation-duration:0.6s]" />
                          <span className="w-1.5 h-1.5 bg-brand-primary/40 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]" />
                          <span className="w-1.5 h-1.5 bg-brand-primary/40 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.4s]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-brand-bg/80 backdrop-blur-md border-t border-white/10">
                  <div className="relative flex items-center">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask about Liquid or architecture..."
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-xs font-medium outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all pr-12 placeholder:text-white/20"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 p-2.5 bg-brand-primary text-black rounded-lg hover:scale-105 active:scale-95 disabled:opacity-20 disabled:scale-100 transition-all shadow-lg"
                    >
                      <RiSendPlane2Fill size={18} />
                    </button>
                  </div>
                  <div className="mt-3 flex justify-between items-center px-1">
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] text-brand-primary font-black uppercase tracking-[0.2em] animate-pulse">Live</span>
                       <span className="text-[9px] text-white/20 uppercase tracking-widest font-mono">Stream Ready</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <RiSettings4Line className="text-white/10" size={10} />
                      <span className="text-[9px] text-brand-primary/40 uppercase tracking-widest font-mono italic">Context: Active Session</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
