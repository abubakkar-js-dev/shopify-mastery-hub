import React from 'react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip 
} from 'recharts';
import { motion } from 'motion/react';

interface SkillDistributionProps {
  data: {
    name: string;
    value: number;
    total: number;
  }[];
}

const COLORS = ['#95FF00', '#3b82f6', '#f97316'];

export function SkillDistribution({ data }: SkillDistributionProps) {
  return (
    <div className="bg-[#0F0F0F] border border-white/10 p-8">
       <div className="flex items-center justify-between mb-8">
        <h3 className="text-xs font-black uppercase tracking-widest text-white/40 border-l-2 border-brand-primary pl-3">Technical Proficiency</h3>
        <span className="text-[10px] font-mono text-white/20 uppercase">Skill Distribution</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
                animationDuration={1500}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '0', fontSize: '10px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-6">
          {data.map((item, i) => (
            <div key={i}>
              <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{item.name}</span>
                <span className="text-[10px] font-mono text-white/40">{item.value} / {item.total}</span>
              </div>
              <div className="w-full h-1 bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${item.total > 0 ? (item.value / item.total) * 100 : 0}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-full transition-all duration-1000"
                  style={{ 
                    backgroundColor: COLORS[i]
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
