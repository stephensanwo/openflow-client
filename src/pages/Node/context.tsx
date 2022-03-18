import React, { createContext, useState } from "react";
import { NewNodeProps } from "./NewNode";

interface NodeContextProviderProps {
  children: React.ReactNode;
}

interface NodeContextType {
  nodes: Array<NewNodeProps>;
  setNodes:
    | React.Dispatch<React.SetStateAction<Array<NewNodeProps>>>
    | React.Dispatch<React.SetStateAction<NewNodeProps>>
    | any;
  nodeId: string | null;
  setNodeId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const NodeContext = createContext({} as NodeContextType);

export const NodeContextProvider = ({ children }: NodeContextProviderProps) => {
  const [nodeId, setNodeId] = useState<string | null>("");
  const [nodes, setNodes] = useState<Array<NewNodeProps>>([
    {
      id: "1",
      name: "Connect to AWS S3",
      description: "Monthly account reconciliation for vendors on SAP ",
      created_by: "Stephen Sanwo",
      created_on: "2/2/2022, 2:22:22 PM",
      state: "open",
      last_edit: "2/2/2022, 2:22:22 PM",
      link: "/node/connect-to-aws-s3",
      category: "code",
      components: [],
    },
    {
      id: "2",
      name: "Get data from Postgres",
      created_by: "Stephen Sanwo",
      description: "FAR to count reconciliation",
      created_on: "2/2/2022, 2:22:22 PM",
      state: "failed",
      last_edit: "2/2/2022, 2:22:22 PM",
      link: "/flow/get-data-from-postgres",
      category: "component",
      components: [],
    },
  ]);

  return (
    <NodeContext.Provider
      value={{
        nodes,
        setNodes,
        nodeId,
        setNodeId,
      }}
    >
      {children}
    </NodeContext.Provider>
  );
};
