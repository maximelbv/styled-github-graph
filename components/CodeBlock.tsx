// components/CodeBlock.tsx

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div style={{ overflowX: "auto", maxWidth: "100%" }}>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLines
        wrapLongLines
        customStyle={{
          background: "#18181b",
          border: "solid 1px #27272a",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
        codeTagProps={{
          style: {
            background: "#18181b",
            maxWidth: "100%",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
