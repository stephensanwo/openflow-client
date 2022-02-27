import React, { useEffect } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

interface Props {
  codeData: string | undefined;
}

const Code: React.FC<Props> = ({ codeData }) => {
  const [code, setCode] = React.useState<string | undefined>("");
  useEffect(() => {
    setCode(codeData);
    console.log(codeData);
  }, [codeData]);
  return (
    <CodeEditor
      value={code}
      language="py"
      placeholder="Please enter Python code."
      onChange={(evn) => setCode(evn.target.value)}
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
