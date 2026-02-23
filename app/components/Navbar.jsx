"use client";
import Link from "next/link";
import { RiTelegram2Fill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "./anim";
import Curve from "./curve";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="max-w-5xl mx-auto px-6 lg:px-0 h-14  flex items-center justify-between fixed top-0 inset-x-0 z-50 backdrop-blur-md">
      <Link href={"/"}>
        <span className="font-semibold text-lg">Onex</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 lg:ml-24">
        <Link
          href="/portfolio"
          className="relative text-sm text-zinc-400 hover:text-white duration-200 group"
        >
          <span>Portfolio</span>
          <div className=" group-hover:w-full duration-200 w-0 h-[1px] absolute -bottom-1 left-0 bg-gradient-to-r from-zinc-400 to-transparent"></div>
        </Link>
        <a
          href="#services"
          className="relative text-sm text-zinc-400 hover:text-white duration-200 group"
        >
          <span>Services</span>
          <div className=" group-hover:w-full duration-200 w-0 h-[1px] absolute -bottom-1 left-0 bg-gradient-to-r from-zinc-400 to-transparent"></div>
        </a>
        <a
          href="#process"
          className="relative text-sm text-zinc-400 hover:text-white duration-200 group"
        >
          <span>Process</span>
          <div className=" group-hover:w-full duration-200 w-0 h-[1px] absolute -bottom-1 left-0 bg-gradient-to-r from-zinc-400 to-transparent"></div>
        </a>
        <a
          href="#why"
          className="relative text-sm text-zinc-400 hover:text-white duration-200 group"
        >
          <span>Why Onex</span>
          <div className=" group-hover:w-full duration-200 w-0 h-[1px] absolute -bottom-1 left-0 bg-gradient-to-r from-zinc-400 to-transparent"></div>
        </a>
        <a
          href="#faq"
          className="relative text-sm text-zinc-400 hover:text-white duration-200 group"
        >
          <span>FAQ</span>
          <div className=" group-hover:w-full duration-200 w-0 h-[1px] absolute -bottom-1 left-0 bg-gradient-to-r from-zinc-400 to-transparent"></div>
        </a>
      </nav>
      <Link
        href={"https://t.me/onex_to"}
        target="_blank"
        className=" hidden md:block"
      >
        <button className="border border-zinc-800 px-4 py-2 text-sm rounded-lg text-black bg-white flex items-center gap-2 cursor-pointer">
          <RiTelegram2Fill size={16} /> Start on Telegram
        </button>
      </Link>

      {/* mobile menu */}
      <>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="z-[999] w-[35px] h-[35px] flex items-center justify-center right-0 top-0 bg-[#202020] rounded-full cursor-pointer md:hidden"
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="  w-52 bg-[#0d0d0d] h-screen fixed right-0 top-0"
            >
              <div className=" w-full h-full px-5">
                <div className=" pb-2 border-b border-zinc-800 mt-20">
                  <span className=" font-tommy-light font-light">
                    Navigation
                  </span>
                </div>

                <div className=" mt-10 font-tommy-light">
                  <ul className=" flex flex-col gap-6 text-lg">
                    <li>
                      <Link
                        onClick={() => {
                          setTimeout(() => setIsActive(false), 500);
                        }}
                        href="/portfolio"
                        className=" hover:text-[#e9e9e9] duration-400 flex items-center gap-2"
                      >
                        <span>Portfolio</span>
                        <div>
                          <ArrowRight className=" mt-1" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#services"
                        onClick={() => {
                          setTimeout(() => setIsActive(false), 500);
                        }}
                        className=" hover:text-[#e9e9e9] duration-400"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#process"
                        onClick={() => {
                          setTimeout(() => setIsActive(false), 500);
                        }}
                        className=" hover:text-[#e9e9e9] duration-400"
                      >
                        Process
                      </a>
                    </li>

                    <li>
                      <a
                        href="#why"
                        onClick={() => {
                          setTimeout(() => setIsActive(false), 500);
                        }}
                        className=" hover:text-[#e9e9e9] duration-400"
                      >
                        Why Onex
                      </a>
                    </li>

                    <li>
                      <a
                        href="#faq"
                        onClick={() => {
                          setTimeout(() => setIsActive(false), 500);
                        }}
                        className=" hover:text-[#e9e9e9] duration-400"
                      >
                        FAQ
                      </a>
                    </li>

                    <li>
                      <Link href={"https://t.me/onex_to"} target="_blank">
                        <button className="border border-zinc-800 px-4 py-2 text-xs rounded-lg text-black bg-white flex items-center gap-2 cursor-pointer">
                          <RiTelegram2Fill size={16} /> Start on Telegram
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Curve />
            </motion.div>
          )}
        </AnimatePresence>
      </>
      {/* mobile menu end */}
    </header>
  );
}
