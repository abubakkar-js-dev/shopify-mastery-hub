"use client";
import { ElementType } from "react";
import { cn } from "../../../lib/utils";

export default function StatCard({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: number | string;
  icon: ElementType;
  color: string;
}) {
  return (
    <div className="p-6 md:p-8 bg-[#0F0F0F] group hover:bg-white/5 transition-colors">
      <Icon className={cn("w-5 md:w-6 h-5 md:h-6 mb-4 md:mb-6", color)} />
      <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">
        {label}
      </p>
      <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter">
        {value}
      </h3>
    </div>
  );
}
