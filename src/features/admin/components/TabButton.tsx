'use client';
import { ElementType } from 'react';
import { cn } from '../../../lib/utils';

export default function TabButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: ElementType;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 px-6 py-4 transition-all uppercase tracking-widest font-black text-[10px]",
        active
          ? "bg-brand-primary text-black"
          : "text-white/40 hover:bg-white/5 hover:text-white",
      )}
    >
      <Icon size={16} />
      {label}
    </button>
  );
}
