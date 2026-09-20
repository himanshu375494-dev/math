import React, { useState } from 'react';
import {
  Zap,
  Brain,
  Hash,
  Box,
  Flame,
  Plus,
  Percent,
  HelpCircle,
  Sparkles,
  Trophy,
  Calculator,
  Compass,
  Clock,
} from 'lucide-react';
import { SessionStats, SpeedDifficulty } from '../types';

export interface ModeCardInfo {
  id: string;
  category: 'vedic' | 'fractions' | 'squares' | 'subtraction' | 'sprint' | 'addition';
  name: string;
  example: string;
  badge: string;
  icon: React.ReactNode;
  color: string;
}

const MODES_DATA: ModeCardInfo[] = [
  // --- भिन्न व प्रतिशत (अत्यंत महत्वपूर्ण) ---
  {
    id: 'fraction-to-percent',
    category: 'fractions',
    name: 'भिन्न से प्रतिशत',
    example: '1/6 = 16.67%',
    badge: 'SSC/Bank Hit',
    icon: <Percent className="w-5 h-5 text-amber-400" />,
    color: 'border-amber-500/40 hover:border-amber-400 hover:bg-amber-950/25',
  },
  {
    id: 'percent-complement',
    category: 'fractions',
    name: 'प्रतिशत कॉम्प्लिमेंट',
    example: '100 - 37.5%',
    badge: '100 - %',
    icon: <Percent className="w-5 h-5 text-lime-400" />,
    color: 'border-lime-500/30 hover:border-lime-400 hover:bg-lime-950/20',
  },

  // --- वैदिक व बेस गुणा ---
  {
    id: 'half-double-mult',
    category: 'vedic',
    name: 'हाफ व डबल गुणा',
    example: '16 × 35 = 8 × 70',
    badge: '÷2 ×2, ÷4, ÷8',
    icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
    color: 'border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-950/25',
  },
  {
    id: 'base-100-mult',
    category: 'vedic',
    name: '100 बेस गुणा',
    example: '104 × 107 = ?',
    badge: '100 बेस',
    icon: <Calculator className="w-5 h-5 text-amber-400" />,
    color: 'border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/20',
  },
  {
    id: 'base-1000-mult',
    category: 'vedic',
    name: '1000 बेस गुणा',
    example: '1004 × 1007 = ?',
    badge: '1000 बेस',
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    color: 'border-purple-500/30 hover:border-purple-400 hover:bg-purple-950/20',
  },
  {
    id: 'mult-9-series',
    category: 'vedic',
    name: '9, 99, 999 से गुणा',
    example: '47 × 99 = 4653',
    badge: 'एक न्यून',
    icon: <Calculator className="w-5 h-5 text-red-400" />,
    color: 'border-red-500/30 hover:border-red-400 hover:bg-red-950/20',
  },
  {
    id: 'criss-cross-2x2',
    category: 'vedic',
    name: 'क्रॉस गुणा 2×2',
    example: '23 × 41 = 943',
    badge: 'उर्ध्व-तिर्यक',
    icon: <Zap className="w-5 h-5 text-yellow-300" />,
    color: 'border-yellow-500/30 hover:border-yellow-400 hover:bg-yellow-950/20',
  },
  {
    id: 'random-2digit-mult',
    category: 'vedic',
    name: 'रैंडम 2-अंक × 2-अंक',
    example: '47 × 36 = 1692',
    badge: 'रैंडम 2D × 2D',
    icon: <Sparkles className="w-5 h-5 text-amber-300" />,
    color: 'border-amber-500/40 hover:border-amber-400 hover:bg-amber-950/25',
  },
  {
    id: 'mult-11',
    category: 'vedic',
    name: '11 से त्वरित गुणा',
    example: '67 × 11 = ?',
    badge: '× 11 ट्रिक',
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
    color: 'border-yellow-500/30 hover:border-yellow-400 hover:bg-yellow-950/20',
  },
  {
    id: 'same-tens-10',
    category: 'vedic',
    name: 'इकाई योग 10 गुणा',
    example: '64 × 66 = ?',
    badge: 'एकाधिकेन',
    icon: <Compass className="w-5 h-5 text-teal-400" />,
    color: 'border-teal-500/30 hover:border-teal-400 hover:bg-teal-950/20',
  },
  {
    id: 'mult-25-50',
    category: 'vedic',
    name: '25 व 50 से गुणा',
    example: '48 × 25 = ?',
    badge: 'हाफ-डबल',
    icon: <Sparkles className="w-5 h-5 text-lime-400" />,
    color: 'border-lime-500/30 hover:border-lime-400 hover:bg-lime-950/20',
  },

  // --- वर्ग, क्यूब व मूल ---
  {
    id: 'cube-root',
    category: 'squares',
    name: 'घनमूल (∛X)',
    example: '∛2197 = 13',
    badge: 'वैदिक घनमूल',
    icon: <Box className="w-5 h-5 text-indigo-400" />,
    color: 'border-indigo-500/40 hover:border-indigo-400 hover:bg-indigo-950/25',
  },
  {
    id: 'square-root',
    category: 'squares',
    name: 'वर्गमूल (√X)',
    example: '√576 = 24',
    badge: 'परफेक्ट रूट',
    icon: <Compass className="w-5 h-5 text-pink-400" />,
    color: 'border-pink-500/30 hover:border-pink-400 hover:bg-pink-950/20',
  },
  {
    id: 'unit-5-square',
    category: 'squares',
    name: 'इकाई 5 वर्ग (X5²)',
    example: '75² = 5625',
    badge: '35², 85²',
    icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
    color: 'border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/20',
  },
  {
    id: 'squares-50',
    category: 'squares',
    name: '50 बेस वर्ग',
    example: '54² = 2916',
    badge: '41² - 59²',
    icon: <Zap className="w-5 h-5 text-sky-400" />,
    color: 'border-sky-500/30 hover:border-sky-400 hover:bg-sky-950/20',
  },
  {
    id: 'squares',
    category: 'squares',
    name: 'वर्ग (11² - 40²)',
    example: '24² = 576',
    badge: 'कोर स्क्वेयर्स',
    icon: <Box className="w-5 h-5 text-cyan-400" />,
    color: 'border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/20',
  },
  {
    id: 'cubes',
    category: 'squares',
    name: 'क्यूब (1³ - 15³)',
    example: '12³ = 1728',
    badge: '1³ - 15³',
    icon: <Box className="w-5 h-5 text-blue-400" />,
    color: 'border-blue-500/30 hover:border-blue-400 hover:bg-blue-950/20',
  },

  // --- घटाव व रिफ्लेक्स ---
  {
    id: 'vedic-1000',
    category: 'subtraction',
    name: '1000 - XYZ',
    example: '1000 - 468 = ?',
    badge: 'वैदिक बेस',
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    color: 'border-purple-500/30 hover:border-purple-400 hover:bg-purple-950/20',
  },
  {
    id: 'reflex-traps',
    category: 'subtraction',
    name: 'रिफ्लेक्स ट्रैप',
    example: '100 - 73 = 27',
    badge: 'स्पीड रिफ्लेक्स',
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    color: 'border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/20',
  },
  {
    id: 'hard-single',
    category: 'subtraction',
    name: '100 - X',
    example: '100 - 47 = ?',
    badge: 'बेसिक घटाव',
    icon: <Hash className="w-5 h-5 text-sky-400" />,
    color: 'border-sky-500/30 hover:border-sky-400 hover:bg-sky-950/20',
  },
  {
    id: 'decimal',
    category: 'subtraction',
    name: 'दशमलव (.00)',
    example: '100 - 34.65',
    badge: 'सटीकता',
    icon: <Hash className="w-5 h-5 text-blue-400" />,
    color: 'border-blue-500/30 hover:border-blue-400 hover:bg-blue-950/20',
  },
  {
    id: 'double',
    category: 'subtraction',
    name: '100 - A - B',
    example: '100 - 24 - 38',
    badge: 'डबल माइनस',
    icon: <Hash className="w-5 h-5 text-indigo-400" />,
    color: 'border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-950/20',
  },
  {
    id: 'missing-number',
    category: 'subtraction',
    name: 'मिसिंग नंबर (?)',
    example: '100 - ? = 37',
    badge: 'रिवर्स माइंड',
    icon: <HelpCircle className="w-5 h-5 text-amber-300" />,
    color: 'border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/20',
  },

  // --- नए मोड: भिन्न, प्रतिशत व वैदिक ट्रिक्स ---
  {
    id: 'reverse-percentage',
    category: 'fractions',
    name: 'रिवर्स प्रतिशत',
    example: '64% of 25 = 16',
    badge: 'A% of B = B% of A',
    icon: <Percent className="w-5 h-5 text-emerald-400" />,
    color: 'border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/20',
  },
  {
    id: 'percent-split',
    category: 'fractions',
    name: 'प्रतिशत स्प्लिट',
    example: '15% of 240 = 36',
    badge: '10% ± 1%',
    icon: <Percent className="w-5 h-5 text-cyan-400" />,
    color: 'border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/20',
  },
  {
    id: 'successive-percent',
    category: 'fractions',
    name: 'क्रमागत % (AB नियम)',
    example: '+20% व +10% = 32%',
    badge: 'a + b + ab/100',
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    color: 'border-purple-500/30 hover:border-purple-400 hover:bg-purple-950/20',
  },
  {
    id: 'diff-of-squares',
    category: 'vedic',
    name: 'वर्गों का अंतर (a² - b²)',
    example: '53 × 47 = 2491',
    badge: 'a² - b²',
    icon: <Zap className="w-5 h-5 text-yellow-400" />,
    color: 'border-yellow-500/30 hover:border-yellow-400 hover:bg-yellow-950/20',
  },
  {
    id: 'consecutive-mult',
    category: 'vedic',
    name: 'क्रमागत गुणा (n × n+1)',
    example: '24 × 25 = 600',
    badge: 'n² + n',
    icon: <Calculator className="w-5 h-5 text-amber-400" />,
    color: 'border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/20',
  },
  {
    id: 'base-200-500',
    category: 'vedic',
    name: '200 व 500 बेस गुणा',
    example: '204 × 206 = 42024',
    badge: '200/500 बेस',
    icon: <Brain className="w-5 h-5 text-blue-400" />,
    color: 'border-blue-500/30 hover:border-blue-400 hover:bg-blue-950/20',
  },
  {
    id: 'tables-12-19',
    category: 'squares',
    name: '12 से 19 पहाड़े',
    example: '17 × 7 = 119',
    badge: '12–19 पहाड़े',
    icon: <Zap className="w-5 h-5 text-rose-400" />,
    color: 'border-rose-500/30 hover:border-rose-400 hover:bg-rose-950/20',
  },
  {
    id: 'split-mult-3x1',
    category: 'squares',
    name: '3-अंक × 1-अंक स्प्लिट',
    example: '342 × 4 = 1368',
    badge: '3D × 1D',
    icon: <Calculator className="w-5 h-5 text-teal-400" />,
    color: 'border-teal-500/30 hover:border-teal-400 hover:bg-teal-950/20',
  },
  {
    id: 'div-5-25',
    category: 'sprint',
    name: '5 व 25 से त्वरित भाग',
    example: '342 ÷ 5 = 68.4',
    badge: '÷5, ÷25',
    icon: <Sparkles className="w-5 h-5 text-lime-400" />,
    color: 'border-lime-500/30 hover:border-lime-400 hover:bg-lime-950/20',
  },
  {
    id: 'digital-root',
    category: 'sprint',
    name: 'डिजिटल सम / बीजांक',
    example: '3478 ➔ 4',
    badge: 'बीजांक 1-9',
    icon: <Hash className="w-5 h-5 text-indigo-400" />,
    color: 'border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-950/20',
  },
  {
    id: 'speed-kmh-ms',
    category: 'sprint',
    name: 'गति कंवर्जन (km/h ➔ m/s)',
    example: '72 km/h = 20 m/s',
    badge: '× 5/18',
    icon: <Compass className="w-5 h-5 text-sky-400" />,
    color: 'border-sky-500/30 hover:border-sky-400 hover:bg-sky-950/20',
  },

  // --- स्पीड स्प्रिंट ---
  {
    id: 'mult-speed',
    category: 'sprint',
    name: 'गुणा (A × B)',
    example: '18 × 7 = ?',
    badge: '2-अंक × 1',
    icon: <Calculator className="w-5 h-5 text-rose-400" />,
    color: 'border-rose-500/30 hover:border-rose-400 hover:bg-rose-950/20',
  },
  {
    id: 'lightning-add',
    category: 'addition',
    name: 'जोड़ (A + B)',
    example: '68 + 77 = ?',
    badge: 'तेज जोड़',
    icon: <Plus className="w-5 h-5 text-teal-400" />,
    color: 'border-teal-500/30 hover:border-teal-400 hover:bg-teal-950/20',
  },

  // --- जोड़ स्पेशल (Addition Drills) ---
  {
    id: 'add-transposed',
    category: 'addition',
    name: 'उल्टे अंकों का जोड़ (ab + ba)',
    example: '47 + 74 = 121',
    badge: '11 × (a+b)',
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    color: 'border-amber-500/30 hover:border-amber-400 hover:bg-amber-950/20',
  },
  {
    id: 'add-compensation',
    category: 'addition',
    name: 'राउंड-ऑफ जोड़ (+29, +98)',
    example: '67 + 29 = 96',
    badge: 'राउंड-ऑफ (+9,+8)',
    icon: <Plus className="w-5 h-5 text-emerald-400" />,
    color: 'border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/20',
  },
  {
    id: 'add-cross-100',
    category: 'addition',
    name: '100 पार ब्रिजिंग जोड़',
    example: '87 + 16 = 103',
    badge: 'ब्रिजिंग जोड़',
    icon: <Compass className="w-5 h-5 text-cyan-400" />,
    color: 'border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/20',
  },
  {
    id: 'add-3d-2d',
    category: 'addition',
    name: '3-अंक + 2-अंक जोड़',
    example: '348 + 75 = 423',
    badge: 'बाएं से दाएं',
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    color: 'border-purple-500/30 hover:border-purple-400 hover:bg-purple-950/20',
  },
  {
    id: 'add-running-sum',
    category: 'addition',
    name: 'रनिंग सम (3-4 संख्याएं)',
    example: '14+26+18+32 = 90',
    badge: 'DI स्पेशल',
    icon: <Calculator className="w-5 h-5 text-blue-400" />,
    color: 'border-blue-500/30 hover:border-blue-400 hover:bg-blue-950/20',
  },
  {
    id: 'add-decimal',
    category: 'addition',
    name: 'दशमलव जोड़ रिफ्लेक्स',
    example: '14.6 + 8.7 = 23.3',
    badge: 'दशमलव जोड़',
    icon: <Hash className="w-5 h-5 text-lime-400" />,
    color: 'border-lime-500/30 hover:border-lime-400 hover:bg-lime-950/20',
  },

  {
    id: 'mix-blitz',
    category: 'sprint',
    name: 'मिक्स ब्लिट्ज़',
    example: 'सभी 43 मोड मिक्स',
    badge: 'महा-चैलेंज',
    icon: <Flame className="w-5 h-5 text-orange-400" />,
    color: 'border-orange-500/30 hover:border-orange-400 hover:bg-orange-950/20',
  },
];

const DIFFICULTY_LABELS: Record<
  SpeedDifficulty,
  { label: string; badgeColor: string }
> = {
  easy: {
    label: 'आसान (5s)',
    badgeColor: 'bg-emerald-950/80 border-emerald-700/60 text-emerald-300',
  },
  medium: {
    label: 'मीडियम (3.5s)',
    badgeColor: 'bg-sky-950/80 border-sky-700/60 text-sky-300',
  },
  god: {
    label: 'गॉड मोड (2s)',
    badgeColor: 'bg-rose-950/80 border-rose-700/60 text-rose-300',
  },
  zen: {
    label: 'टाइमर बंद (Zen)',
    badgeColor: 'bg-purple-950/80 border-purple-700/60 text-purple-300',
  },
};

interface HomePageProps {
  onSelectMode: (modeId: string) => void;
  stats: SessionStats;
  difficulty: SpeedDifficulty;
  onToggleDifficulty: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectMode,
  stats,
  difficulty,
  onToggleDifficulty,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'सभी (43)' },
    { id: 'addition', label: 'जोड़ स्पेशल' },
    { id: 'fractions', label: 'भिन्न व प्रतिशत' },
    { id: 'vedic', label: 'बेस व वैदिक गुणा' },
    { id: 'squares', label: 'वर्ग, क्यूब व मूल' },
    { id: 'subtraction', label: 'घटाव व रिफ्लेक्स' },
    { id: 'sprint', label: 'स्प्रिंट' },
  ];

  const filteredModes =
    selectedCategory === 'all'
      ? MODES_DATA
      : MODES_DATA.filter((m) => m.category === selectedCategory);

  const diffConfig = DIFFICULTY_LABELS[difficulty];

  return (
    <div className="w-full max-w-[550px] bg-[#151e2e] border border-[#283548] rounded-[24px] shadow-2xl p-4 sm:p-5 flex flex-col">
      {/* Top Bar: Brand, Speed Selector & Solved Counter */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#283548]">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
            Speed Math <span className="text-xs text-sky-400 font-bold px-2 py-0.5 rounded-full bg-sky-950/80 border border-sky-800/60">43 Modes</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">मोड चुनें और अपनी मेंटल स्पीड बढ़ाएं</p>
        </div>

        <div className="flex items-center gap-2">
          {/* Speed Toggle Button */}
          <button
            id="home-speed-toggle-btn"
            onClick={onToggleDifficulty}
            title="क्लिक करके टाइमर की गति बदलें"
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer hover:opacity-90 active:scale-95 ${diffConfig.badgeColor}`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{diffConfig.label}</span>
          </button>

          {/* Solved Count */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-300 font-medium">हल:</span>
            <span className="font-bold text-sky-400">{stats.solved}</span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-sky-600 text-white shadow-sm shadow-sky-500/30'
                  : 'bg-slate-800/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Mode Selection Grid */}
      <div className="grid grid-cols-2 gap-2.5 max-h-[64vh] overflow-y-auto pr-1 pb-1">
        {filteredModes.map((mode) => (
          <button
            key={mode.id}
            id={`home-mode-${mode.id}`}
            onClick={() => onSelectMode(mode.id)}
            className={`flex flex-col p-3 rounded-xl bg-slate-800/60 border text-left transition-all duration-150 cursor-pointer group active:scale-[0.98] ${mode.color}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                {mode.icon}
              </div>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-700/60">
                {mode.badge}
              </span>
            </div>
            <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
              {mode.name}
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1">
              {mode.example}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
