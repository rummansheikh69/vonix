"use client";

import { motion } from "framer-motion";
import { Code2, Settings, Palette, Bot } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";
import Title from "./Title";

const items = [
  {
    icon: Palette,
    title: "Branding",
    description:
      "A complete visual identity that makes you recognizable and trusted from day one.",
    price: "30",
    tags: ["logos", "brand kits", "identity"],
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive, and conversion-optimized sites — no templates, no compromises.",
    price: "200",
    tags: ["Landing Pages", "Custom Pages", "APIs"],
  },
  {
    icon: Bot,
    title: "Bot Development",
    description:
      "Custom-built bots designed for communities, automation, moderation, payments, and advanced workflows.",
    price: "50",
    tags: ["Telegram Bots", "AI Workflows", "Systems"],
  },
  {
    icon: Settings,
    title: "Custom Software",
    description:
      "Tailored software solutions built specifically for your business operations — secure, scalable, and fully customized.",
    price: "350",
    tags: ["Internal Tools", " Systems", "Dashboards"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-5xl mx-auto px-4 lg:px-0 py-36 text-center"
    >
      <Title title={"services"} subTitle={"What we build"} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-5"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={`bg-[#070707] border border-primary-border rounded-2xl w-full h-96 group hover:shadow-[0_0_27px_rgba(255,255,255,0.05)] duration-300
      ${i === items.length - 1 ? "md:col-start-2" : ""}
    `}
          >
            <div className=" w-full h-full flex flex-col">
              <div className=" flex-1 p-8">
                <div className=" size-14 rounded-2xl shadow-md border border-[#1f1f1f] bg-[#111] flex items-center justify-center group-hover:bg-[#131313] duration-300">
                  <item.icon className="size-6 text-[#a1a1a1] group-hover:text-zinc-200 duration-300" />
                </div>

                <div className=" mt-6">
                  <h2 className=" text-left text-xl font-semibold">
                    {item.title}
                  </h2>
                </div>

                {/* tags  */}
                <div className=" flex flex-wrap gap-1.5 my-5">
                  {item.tags.map((tag, i) => (
                    <div className=" px-2 h-6 rounded-full border border-primary-border flex items-center justify-center bg-[#0f0f0f] ">
                      <span
                        key={i}
                        className=" text-[#a1a1a1] group-hover:text-zinc-200 duration-300 text-[10.5px] font-semibold capitalize"
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* description  */}
                <div>
                  <h4 className=" text-left text-text-gray text-sm">
                    {item.description}
                  </h4>
                </div>
              </div>

              <div className=" h-20 px-8 flex items-center justify-between border-t border-primary-border">
                <h2 className=" text-text-gray uppercase tracking-wide text-xs">
                  Starting from
                </h2>
                <h2 className=" text-2xl font-semibold">${item.price}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
