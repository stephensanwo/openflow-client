import React, { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { NodeContext } from "../../Node/context";
import { Button, TextInput } from "carbon-components-react";
import {
  Add16,
  Add24,
  Close24,
  Edit16,
  Popup16,
  Delete16,
} from "@carbon/icons-react";
import { StateColors, ThemeColors } from "../../../shared/themes";
import NewComponent from "./NewComponent";
import { ComponentProps } from "../Components";

const ComponentEditorDiv = styled.div`
  height: 95%;
  width: 50%;
  margin: auto;
  padding: 20px;
  background-color: #fff;
`;

const ComponentEditor = () => {
  const { pathname } = useLocation();
  const nodeData = useContext(NodeContext);
  const nodeItemData = nodeData.nodes.filter(
    (item) => item.link === pathname
  )[0];

  const [modal, setModal] = useState("");

  const toggleModal = () => {
    if (modal === "") {
      setModal("is-visible");
    } else {
      setModal("");
    }
  };

  console.log(nodeItemData);

  return (
    <ComponentEditorDiv>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <small>Build your component node</small>
          <h5>{nodeItemData.name}</h5>
        </div>

        <div style={{ display: "flex", gap: "5px" }}>
          <Button
            kind="primary"
            size="small"
            iconDescription={"Add component"}
            hasIconOnly
            onClick={() => toggleModal()}
          >
            <small style={{ marginRight: "0.5rem", color: "#fff" }}>
              Add component
            </small>
            <Add16 />
          </Button>
          <Button
            kind="secondary"
            size="small"
            iconDescription={"Add component"}
            hasIconOnly
          >
            <small style={{ marginRight: "0.5rem", color: "#fff" }}>
              Preview Node
            </small>
            <Popup16 />
          </Button>
        </div>
      </div>
      <div>
        {nodeItemData.components?.length === 0 ? (
          <div
            style={{
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <p style={{ color: StateColors.open }}>
              <Button
                kind="ghost"
                renderIcon={Add24}
                size="field"
                onClick={() => toggleModal()}
              >
                Add new component to start
              </Button>
            </p>
          </div>
        ) : (
          <div
            style={{
              marginTop: "40px",
            }}
          >
            {nodeItemData.components.map(
              (component: ComponentProps, index: any) => (
                <div
                  style={{
                    marginBottom: "2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    border: "1px dashed #e8e8e8",
                    cursor: "pointer",
                    padding: "10px",
                    position: "relative",
                    backgroundColor: `${ThemeColors.bgSecondary}`,
                  }}
                  key={index}
                >
                  {component.type === "input-text" ? (
                    <TextInput
                      helperText={component.helperText}
                      id={component.id}
                      labelText={component.labelText}
                      placeholder={component.placeholder}
                      disabled={true}
                    />
                  ) : (
                    <Fragment></Fragment>
                  )}
                  <div
                    style={{
                      width: "60px",
                      height: "30px",
                      position: "absolute",
                      top: "15%",
                      right: "0%",
                      transform: "translate(-50%, -50%)",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Edit16 />
                    </div>

                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Delete16 />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      <NewComponent modal={modal} toggleModal={toggleModal} />
    </ComponentEditorDiv>
  );
};

export default ComponentEditor;
