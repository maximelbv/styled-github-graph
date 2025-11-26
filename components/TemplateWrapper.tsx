"use client";

import { ReactNode } from "react";
import CopyIcon from "./svg/CopyIcon";
import { toast } from "react-toastify";

interface TemplateWrapperProps {
  children: ReactNode;
  codeToCopy: string;
}

const TemplateWrapper = ({ children, codeToCopy }: TemplateWrapperProps) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeToCopy);
    toast("Copied to Clipboard", {
      position: "bottom-right",
      hideProgressBar: true,
      closeButton: false,
      style: {
        background: "#23232a",
        border: "1px solid #27272a",
        color: "#fff",
        fontWeight: "500",
        fontFamily: "Bricolage Grotesque",
      },
    });
  };

  return (
    <div>
      <div className="overflow-hidden bg-background-element border border-border flex items-center justify-center rounded-t-lg aspect-video">
        {children}
      </div>
      <div className="bg-background-element border-b border-x border-border rounded-b-lg p-2">
        <button
          className="bg-background-element-light hover:bg-background-element-light/80 flex gap-1 p-1 px-2 rounded-lg cursor-pointer border border-border"
          onClick={handleCopy}
        >
          <CopyIcon />
          Copy
        </button>
      </div>
    </div>
  );
};

export default TemplateWrapper;
