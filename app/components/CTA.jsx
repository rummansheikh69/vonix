"use client";
import { RiTelegram2Fill } from "react-icons/ri";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import {Link} from "next/link

export default function CTA() {
  return (
    <div className="px-4 md:px-0">
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto h-[28rem] text-center bg-[#070707] rounded-3xl border-[1.5px] border-[#1d1d1d] p-[0.1px]"
      >
        <div className=" w-full h-full flex flex-col justify-center rounded-[23px] bg-gradient-to-b via-[#070707] from-[#0f0f0f] to-[#070707]  p-[1px]">
          <div className=" w-full h-full bg-[#070707] rounded-[22px]">
            <div
              className="
          w-full h-full flex flex-col items-center justify-center
          rounded-[22px]
          bg-[radial-gradient(350px_350px_at_top,#111,transparent)]
          "
            >
              <div className=" size-14 rounded-2xl shadow-md border border-[#1f1f1f] bg-[#131313] flex items-center justify-center">
                <RiTelegram2Fill className="size-6 text-[#a1a1a1]" />
              </div>
              <h2 className=" text-3xl md:text-5xl font-semibold mt-8">
                Ready to scale?
              </h2>
              <p className="text-zinc-400 mt-4 mb-8 text-[#1f1f1f]">
                No pressure, no sales pitch <br />— just a conversation about
                your project.
              </p>
               <Link
        href={"https://t.me/onex_to"}
        target="_blank"
        className=" hidden md:block"
      >
              <button className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2 mx-auto hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] duration-300 hover:transform cursor-pointer hover:-translate-y-0.5">
                <Send size={16} /> Start on Telegram
              </button>
                  </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
