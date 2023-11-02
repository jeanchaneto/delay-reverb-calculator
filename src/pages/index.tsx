import { calculateDelaysAndReverb } from "@/utils/calculator";
import { Input } from "@nextui-org/react";
import { useState } from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import ReverbTable from "./components/ReverbTable";
import DelayTable from "./components/DelayTable";

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
    <div className=" py-24 lg:py-32 min-h-screen">
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
      <h1 className="font-bold text-4xl sm:text-6xl text-primary-500 tracking-tight text-center ">
        Delay & Reverb
        <br /> Calculator
      </h1>
      <div className="py-24">
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
        {/* Reverb Times Section */}
        <h2>Reverb Times</h2>
        <div className="max-w-4xl mx-auto">
          <ReverbTable valueProps={valueProps} results={results} />
        </div>
        {/* Delay Times Section */}
        <h2>Delay Times & LFO frequencies</h2>
        <div className="max-w-4xl mx-auto">
          <DelayTable valueProps={valueProps} results={results} />
        </div>
      </div>
    </div>
  );
}
