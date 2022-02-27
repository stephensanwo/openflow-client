import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { FlowContext } from "../../pages/FlowItem/context";
import { CustomInputNode } from "../FlowNode";

import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  updateEdge,
} from "react-flow-renderer";

const nodeTypes = {
  input: CustomInputNode,
};

const FlowTreeDiv = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;
  padding-top: 10px;
`;

const FlowTree = () => {
  //   const [elements, setElements] = useState(initialElements);
  const flowData = useContext(FlowContext);

  const onElementsRemove = (elementsToRemove: object) =>
    flowData.setElements((els: any) => removeElements(elementsToRemove, els));

  const onEdgeUpdate = (oldEdge: any, newConnection: any) =>
    flowData.setElements((els: any) => updateEdge(oldEdge, newConnection, els));

  const onConnect = (params: object) =>
    flowData.setElements((els: any) => addEdge(params, els));

  const onLoad = (reactFlowInstance: any) =>
    reactFlowInstance.setTransform({
      x: 0,
      y: 0,
      zoom: 1,
    });

  return (
    <FlowTreeDiv>
      <ReactFlowProvider>
        <ReactFlow
          elements={flowData.elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          onLoad={onLoad}
          snapToGrid={false}
          snapGrid={[15, 15]}
          nodeTypes={nodeTypes}
          onEdgeUpdate={onEdgeUpdate}
        >
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </FlowTreeDiv>
  );
};

export default FlowTree;
