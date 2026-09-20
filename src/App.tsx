import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, RotateCcw, ArrowLeft, Clock } from 'lucide-react';
import { SpeedDifficulty, SessionStats, GeneratedProblem } from './types';
import { GAME_MODES, generateProblemForMode } from './utils/problemGenerator';
import { soundFX } from './utils/audio';
import { Keypad } from './components/Keypad';
import { HomePage } from './components/HomePage';

const DIFFICULTY_CONFIG: Record<
  SpeedDifficulty,
  { label: string; shortLabel: string; badgeColor: string }
> = {
  easy: {
    label: 'आसान (5s)',
    shortLabel: '🐢 आसान (5s)',
    badgeColor: 'bg-emerald-950/80 border-emerald-700/60 text-emerald-300',
  },
  medium: {
    label: 'मीडियम (3.5s)',
    shortLabel: '⚡ मीडियम (3.5s)',
    badgeColor: 'bg-sky-950/80 border-sky-700/60 text-sky-300',
  },
  god: {
    label: 'गॉड मोड (2s)',
    shortLabel: '🔥 गॉड (2s)',
    badgeColor: 'bg-rose-950/80 border-rose-700/60 text-rose-300',
  },
  zen: {
    label: 'टाइमर बंद (Zen)',
    shortLabel: '🧘 ज़ेन (No Timer)',
    badgeColor: 'bg-purple-950/80 border-purple-700/60 text-purple-300',
  },
};

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'quiz'>('home');
  const [currentModeId, setCurrentModeId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('speedmath_mode');
      if (saved && GAME_MODES.some((m) => m.id === saved)) return saved;
    } catch {
      // fallback
    }
    return 'fraction-to-percent';
  });

  const [difficulty, setDifficulty] = useState<SpeedDifficulty>(() => {
    try {
      const saved = localStorage.getItem('speedmath_difficulty') as SpeedDifficulty;
      if (saved && ['easy', 'medium', 'god', 'zen'].includes(saved)) return saved;
    } catch {
      // fallback
    }
    return 'medium';
  });

  const [soundOn, setSoundOn] = useState<boolean>(true);

  // Problem and Input State
  const [currentProblem, setCurrentProblem] = useState<GeneratedProblem>({
    problemText: '...',
    answerText: '',
  });
  const [currentInput, setCurrentInput] = useState<string>('');
  const [displayStatus, setDisplayStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  // Direct input ref for internal/device keyboard (mobile virtual keyboard & laptop keyboard)
  const inputRef = useRef<HTMLInputElement>(null);

  // Stable references to prevent stale closures across timeouts & async intervals
  const currentModeIdRef = useRef<string>(currentModeId);
  const difficultyRef = useRef<SpeedDifficulty>(difficulty);
  const currentProblemRef = useRef<GeneratedProblem>(currentProblem);
  const currentInputRef = useRef<string>('');

  // Keep refs immediately synced
  useEffect(() => {
    currentModeIdRef.current = currentModeId;
  }, [currentModeId]);

  useEffect(() => {
    difficultyRef.current = difficulty;
  }, [difficulty]);

  useEffect(() => {
    currentProblemRef.current = currentProblem;
  }, [currentProblem]);

  // Stats
  const [stats, setStats] = useState<SessionStats>(() => {
    try {
      const saved = localStorage.getItem('speedmath_stats');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return { solved: 0, wrong: 0, currentStreak: 0, bestStreak: 0, totalTimeMs: 0 };
  });

  // Timer State
  const [timeRemaining, setTimeRemaining] = useState<number>(3500);
  const [timeLimit, setTimeLimit] = useState<number>(3500);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const problemStartTimeRef = useRef<number>(Date.now());
  const isTransitioningRef = useRef<boolean>(false);

  // Active Game Mode Object
  const currentMode = GAME_MODES.find((m) => m.id === currentModeId) || GAME_MODES[0];

  // Sync sound settings
  useEffect(() => {
    soundFX.enabled = soundOn;
  }, [soundOn]);

  // Persist stats
  useEffect(() => {
    try {
      localStorage.setItem('speedmath_stats', JSON.stringify(stats));
    } catch {
      // fallback
    }
  }, [stats]);

  // Forward ref for timeout handler to avoid stale closures in setInterval
  const handleTimeoutRef = useRef<(correctAnswer: string) => void>(() => {});

  // Generate new problem
  const spawnProblem = useCallback(
    (overrideModeId?: string, overrideDiff?: SpeedDifficulty) => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      isTransitioningRef.current = false;

      const activeModeId = overrideModeId || currentModeIdRef.current;
      const activeDiff = overrideDiff || difficultyRef.current;

      const targetMode = GAME_MODES.find((m) => m.id === activeModeId) || GAME_MODES[0];
      const limit = targetMode.defaultTimeLimitMs[activeDiff] ?? 3500;
      setTimeLimit(limit);
      setTimeRemaining(limit);

      const prob = generateProblemForMode(activeModeId);
      currentProblemRef.current = prob;
      setCurrentProblem(prob);

      currentInputRef.current = '';
      setCurrentInput('');
      setDisplayStatus('idle');

      problemStartTimeRef.current = Date.now();

      // Only start countdown timer if NOT in Zen Mode
      if (activeDiff !== 'zen' && limit > 0) {
        const step = 50;
        timerRef.current = setInterval(() => {
          setTimeRemaining((prev) => {
            if (prev <= step) {
              if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
              }
              handleTimeoutRef.current(prob.answerText);
              return 0;
            }
            return prev - step;
          });
        }, step);
      }
    },
    []
  );

  // Timeout handler
  const onTimeout = useCallback(
    (correctAnswer: string) => {
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;

      soundFX.playWrong();
      setDisplayStatus('wrong');
      currentInputRef.current = correctAnswer;
      setCurrentInput(correctAnswer);

      setStats((prev) => ({
        ...prev,
        wrong: prev.wrong + 1,
        currentStreak: 0,
      }));

      setTimeout(() => {
        spawnProblem(currentModeIdRef.current, difficultyRef.current);
      }, 900);
    },
    [spawnProblem]
  );

  // Keep handleTimeoutRef pointing to current onTimeout
  useEffect(() => {
    handleTimeoutRef.current = onTimeout;
  }, [onTimeout]);

  // Difficulty Toggle Handler
  const handleToggleDifficulty = () => {
    const sequence: SpeedDifficulty[] = ['easy', 'medium', 'god', 'zen'];
    const nextIdx = (sequence.indexOf(difficultyRef.current) + 1) % sequence.length;
    const nextDiff = sequence[nextIdx];
    setDifficulty(nextDiff);
    difficultyRef.current = nextDiff;
    try {
      localStorage.setItem('speedmath_difficulty', nextDiff);
    } catch {
      // ignore
    }
    // Re-spawn or restart timer with new limit
    spawnProblem(currentModeIdRef.current, nextDiff);
  };

  // Start Mode from Home
  const handleStartMode = (modeId: string) => {
    currentModeIdRef.current = modeId;
    setCurrentModeId(modeId);
    try {
      localStorage.setItem('speedmath_mode', modeId);
    } catch {
      // fallback
    }
    setCurrentView('quiz');
    spawnProblem(modeId, difficultyRef.current);
  };

  // Return to Home
  const handleBackToHome = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setCurrentView('home');
  };

  // Helper to normalize Devanagari & standard digits
  const normalizeChar = (char: string): string => {
    const devanagariMap: Record<string, string> = {
      '०': '0', '१': '1', '२': '2', '३': '3', '४': '4',
      '५': '5', '६': '6', '७': '7', '८': '8', '९': '9',
    };
    return devanagariMap[char] || char;
  };

  // Keypress handler (On-screen Keypad, Physical Keyboard & Internal Virtual Keyboard)
  const handleKeyPress = useCallback(
    (keyInput: string) => {
      if (isTransitioningRef.current) return;

      const activeMode =
        GAME_MODES.find((m) => m.id === currentModeIdRef.current) || GAME_MODES[0];

      const key = normalizeChar(keyInput);

      if (key === 'DEL' || key === 'Backspace') {
        const updated = currentInputRef.current.slice(0, -1);
        currentInputRef.current = updated;
        setCurrentInput(updated);
        return;
      }

      if (key === '.' || key === ',') {
        if (!activeMode.hasDecimal) return;
        if (currentInputRef.current.includes('.')) return;
        const updated = currentInputRef.current === '' ? '0.' : currentInputRef.current + '.';
        currentInputRef.current = updated;
        setCurrentInput(updated);
        return;
      }

      // Allow digits 0-9
      if (key < '0' || key > '9') return;

      // Check input length cap
      if (currentInputRef.current.length >= 8) return;

      const nextInput = currentInputRef.current + key;
      currentInputRef.current = nextInput;
      setCurrentInput(nextInput);

      const expected = currentProblemRef.current.answerText;
      if (!expected) return;

      const isCorrect =
        nextInput === expected ||
        Boolean(currentProblemRef.current.acceptableAnswers?.includes(nextInput));

      // Direct synchronous evaluation to eliminate race conditions
      if (isCorrect) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        isTransitioningRef.current = true;

        const timeTaken = Date.now() - problemStartTimeRef.current;
        setDisplayStatus('correct');

        setStats((prev) => {
          const nextStreak = prev.currentStreak + 1;
          const nextBest = Math.max(prev.bestStreak, nextStreak);

          // Celebration confetti at milestones
          if (nextStreak === 10 || nextStreak === 25 || nextStreak === 50 || nextStreak === 100) {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.6 },
            });
          }

          soundFX.playCorrect(nextStreak);
          return {
            ...prev,
            solved: prev.solved + 1,
            currentStreak: nextStreak,
            bestStreak: nextBest,
            totalTimeMs: prev.totalTimeMs + timeTaken,
          };
        });

        setTimeout(() => {
          spawnProblem(currentModeIdRef.current, difficultyRef.current);
        }, 180);
      } else {
        const maxExpectedLen = Math.max(
          expected.length,
          ...(currentProblemRef.current.acceptableAnswers?.map((a) => a.length) || [])
        );

        if (nextInput.length >= maxExpectedLen) {
          // Wrong answer typed
          soundFX.playWrong();
          setDisplayStatus('wrong');
          setStats((prev) => ({
            ...prev,
            wrong: prev.wrong + 1,
            currentStreak: 0,
          }));

          setTimeout(() => {
            currentInputRef.current = '';
            setCurrentInput('');
            setDisplayStatus('idle');
          }, 320);
        }
      }
    },
    [spawnProblem]
  );

  // Direct typing handler for device's internal keyboard (mobile virtual keyboard + laptop keyboard)
  const handleDirectInputChange = (rawVal: string) => {
    if (isTransitioningRef.current || displayStatus === 'wrong') return;

    const activeMode =
      GAME_MODES.find((m) => m.id === currentModeIdRef.current) || GAME_MODES[0];

    // Filter and normalize characters
    let filtered = '';
    for (const char of rawVal) {
      const norm = normalizeChar(char);
      if (norm >= '0' && norm <= '9') {
        filtered += norm;
      } else if ((norm === '.' || norm === ',') && activeMode.hasDecimal && !filtered.includes('.')) {
        filtered += filtered === '' ? '0.' : '.';
      }
    }

    const nextInput = filtered.slice(0, 8);
    currentInputRef.current = nextInput;
    setCurrentInput(nextInput);

    if (!nextInput) return;

    const expected = currentProblemRef.current.answerText;
    if (!expected) return;

    const isCorrect =
      nextInput === expected ||
      Boolean(currentProblemRef.current.acceptableAnswers?.includes(nextInput));

    if (isCorrect) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      isTransitioningRef.current = true;

      const timeTaken = Date.now() - problemStartTimeRef.current;
      setDisplayStatus('correct');

      setStats((prev) => {
        const nextStreak = prev.currentStreak + 1;
        const nextBest = Math.max(prev.bestStreak, nextStreak);

        if (nextStreak === 10 || nextStreak === 25 || nextStreak === 50 || nextStreak === 100) {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
          });
        }

        soundFX.playCorrect(nextStreak);
        return {
          ...prev,
          solved: prev.solved + 1,
          currentStreak: nextStreak,
          bestStreak: nextBest,
          totalTimeMs: prev.totalTimeMs + timeTaken,
        };
      });

      setTimeout(() => {
        spawnProblem(currentModeIdRef.current, difficultyRef.current);
      }, 180);
    } else {
      const maxExpectedLen = Math.max(
        expected.length,
        ...(currentProblemRef.current.acceptableAnswers?.map((a) => a.length) || [])
      );

      if (nextInput.length >= maxExpectedLen) {
        soundFX.playWrong();
        setDisplayStatus('wrong');
        setStats((prev) => ({
          ...prev,
          wrong: prev.wrong + 1,
          currentStreak: 0,
        }));

        setTimeout(() => {
          currentInputRef.current = '';
          setCurrentInput('');
          setDisplayStatus('idle');
        }, 320);
      }
    }
  };

  // Physical Keyboard & Internal Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentView === 'home') return;

      if (e.key === 'Escape') {
        handleBackToHome();
        return;
      }

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        spawnProblem(currentModeIdRef.current, difficultyRef.current);
        return;
      }

      // Check for Numpad key codes
      if (e.code && e.code.startsWith('Numpad') && e.code.length === 7) {
        const numChar = e.code.replace('Numpad', '');
        if (numChar >= '0' && numChar <= '9') {
          e.preventDefault();
          handleKeyPress(numChar);
          return;
        }
      }

      if (e.code === 'NumpadDecimal') {
        e.preventDefault();
        handleKeyPress('.');
        return;
      }

      const key = normalizeChar(e.key);

      if (key >= '0' && key <= '9') {
        e.preventDefault();
        handleKeyPress(key);
      } else if (key === '.' || key === ',') {
        e.preventDefault();
        handleKeyPress('.');
      } else if (key === 'Backspace' || key === 'Delete') {
        e.preventDefault();
        handleKeyPress('DEL');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress, spawnProblem, currentView]);

  // Keep input focused when in quiz view for instant internal/physical keyboard response
  useEffect(() => {
    if (currentView === 'quiz') {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentView, currentProblem]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Timer Progress Calculation
  const isZen = difficulty === 'zen';
  const progressPercent = isZen
    ? 100
    : Math.max(0, Math.min(100, (timeRemaining / (timeLimit || 1)) * 100));
  const progressColor =
    progressPercent < 30 ? '#ef4444' : progressPercent < 60 ? '#f59e0b' : '#38bdf8';

  const currentDiffConfig = DIFFICULTY_CONFIG[difficulty];

  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-[#0b0f19] text-[#f8fafc] flex flex-col items-center justify-center p-3 select-none">
        <HomePage
          onSelectMode={handleStartMode}
          stats={stats}
          difficulty={difficulty}
          onToggleDifficulty={handleToggleDifficulty}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#f8fafc] flex flex-col items-center justify-center p-3 select-none">
      <div className="w-full max-w-[450px] bg-[#151e2e] border border-[#283548] rounded-[22px] shadow-2xl p-4 sm:p-5 flex flex-col">
        {/* Minimal Quiz Header */}
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#283548]">
          <button
            id="back-to-modes-btn"
            onClick={handleBackToHome}
            className="flex items-center gap-1 py-1.5 px-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-sky-400 hover:text-white transition-colors text-xs font-bold border border-slate-700/70 cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>होम</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span className="px-2 py-0.5 rounded-md bg-sky-950/80 border border-sky-800/60 text-sky-300 font-bold">
              {currentProblem.typeBadge || currentMode.badge || currentMode.nameHi}
            </span>

            {/* Speed Toggle Pill Button */}
            <button
              id="quiz-speed-toggle-btn"
              onClick={handleToggleDifficulty}
              title="स्पीड बदलने के लिए क्लिक करें"
              className={`px-2 py-0.5 rounded-md border text-[11px] font-bold transition-all cursor-pointer hover:opacity-90 active:scale-95 flex items-center gap-1 ${currentDiffConfig.badgeColor}`}
            >
              <Clock className="w-3 h-3" />
              <span>{currentDiffConfig.shortLabel}</span>
            </button>

            <span>
              <strong className="text-amber-400 font-bold">{stats.currentStreak} 🔥</strong>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              id="sound-toggle-btn"
              onClick={() => setSoundOn(!soundOn)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors cursor-pointer"
              title={soundOn ? 'आवाज़ बंद करें' : 'आवाज़ चालू करें'}
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-sky-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>
            <button
              id="skip-problem-btn"
              onClick={() => spawnProblem(currentModeIdRef.current, difficultyRef.current)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-sky-300 hover:bg-slate-800 transition-colors cursor-pointer"
              title="अगला प्रश्न"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Countdown Progress Track */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full mb-3 overflow-hidden">
          {isZen ? (
            <div className="h-full w-full bg-gradient-to-r from-purple-500/40 via-sky-500/50 to-purple-500/40 animate-pulse rounded-full" />
          ) : (
            <div
              className="h-full transition-all duration-75 ease-linear rounded-full"
              style={{
                width: `${progressPercent}%`,
                backgroundColor: progressColor,
              }}
            />
          )}
        </div>

        {/* Clean, High-Contrast Question Box */}
        <div className="py-4 my-1 flex items-center justify-center min-h-[5.2rem]">
          <div
            id="current-problem-text"
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-white text-center select-text transition-all px-2"
          >
            {currentProblem.problemText}
          </div>
        </div>

        {/* Answer Display Box with Direct Device/Internal Keyboard Support */}
        <div
          id="display-answer-box"
          onClick={() => {
            inputRef.current?.focus();
          }}
          className={`
            relative w-full h-14 sm:h-16 rounded-xl border-2 flex items-center justify-center text-3xl font-bold tracking-widest mb-3.5 transition-all cursor-text
            ${
              displayStatus === 'correct'
                ? 'border-emerald-500 bg-emerald-950/30 text-emerald-400 shadow-md shadow-emerald-900/30 animate-pulse'
                : displayStatus === 'wrong'
                ? 'border-rose-500 bg-rose-950/30 text-rose-400 animate-shake'
                : 'border-slate-700 bg-[#0b0f19] text-sky-400 hover:border-sky-500/60'
            }
          `}
        >
          {/* Visible Display */}
          <div className="flex items-center justify-center select-none pointer-events-none">
            {currentInput === '' ? (
              <span className="text-slate-500 text-3xl font-bold opacity-60">_</span>
            ) : (
              <span>{currentInput}</span>
            )}
          </div>

          {/* Real Input element to connect device internal keyboard (mobile soft keyboard & laptop keyboard) */}
          <input
            ref={inputRef}
            id="internal-device-keyboard-input"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            value={currentInput}
            onChange={(e) => handleDirectInputChange(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-text -z-0"
            aria-label="उत्तर दर्ज करें"
          />
        </div>

        {/* Custom Physical & Touch Keypad */}
        <Keypad onKeyPress={handleKeyPress} hasDecimal={!!currentMode.hasDecimal} />
      </div>
    </div>
  );
}
