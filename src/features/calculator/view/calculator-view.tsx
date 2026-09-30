"use client";

import { useState } from "react";

import { Reveal } from "@/components/reveal";

import { BpmField } from "../components/bpm-field";
import { CalculatorSection } from "../components/calculator-section";
import { DelayTable } from "../components/delay-table";
import { ReverbTable } from "../components/reverb-table";
import { DEFAULT_BPM, parseBpm } from "../domain/bpm";
import { calculateTimings } from "../domain/timing";

export function CalculatorView() {
  const [bpmInput, setBpmInput] = useState(String(DEFAULT_BPM));
  const [bpm, setBpm] = useState(DEFAULT_BPM);
  const results = calculateTimings(bpm);

  function handleBpmChange(value: string) {
    setBpmInput(value);
    const parsed = parseBpm(value);
    if (parsed !== null) setBpm(parsed);
  }

  return (
    <>
      <Reveal delay={0.2} className="mx-auto mt-10 max-w-2xl px-6">
        <BpmField
          value={bpmInput}
          isInvalid={parseBpm(bpmInput) === null}
          onChange={handleBpmChange}
        />
      </Reveal>
      <CalculatorSection title="Reverb times">
        <ReverbTable rows={results.reverbs} />
      </CalculatorSection>
      <CalculatorSection title="Delay times & LFO frequencies">
        <DelayTable rows={results.delays} />
      </CalculatorSection>
    </>
  );
}
