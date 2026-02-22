"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import Title from "./Title";
import { Fingerprint, ShieldCheck, Handshake } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Fingerprint,
      heading: "100%",
      title: "Custom Code",
      subTitle: "No Generic Templates",
      description:
        "Every project is engineered from scratch for performance and flexibility.",
    },
    {
      icon: ShieldCheck,
      heading: "Day 1",
      title: "Protection",
      subTitle: "Security & Scalability First",
      description:
        "Built with modern development standards and scalable architecture from day one.",
    },
    {
      icon: Handshake,
      heading: "30 Days",
      title: "Free Support",
      subTitle: "Long-Term Partnership",
      description:
        "We don’t disappear after launch. Support, refinements, and system improvements are part of how we work.",
    },
  ];
  return (
    <section
      id="why"
      className="max-w-5xl mx-auto px-6 lg:px-0 py-32 text-center"
    >
      <Title title={"Why onex"} subTitle={"Built different"} />

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#070707] border border-primary-border rounded-2xl p-7 pt-12 group"
          >
            <h3 className="text-5xl font-bold mb-5 ">{feature.heading}</h3>
            <h4 className=" uppercase text-text-gray font-medium tracking-wider text-center text-[12px]">
              {feature.title}
            </h4>
            <div className=" w-10 border-t border-primary-border mx-auto my-5" />
            <div className=" mx-auto size-12 rounded-xl border border-primary-border bg-[#111111] flex items-center justify-center cursor-pointer">
              <feature.icon className="size-[19px] text-icon group-hover:text-white duration-200" />
            </div>
            <h3 className="text font-semibold mb-2 mt-4">{feature.subTitle}</h3>
            <p className="text-sm text-text-gray">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
