import React from 'react';
import { FiTarget as Target, FiClock as Clock } from 'react-icons/fi';
import { UserProfile, Module } from '../../../types';

interface AIStrategicSummaryProps {
  profile: UserProfile;
  modules: Module[];
}

export function AIStrategicSummary({ profile, modules }: AIStrategicSummaryProps) {
  return (
    <div className="bg-[#0F0F0F] border border-[#95FF00]/10 p-8 flex flex-col relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
        <Target size={120} />
      </div>
      <div className="flex items-center gap-3 mb-8 relative z-10">
        <Target className="text-brand-primary" size={20} />
        <h3 className="text-xs font-black uppercase tracking-widest text-white/40">AI Strategic Overview</h3>
      </div>
      
      {profile.personalizedPath ? (
        <div className="flex-1 flex flex-col relative z-10">
          <div className="p-6 bg-brand-primary/5 border border-brand-primary/10 mb-6 group-hover:border-brand-primary/30 transition-colors">
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-brand-primary mb-2 block">Primary Objectives</span>
            <p className="text-xs text-white/80 leading-relaxed uppercase tracking-tight font-medium italic">
              &quot;{profile.personalizedPath.goals[0]}&quot;
            </p>
          </div>
          <div className="space-y-4 mb-8">
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20">Next Recommended Module</span>
            <div className="text-sm font-black uppercase italic tracking-tighter text-white">
              {modules.find(m => profile.personalizedPath?.recommendedModules.includes(m.id))?.title || 'Next Tier Unlocked'}
            </div>
          </div>
          <button className="mt-auto w-full py-4 bg-brand-primary text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(149,255,0,0.2)]">
            Recalibrate Path
          </button>
        </div>
      ) : (
        <div className="flex-1 flex flex-col justify-center text-center p-6 border border-dashed border-white/5 opacity-40 relative z-10">
          <Clock size={24} className="mx-auto mb-4" />
          <p className="text-[10px] uppercase tracking-widest italic">Personalized Path Analysis Pending Initiation.</p>
        </div>
      )}
    </div>
  );
}
