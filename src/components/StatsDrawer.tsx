import React from 'react';
import { Trophy, Target, Zap, Clock, RotateCcw, X, Flame } from 'lucide-react';
import { SessionStats } from '../types';

interface StatsDrawerProps {
  stats: SessionStats;
  isOpen: boolean;
  onClose: () => void;
  onResetStats: () => void;
}

export const StatsDrawer: React.FC<StatsDrawerProps> = ({
  stats,
  isOpen,
  onClose,
  onResetStats,
}) => {
  if (!isOpen) return null;

  const totalAttempts = stats.solved + stats.wrong;
  const accuracy = totalAttempts > 0 ? Math.round((stats.solved / totalAttempts) * 100) : 100;
  const avgTimeSec = stats.solved > 0 ? (stats.totalTimeMs / stats.solved / 1000).toFixed(1) : '0.0';
  const speedQpm = stats.totalTimeMs > 0 ? Math.round((stats.solved / (stats.totalTimeMs / 60000))) : 0;

  return (
    <div
      id="stats-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3"
      onClick={onClose}
    >
      <div
        id="stats-modal"
        className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">माइंड वर्कआउट रिपोर्ट</h2>
              <p className="text-xs text-slate-400">Mental Performance Analytics</p>
            </div>
          </div>
          <button
            id="close-stats-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mb-1.5">
              <Target className="w-4 h-4" />
            </div>
            <span className="text-2xl font-black text-white">{stats.solved}</span>
            <span className="text-xs text-slate-400">कुल सही (Solved)</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-1.5">
              <Flame className="w-4 h-4" />
            </div>
            <span className="text-2xl font-black text-amber-400">{stats.bestStreak}</span>
            <span className="text-xs text-slate-400">सर्वश्रेष्ठ स्ट्रीक (Best Streak)</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-1.5">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-2xl font-black text-emerald-400">{accuracy}%</span>
            <span className="text-xs text-slate-400">सटीकता (Accuracy)</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-1.5">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-2xl font-black text-purple-300">{avgTimeSec}s</span>
            <span className="text-xs text-slate-400">औसत समय (Avg Speed)</span>
          </div>
        </div>

        <div className="px-5 pb-3">
          <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-900/40 flex items-center justify-between text-xs">
            <span className="text-slate-300">गति दर (Questions / Min):</span>
            <span className="font-bold text-sky-400 text-sm">{speedQpm} QPM</span>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-950/40 flex gap-2">
          <button
            id="reset-stats-btn"
            onClick={onResetStats}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>आंकड़े रीसेट करें (Reset Stats)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
