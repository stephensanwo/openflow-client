import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import { Play32 } from "@carbon/icons-react";
import { useLocation } from "react-router-dom";
import { NodeContext } from "../../Node/context";
import PageHeader from "../../../components/PageHeader";
import ComponentPane from "./ComponentPane";
import ComponentEditor from "./ComponentEditor";

const NodeItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85vh;
  padding-bottom: 20px;
  gap: 20px;
`;

const NodeItemContent = () => {
  const { pathname } = useLocation();

  const nodeItemData = useContext(NodeContext).nodes.filter(
    (item) => item.link === pathname
  )[0];

  console.log(nodeItemData);
  return (
    <Fragment>
      <PageHeader
        breadcrumb={[
          { text: "Home", isCurrentPage: false, link: "/" },
          { text: "Node", isCurrentPage: false, link: "/node" },
          { text: "Node Designer", isCurrentPage: true },
        ]}
        buttonText={"Validate"}
        icon={Play32}
        headerText={nodeItemData.name}
      />
      <NodeItemContainer>
        <ComponentEditor />
        <ComponentPane />
      </NodeItemContainer>
    </Fragment>
  );
};

export default NodeItemContent;
