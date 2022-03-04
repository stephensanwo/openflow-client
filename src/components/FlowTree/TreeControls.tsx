import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "carbon-components-react";
import { StateColors } from "../../themes";
import {
  TreeViewAlt16,
  Save16,
  EdgeNodeAlt16,
  Delete16,
} from "@carbon/icons-react";
import Modal from "./Modal";

const TreeControlsDiv = styled.div`
  //   background-color: green;
  height: 30px;
  padding-left: 10px;
  display: flex;
  gap: 2.5px;
  width: 100%;
`;
const ButtonDiv = styled.div`
  width: "50px";
  height: "30px";
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export interface ControlModalProps {
  label: string;
  description: string;
  icon: React.ReactElement;
  key: string;
  triggerModal: boolean;
}
const controlPanel: Array<ControlModalProps> = [
  {
    label: "Save",
    description: "Save",
    icon: <Save16 />,
    key: "1",
    triggerModal: false,
  },
  {
    label: "Node Settings",
    description: "Node Settings",
    icon: <EdgeNodeAlt16 />,
    key: "2",
    triggerModal: true,
  },
  {
    label: "Edge Settings",
    description: "Edge Settings",
    icon: <TreeViewAlt16 />,
    key: "3",
    triggerModal: true,
  },
  {
    label: "Delete",
    description: "Delete",
    icon: <Delete16 fill={StateColors.failed} />,
    key: "4",
    triggerModal: true,
  },
];

const TreeControls: React.FC = () => {
  const [modal, setModal] = useState("");
  const [selectedModal, setSelectedModal] = useState<ControlModalProps | any>();
  const toggleModal = (item?: Object, triggerModal?: boolean) => {
    console.log(item);
    if (modal === "" && triggerModal === true) {
      setModal("is-visible");
      setSelectedModal(item);
    } else {
      setModal("");
    }
  };

  return (
    <TreeControlsDiv>
      {controlPanel.map((item) => (
        <ButtonDiv
          key={item.key}
          onClick={() => toggleModal(item, item.triggerModal)}
        >
          {item.icon}
          <small>{item.label}</small>
        </ButtonDiv>
      ))}
      <Modal
        modal={modal}
        toggleModal={toggleModal}
        selectedModal={selectedModal}
      />
    </TreeControlsDiv>
  );
};

export default TreeControls;
