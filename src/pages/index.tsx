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

  const handleCellClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    const cellValue = event.currentTarget.textContent || "";
    navigator.clipboard.writeText(cellValue);

    setShowNotification(true);

    setTimeout(() => setShowNotification(false), 1000);
  };

  const cellProps = {
    onClick: handleCellClick,
    className: "cursor-copy max-w-fit",
  };

  return (
    <div className="min-h-screen py-24 lg:py-32">
      {/* Copied notification */}
      {showNotification && (
        <div className=" flex align-baseline backdrop-blur-xl border-1 border-default-500 text-default-500  z-30 rounded-xl p-2 absolute bottom-16 right-16 ">
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
          <Table
            aria-label="Example static collection table"
            classNames={{ th: " text-lg text-default-800", td: "text-base" }}
          
          >
            <TableHeader>
              <TableColumn>Reverb Size</TableColumn>
              <TableColumn>Pre-Delay</TableColumn>
              <TableColumn>Decay Time</TableColumn>
              <TableColumn>Total Reverb Time</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell className="text-default-700  ">
                  Tight Ambience{" "}
                  <span className="text-default-500">- (1/4 Note)</span>
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbTightAmbience.preDelay}
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbTightAmbience.decayTime}
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbTightAmbience.totalReverbTime}
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="text-default-700  ">
                  Small Room{" "}
                  <span className="text-default-500">- (1/2 Note)</span>
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbSmallRoom.preDelay}
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbSmallRoom.decayTime}
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbSmallRoom.totalReverbTime}
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="text-default-700  ">
                  Large Room <span className="text-default-500">- (1 Bar)</span>
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbLargeRoom.preDelay}
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbLargeRoom.decayTime}
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbLargeRoom.totalReverbTime}
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell className="text-default-700  ">
                  Hall <span className="text-default-500">- (2 Bars)</span>
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbHall.preDelay}
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbHall.decayTime}
                </TableCell>
                <TableCell {...cellProps}>
                  {results.reverbHall.totalReverbTime}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        {/* Delay Times Section */}
        <h2>Delay Times & LFO frequencies</h2>
      </div>
    </div>
  );
}
