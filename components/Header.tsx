"use client";

import Link from "next/link";
import GithubIcon from "./svg/GithubIcon";
import Logo from "./svg/Logo";

const Header = () => {
  return (
    <div className="p-2 sm:p-4 z-999 relative">
      <div className="border border-border relative flex items-center justify-center h-17.5 bg-background-element rounded-2xl p-2 max-w-[500px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="absolute left-4">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>

          <div className="absolute right-4 flex items-center justify-center">
            <Link
              target="_blank"
              href={"https://github.com/maximelbv/styled-github-graph"}
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
