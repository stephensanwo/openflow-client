import React, { useContext } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { NodeContext } from "../../Node/context";

const ComponentPaneDiv = styled.div`
  height: 95%;
  width: 50%;
  margin: auto;
  padding: 20px;
  background-color: #fff;
`;
const ComponentPane = () => {
  const { pathname } = useLocation();
  const nodeData = useContext(NodeContext);
  //   const nodeItemData = nodeData.nodes.filter(
  //     (item) => item.link === pathname
  //   )[0];
  console.log(nodeData);
  return (
    <ComponentPaneDiv>
      <small> Customize your components</small>
      <h5>Component Options</h5>
    </ComponentPaneDiv>
  );
};

export default ComponentPane;
