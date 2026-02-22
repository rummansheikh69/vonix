"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Lightbulb,
  Laptop,
  Rocket,
  Hammer,
  LucideRocket,
} from "lucide-react";
import { fadeUp } from "../lib/motion";
import Title from "./Title";

const steps = [
  {
    icon: MessageCircle,
    label: "Consult",
    description:
      "We analyze your goals, technical requirements, and long-term vision.",
  },
  {
    icon: Lightbulb,
    label: "Strategy",
    description:
      "We architect the system, brand structure, and automation blueprint.",
  },
  {
    icon: Hammer,
    label: "Build",
    description:
      "Rapid, clean development with testing, iteration, and optimization.",
  },
  {
    icon: LucideRocket,
    label: "Launch",
    description:
      "Deployment, integration, and ongoing support to ensure smooth scaling.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="max-w-5xl mx-auto px-4 lg:px-0 py-32 text-center"
    >
      <Title title={"process"} subTitle={"How we work"} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative ">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" flex flex-col items-center group"
          >
            <div className="z-20 size-14 rounded-2xl shadow-md border border-[#1f1f1f] bg-[#070707] flex items-center justify-center">
              <s.icon className="mx-auto text-text-gray group-hover:text-zinc-200 duration-300" />
            </div>
            <div className=" mt-2 border border-[#1f1f1f] bg-[#0e0e0e] flex items-center justify-center rounded-full px-2.5 py-[3px] text-text-gray font-bold text-[10px]">
              0{i + 1}
            </div>
            <p className=" mt-4 font-semibold tracking-tight text-zinc-200">
              {s.label}
            </p>
            <p className=" text-center text-sm text-text-gray md:max-w-44 mt-3">
              {s.description}
            </p>
          </motion.div>
        ))}

        <div className=" z-10 md:block hidden absolute top-1/7 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl mx-auto w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-900  to-transparent "></div>
      </div>
    </section>
  );
}
