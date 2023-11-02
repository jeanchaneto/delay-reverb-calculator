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
          <Table
            aria-label="Reverb Times Table"
            classNames={{ th: " text-lg text-default-800", td: "text-base" }}
            selectionMode="single"
            selectionBehavior="replace"
          >
            <TableHeader>
              <TableColumn width={300}>Reverb Size</TableColumn>
              <TableColumn width={200}>Pre-Delay (ms)</TableColumn>
              <TableColumn width={200}>Decay Time (ms)</TableColumn>
              <TableColumn width={200}>Total Reverb Time (ms)</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell className="text-default-700  ">
                  Tight Ambience{" "}
                  <span className="text-default-500">- (1/4 Note)</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>
                    {results.reverbTightAmbience.preDelay}
                  </span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>
                    {results.reverbTightAmbience.decayTime}
                  </span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>
                    {results.reverbTightAmbience.totalReverbTime}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow key="2">
                <TableCell className="text-default-700  ">
                  Small Room{" "}
                  <span className="text-default-500">- (1/2 Note)</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>
                    {results.reverbSmallRoom.preDelay}
                  </span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>
                    {results.reverbSmallRoom.decayTime}
                  </span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>
                    {results.reverbSmallRoom.totalReverbTime}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow key="3">
                <TableCell className="text-default-700  ">
                  Large Room <span className="text-default-500">- (1 Bar)</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>
                    {results.reverbLargeRoom.preDelay}
                  </span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>
                    {results.reverbLargeRoom.decayTime}
                  </span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>
                    {results.reverbLargeRoom.totalReverbTime}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow key="4">
                <TableCell className="text-default-700  ">
                  Hall <span className="text-default-500">- (2 Bars)</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.reverbHall.preDelay}</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.reverbHall.decayTime}</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>
                    {results.reverbHall.totalReverbTime}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        {/* Delay Times Section */}
        <h2>Delay Times & LFO frequencies</h2>

        <div className="max-w-4xl mx-auto">
          <Table
            aria-label="Delay Times and LFO Frequencies table"
            classNames={{ th: " text-lg text-default-800", td: "text-base" }}
            selectionMode="single"
            selectionBehavior="replace"
          >
            <TableHeader>
              <TableColumn width={300}>Note Value</TableColumn>
              <TableColumn width={200}>Notes</TableColumn>
              <TableColumn width={200}>Dotted</TableColumn>
              <TableColumn width={200}>Triplet</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell className="text-default-700">
                  1/1 <span className="text-default-500">- (1 Bar)</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.wholeNote}</span> ms <br />
                  <span {...valueProps}>{results.wholeNoteFreq}</span> Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.dottedWholeNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>{results.dottedWholeNoteFreq}</span> Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.tripletWholeNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>{results.tripletWholeNoteFreq}</span> Hz
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="text-default-700">
                  1/2 <span className="text-default-500">- (1/2 Bar)</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.halfNote}</span> ms <br />
                  <span {...valueProps}>{results.halfNoteFreq}</span> Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.dottedHalfNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>{results.dottedHalfNoteFreq}</span> Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.tripletHalfNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>{results.tripletHalfNoteFreq}</span> Hz
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="text-default-700">
                  1/4 <span className="text-default-500">- (1/4 Bar)</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.quarterNote}</span> ms <br />
                  <span {...valueProps}>{results.quarterNoteFreq}</span> Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.dottedQuarterNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>
                    {results.dottedQuarterNoteFreq}
                  </span>{" "}
                  Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.tripletQuarterNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>
                    {results.tripletQuarterNoteFreq}
                  </span>{" "}
                  Hz
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell className="text-default-700">
                  1/8 <span className="text-default-500">- (1/8 Bar)</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.eighthNote}</span> ms <br />
                  <span {...valueProps}>{results.eighthNoteFreq}</span> Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.dottedEighthNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>{results.dottedEighthNoteFreq}</span> Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.tripletEighthNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>
                    {results.tripletEighthNoteFreq}
                  </span>{" "}
                  Hz
                </TableCell>
              </TableRow>

              <TableRow key="5">
                <TableCell className="text-default-700">
                  1/16 <span className="text-default-500">- (1/16 Bar)</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.sixteenthNote}</span> ms <br />
                  <span {...valueProps}>{results.sixteenthNoteFreq}</span> Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.dottedSixteenthNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>
                    {results.dottedSixteenthNoteFreq}
                  </span>{" "}
                  Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.tripletSixteenthNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>
                    {results.tripletSixteenthNoteFreq}
                  </span>{" "}
                  Hz
                </TableCell>
              </TableRow>

              <TableRow key="6">
                <TableCell className="text-default-700">
                  1/32 <span className="text-default-500">- (1/32 Bar)</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.thirtySecondNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>{results.thirtySecondNoteFreq}</span> Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.dottedThirtySecondNote}</span>{" "}
                  ms <br />
                  <span {...valueProps}>
                    {results.dottedThirtySecondNoteFreq}
                  </span>{" "}
                  Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.tripletThirtySecondNote}</span>{" "}
                  ms <br />
                  <span {...valueProps}>
                    {results.tripletThirtySecondNoteFreq}
                  </span>{" "}
                  Hz
                </TableCell>
              </TableRow>

              <TableRow key="7">
                <TableCell className="text-default-700">
                  1/64 <span className="text-default-500">- (1/64 Bar)</span>
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.sixtyFourthNote}</span> ms{" "}
                  <br />
                  <span {...valueProps}>{results.sixtyFourthNoteFreq}</span> Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.dottedSixtyFourthNote}</span>{" "}
                  ms <br />
                  <span {...valueProps}>
                    {results.dottedSixtyFourthNoteFreq}
                  </span>{" "}
                  Hz
                </TableCell>
                <TableCell>
                  <span {...valueProps}>{results.tripletSixtyFourthNote}</span>{" "}
                  ms <br />
                  <span {...valueProps}>
                    {results.tripletSixtyFourthNoteFreq}
                  </span>{" "}
                  Hz
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
