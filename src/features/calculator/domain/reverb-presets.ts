export type ReverbPresetId = "tight-ambience" | "small-room" | "large-room" | "hall";

export type ReverbPreset = {
  id: ReverbPresetId;
  label: string;
  /** Musical length of the whole tail, e.g. "1/4 note" or "2 bars". */
  lengthLabel: string;
  /** Total reverb time (pre-delay + decay) in quarter-note beats. */
  totalBeats: number;
  /** Pre-delay in quarter-note beats. */
  preDelayBeats: number;
};

export const REVERB_PRESETS: readonly ReverbPreset[] = [
  {
    id: "tight-ambience",
    label: "Tight Ambience",
    lengthLabel: "1/4 note",
    totalBeats: 1,
    preDelayBeats: 1 / 128,
  },
  {
    id: "small-room",
    label: "Small Room",
    lengthLabel: "1/2 note",
    totalBeats: 2,
    preDelayBeats: 1 / 32,
  },
  {
    id: "large-room",
    label: "Large Room",
    lengthLabel: "1 bar",
    totalBeats: 4,
    preDelayBeats: 1 / 16,
  },
  {
    id: "hall",
    label: "Hall",
    lengthLabel: "2 bars",
    totalBeats: 8,
    preDelayBeats: 1 / 8,
  },
];
