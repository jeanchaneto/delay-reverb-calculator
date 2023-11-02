import { calculateDelaysAndReverb } from "@/utils/calculator";
import { Input } from "@nextui-org/react";
import { useState } from "react";

import ReverbTable from "./components/ReverbTable";
import DelayTable from "./components/DelayTable";
import TutosAccordion from "./components/TutosAccordion";
import Head from "next/head";
import Footer from "./components/Footer";

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
    <div className=" py-24 lg:py-32 min-h-screen bg-gradient-to-t from-primary-50/50 to-black ">
      <Head>
        <title>Delay and Reverb Calculator: get your timings spot on!</title>
        <meta
          name="description"
          content="The ultimate delay and reverb times calculator for music producers. Fine-tune your tracks by calculating the ideal delay and reverb settings for any genre."
        />

        <meta
          name="keywords"
          content="Delay Calculator, Reverb Calculator, Delay and Reverb, Music Production Tools, Audio Effects Calculator, Sound Design Tools"
        />

        <meta
          property="og:title"
          content="Delay and Reverb Calculator: get your timings spot on!"
        />
        <meta
          property="og:description"
          content="The ultimate delay and reverb times calculator for music producers. Fine-tune your tracks by calculating the ideal delay and reverb settings for any genre."
        />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="https://delayreverbcalculator.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Delay and Reverb Times Calculator: get your timings spot on"
        />
        <meta
          name="twitter:description"
          content="The ultimate delay and reverb times calculator for music producers. Fine-tune your tracks by calculating the ideal delay and reverb settings for any genre."
        />
        <meta name="twitter:image" content="URL_TO_YOUR_IMAGE" />
      </Head>
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
    
        <div className="bg-gradient-radial from-primary-100 to-80% to-transparent">
          <div className="mx-auto max-w-2xl text-center  px-6 ">
            <h1 className="text-4xl font-bold tracking-tigh sm:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-primary-600 via-primary-800 to-primary-700  ">
              Delay & Reverb
              <br /> Calculator
            </h1>
            <p className="mt-6 text-lg leading-8">
              Enter your BPM below to discover the optimal reverb timings and
              precise delay times with their corresponding LFO frequencies for
              your track.
            </p>
            <div className="mt-10 flex flex-wrap items-center max-w-[280px] mx-auto">
              <p className="text-foreground-800 text-lg whitespace-nowrap">
                Bpm of your track:{" "}
              </p>
              <Input
                type="number"
                variant="flat"
                defaultValue="120"
                color="default"
                className="mx-auto max-w-[80px] "
                classNames={{
                  input: ["text-lg", "text-center", "text-foreground-800"],
                  label: ["text-lg"],
                  base: ["border-red-500"],
                }}
                size="lg"
                labelPlacement="inside"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Reverb Times Section */}
          <section className="mt-16 flow-root ">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl tracking-tight font-bold text-foreground-800  px-6 ">
                Reverb Times
              </h2>
              <ReverbTable valueProps={valueProps} results={results} />
            </div>
          </section>
          {/* Delay Times Section */}
          <section className="max-w-4xl mt-16 mx-auto">
            {" "}
            <h2 className="text-3xl sm:text-4xl tracking-tight font-bold text-foreground-800  px-6 ">
              Delay Times & LFO frequencies
            </h2>
            <DelayTable valueProps={valueProps} results={results} />
          </section>
        </div>
        {/* Tutorial Section */}
        <section className="max-w-4xl mt-16 mx-auto ">
          {" "}
          {/* TO DO */}
          <div className="max-w-4xl mt-8 mx-auto  px-6 ">
            <TutosAccordion />
          </div>
        </section>
    </div>
  );
}
