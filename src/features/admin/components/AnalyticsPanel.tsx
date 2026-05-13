"use client";

import { motion } from "motion/react";
import {
  FiBarChart2 as BarChart3,
  FiLayout as Layout,
  FiUsers as Users,
} from "react-icons/fi";
import { LuBookOpen as BookOpen } from "react-icons/lu";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import StatCard from "./StatCard";
import { useAdmin } from "../../../context/AdminContext";
import { useLearningData } from "../../../context/LearningDataContext";
import { useMemo } from "react";

const COLORS = ["#06b6d4", "#f97316", "#8b5cf6"];

export default function AnalyticsPanel() {
  const { users } = useAdmin();
  const { modules, lessons } = useLearningData();

  const monthlyActivityData = useMemo(
    () => [
      { name: "Jan", users: 35, lessons: 120 },
      { name: "Feb", users: 42, lessons: 165 },
      { name: "Mar", users: 28, lessons: 110 },
      {
        name: "Apr",
        users: users.length,
        lessons: users.reduce(
          (acc, u) => acc + (u.completedLessons?.length || 0),
          0,
        ),
      },
    ],
    [users],
  );

  const stats = [
    {
      label: "Total Users",
      value: users.length,
      icon: Users,
      color: "text-blue-400",
    },
    {
      label: "Active Modules",
      value: modules.length,
      icon: BookOpen,
      color: "text-brand-primary",
    },
    {
      label: "Total Lessons",
      value: lessons.length,
      icon: Layout,
      color: "text-purple-400",
    },
    {
      label: "Avg. Progress",
      value: `${Math.round(users.reduce((acc, u) => acc + (u.completedLessons.length || 0), 0) / (users.length || 1))}`,
      icon: BarChart3,
      color: "text-orange-400",
    },
  ];

  const progressData = users
    .map((u) => ({
      name: u.displayName?.split(" ")[0] || "User",
      completed: u.completedLessons.length,
      total: lessons.length,
    }))
    .slice(0, 10);

  const difficultyData = [
    {
      name: "Beginner",
      value: lessons.filter((l) => l.difficulty === "Beginner").length,
    },
    {
      name: "Intermediate",
      value: lessons.filter((l) => l.difficulty === "Intermediate").length,
    },
    {
      name: "Advanced",
      value: lessons.filter((l) => l.difficulty === "Advanced").length,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-10"
    >
      <header>
        <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic mb-3 md:mb-4">
          Platform Overview
        </h1>
        <p className="text-white/40 uppercase tracking-widest text-xs font-bold">
          Real-time system diagnostics and user metrics
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 bg-[#0F0F0F] border border-white/10 p-6 md:p-8">
          <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-6 md:mb-8 px-2 border-l-2 border-brand-primary">
            Monthly Activity Overview
          </h3>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyActivityData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.2} />
                  </linearGradient>
                  <linearGradient id="colorLessons" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#222"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  stroke="#666"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#666"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                  itemStyle={{ color: "#fff" }}
                  labelStyle={{ color: "#888", marginBottom: "4px" }}
                />
                <Bar
                  dataKey="users"
                  fill="url(#colorUsers)"
                  name="New Users"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="lessons"
                  fill="url(#colorLessons)"
                  name="Lessons Completed"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0F0F0F] border border-white/10 p-6 md:p-8">
          <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-8 px-2 border-l-2 border-brand-primary">
            Content Difficulty
          </h3>
          <div className="h-64 md:h-80 flex flex-col">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={difficultyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={95}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {difficultyData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                    borderRadius: "4px",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 mt-6">
              {difficultyData.map((d, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[i] }}
                    />
                    <span className="text-[11px] uppercase font-bold text-white/70">
                      {d.name}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-white/40">
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-10 bg-[#0F0F0F] border border-white/10 p-6 md:p-8">
        <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-8 px-2 border-l-2 border-brand-primary">
          Top User Progress
        </h3>
        <div className="h-56 md:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={progressData}>
              <defs>
                <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#222"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#666"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#666"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #333",
                  borderRadius: "4px",
                  fontSize: "12px",
                }}
                itemStyle={{ color: "#8b5cf6" }}
              />
              <Area
                type="monotone"
                dataKey="completed"
                stroke="#8b5cf6"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorCompleted)"
                name="Lessons Completed"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
