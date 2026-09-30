"use client";

import { FieldError, Input, Label, TextField } from "@heroui/react";

import { BPM_RANGE } from "../domain/bpm";

type BpmFieldProps = {
  value: string;
  isInvalid: boolean;
  onChange: (value: string) => void;
};

export function BpmField({ value, isInvalid, onChange }: BpmFieldProps) {
  return (
    <TextField
      name="bpm"
      type="number"
      inputMode="decimal"
      value={value}
      onChange={onChange}
      isInvalid={isInvalid}
      className="flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2"
    >
      <Label className="text-lg text-foreground">BPM of your track</Label>
      <Input
        min={BPM_RANGE.min}
        max={BPM_RANGE.max}
        step="any"
        className="w-28 text-center text-lg"
      />
      <FieldError className="basis-full text-center">
        Enter a tempo between {BPM_RANGE.min} and {BPM_RANGE.max} BPM
      </FieldError>
    </TextField>
  );
}
