import { Reveal } from "@/components/reveal";
import { CalculatorView } from "@/features/calculator/view/calculator-view";
import { GuidesAccordion } from "@/features/guides/components/guides-accordion";

export default function HomePage() {
  return (
    <main className="flex-1 bg-linear-to-t from-accent/10 to-background py-24 lg:py-32">
      <div className="bg-radial from-accent/15 to-transparent to-80%">
        <Reveal className="mx-auto max-w-2xl px-6 text-center">
          <h1 className="bg-linear-to-b from-accent to-accent/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Delay &amp; Reverb
            <br />
            Calculator
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Enter your BPM below to discover the optimal reverb timings and
            precise delay times with their corresponding LFO frequencies for
            your track.
            <br />
            Use and abuse but let your ears be the final judge.
          </p>
        </Reveal>
        <CalculatorView />
      </div>
      <section
        aria-labelledby="guides-heading"
        className="mx-auto mt-16 max-w-4xl px-6 lg:px-0"
      >
        <Reveal>
          <h2 id="guides-heading" className="sr-only">
            Guides
          </h2>
          <GuidesAccordion />
        </Reveal>
      </section>
    </main>
  );
}
