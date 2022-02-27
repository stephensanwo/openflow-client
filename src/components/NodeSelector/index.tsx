import React from "react";
import { Accordion, AccordionItem } from "carbon-components-react";
import styled from "styled-components";
import NodeSelectorItem from "./NodeSelectorItem";

const NodeSelectorLabel = styled.div`
  margin: 0px 0px 20px 0px;
`;

const NodeSelector: React.FC = () => {
  return (
    <div>
      <NodeSelectorLabel>
        <h5>Node Selector</h5>
        <small>
          {" "}
          Build your nodes by using pre-built selectors or bring your own custom
          code
        </small>
        <small>
          {" "}
          Visit the <a href="/">Marketplace</a> for more nodes
        </small>
      </NodeSelectorLabel>
      <Accordion>
        <AccordionItem
          title="Flow Nodes"
          open={true}
          style={{ paddingRight: 0 }}
        >
          <NodeSelectorItem
            type={"input"}
            data={{
              label: "File Input",
              description: "Load CSV from One Drive",
              state: "open",
              version: "v 2.1.5",
              health: "working",
            }}
            code={``}
          />
          <NodeSelectorItem
            type={"input"}
            data={{
              label: "File Input",
              description: "Load CSV from Google Drive",
              state: "failed",
              version: "v 1.1.5",
              health: "failing",
            }}
            code={``}
          />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default NodeSelector;
