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
  const results = calculateDelaysAndReverb(bpm);
  console.log(results)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = parseFloat(event.target.value);

    if (!isNaN(userInput)) {
      setBpm(userInput);
    }
  };

  return (
    <div className="min-h-screen py-24 lg:py-32  ">
      <h1 className="font-bold text-4xl sm:text-6xl text-primary-500 tracking-tight text-center ">
        The Delay & Reverb
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
                  Tight Ambience
                </TableCell>
                <TableCell>{results.reverbTightAmbience.preDelay}</TableCell>
                <TableCell>{results.reverbTightAmbience.decayTime}</TableCell>
                <TableCell>
                  {results.reverbTightAmbience.totalReverbTime}
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className="text-default-700  ">
                  Small Room
                </TableCell>
                <TableCell>Technical Lead</TableCell>
                <TableCell>Paused</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className="text-default-700  ">
                  Large Room
                </TableCell>
                <TableCell>Senior Developer</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell className="text-default-700  ">
                  Hall
                </TableCell>
                <TableCell>Community Manager</TableCell>
                <TableCell>Vacation</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <h2>Delay Times & LFO frequencies</h2>
      </div>
    </div>
  );
}
