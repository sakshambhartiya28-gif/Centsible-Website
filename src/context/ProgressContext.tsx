'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type TrackId = 'foundation' | 'growth' | 'security';

export const TRACKS: Record<TrackId, { label: string; totalModules: number; color: string }> = {
  foundation: { label: 'Foundation', totalModules: 8, color: '#3b82f6' },
  growth: { label: 'Growth', totalModules: 8, color: '#f59e0b' },
  security: { label: 'Security', totalModules: 8, color: '#10b981' },
};

interface ProgressState {
  completedModules: Record<TrackId, number[]>;
  lastActivity: string | null;
  totalPoints: number;
}

interface ProgressContextType {
  progress: ProgressState;
  completeModule: (track: TrackId, moduleIndex: number) => void;
  resetProgress: () => void;
  getTrackPercent: (track: TrackId) => number;
  totalCompleted: number;
}

const DEFAULT_STATE: ProgressState = {
  completedModules: { foundation: [], growth: [], security: [] },
  lastActivity: null,
  totalPoints: 0,
};

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(DEFAULT_STATE);

  useEffect(() => {
    const stored = localStorage.getItem('centsible_progress');
    if (stored) {
      try { setProgress(JSON.parse(stored)); } catch { /* ignore */ }
    }
  }, []);

  const save = (next: ProgressState) => {
    setProgress(next);
    localStorage.setItem('centsible_progress', JSON.stringify(next));
  };

  const completeModule = useCallback((track: TrackId, moduleIndex: number) => {
    setProgress((prev) => {
      if (prev.completedModules[track].includes(moduleIndex)) return prev;
      const next: ProgressState = {
        completedModules: {
          ...prev.completedModules,
          [track]: [...prev.completedModules[track], moduleIndex],
        },
        lastActivity: new Date().toISOString(),
        totalPoints: prev.totalPoints + 50,
      };
      localStorage.setItem('centsible_progress', JSON.stringify(next));
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => save(DEFAULT_STATE), []);

  const getTrackPercent = useCallback((track: TrackId) => {
    const done = progress.completedModules[track].length;
    return Math.round((done / TRACKS[track].totalModules) * 100);
  }, [progress]);

  const totalCompleted = Object.values(progress.completedModules).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <ProgressContext.Provider value={{ progress, completeModule, resetProgress, getTrackPercent, totalCompleted }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
