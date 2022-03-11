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
import { FlowItemContext } from "../../pages/FlowItem/context";
import { StateColors } from "../../shared/themes";
import { NewNodeProps } from "../NodeSelector/NodeSelectorItem";

const CustomInputNode: React.FC<NewNodeProps> = ({
  id,
  data,
  position,
  handle,
}) => {
  const nodeContext = useContext(FlowItemContext);

  const handleNodeClick = (id: string) => {
    nodeContext?.setNodeId(id);
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
