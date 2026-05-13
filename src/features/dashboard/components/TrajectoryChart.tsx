import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';

interface TrajectoryChartProps {
  data: {
    name: string;
    percentage: number;
  }[];
}

export function TrajectoryChart({ data }: TrajectoryChartProps) {
  return (
    <div className="bg-[#0F0F0F] border border-white/10 p-8 relative overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xs font-black uppercase tracking-widest text-white/40 border-l-2 border-brand-primary pl-3">Monthly Trajectory</h3>
        <span className="text-[10px] font-mono text-white/20 uppercase">Learning Velocity</span>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTrajectory" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#95FF00" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#95FF00" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#444" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              dy={10}
            />
            <YAxis 
              stroke="#444" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              itemStyle={{ color: '#95FF00' }}
            />
            <Area 
              type="monotone" 
              dataKey="percentage" 
              stroke="#95FF00" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorTrajectory)" 
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
