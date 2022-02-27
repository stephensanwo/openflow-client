import React, { useContext } from "react";
import { Handle, Position } from "react-flow-renderer";
import {
  CloudUpload24,
  PlayFilled24,
  Misuse24,
  CheckmarkFilled24,
} from "@carbon/icons-react";
import { InlineLoading } from "carbon-components-react";
import "./style.scss";
import { FlowContext } from "../../pages/FlowItem/context";
import { StateColors } from "../../themes";

interface Props {
  id: string;
  type: string;
  data: {
    label: string;
    description: string;
    state: "open" | "running" | "success" | "failed";
  };
  position: {
    x: number;
    y: number;
  };
  handle: {
    bottom: boolean;
    top: boolean;
    left: boolean;
    right: boolean;
  };
}

const CustomInputNode: React.FC<Props> = ({ id, data, position, handle }) => {
  const nodeContext = useContext(FlowContext);

  const handleNodeClick = (id: string) => {
    nodeContext?.setNodeId(id);
    console.log(nodeContext?.nodeId);
  };

  return (
    <div
      className={`node-container ${data.state}`}
      onClick={() => handleNodeClick(id)}
    >
      <div className="node-content">
        <CloudUpload24 />
        <div>
          <div className="node-label">{data.label}</div>
          <div className="node-description">{data.description}</div>
        </div>
        <div>
          {data.state === "running" ? (
            <InlineLoading />
          ) : data.state === "open" ? (
            <PlayFilled24 fill={StateColors.open} />
          ) : data.state === "success" ? (
            <CheckmarkFilled24 fill={StateColors.success} />
          ) : data.state === "failed" ? (
            <Misuse24 fill={StateColors.failed} />
          ) : (
            <PlayFilled24 fill="#1f70ff" />
          )}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{ top: "100%", borderRadius: 0 }}
      />

      <Handle
        type="target"
        position={Position.Top}
        style={{ borderRadius: 0 }}
      />
      {/* <Handle
        type="source"
        position={Position.Left}
        id="b"
        style={{ top: "50%", borderRadius: 0 }}
      /> */}

      {/* {handle.left ? (
        <Handle
          type="source"
          position={Position.Left}
          id="a"
          style={{ top: "100%", borderRadius: 0 }}
        />
      ) : (
        <> </>
      )}
      {handle.right ? (
        <Handle
          type="source"
          position={Position.Right}
          id="a"
          style={{ top: "100%", borderRadius: 0 }}
        />
      ) : (
        <> </>
      )} */}
    </div>
  );
};

export default CustomInputNode;
