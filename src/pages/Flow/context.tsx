import React, { createContext, useState } from "react";
import { NewFlowProps } from "./NewFlow";

interface FlowContextProviderProps {
  children: React.ReactNode;
}

interface FlowContextType {
  flows: Array<NewFlowProps>;
  setFlows:
    | React.Dispatch<React.SetStateAction<Array<NewFlowProps>>>
    | React.Dispatch<React.SetStateAction<NewFlowProps>>
    | any;
  flowId: string | null;
  setFlowId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const FlowContext = createContext({} as FlowContextType);

export const FlowContextProvider = ({ children }: FlowContextProviderProps) => {
  const [flowId, setFlowId] = useState<string | null>("");
  const [flows, setFlows] = useState<Array<NewFlowProps>>([
    {
      id: "1",
      name: "Vendor Account Reconciliation Flow",
      description: "Monthly account reconciliation for vendors on SAP ",
      created_by: "Stephen Sanwo",
      created_on: "2/2/2022, 2:22:22 PM",
      nodes: 6,
      edges: 5,
      state: "open",
      last_edit: "2/2/2022, 2:22:22 PM",
      link: "/flow/vendor-reconciliation-flow",
    },
    {
      id: "2",
      name: "Fixed Assets Reconciliation Flow",
      created_by: "Stephen Sanwo",
      description: "FAR to count reconciliation",
      created_on: "2/2/2022, 2:22:22 PM",
      nodes: 12,
      edges: 5,
      state: "failed",
      last_edit: "2/2/2022, 2:22:22 PM",
      link: "/flow/fixed-assets-reconciliation-flow",
    },
    {
      id: "3",
      name: "PDF to Excel Converter",
      created_by: "Stephen Sanwo",
      description: "Convert my pdfs to .xlsx files",
      created_on: "2/2/2022, 2:22:22 PM",
      nodes: 5,
      edges: 5,
      state: "success",
      last_edit: "2/2/2022, 2:22:22 PM",
      link: "/flow/pdf-to-excel-converter",
    },
    {
      id: "4",
      name: "Bitcoin News Auto Scrapper",
      created_by: "Stephen Sanwo",
      description: "Daily automatic bitcoin news scrapping to my email",
      created_on: "2/2/2022, 2:22:22 PM",
      nodes: 6,
      edges: 5,
      state: "failed",
      last_edit: "2/2/2022, 2:22:22 PM",
      link: "/flow/bitcoin-news-auto-scrapper",
    },
    {
      id: "5",
      name: "Job Posting Scrapper",
      created_by: "Stephen Sanwo",
      description: "Daily job listing scrapping to my email",
      created_on: "2/2/2022, 2:22:22 PM",
      nodes: 7,
      edges: 5,
      state: "warning",
      last_edit: "2/2/2022, 2:22:22 PM",
      link: "/flow/job-posting-scrapper",
    },
    {
      id: "6",
      name: "Monthly Stock Adjustment Computation",
      created_by: "Stephen Sanwo",
      description: "Compute estimated stock adjustments monthly",
      created_on: "2/2/2022, 2:22:22 PM",
      nodes: 10,
      edges: 5,
      state: "running",
      last_edit: "2/2/2022, 2:22:22 PM",
      link: "/flow/monthly-stock-adjustment-computation",
    },
  ]);

  return (
    <FlowContext.Provider
      value={{
        flows,
        setFlows,
        flowId,
        setFlowId,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};
