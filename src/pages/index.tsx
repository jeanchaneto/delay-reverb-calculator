import { calculateDelaysAndReverb } from "@/utils/calculator";
import { Input } from "@nextui-org/react";
import { useState } from "react";

import ReverbTable from "./components/ReverbTable";
import DelayTable from "./components/DelayTable";
import TutosAccordion from "./components/TutosAccordion";

export default function Home() {
  const [bpm, setBpm] = useState(120);
  const [showNotification, setShowNotification] = useState(false);

  const results = calculateDelaysAndReverb(bpm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = parseFloat(event.target.value);

    if (!isNaN(userInput)) {
      setBpm(userInput);
    }
  };

  const handleValueClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const value = event.currentTarget.textContent || "";
    navigator.clipboard.writeText(value);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 1000);
  };

  const valueProps = {
    onClick: handleValueClick,
    className: "cursor-copy ",
  };

  return (
    <div className=" py-24 lg:py-32 min-h-screen bg-gradient-radial from-primary-50 to-transparent">
      {/* Copied notification */}
      {showNotification && (
        <div className=" flex align-baseline backdrop-blur-xl border-1 border-default-500 text-default-500  z-30 rounded-xl p-2 fixed bottom-16 right-16 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Copied to Clipboard
        </div>
      )}
      <div className="relative isolate ">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tigh sm:text-6xl text-foreground-900">
              Delay & Reverb
              <br /> Calculator
            </h1>
            <p className="mt-6 text-lg leading-8">
              Enter your BPM below to discover the optimal reverb timings and
              precise delay times with their corresponding LFO frequencies for
              your track.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Input
                type="number"
                variant="bordered"
                label="Bpm"
                defaultValue="120"
                color="default"
                className="mx-auto w-[160px] "
                classNames={{
                  input: ["text-lg", "text-center"],
                  label: ["text-lg"],
                }}
                size="lg"
                labelPlacement="outside-left"
                fullWidth={true}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Reverb Times Section */}
          <section className="mt-16 flow-root ">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl tracking-tight font-bold text-foreground-800" >Reverb Times</h2>
              <ReverbTable valueProps={valueProps} results={results} />
            </div>
          </section>
          {/* Delay Times Section */}
          <section className="max-w-4xl mt-16 mx-auto">
            {" "}
            <h2 className="text-3xl sm:text-4xl tracking-tight font-bold text-foreground-800">Delay Times & LFO frequencies</h2>
            <DelayTable valueProps={valueProps} results={results} />
          </section>
          {/* Tutorial Section */}
          <section className="max-w-4xl mt-16 mx-auto">
            {" "}
            {/* TO DO */}
            <div className="max-w-4xl mt-8 mx-auto">
              <TutosAccordion/>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}
