import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FlowContext } from "../../pages/FlowItem/context";
import Code from "../Code";
import { Props } from "../NodeSelector/NodeSelectorItem";

const FlowActionsDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: auto;
  background-color: #fff;
`;

const FlowActionsHeader = styled.div`
  padding: 15px;
  margin: 0px 0px 20px 0px;
`;

const CodeDiv = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 15px;
`;

const FlowActions: React.FC = () => {
  const [elementData, setElementData] = useState<Props>();
  const nodeContext = useContext(FlowContext);
  console.log(nodeContext.elements);

  // Filter for the curent node to display its actions

  useEffect(() => {
    const elementItem: any = nodeContext.elements.filter(
      (item: any) => item.id === nodeContext.nodeId
    )[0];
    setElementData(elementItem);
  }, [nodeContext.elements, nodeContext.nodeId]);

  console.log(elementData);

  return (
    <FlowActionsDiv>
      <FlowActionsHeader>
        <h5>{elementData?.data.description}</h5>
        <small>
          {" "}
          Build your component or code nodes <br />
          Code editor may be lacking in full functionality. Its recommended to
          only use to copy and paste your code
        </small>
      </FlowActionsHeader>
      <CodeDiv>
        <Code codeData={elementData?.code} />
      </CodeDiv>
    </FlowActionsDiv>
  );
};

export default FlowActions;
