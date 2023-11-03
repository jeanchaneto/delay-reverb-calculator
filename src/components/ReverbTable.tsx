import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
  } from "@nextui-org/react";

  import { type Results } from "@/utils/calculator";

type ValueProps = {
    onClick : (event: React.MouseEvent<HTMLSpanElement>) => void;
    className: string;
}

type ReverbTableProps = {
    valueProps: ValueProps;
    results: Results;
}

const ReverbTable = ({valueProps, results}: ReverbTableProps ) => {
  return (
    <Table
    aria-label="Reverb Times Table"
    classNames={{ th: " text-lg text-default-800", td: "text-base" }}
    className="mt-8"
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
          <span>Tight Ambience</span>
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
          <span>Small Room</span>
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
          <span>Large Room</span>{" "}
          <span className="text-default-500">- (1 Bar)</span>
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
          <span>Hall</span>{" "}
          <span className="text-default-500">- (2 Bars)</span>
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
  )
}

export default ReverbTable