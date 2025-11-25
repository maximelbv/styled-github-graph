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
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      wrapLines
      wrapLongLines
      customStyle={{
        background: "#18181b",
        border: "solid 1px #27272a",
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
  );
};

export default CodeBlock;
