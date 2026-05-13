import React from 'react';
import { cn } from '../../../lib/utils';

interface DashboardMetricsProps {
  stats: {
    label: string;
    value: string | number;
    icon: React.ElementType;
    color: string;
  }[];
}

export function DashboardMetrics({ stats }: DashboardMetricsProps) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
      {stats.map((stat, i) => (
        <div key={i} className="p-8 bg-[#0F0F0F] group hover:bg-white/5 transition-colors relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
             <stat.icon size={40} />
          </div>
          <stat.icon className={cn("w-5 h-5 mb-6 relative z-10", stat.color)} />
          <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2 relative z-10">{stat.label}</p>
          <h3 className="text-3xl font-black italic tracking-tighter relative z-10">{stat.value}</h3>
        </div>
      ))}
    </section>
  );
}
