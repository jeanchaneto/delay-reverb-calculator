import { Table } from "@heroui/react";

import type { ReverbRow } from "../domain/timing";
import { CopyableValue } from "./copyable-value";

type ReverbTableProps = {
  rows: ReverbRow[];
};

export function ReverbTable({ rows }: ReverbTableProps) {
  return (
    <Table className="mt-8">
      <Table.ScrollContainer>
        <Table.Content aria-label="Reverb times" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader className="w-64">
              Reverb size
            </Table.Column>
            <Table.Column>Pre-delay</Table.Column>
            <Table.Column>Decay time</Table.Column>
            <Table.Column>Total reverb time</Table.Column>
          </Table.Header>
          <Table.Body>
            {rows.map((row) => (
              <Table.Row key={row.preset.id} id={row.preset.id}>
                <Table.Cell>
                  <span className="text-foreground">{row.preset.label}</span>{" "}
                  <span className="text-muted">({row.preset.lengthLabel})</span>
                </Table.Cell>
                <Table.Cell>
                  <CopyableValue value={row.preDelayMs} unit="ms" />
                </Table.Cell>
                <Table.Cell>
                  <CopyableValue value={row.decayMs} unit="ms" />
                </Table.Cell>
                <Table.Cell>
                  <CopyableValue value={row.totalMs} unit="ms" />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
