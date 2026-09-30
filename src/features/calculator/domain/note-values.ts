export const NOTE_DENOMINATORS = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512] as const;

export type NoteDenominator = (typeof NOTE_DENOMINATORS)[number];

export type NoteValue = {
  denominator: NoteDenominator;
  /** Fraction as shown in the UI, e.g. "1/8". */
  label: string;
  /** Bar-relative wording, e.g. "1 bar" or "1/8 bar". */
  description: string;
  /** Length in quarter-note beats (4/4 assumed). */
  beats: number;
};

export const BEATS_PER_BAR = 4;

export const NOTE_VALUES: readonly NoteValue[] = NOTE_DENOMINATORS.map(
  (denominator) => ({
    denominator,
    label: `1/${denominator}`,
    description: denominator === 1 ? "1 bar" : `1/${denominator} bar`,
    beats: BEATS_PER_BAR / denominator,
  }),
);

export const NOTE_MODIFIERS = ["straight", "dotted", "triplet"] as const;

export type NoteModifier = (typeof NOTE_MODIFIERS)[number];

export const NOTE_MODIFIER_FACTORS: Record<NoteModifier, number> = {
  straight: 1,
  dotted: 1.5,
  triplet: 2 / 3,
};
