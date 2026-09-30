import { Table } from "@heroui/react";

import type { DelayRow, DelayTiming } from "../domain/timing";
import { CopyableValue } from "./copyable-value";

type DelayTableProps = {
  rows: DelayRow[];
};

function TimingCell({ timing }: { timing: DelayTiming }) {
  return (
    <div className="flex flex-col gap-0.5">
      <CopyableValue value={timing.milliseconds} unit="ms" />
      <CopyableValue value={timing.hertz} unit="Hz" />
    </div>
  );
}

export function DelayTable({ rows }: DelayTableProps) {
  return (
    <Table className="mt-8">
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Delay times and LFO frequencies"
          className="min-w-[600px]"
        >
          <Table.Header>
            <Table.Column isRowHeader className="w-64">
              Note value
            </Table.Column>
            <Table.Column>Straight</Table.Column>
            <Table.Column>Dotted</Table.Column>
            <Table.Column>Triplet</Table.Column>
          </Table.Header>
          <Table.Body>
            {rows.map((row) => (
              <Table.Row key={row.note.label} id={row.note.label}>
                <Table.Cell>
                  <span className="text-foreground">{row.note.label}</span>{" "}
                  <span className="text-muted">({row.note.description})</span>
                </Table.Cell>
                <Table.Cell>
                  <TimingCell timing={row.straight} />
                </Table.Cell>
                <Table.Cell>
                  <TimingCell timing={row.dotted} />
                </Table.Cell>
                <Table.Cell>
                  <TimingCell timing={row.triplet} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
