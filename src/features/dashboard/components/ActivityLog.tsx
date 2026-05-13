import React from 'react';
import { FiBookOpen as BookOpen, FiCheckCircle as CheckCircle } from 'react-icons/fi';
import { Lesson } from '../../../types';

interface ActivityLogProps {
  completedLessons: string[];
  lessons: Lesson[];
}

export function ActivityLog({ completedLessons, lessons }: ActivityLogProps) {
  return (
    <div className="lg:col-span-2 bg-[#0F0F0F] border border-white/10 p-8">
      <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-8 px-2 border-l-2 border-brand-primary">Terminal Log: Activity</h3>
      <div className="space-y-4">
        {completedLessons.length > 0 ? (
          completedLessons.slice(-5).reverse().map((lessonId, i) => {
            const lesson = lessons.find(l => l.id === lessonId);
            return (
              <div key={i} className="flex items-center justify-between p-4 bg-black/40 border border-white/5 hover:border-brand-primary/20 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-colors">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-tight">{lesson?.title || 'Unknown Lesson'}</p>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest mt-0.5">Session Completed</p>
                  </div>
                </div>
                <CheckCircle size={14} className="text-brand-primary" />
              </div>
            );
          })
        ) : (
          <div className="p-8 border border-dashed border-white/5 text-center">
            <p className="text-[10px] text-white/20 uppercase tracking-widest italic">No activity logs recorded in current epoch.</p>
          </div>
        )}
      </div>
    </div>
  );
}
