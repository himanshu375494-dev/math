import React, { useState } from 'react';
import { GameMode, ModeCategory } from '../types';
import { GAME_MODES } from '../utils/problemGenerator';
import { Sparkles, Layers, Zap, X } from 'lucide-react';

interface ModeSelectorProps {
  currentModeId: string;
  onSelectMode: (modeId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({
  currentModeId,
  onSelectMode,
  isOpen,
  onClose,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ModeCategory>('all');

  if (!isOpen) return null;

  const categories: { id: ModeCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'सभी मोड (All)', icon: '🌟' },
    { id: 'fractions', label: 'भिन्न व % (Fractions)', icon: '📊' },
    { id: 'vedic', label: 'वैदिक व बेस (Vedic)', icon: '🧠' },
    { id: 'subtraction', label: '100 घटाव (Base 100)', icon: '➖' },
    { id: 'mult_square', label: 'वर्ग & गुणा (Square & ×)', icon: '⚡' },
    { id: 'reflex', label: 'रिफ्लेक्स & IQ (Reflex)', icon: '🎯' },
  ];

  const filteredModes = GAME_MODES.filter((m) =>
    selectedCategory === 'all' ? true : m.category === selectedCategory
  );

  return (
    <div
      id="mode-selector-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="mode-selector-modal"
        className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white leading-tight">माइंड वर्कआउट मोड चुनें</h2>
              <p className="text-xs text-slate-400">Choose Mind Workout Drill</p>
            </div>
          </div>
          <button
            id="close-mode-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="p-3 border-b border-slate-800/80 bg-slate-900/50 flex gap-1.5 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Modes Grid */}
        <div className="p-4 overflow-y-auto space-y-2.5 max-h-[60vh]">
          {filteredModes.map((mode) => {
            const isActive = mode.id === currentModeId;
            return (
              <div
                key={mode.id}
                id={`mode-card-${mode.id}`}
                onClick={() => {
                  onSelectMode(mode.id);
                  onClose();
                }}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer text-left relative group ${
                  isActive
                    ? 'bg-sky-950/40 border-sky-400 shadow-md shadow-sky-900/30 ring-1 ring-sky-400/50'
                    : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-100 text-sm sm:text-base group-hover:text-sky-300 transition-colors">
                      {mode.nameHi}
                    </span>
                    {mode.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {mode.badge}
                      </span>
                    )}
                  </div>
                  {isActive && (
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-sky-500 text-slate-950 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> सक्रिय
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 font-medium line-clamp-1">{mode.hintHi}</p>

                <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3 text-slate-500" />
                    <span>{mode.nameEn}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/40 text-center">
          <p className="text-xs text-slate-400">
            💡 टिप: हर मोड आपके दिमाग के अलग हिस्से और न्यूरल स्पीड को तेज़ करता है!
          </p>
        </div>
      </div>
    </div>
  );
};
