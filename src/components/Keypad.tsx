import React, { useRef } from 'react';
import { Delete } from 'lucide-react';

interface KeypadProps {
  onKeyPress: (key: string) => void;
  hasDecimal: boolean;
}

export const Keypad: React.FC<KeypadProps> = ({ onKeyPress, hasDecimal }) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'DEL'];
  const lastPressRef = useRef<{ key: string; time: number }>({ key: '', time: 0 });

  const handlePress = (key: string, e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const now = Date.now();
    // Prevent duplicate triggers if both pointerdown and click fire in rapid succession (<120ms)
    if (lastPressRef.current.key === key && now - lastPressRef.current.time < 120) {
      return;
    }
    lastPressRef.current = { key, time: now };
    onKeyPress(key);
  };

  return (
    <div id="math-keypad" className="grid grid-cols-3 gap-2.5 w-full max-w-[380px] mx-auto select-none touch-manipulation">
      {keys.map((key) => {
        const isDel = key === 'DEL';
        const isDot = key === '.';
        const isDotDisabled = isDot && !hasDecimal;

        return (
          <button
            key={key}
            type="button"
            id={`key-${key === '.' ? 'dot' : key.toLowerCase()}`}
            disabled={isDotDisabled}
            onPointerDown={(e) => {
              if (isDotDisabled) return;
              handlePress(key, e);
            }}
            onClick={(e) => {
              if (isDotDisabled) return;
              handlePress(key, e);
            }}
            className={`
              h-14 sm:h-16 text-2xl font-bold rounded-xl flex items-center justify-center
              transition-all duration-75 active:scale-95 outline-none cursor-pointer border
              touch-manipulation select-none
              ${
                isDel
                  ? 'bg-rose-950/40 text-rose-300 border-rose-800/50 hover:bg-rose-900/50 active:bg-rose-700 active:text-white'
                  : isDotDisabled
                  ? 'bg-slate-900/40 text-slate-600 border-slate-800/40 cursor-not-allowed opacity-30'
                  : 'bg-slate-800/80 text-slate-100 border-slate-700/60 hover:bg-slate-700/80 active:bg-sky-500 active:text-slate-950'
              }
              shadow-sm hover:shadow-cyan-950/20
            `}
          >
            {isDel ? <Delete className="w-6 h-6 stroke-[2.5]" /> : key}
          </button>
        );
      })}
    </div>
  );
};

