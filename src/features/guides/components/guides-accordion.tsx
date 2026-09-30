import { Accordion } from "@heroui/react";

import { GUIDES } from "../content";

export function GuidesAccordion() {
  return (
    <Accordion className="w-full">
      {GUIDES.map((guide) => (
        <Accordion.Item key={guide.id} id={guide.id}>
          <Accordion.Heading>
            <Accordion.Trigger className="text-left">
              {guide.title}
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body className="leading-7 text-muted">
              {guide.body}
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
