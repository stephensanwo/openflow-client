import React, { Fragment, useContext } from "react";
import FlowTree from "../../components/FlowTree";
import styled from "styled-components";
import FlowActions from "../../components/FlowActions";
import NodeSelector from "../../components/NodeSelector";
import { Play32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import { PageHeader, HeaderAction } from "../../shared/layout";
import { useLocation } from "react-router-dom";
import { FlowContext } from "../Flow/context";

const FlowItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85vh;
  padding-bottom: 20px;
`;

export const FlowTreeDiv = styled.div`
  background-color: #fff;
  width: 45%;
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

const FlowItemContent = () => {
  const { pathname } = useLocation();
  const flowData = useContext(FlowContext);
  const flowItemData = flowData.flows.filter(
    (item) => item.link === pathname
  )[0];

  return (
    <Fragment>
      <PageHeader>
        <h2>{flowItemData.name}</h2>
        <HeaderAction>
          <Button renderIcon={Play32} iconDescription="Run Flow" size={"field"}>
            Run All
          </Button>
        </HeaderAction>
      </PageHeader>
      <FlowItemContainer>
        <NodeSelectorDiv>
          <NodeSelector />
        </NodeSelectorDiv>
        <FlowTreeDiv>
          <FlowTree />
        </FlowTreeDiv>
        <ActionsDiv>
          <FlowActions />
        </ActionsDiv>
      </FlowItemContainer>
    </Fragment>
  );
};

export default FlowItemContent;
