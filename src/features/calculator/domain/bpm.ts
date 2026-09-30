export const BPM_RANGE = { min: 1, max: 999 } as const;

export const DEFAULT_BPM = 120;

export function isValidBpm(value: number): boolean {
  return (
    Number.isFinite(value) && value >= BPM_RANGE.min && value <= BPM_RANGE.max
  );
}

/** Parses raw text input into a tempo, or null when it is not a usable BPM. */
export function parseBpm(input: string): number | null {
  const trimmed = input.trim();
  if (trimmed === "") return null;
  const value = Number(trimmed);
  return isValidBpm(value) ? value : null;
}
