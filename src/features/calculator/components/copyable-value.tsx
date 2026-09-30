"use client";

import { toast } from "@heroui/react";

import { formatDecimal } from "@/lib/format";

type CopyableValueProps = {
  value: number;
  unit: "ms" | "Hz";
};

export function CopyableValue({ value, unit }: CopyableValueProps) {
  const text = formatDecimal(value);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard", {
        description: `${text} ${unit}`,
        timeout: 1500,
      });
    } catch {
      toast.danger("Could not copy to clipboard");
    }
  }

  return (
    <span className="whitespace-nowrap tabular-nums">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${text} ${unit}`}
        className="cursor-copy rounded-xs text-foreground transition-colors duration-300 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {text}
      </button>{" "}
      <span className="text-muted">{unit}</span>
    </span>
  );
}
