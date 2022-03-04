import React, { Fragment, useContext } from "react";
import { Close32 } from "@carbon/icons-react";
import "./style.scss";
import { ControlModalProps } from "./TreeControls";
import StyledTable from "../StyledTable";
import { FlowContext } from "../../pages/FlowItem/context";

interface ModalProps {
  modal: string;
  toggleModal: React.Dispatch<React.SetStateAction<any>>;
  selectedModal: ControlModalProps;
}

const Modal: React.FC<ModalProps> = (props) => {
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    props.toggleModal(e);
  };
  const { elements, setElements } = useContext(FlowContext);

  let nodeHeaderData = [
    {
      header: "",
      key: "",
    },
  ];

  let nodeRowData = [
    {
      label: "",
      description: "",
      state: "",
    },
  ];

  let edgeHeaderData = [
    {
      header: "",
      key: "",
    },
  ];

  let edgeRowData = [
    {
      sourceLabel: "",
      sourceDescription: "",
      sourcesState: "",
      targetLabel: "",
      targetDescription: "",
      targetsState: "",
    },
  ];

  if (elements.length > 0) {
    nodeHeaderData = Object.keys(
      elements.filter((item) => item.category === "node")[0].data
    ).map((item, key) => {
      return {
        header: item[0].toUpperCase() + item.substr(1),
        key: item,
      };
    });

    nodeRowData = elements
      .filter((item) => item.category === "node")
      .map((item, key) => {
        return {
          label: item.data.label,
          description: item.data.description,
          state: item.data.state,
        };
      });

    edgeRowData = elements
      .filter((item) => item.category !== "node")
      .map((edgeItem, key) => {
        const source = elements.filter(
          (filterItem) => filterItem.id === edgeItem?.source
        )[0];
        const target = elements.filter(
          (filterItem) => filterItem.id === edgeItem?.target
        )[0];
        console.log(source);
        console.log(target);
        return {
          sourceLabel: source.data.label,
          sourceDescription: source.data.description,
          sourcesState: source.data.state,
          targetLabel: target.data.label,
          targetDescription: target.data.description,
          targetsState: target.data.state,
        };
      });
    edgeHeaderData = Object.keys(edgeRowData[0]).map((item, key) => {
      return {
        header: item[0].toUpperCase() + item.substr(1),
        key: item,
      };
    });
  }

  return (
    <div
      data-modal
      id="disabled-modal"
      className={`bx--modal ${props.modal}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disabled-label"
      aria-describedby="disabled-heading"
      tabIndex={-1}
    >
      <div className="bx--modal-container bx--modal-container--lg">
        <div className="bx--modal-header">
          <p
            className="bx--modal-header__label bx--type-delta"
            id="modal-lokx1olb9q-label"
          >
            Settings
          </p>
          <p
            className="bx--modal-header__heading bx--type-beta"
            id="modal-lokx1olb9q-heading"
          >
            <h2>{props.selectedModal?.label}</h2>
          </p>
          <button
            className="bx--modal-close"
            type="button"
            data-modal-close
            aria-label="close modal"
            onClick={(e) => props.toggleModal(e)}
          >
            <Close32 className="bx--modal-close__icon" />
          </button>
        </div>

        <div className="bx--modal-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
            accumsan augue. Phasellus consequat augue vitae tellus tincidunt
            posuere. Curabitur justo urna, consectetur vel elit iaculis,
            ultrices condimentum risus. Nulla facilisi. Etiam venenatis molestie
            tellus. Quisque consectetur non risus eu rutrum.
          </p>
          {props.selectedModal?.key === "2" ? (
            <StyledTable
              isTableHeader={false}
              isPrimaryButton={false}
              rowData={nodeRowData}
              headerData={nodeHeaderData}
              isActions={true}
              deleteAction={true}
              downloadAction={true}
            />
          ) : props.selectedModal?.key === "3" ? (
            <StyledTable
              isTableHeader={false}
              isPrimaryButton={false}
              rowData={edgeRowData}
              headerData={edgeHeaderData}
              isActions={true}
              deleteAction={true}
              downloadAction={true}
            />
          ) : (
            <Fragment></Fragment>
          )}
        </div>
        <div className="bx--modal-footer">
          <button
            className="bx--btn bx--btn--secondary"
            type="button"
            data-modal-close
            onClick={(e) => handleClose(e)}
          >
            Cancel
          </button>
          <button
            className="bx--btn bx--btn--primary"
            type="button"
            data-modal-primary-focus
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
