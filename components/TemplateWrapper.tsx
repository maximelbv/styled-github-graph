import { ReactNode } from "react";
import CopyIcon from "./svg/CopyIcon";

const TemplateWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="overflow-hidden bg-background-element border border-border flex items-center justify-center rounded-t-lg aspect-video">
        {children}
      </div>
      <div className="bg-background-element border-b border-x border-border rounded-b-lg p-2">
        <button className="bg-background-element-light hover:bg-background-element-light/80 flex gap-1 p-1 px-2 rounded-lg cursor-pointer border border-border">
          <CopyIcon />
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
};

export default TemplateWrapper;
