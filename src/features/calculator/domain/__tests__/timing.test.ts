import { describe, expect, it } from "vitest";

import { NOTE_DENOMINATORS } from "../note-values";
import {
  beatDurationMs,
  calculateDelayRows,
  calculateReverbRows,
  lfoFrequencyHz,
} from "../timing";

const BPM = 120;

function delayRow(label: string) {
  const row = calculateDelayRows(BPM).find((candidate) => candidate.note.label === label);
  if (!row) throw new Error(`No delay row for ${label}`);
  return row;
}

function reverbRow(id: string) {
  const row = calculateReverbRows(BPM).find((candidate) => candidate.preset.id === id);
  if (!row) throw new Error(`No reverb row for ${id}`);
  return row;
}

describe("beatDurationMs", () => {
  it("returns the quarter-note length for a tempo", () => {
    expect(beatDurationMs(120)).toBe(500);
    expect(beatDurationMs(60)).toBe(1000);
  });
});

describe("lfoFrequencyHz", () => {
  it("is the reciprocal of the period in seconds", () => {
    expect(lfoFrequencyHz(500)).toBe(2);
    expect(lfoFrequencyHz(2000)).toBe(0.5);
  });
});

describe("calculateDelayRows", () => {
  it("lists every note value from 1/1 to 1/512 in order", () => {
    expect(calculateDelayRows(BPM).map((row) => row.note.denominator)).toEqual([
      ...NOTE_DENOMINATORS,
    ]);
  });

  it("derives straight, dotted and triplet times from the beat", () => {
    const quarter = delayRow("1/4");
    expect(quarter.straight.milliseconds).toBe(500);
    expect(quarter.dotted.milliseconds).toBe(750);
    expect(quarter.triplet.milliseconds).toBeCloseTo(333.333, 3);

    const whole = delayRow("1/1");
    expect(whole.straight.milliseconds).toBe(2000);
    expect(whole.dotted.milliseconds).toBe(3000);
  });

  it("pairs every delay time with its LFO frequency", () => {
    const eighth = delayRow("1/8");
    expect(eighth.straight.milliseconds).toBe(250);
    expect(eighth.straight.hertz).toBe(4);
    expect(eighth.dotted.hertz).toBeCloseTo(2.6667, 4);
    expect(eighth.triplet.hertz).toBe(6);
  });

  it("halves the duration at every step down the table", () => {
    const rows = calculateDelayRows(BPM);
    for (let index = 1; index < rows.length; index += 1) {
      expect(rows[index].straight.milliseconds).toBeCloseTo(
        rows[index - 1].straight.milliseconds / 2,
        10,
      );
    }
  });
});

describe("calculateReverbRows", () => {
  it("matches the published preset timings at 120 BPM", () => {
    expect(reverbRow("tight-ambience")).toMatchObject({
      preDelayMs: 3.90625,
      decayMs: 496.09375,
      totalMs: 500,
    });
    expect(reverbRow("small-room")).toMatchObject({
      preDelayMs: 15.625,
      decayMs: 984.375,
      totalMs: 1000,
    });
    expect(reverbRow("large-room")).toMatchObject({
      preDelayMs: 31.25,
      decayMs: 1968.75,
      totalMs: 2000,
    });
    expect(reverbRow("hall")).toMatchObject({
      preDelayMs: 62.5,
      decayMs: 3937.5,
      totalMs: 4000,
    });
  });

  it("keeps pre-delay plus decay equal to the total", () => {
    for (const row of calculateReverbRows(97)) {
      expect(row.preDelayMs + row.decayMs).toBeCloseTo(row.totalMs, 10);
    }
  });
});
