import { useState, useEffect } from "react";
import FlowTree from "../../components/FlowTree";
import styled from "styled-components";
import FlowActions from "../../components/FlowActions";
import { FlowContextProvider } from "./context";
import NodeSelector from "../../components/NodeSelector";
import { Play32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";

const FlowDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-right: 3.5%;
  padding-left: 3.5%;
  padding-top: 40px;
  background-color: #f4f4f4;
`;

const FlowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85vh;
  padding-bottom: 20px;
`;

const FlowHeader = styled.h2`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Run = styled.div`
  display: flex;
`;
const NodeSelectorDiv = styled.div`
  background-color: #fff;
  width: 17.5%;
  padding: 15px;
`;

const ActionsDiv = styled.div`
  // background-color: #fff;
  width: 35%;
`;

export const FlowTreeDiv = styled.div`
  background-color: #fff;
  width: 45%;
`;

export const MobileWarningDiv = styled.div`
  background-color: #f4f4f4;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  text-align: center;
`;

const FlowItem: React.FC = () => {
  const [showMobileWarning, setShowMobileWarning] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 800) setShowMobileWarning(true);
  }, []);
  return (
    <FlowContextProvider>
      {showMobileWarning ? (
        <MobileWarningDiv>
          <p>
            <strong>OpenFlow</strong> is not supported on this screen size,
            Please open on a desktop browser
          </p>
        </MobileWarningDiv>
      ) : (
        <FlowDiv>
          <FlowHeader>
            <h2>Vendor Account Reconciliation Flow</h2>
            <Run>
              <Button
                renderIcon={Play32}
                iconDescription="Run Flow"
                size={"field"}
              >
                Run All
              </Button>
            </Run>
          </FlowHeader>
          <FlowContainer>
            <NodeSelectorDiv>
              <NodeSelector />
            </NodeSelectorDiv>
            <FlowTreeDiv>
              <FlowTree />
            </FlowTreeDiv>
            <ActionsDiv>
              <FlowActions />
            </ActionsDiv>
          </FlowContainer>
        </FlowDiv>
      )}
    </FlowContextProvider>
  );
};

export default FlowItem;
