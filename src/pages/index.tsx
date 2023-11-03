import { calculateDelaysAndReverb } from "@/utils/calculator";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import ReverbTable from "../components/ReverbTable";
import DelayTable from "../components/DelayTable";
import TutosAccordion from "../components/TutosAccordion";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Notification from "../components/Notification";

const fadeVariants = {
  hidden: {
    y: 24,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
const viewport = { once: true, margin: "0px 0px -200px" };

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
    className:
      "cursor-copy hover:text-primary transition-color duration-300 ease ",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1.5,
          when: "beforeChildren",
          ease: "easeInOut",
        },
      }}
      className=" py-24 lg:py-32 min-h-screen bg-gradient-to-t from-primary-50/50 to-black "
    >
      <Head>
        <title>Delay and Reverb Calculator: Get precise timings from BPM</title>
        <meta
          name="description"
          content="The ultimate delay and reverb times calculator for music producers. Fine-tune your tracks by calculating the ideal delay and reverb settings for any genre."
        />

        <meta
          name="keywords"
          content="Delay Calculator, Reverb Calculator, Delay and Reverb, Audio Effects Calculator"
        />
        <meta
          property="og:title"
          content="Delay and Reverb Calculator: Get precise timings from the BPM of your track."
        />
        <meta
          property="og:description"
          content="The ultimate delay and reverb times calculator for music producers. Fine-tune your tracks by calculating the ideal delay and reverb settings for any genre."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://delayreverbcalculator.com/" />

        <meta name="twitter:card" content="/images/logo.png" />
        <meta
          name="twitter:title"
          content="Delay and Reverb Times Calculator: Get precise timings from the BPM of your track."
        />
        <meta
          name="twitter:description"
          content="The ultimate delay and reverb times calculator for music producers. Fine-tune your tracks by calculating the ideal delay and reverb settings for any genre."
        />
        <meta name="twitter:image" content="/images/logo.png" />
        
      </Head>
      {/* Copied notification */}
      <AnimatePresence>{showNotification && <Notification />}</AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: 0.2 }}
        className="bg-gradient-radial from-primary-100 to-80% to-transparent"
      >
        <div className="mx-auto max-w-2xl text-center  px-6 md:px-0 ">
          <motion.h1
            variants={fadeVariants}
            className="text-4xl font-bold tracking-tigh sm:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-primary-600 via-primary-800 to-primary-700  "
          >
            Delay & Reverb
            <br /> Calculator
          </motion.h1>
          <motion.p variants={fadeVariants} className="mt-6 text-lg leading-8">
            Enter your BPM below to discover the optimal reverb timings and
            precise delay times with their corresponding LFO frequencies for
            your track.
            <br /> Use and abuse but let your ears be the final judge.
          </motion.p>
          <motion.div
            variants={fadeVariants}
            className="mt-10 flex flex-wrap items-center max-w-[280px] mx-auto"
          >
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
          </motion.div>
        </div>
        {/* Reverb Times Section */}
        <section className="mt-16 flow-root ">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeVariants}
              className="text-3xl sm:text-4xl tracking-tight font-bold text-foreground-800  px-6 md:px-0 "
            >
              Reverb Times
            </motion.h2>
            <motion.div variants={fadeVariants}>
              <ReverbTable valueProps={valueProps} results={results} />
            </motion.div>
          </div>
        </section>
        {/* Delay Times Section */}
        <section className="max-w-4xl mt-16 mx-auto">
          {" "}
          <motion.h2
            variants={fadeVariants}
            className="text-3xl sm:text-4xl tracking-tight font-bold text-foreground-800  px-6 md:px-0 "
          >
            Delay Times & LFO frequencies
          </motion.h2>
          <motion.div variants={fadeVariants}>
            <DelayTable valueProps={valueProps} results={results} />
          </motion.div>
        </section>
      </motion.div>
      {/* Tutorial Section */}
      <motion.section
        variants={fadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="max-w-4xl mt-16 mx-auto "
      >
        {" "}
        <div className="max-w-4xl mt-8 mx-auto  px-6 md:px-0 ">
          <TutosAccordion />
        </div>
      </motion.section>
    </motion.div>
  );
}
