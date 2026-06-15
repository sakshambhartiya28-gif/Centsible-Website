'use client';

import { useProgress, TRACKS, TrackId } from '@/context/ProgressContext';
import Link from 'next/link';
import { BookOpen, TrendingUp, Shield, CheckCircle, Circle, Trophy, Flame, ArrowRight, RotateCcw } from 'lucide-react';

const TRACK_ICONS: Record<TrackId, React.ElementType> = {
  foundation: BookOpen,
  growth: TrendingUp,
  security: Shield,
};

const TRACK_MODULES: Record<TrackId, string[]> = {
  foundation: [
    'Understanding Money', 'Budgeting Basics', 'Saving Strategies', 'Banking 101',
    'Introduction to Credit', 'Debt & Borrowing', 'Taxes Made Simple', 'Smart Spending',
  ],
  growth: [
    'Introduction to Investing', 'Compound Interest', 'Stock Market Basics', 'Mutual Funds & ETFs',
    'Private Equity & Venture Capital', 'Bonds & Fixed Income', 'Insurance Planning', 'Retirement Planning',
  ],
  security: [
    'Financial Fraud Overview', 'Scam Identification', 'Identity Theft Prevention', 'Safe Online Banking',
    'Cybersecurity for Finance', 'Consumer Rights & Protections', 'Crypto & Digital Assets', 'Recovery After Fraud',
  ],
};

const BADGES = [
  { id: 'first_module', label: 'First Step', desc: 'Complete your first module', emoji: '🌱', threshold: 1 },
  { id: 'five_modules', label: 'Momentum', desc: 'Complete 5 modules', emoji: '🔥', threshold: 5 },
  { id: 'ten_modules', label: 'Scholar', desc: 'Complete 10 modules', emoji: '📚', threshold: 10 },
  { id: 'all_modules', label: 'Master', desc: 'Complete all 24 modules', emoji: '🏆', threshold: 24 },
];

const TRACK_COLORS: Record<TrackId, string> = {
  foundation: '#3b82f6',
  growth: '#f59e0b',
  security: '#10b981',
};

const TRACK_BG: Record<TrackId, string> = {
  foundation: 'bg-blue-50 border-blue-100',
  growth: 'bg-amber-50 border-amber-100',
  security: 'bg-emerald-50 border-emerald-100',
};

export default function DashboardPage() {
  const { progress, completeModule, resetProgress, getTrackPercent, totalCompleted } = useProgress();

  const earnedBadges = BADGES.filter(b => totalCompleted >= b.threshold);
  const dayStreak = progress.lastActivity
    ? Math.floor((Date.now() - new Date(progress.lastActivity).getTime()) / 86400000) === 0 ? 1 : 0
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#0a1628] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-[#f5a623] font-semibold text-sm uppercase tracking-widest">My Learning</span>
              <h1 className="text-3xl md:text-4xl font-bold mt-2">Progress Dashboard</h1>
              <p className="text-gray-400 mt-1">Track your financial literacy journey</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#f5a623]">{progress.totalPoints}</div>
                <div className="text-xs text-gray-400">Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#f5a623]">{totalCompleted}/24</div>
                <div className="text-xs text-gray-400">Modules</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#f5a623] flex items-center gap-1">
                  <Flame className="w-6 h-6" />{dayStreak}
                </div>
                <div className="text-xs text-gray-400">Day Streak</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Overall Progress */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[#0a1628] mb-4">Overall Progress</h2>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-[#0a1628] to-[#f5a623] rounded-full transition-all duration-700"
              style={{ width: `${Math.round((totalCompleted / 24) * 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{totalCompleted} of 24 modules complete</span>
            <span>{Math.round((totalCompleted / 24) * 100)}%</span>
          </div>
        </div>

        {/* Tracks */}
        <div className="grid md:grid-cols-3 gap-6">
          {(Object.keys(TRACKS) as TrackId[]).map((trackId) => {
            const track = TRACKS[trackId];
            const Icon = TRACK_ICONS[trackId];
            const completed = progress.completedModules[trackId];
            const percent = getTrackPercent(trackId);
            const color = TRACK_COLORS[trackId];
            const modules = TRACK_MODULES[trackId];

            return (
              <div key={trackId} className={`rounded-2xl border p-6 ${TRACK_BG[trackId]}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: color + '22', color }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628]">{track.label}</h3>
                    <p className="text-xs text-gray-500">{completed.length}/{track.totalModules} modules</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2.5 bg-white rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${percent}%`, backgroundColor: color }}
                  />
                </div>

                {/* Module checklist */}
                <ul className="space-y-2">
                  {modules.map((mod, i) => {
                    const done = completed.includes(i);
                    return (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <button
                          onClick={() => completeModule(trackId, i)}
                          className="shrink-0 transition-transform hover:scale-110"
                          aria-label={done ? `${mod} completed` : `Mark ${mod} complete`}
                        >
                          {done
                            ? <CheckCircle className="w-4 h-4" style={{ color }} />
                            : <Circle className="w-4 h-4 text-gray-300" />}
                        </button>
                        <span className={done ? 'line-through text-gray-400' : 'text-gray-700'}>{mod}</span>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href={`/courses#${trackId}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color }}
                >
                  Go to Course <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Badges */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-[#f5a623]" />
            <h2 className="font-bold text-[#0a1628]">Badges</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {BADGES.map((badge) => {
              const earned = totalCompleted >= badge.threshold;
              return (
                <div
                  key={badge.id}
                  className={`rounded-2xl p-5 text-center border transition-all ${
                    earned ? 'bg-[#f5a623]/10 border-[#f5a623]/40' : 'bg-gray-50 border-gray-100 opacity-50'
                  }`}
                >
                  <div className="text-4xl mb-2">{badge.emoji}</div>
                  <div className="font-semibold text-[#0a1628] text-sm">{badge.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{badge.desc}</div>
                  {earned && <div className="text-xs text-[#f5a623] font-semibold mt-2">Earned!</div>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Reset */}
        <div className="text-center">
          <button
            onClick={() => { if (confirm('Reset all progress? This cannot be undone.')) resetProgress(); }}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
}
