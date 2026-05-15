"use client";

import { FiExternalLink as ExternalLink } from "react-icons/fi";

interface LessonResource {
  title: string;
  url: string;
}

interface LessonResourcesProps {
  resources?: LessonResource[];
}

export function LessonResources({ resources }: LessonResourcesProps) {
  if (!resources || resources.length === 0) return null;

  return (
    <div className="mb-8 md:mb-12">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-4 md:mb-6 font-mono text-left">
        Resources & Links
      </h3>
      <div className="grid gap-3">
        {resources.map((resource, index) => {
          let cleanUrl = resource.url;
          if (cleanUrl.startsWith('`')) {
            cleanUrl = cleanUrl.slice(1, -1);
          }
          
          return (
            <a
              key={index}
              href={cleanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 md:p-5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/30 transition-all group"
            >
              <div className="w-10 h-10 bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0">
                <ExternalLink size={16} className="text-brand-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold uppercase tracking-tight text-white/80 group-hover:text-white transition-colors truncate">
                  {resource.title}
                </p>
                <p className="text-[10px] font-mono text-white/30 mt-1 truncate">
                  {cleanUrl}
                </p>
              </div>
              <div className="shrink-0 text-white/30 group-hover:text-brand-primary transition-colors">
                <ExternalLink size={14} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
