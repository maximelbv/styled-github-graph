"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GithubIcon from "./svg/GithubIcon";

const Header = () => {
  return (
    <div className="z-999 fixed top-4 sm:top-8 left-0 right-0 px-4">
      <motion.div
        initial={{
          maxWidth: "72px",
          y: -100,
        }}
        animate={{
          maxWidth: ["72px", "72px", "500px"],
          y: [-100, 0, 0],
        }}
        transition={{ ease: [0.8, 0, 0, 1], duration: 1.2 }}
        className="border border-border relative flex items-center justify-center h-17.5 bg-background-element rounded-2xl p-2 max-w-[500px] mx-auto"
      >
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.3, ease: [0.8, 0, 0, 1] }}
            className="absolute left-4"
          >
            <Link href={"/"}>
              <span className="font-display text-5xl">SGG</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.3, ease: [0.8, 0, 0, 1] }}
            className="absolute right-4 flex items-center justify-center"
          >
            <Link target="_blank" href={""}>
              <GithubIcon />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
