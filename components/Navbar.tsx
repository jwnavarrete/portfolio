"use client";

import Link from "next/link";
import ButtonAsLink from "./ButtonAsLink";
import { motion } from "framer-motion";
import { FiActivity } from "react-icons/fi";
import { useCallback, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }, [isMobileNavOpen]);

  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="hidden md:flex h-24 justify-between items-center border-b border-light/10 bg-black/60 backdrop-blur-xl shadow-xl fixed top-0 left-0 right-0 z-[100]"
      >
        {/* INNER HEADER */}
        <div className="wrapper flex justify-between items-center">
          {/* LOGO */}
          <div className="left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5, delay: 0.7 }}
              className="logo flex items-center gap-2"
            >
              <span className="text-2xl text-accent ">
                <FiActivity />
              </span>
              <Link href="/" className="linear-flow">
                John Willian Navarrete
              </Link>
            </motion.div>
          </div>

          {/* MIDDLE NAV */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
            className="mid py-4 px-20 border border-light/10 rounded bg-black/10 backdrop-blur-xl hover:px-20 duration-500 shadow-xl"
          >
            <nav className="flex gap-5">
              <li className="list-none">
                <Link href="/" className="linear-flow">
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link href="/#about" className="linear-flow">
                  About
                </Link>
              </li>
              <li className="list-none">
                <Link href="/#projects" className="linear-flow">
                  Projects
                </Link>
              </li>
              <li className="list-none">
                <Link href="/#skills" className="linear-flow">
                  Skills
                </Link>
              </li>
              <li className="list-none">
                <Link href="/#contact" className="linear-flow">
                  Contact
                </Link>
              </li>
            </nav>
          </motion.div>

          {/* RIGHT NAV */}
          <div className="right">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5, delay: 0.9 }}
            >
              <ButtonAsLink
                href="https://drive.google.com/uc?export=download&id=1IjLXNY34c5URt2kikxhUAEX-PsrZ5LUO"
                placeholder="Download Resume"
                target="_blank"
              />
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE NAVIGATION */}
      <motion.header
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="md:hidden flex h-24 justify-between items-center border-b border-light/10 bg-black/60 backdrop-blur-xl shadow-xl fixed top-0 left-0 right-0 z-[100]"
      >
        {/* INNER HEADER */}
        <div className="wrapper flex justify-between items-center">
          {/* LOGO */}
          <div onClick={handleClick} className="left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5, delay: 0.7 }}
              className="logo flex items-center gap-2"
            >
              <span className="text-2xl text-accent">
                <FiActivity />
              </span>
              <Link href="/" className="linear-flow">
                John Willian Navarrete
              </Link>
            </motion.div>
          </div>
          {/* TOGGLE BUTTON */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
              onClick={handleClick}
              className="right flex flex-col gap-2 cursor-pointer"
            >
              <span
                className={clsx(
                  "bg-light w-7 h-[2px] rounded-full origin-left duration-500",
                  isMobileNavOpen ? "rotate-[45deg]" : "rotate-[0deg]"
                )}
              ></span>
              <span
                className={clsx(
                  "bg-light w-4 h-[2px] rounded-full duration-500",
                  isMobileNavOpen ? "translate-x-[100vw]" : "translate-x-0"
                )}
              ></span>
              <span
                className={clsx(
                  "bg-light w-7 h-[2px] rounded-full origin-left duration-500",
                  isMobileNavOpen ? "rotate-[-45deg]" : "rotate-[0deg]"
                )}
              ></span>
            </motion.div>
          </div>
        </div>
      </motion.header>
      {/* FIXED NAV MODAL */}
      <div
        onClick={handleClick}
        className={clsx(
          "fixed bg-accent top-0 left-0 right-0 bottom-0 h-screen w-screen z-[98] duration-700",
          isMobileNavOpen
            ? "translate-y-0 rounded-bl-[0px]"
            : "translate-y-[-100vh] rounded-bl-full"
        )}
      >
        <div
          className={clsx(
            "fixed bg-dark top-0 left-0 right-0 bottom-0 h-screen w-screen z-[99] duration-1000 flex justify-center items-center",
            isMobileNavOpen
              ? "translate-y-0 rounded-bl-[200px]"
              : "translate-y-[-100vh] rounded-bl-full"
          )}
        >
          <nav className="flex flex-col gap-5 text-4xl">
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.1 }}
                className="list-none"
              >
                <Link href="/" className="hover:text-accent duration-500">
                  Home
                </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.2 }}
                className="list-none"
              >
                <Link href="/#about" className="hover:text-accent duration-500">
                  About
                </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.3 }}
                className="list-none"
              >
                <Link
                  href="/#projects"
                  className="hover:text-accent duration-500"
                >
                  Projects
                </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.4 }}
                className="list-none"
              >
                <Link
                  href="/#skills"
                  className="hover:text-accent duration-500"
                >
                  Skills
                </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.5 }}
                className="list-none"
              >
                <Link
                  href="/#contact"
                  className="hover:text-accent duration-500"
                >
                  Contact
                </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.6 }}
                className="list-none"
              >
                <Link
                  href="https://drive.google.com/uc?export=download&id=1oGIQug9qQsaq1W636qX2d60YKOsjlRL1"
                  target="_blank"
                  className="hover:text-accent duration-500"
                >
                  Resume
                </Link>
              </motion.li>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
