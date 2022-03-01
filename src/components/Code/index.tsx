import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

export interface CodeProps {
  codeData: any;
  handleCodeChange: any;
}

const Code: React.FC<CodeProps> = ({ codeData, handleCodeChange }) => {
  return (
    <CodeEditor
      value={codeData}
      language="py"
      placeholder="Please enter Python code."
      onChange={(event) => handleCodeChange(event)}
      padding={15}
      style={{
        fontSize: 12,
        backgroundColor: "#f4f4f4",
        fontFamily: "IBM Plex Mono",
        minHeight: "50vh",
        border: "none",
      }}
    />
  );
};
export default Code;
