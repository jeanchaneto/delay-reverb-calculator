import { describe, expect, it } from "vitest";

import { BPM_RANGE, isValidBpm, parseBpm } from "../bpm";

describe("parseBpm", () => {
  it("accepts integers and decimals inside the range", () => {
    expect(parseBpm("120")).toBe(120);
    expect(parseBpm(" 90.5 ")).toBe(90.5);
    expect(parseBpm(String(BPM_RANGE.min))).toBe(BPM_RANGE.min);
    expect(parseBpm(String(BPM_RANGE.max))).toBe(BPM_RANGE.max);
  });

  it("rejects empty, non-numeric and out-of-range input", () => {
    expect(parseBpm("")).toBeNull();
    expect(parseBpm("abc")).toBeNull();
    expect(parseBpm("0")).toBeNull();
    expect(parseBpm("-5")).toBeNull();
    expect(parseBpm("1000")).toBeNull();
  });
});

describe("isValidBpm", () => {
  it("rejects non-finite numbers", () => {
    expect(isValidBpm(Number.NaN)).toBe(false);
    expect(isValidBpm(Number.POSITIVE_INFINITY)).toBe(false);
  });
});
