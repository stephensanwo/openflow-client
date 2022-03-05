import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FlowContext } from "../../pages/FlowItem/context";
import Code from "../Code";
import { NodeSelectorProps } from "../NodeSelector/NodeSelectorItem";
import { Button } from "carbon-components-react";

import Notification from "../Notification";

const FlowActionsDiv = styled.div`
  height: 100%;
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
  const [elementData, setElementData] = useState<NodeSelectorProps>();
  const nodeContext = useContext(FlowContext);
  console.log(nodeContext.elements);

  // Filter for the curent node to display its actions
  useEffect(() => {
    const elementItem: any = nodeContext.elements.filter(
      (item: any) => item.id === nodeContext.nodeId
    )[0];
    setElementData(elementItem);
  }, [nodeContext.elements, nodeContext.nodeId]);

  // console.log(elementData);

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    nodeContext.setElements(
      nodeContext.elements.map((item) =>
        item.id[0] === nodeContext.nodeId
          ? Object.assign(item, { code: event.target.value })
          : item
      )
    );
  };

  return (
    <FlowActionsDiv>
      <FlowActionsHeader>
        {elementData?.data.description ? (
          <h5>{elementData?.data.description}</h5>
        ) : (
          <h5>{"Create a node to start"}</h5>
        )}
        <small>
          {" "}
          Build your component or code nodes <br />
          Code editor may be lacking in full functionality. Its recommended to
          only use to copy and paste your code
        </small>
      </FlowActionsHeader>
      <CodeDiv>
        <Code
          codeData={elementData?.code}
          handleCodeChange={handleCodeChange}
        />
        <div>
          <Notification
            title={"Runtime Errors"}
            subtitle={"Runtime errors will be displayed here"}
            caption={
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                {"Time: 00:00:00 AM"}
                <Button
                  kind="secondary"
                  size="small"
                  style={{ marginBotton: "100px" }}
                >
                  View Detailed Error Message
                </Button>
              </div>
            }
            kind="info"
            hideCloseButton={false}
            styles={{ height: "1000px" }}
          />
        </div>
      </CodeDiv>
    </FlowActionsDiv>
  );
};

export default FlowActions;
