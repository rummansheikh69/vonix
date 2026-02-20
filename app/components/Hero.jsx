"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { fadeUp } from "../lib/motion";

export default function Hero() {
  return (
    <section className="text-center px-6 pt-32 pb-40">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-6xl font-semibold leading-tight"
      >
        Digital Branding & <br />
        Web Systems for <br />
        <span className="text-zinc-500">Online Businesses</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-xl mx-auto mt-6 text-zinc-400"
      >
        We design your identity, build your platform, and automate your
        workflows — so you can scale without chaos.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-10 flex justify-center gap-4"
      >
        <button className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2">
          <Send size={16} /> Start on Telegram
        </button>
        <button className="border border-zinc-800 px-6 py-3 rounded-xl">
          View Services
        </button>
      </motion.div>
    </section>
  );
}
