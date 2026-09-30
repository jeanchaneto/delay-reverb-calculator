import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";

type CalculatorSectionProps = {
  title: string;
  children: ReactNode;
};

export function CalculatorSection({ title, children }: CalculatorSectionProps) {
  return (
    <section className="mx-auto mt-16 max-w-4xl px-6 lg:px-0">
      <Reveal>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}
