"use client";

import Link from "next/link";
import Step from "../Step";
import ArrowIcon from "../svg/ArrowIcon";
import CodeBlock from "../CodeBlock";
import CopyIcon from "../svg/CopyIcon";
import { useState } from "react";

const apiInstall: string = `git clone https://github.com/grubersjoe/github-contributions-api.git
cd github-contributions-api
npm install
npm run start
`;

const StepsSection = ({ componentCode }: { componentCode: string }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCopy = () => {};

  return (
    <div className="max-w-3xl z-10 px-2 md:px-4">
      <Step title="Get your data" number="1">
        <span className="font-light text-base text-foreground-secondary">
          You can use your own data but it’s recommended to use the{" "}
          <Link
            className="inline-flex items-center text-foreground underline cursor-pointer"
            target="_blank"
            href="https://github.com/grubersjoe/github-contributions-api"
          >
            <span>Joe Grubers API </span>
            <ArrowIcon />
          </Link>
          <br />
          The component comes preconfigured with a public API endpoint. This is
          useful for testing but not recommended for production. You can
          self-host the API with the following commands :
        </span>
        <CodeBlock language={"none"} code={apiInstall} />
      </Step>
      <Step title="Import the component" number="2">
        <span className="font-light text-base text-foreground-secondary">
          Copy / Paste the component into your `/components` folder
        </span>
        <div className="flex justify-between items-end w-full">
          <button
            onClick={handleCopy}
            className="cursor-pointer hover:bg-foreground/90 flex text-background bg-foreground py-2 px-4 rounded-lg gap-2 font-semibold"
          >
            <CopyIcon />
            <span>Copy</span>
          </button>
          <button onClick={handleClick} className="cursor-pointer underline">
            View Raw
          </button>
        </div>
        {open && <CodeBlock language={"typescript"} code={componentCode} />}
      </Step>
      <Step title="Implement with style 😎" number="3" isLast>
        <span className="font-light text-base text-foreground-secondary">
          You can use one of the templates below or customize yourself with the{" "}
          <Link
            className="text-foreground underline cursor-pointer"
            href="#props-section"
          >
            <span>props</span>
          </Link>
        </span>
        <div className="flex"></div>
      </Step>
    </div>
  );
};

export default StepsSection;
