import React, { useContext } from "react";
import { DotMark16, AddAlt16 } from "@carbon/icons-react";
import styled from "styled-components";
import { StateColors } from "../../themes";
import { FlowContext } from "../../pages/FlowItem/context";

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
`;

const NodeSelectorItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

export interface NodeSelectorProps {
  type: string;
  data: {
    label: string;
    description: string;
    version: string;
    health: string;
    state: "open" | "running" | "success" | "failed" | "warning";
  };
  code: string;
}

export interface NewNodeProps {
  id: string;
  category: string;
  type: string;
  data: {
    label: string;
    description: string;
    state: "open" | "running" | "success" | "failed" | "warning";
  };
  position: {
    x: number;
    y: number;
  };
  code: string;
  handle?: {
    bottom: boolean;
    top: boolean;
    left: boolean;
    right: boolean;
  };
  className: string;
  source?: string;
  target?: string;
}

const NodeSelectorItem: React.FC<NodeSelectorProps> = ({
  type,
  data,
  code,
}) => {
  const flowData = useContext(FlowContext);

  const newNode: NewNodeProps = {
    id: (Number(flowData.elementsMetadata.lastNodeId) + 1).toString(),
    category: "node",
    type: type,
    data: {
      label: data.label,
      description: data.description,
      state: data.state,
    },
    code: code,
    position: {
      x: flowData.elementsMetadata.flowWindowCenter,
      y: flowData.elementsMetadata.LastNodePositionY + 100,
    },
    className: "input-node",
  };

  const handleItemAdd = () => {
    flowData.setElements([...flowData.elements, newNode]);
    flowData.setElementsMetadata({
      ...flowData.elementsMetadata,
      lastNodeId: (Number(flowData.elementsMetadata.lastNodeId) + 1).toString(),
      LastNodePositionY: flowData.elementsMetadata.LastNodePositionY + 100,
    });
  };

  return (
    <NodeSelectorItemContainer>
      <div>
        <small>{data.description}</small>
        <Description>
          <small>{data.version}</small>

          <span className="styled-span">
            <DotMark16
              fill={
                data.state === "open"
                  ? StateColors.success
                  : data.state === "failed"
                  ? StateColors.failed
                  : StateColors.open
              }
            />
            <small>{data.health}</small>
          </span>
        </Description>
      </div>
      <div style={{ cursor: "pointer" }} onClick={handleItemAdd}>
        <AddAlt16 fill={StateColors.open} />
      </div>
    </NodeSelectorItemContainer>
  );
};

export default NodeSelectorItem;
