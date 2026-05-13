"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Lesson, Module } from "../types";
import { INITIAL_LESSONS, INITIAL_MODULES } from "../features/modules/seed";
import { useAuth } from "./AuthContext";
import { moduleService } from "../features/modules/services/moduleService";

interface LearningDataContextType {
  modules: Module[];
  lessons: Lesson[];
}

const LearningDataContext = createContext<LearningDataContextType | undefined>(undefined);

export function LearningDataProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [modules, setModules] = useState<Module[]>(INITIAL_MODULES);
  const [lessons, setLessons] = useState<Lesson[]>(INITIAL_LESSONS);

  useEffect(() => {
    if (authLoading) return;
    if (!user) return;

    const lessonUnsubscribes: { [key: string]: () => void } = {};

    const unsubModules = moduleService.syncModules((fetchedModules) => {
      setModules(fetchedModules.length > 0 ? fetchedModules : INITIAL_MODULES);

      fetchedModules.forEach((mod) => {
        if (!lessonUnsubscribes[mod.id]) {
          lessonUnsubscribes[mod.id] = moduleService.syncLessons(mod.id, (fetchedLessons) => {
            setLessons((prev) => {
              if (fetchedLessons.length === 0) return prev;
              const filtered = prev.filter((l) => l.moduleId !== mod.id);
              return [...filtered, ...fetchedLessons].sort((a, b) => a.order - b.order);
            });
          });
        }
      });

      if (fetchedModules.length === 0) {
        setModules(INITIAL_MODULES);
        setLessons(INITIAL_LESSONS);
      }
    });

    return () => {
      unsubModules();
      Object.values(lessonUnsubscribes).forEach((unsub) => unsub());
    };
  }, [user, authLoading]);

  return (
    <LearningDataContext.Provider value={{ modules, lessons }}>
      {children}
    </LearningDataContext.Provider>
  );
}

export function useLearningData() {
  const context = useContext(LearningDataContext);
  if (context === undefined) {
    throw new Error('useLearningData must be used within a LearningDataProvider');
  }
  return context;
}
