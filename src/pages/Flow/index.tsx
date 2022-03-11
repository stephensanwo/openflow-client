import React, { Fragment, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Add32 } from "@carbon/icons-react";
import { Button } from "carbon-components-react";
import {
  PageHeader,
  PageContainer,
  HeaderAction,
  MobileContainerDiv,
} from "../../shared/layout";
import NewFlow from "./NewFlow";
import { FlowContextProvider } from "./context";
import FlowContent from "./FlowContent";
import FlowContentMobile from "./FlowContentMobile";

const FlowContainer = styled.div``;

const Flow: React.FC = () => {
  const [modal, setModal] = useState("");

  const toggleModal = () => {
    if (modal === "") {
      setModal("is-visible");
    } else {
      setModal("");
    }
  };

  return (
    <FlowContextProvider>
      <MobileContainerDiv>
        <PageHeader>
          <h2>Flow Studio</h2>
        </PageHeader>
        <FlowContentMobile />
      </MobileContainerDiv>

      <PageContainer>
        <PageHeader>
          <h2>Flow Studio</h2>
          <HeaderAction>
            <Button
              onClick={() => toggleModal()}
              renderIcon={Add32}
              iconDescription="Run Flow"
              size={"field"}
            >
              New Flow
            </Button>
          </HeaderAction>
        </PageHeader>
        <FlowContainer>
          <FlowContent />
        </FlowContainer>
        <NewFlow modal={modal} toggleModal={toggleModal} />
      </PageContainer>
    </FlowContextProvider>
  );
};
export default Flow;
