"use client";

import { motion } from "framer-motion";
import { RiTelegram2Fill } from "react-icons/ri";
import { fadeUp } from "../lib/motion";

export default function Hero() {
  return (
    <section className="text-center px-6 pt-14  h-screen  bg-[radial-gradient(1200px_500px_at_top_right,#080808,transparent)] flex items-center justify-center">
      <div>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-[78px] font-bold md:leading-20 hidden md:block"
        >
          Digital Systems Branding
          <br /> & Automation for <br />
          <span className="  bg-gradient-to-r from-white  to-[#6b6b6b] bg-clip-text text-transparent ">
            Online Businesses
          </span>
        </motion.h1>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-[78px] font-semibold md:leading-20 md:hidden block text-center"
        >
          Digital Systems Branding & Automation for <br />
          <span className="  bg-gradient-to-r from-white  to-[#6b6b6b] bg-clip-text text-transparent">
            Online Businesses
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="max-w-2xl mx-auto mt-6 text-[#a1a1a1] text-[17px] leading-relaxed text-center"
        >
          {/* We design your identity, build your platform, and automate your
          workflows — so you can scale without chaos. */}
          We design your identity, build powerful web systems, and develop
          intelligent automation — so you can scale faster, operate smarter, and
          stand out online.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mt-10 flex flex-col md:flex-row  justify-center gap-4"
        >
           <Link
        href={"https://t.me/onex_to"}
        target="_blank"
        className=" hidden md:block"
      >
          <button className="bg-white text-black px-6  py-3 rounded-xl flex items-center justify-center gap-2 font-medium cursor-pointer hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] duration-300 hover:transform  hover:-translate-y-0.5">
            <RiTelegram2Fill size={16} /> Start on Telegram
          </button>
              </Link>
          <a href="#services"></a>
          <button className="border border-zinc-800 px-6 py-3 rounded-xl text-text-gray hover:bg-zinc-900 duration-300 hover:transform cursor-pointer hover:-translate-y-0.5 hover:text-white">
            View Services
          </button>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="max-w-2xl mx-auto mt-10 text-text-gray/70 text-[14px] leading-relaxed"
        >
          Trusted by community owners & digital operators.
        </motion.p>
      </div>
    </section>
  );
}
