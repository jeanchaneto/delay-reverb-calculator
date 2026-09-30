import {
  NOTE_MODIFIER_FACTORS,
  NOTE_VALUES,
  type NoteModifier,
  type NoteValue,
} from "./note-values";
import { REVERB_PRESETS, type ReverbPreset } from "./reverb-presets";

const MS_PER_MINUTE = 60_000;
const MS_PER_SECOND = 1_000;

export type DelayTiming = {
  milliseconds: number;
  /** LFO rate whose period equals the delay time. */
  hertz: number;
};

export type DelayRow = { note: NoteValue } & Record<NoteModifier, DelayTiming>;

export type ReverbRow = {
  preset: ReverbPreset;
  preDelayMs: number;
  decayMs: number;
  totalMs: number;
};

export type CalculatorResults = {
  delays: DelayRow[];
  reverbs: ReverbRow[];
};

export function beatDurationMs(bpm: number): number {
  return MS_PER_MINUTE / bpm;
}

export function noteDurationMs(
  bpm: number,
  beats: number,
  modifier: NoteModifier = "straight",
): number {
  return beatDurationMs(bpm) * beats * NOTE_MODIFIER_FACTORS[modifier];
}

export function lfoFrequencyHz(durationMs: number): number {
  return MS_PER_SECOND / durationMs;
}

function delayTiming(
  bpm: number,
  beats: number,
  modifier: NoteModifier,
): DelayTiming {
  const milliseconds = noteDurationMs(bpm, beats, modifier);
  return { milliseconds, hertz: lfoFrequencyHz(milliseconds) };
}

export function calculateDelayRows(bpm: number): DelayRow[] {
  return NOTE_VALUES.map((note) => ({
    note,
    straight: delayTiming(bpm, note.beats, "straight"),
    dotted: delayTiming(bpm, note.beats, "dotted"),
    triplet: delayTiming(bpm, note.beats, "triplet"),
  }));
}

export function calculateReverbRows(bpm: number): ReverbRow[] {
  return REVERB_PRESETS.map((preset) => {
    const totalMs = noteDurationMs(bpm, preset.totalBeats);
    const preDelayMs = noteDurationMs(bpm, preset.preDelayBeats);
    return { preset, preDelayMs, decayMs: totalMs - preDelayMs, totalMs };
  });
}

export function calculateTimings(bpm: number): CalculatorResults {
  return {
    delays: calculateDelayRows(bpm),
    reverbs: calculateReverbRows(bpm),
  };
}
