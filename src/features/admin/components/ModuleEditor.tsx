"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { LuSave as Save } from "react-icons/lu";
import { Module } from "../../../types";

type ModuleEditorProps = {
  module: Module;
  onClose: () => void;
  onSave: (m: Module) => void;
};

export default function ModuleEditor({
  module,
  onClose,
  onSave,
}: ModuleEditorProps) {
  const [data, setData] = useState<Module>(module);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <div className="bg-[#111] border border-white/10 w-full max-w-xl overflow-hidden">
        <div className="p-8 border-b border-white/10">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">
            Module Architect
          </h2>
          <p className="text-xs text-white/40 uppercase tracking-widest">
            Define strategic learning boundaries
          </p>
        </div>
        <div className="p-8 space-y-6">
          <InputGroup
            label="Title"
            value={data.title}
            onChange={(v) => setData({ ...data, title: v })}
          />
          <div className="grid grid-cols-2 gap-6">
            <InputGroup
              label="Order"
              type="number"
              value={data.order.toString()}
              onChange={(v) => setData({ ...data, order: parseInt(v) })}
            />
            <InputGroup
              label="Month"
              type="number"
              value={data.month.toString()}
              onChange={(v) => setData({ ...data, month: parseInt(v) })}
            />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">
              Abstract
            </label>
            <textarea
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              className="w-full h-32 bg-black border border-white/10 p-4 text-sm uppercase tracking-tight focus:border-brand-primary outline-none resize-none"
            />
          </div>
        </div>
        <div className="p-8 bg-white/2 border-t border-white/10 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-4 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(data)}
            className="flex-1 py-4 bg-brand-primary text-black text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <Save size={16} /> Deploy Module
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function InputGroup({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black border border-white/10 p-4 text-sm uppercase font-bold focus:border-brand-primary outline-none"
      />
    </div>
  );
}
