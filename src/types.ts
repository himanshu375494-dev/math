export type ModeCategory = 'all' | 'subtraction' | 'vedic' | 'mult_square' | 'reflex' | 'fractions' | 'addition';

export type SpeedDifficulty = 'easy' | 'medium' | 'god' | 'zen';

export interface GameMode {
  id: string;
  category: ModeCategory;
  nameHi: string;
  nameEn: string;
  badge?: string;
  defaultTimeLimitMs: {
    easy: number;
    medium: number;
    god: number;
    zen?: number;
  };
  hasDecimal?: boolean;
  hintHi: string;
  hintEn: string;
}

export interface GeneratedProblem {
  problemText: string;
  answerText: string;
  acceptableAnswers?: string[];
  hintText?: string;
  typeBadge?: string;
}

export interface SessionStats {
  solved: number;
  wrong: number;
  currentStreak: number;
  bestStreak: number;
  totalTimeMs: number;
}
