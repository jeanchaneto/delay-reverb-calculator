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
  onClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
  className: string;
};

type DelayTableProps = {
  valueProps: ValueProps;
  results: Results;
};

const DelayTable = ({ valueProps, results }: DelayTableProps) => {
  return (
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
            <span>1/1</span> <span className="text-default-500">- (1 Bar)</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.wholeNote}</span> <span>ms</span>{" "}
            <br />
            <span {...valueProps}>{results.wholeNoteFreq}</span> <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.dottedWholeNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.dottedWholeNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.tripletWholeNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.tripletWholeNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell className="text-default-700">
            <span>1/2</span>{" "}
            <span className="text-default-500">- (1/2 Bar)</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.halfNote}</span> <span>ms</span>{" "}
            <br />
            <span {...valueProps}>{results.halfNoteFreq}</span> <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.dottedHalfNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.dottedHalfNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.tripletHalfNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.tripletHalfNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell className="text-default-700">
            <span>1/4</span>{" "}
            <span className="text-default-500">- (1/4 Bar)</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.quarterNote}</span> <span>ms</span>{" "}
            <br />
            <span {...valueProps}>{results.quarterNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.dottedQuarterNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.dottedQuarterNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.tripletQuarterNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.tripletQuarterNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
        </TableRow>

        <TableRow key="4">
          <TableCell className="text-default-700">
            <span>1/8</span>{" "}
            <span className="text-default-500">- (1/8 Bar)</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.eighthNote}</span> <span>ms</span>{" "}
            <br />
            <span {...valueProps}>{results.eighthNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.dottedEighthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.dottedEighthNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.tripletEighthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.tripletEighthNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
        </TableRow>

        <TableRow key="5">
          <TableCell className="text-default-700">
            <span>1/16</span>{" "}
            <span className="text-default-500">- (1/16 Bar)</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.sixteenthNote}</span> <span>ms</span>{" "}
            <br />
            <span {...valueProps}>{results.sixteenthNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.dottedSixteenthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.dottedSixteenthNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.tripletSixteenthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.tripletSixteenthNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
        </TableRow>

        <TableRow key="6">
          <TableCell className="text-default-700">
            <span>1/32</span>{" "}
            <span className="text-default-500">- (1/32 Bar)</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.thirtySecondNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.thirtySecondNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.dottedThirtySecondNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.dottedThirtySecondNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.tripletThirtySecondNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.tripletThirtySecondNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
        </TableRow>

        <TableRow key="7">
          <TableCell className="text-default-700">
            <span>1/64</span>{" "}
            <span className="text-default-500">- (1/64 Bar)</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.sixtyFourthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>{results.sixtyFourthNoteFreq}</span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.dottedSixtyFourthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.dottedSixtyFourthNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.tripletSixtyFourthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.tripletSixtyFourthNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
        </TableRow>

        <TableRow key="8">
          <TableCell className="text-default-700">
            <span>1/128</span>{" "}
            <span className="text-default-500">- (1/128 Bar)</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.oneHundredTwentyEighthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.oneHundredTwentyEighthNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>
              {results.dottedOneHundredTwentyEighthNote}
            </span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.dottedOneHundredTwentyEighthNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>
              {results.tripletOneHundredTwentyEighthNote}
            </span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.tripletOneHundredTwentyEighthNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
        </TableRow>
        <TableRow key="9">
          <TableCell className="text-default-700">
            <span>1/256</span>{" "}
            <span className="text-default-500">- (1/256 Bar)</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.twoHundredFiftySixthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.twoHundredFiftySixthNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>
              {results.dottedTwoHundredFiftySixthNote}
            </span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.dottedTwoHundredFiftySixthNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>
              {results.tripletTwoHundredFiftySixthNote}
            </span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.tripletTwoHundredFiftySixthNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
        </TableRow>

        <TableRow key="10">
          <TableCell className="text-default-700">
            <span>1/512</span>{" "}
            <span className="text-default-500">- (1/512 Bar)</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.fiveHundredTwelfthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.fiveHundredTwelfthNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.dottedFiveHundredTwelfthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.dottedFiveHundredTwelfthNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
          <TableCell>
            <span {...valueProps}>{results.tripletFiveHundredTwelfthNote}</span>{" "}
            <span>ms</span> <br />
            <span {...valueProps}>
              {results.tripletFiveHundredTwelfthNoteFreq}
            </span>{" "}
            <span>Hz</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DelayTable;
