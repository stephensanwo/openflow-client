import React, { Fragment } from "react";
import {
  Delete16,
  Download16,
  PageFirst16,
  PageLast16,
} from "@carbon/icons-react";
import "./style.scss";
import { StateColors } from "../../themes";
import styled from "styled-components";
import { Path } from "@carbon/pictograms-react";

export interface StyledTableProps {
  isTableHeader: boolean;
  isPrimaryButton: boolean;
  isActions: boolean;
  deleteAction: boolean;
  downloadAction: boolean;
  rowData: Array<{ [key: string]: any }>;
  headerData: Array<{
    header: string;
    key: string;
  }>;
}

const EmptyMessage = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledTable: React.FC<StyledTableProps> = ({
  isTableHeader,
  rowData,
  headerData,
  isPrimaryButton,
  isActions,
  deleteAction,
  downloadAction,
}) => {
  const deleteClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("deleteClick");
  };

  const downloadClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("deleteClick");
  };

  return (
    <div className="bx--data-table-container " data-table>
      {isTableHeader ? (
        <div className="bx--data-table-header">
          <h4 className="bx--data-table-header__title">Table title</h4>
          <p className="bx--data-table-header__description">
            Optional Helper Text
          </p>
        </div>
      ) : (
        ""
      )}
      {isPrimaryButton ? (
        <section className="bx--table-toolbar ">
          <div className="bx--toolbar-content">
            <button className="bx--btn bx--btn--sm bx--btn--primary">
              Primary Button
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="bx--btn__icon"
                width="20"
                height="20"
                viewBox="0 0 16 32"
                aria-hidden="true"
              >
                <path d="M17 15L17 7 15 7 15 15 7 15 7 17 15 17 15 25 17 25 17 17 25 17 25 15 17 15z"></path>
              </svg>
            </button>
          </div>
        </section>
      ) : (
        ""
      )}

      {headerData[0].header === "" ? (
        <Fragment>
          <EmptyMessage>
            <Path
              style={{
                width: "100px",
                height: "100px",
                fill: "#1f70ff",
              }}
            />{" "}
            <br />
            <p>Add new Nodes and Edges to your Flow</p>
          </EmptyMessage>
        </Fragment>
      ) : (
        <Fragment>
          {" "}
          <table className="bx--data-table  bx--data-table--sort">
            <thead>
              <tr>
                {headerData?.map((header) => (
                  <th>
                    <button
                      className="bx--table-sort"
                      data-event="sort"
                      title={header?.header}
                    >
                      <span className="bx--table-header-label">
                        {header?.header}
                      </span>
                    </button>
                  </th>
                ))}

                {isActions ? (
                  <Fragment>
                    {downloadAction ? (
                      <th className="bx--table-column-menu">Download</th>
                    ) : (
                      ""
                    )}
                    {deleteAction ? (
                      <th className="bx--table-column-menu">Delete</th>
                    ) : (
                      ""
                    )}
                  </Fragment>
                ) : (
                  ""
                )}
              </tr>
            </thead>
            <tbody>
              {rowData.map((row) => (
                <tr>
                  {headerData?.map((header) => (
                    <td>{row[`${header?.key}`]}</td>
                  ))}

                  {isActions ? (
                    <Fragment>
                      {downloadAction ? (
                        <td className="bx--table-column-menu">
                          <div
                            data-overflow-menu
                            role="menu"
                            tabIndex={1}
                            aria-label="Overflow menu description"
                            className="bx--overflow-menu"
                            onClick={downloadClick}
                          >
                            <Download16 />
                          </div>
                        </td>
                      ) : (
                        ""
                      )}
                      {deleteAction ? (
                        <td className="bx--table-column-menu">
                          <div
                            data-overflow-menu
                            role="menu"
                            tabIndex={0}
                            aria-label="Overflow menu description"
                            className="bx--overflow-menu"
                            onClick={deleteClick}
                          >
                            <Delete16 fill={StateColors.failed} />
                          </div>
                        </td>
                      ) : (
                        ""
                      )}
                    </Fragment>
                  ) : (
                    ""
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bx--pagination" data-pagination>
            <div className="bx--pagination__left"></div>
            <div className="bx--pagination__right">
              <label
                id="select-id-pagination-page-label"
                className="bx--pagination__text"
                htmlFor="select-id-pagination-page"
              >
                Page 1 of 5
              </label>
              <button
                className="bx--pagination__button bx--pagination__button--backward"
                tabIndex={0}
                data-page-backward
                aria-label="Backward button"
              >
                <PageFirst16 />
              </button>
              <button
                className="bx--pagination__button bx--pagination__button--forward"
                tabIndex={0}
                data-page-forward
                aria-label="Forward button"
              >
                <PageLast16 />
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default StyledTable;
