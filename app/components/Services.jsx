"use client";

import { motion } from "framer-motion";
import { Gem, Code2, Settings } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

const items = [
  { icon: Gem, title: "Branding", price: "€150" },
  { icon: Code2, title: "Web Development", price: "€900" },
  { icon: Settings, title: "Automation", price: "€1,200" },
];

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-0 py-32 text-center">
      <h2 className="text-3xl font-semibold mb-16">What we build</h2>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 text-left"
          >
            <item.icon className="text-zinc-500 mb-4" />
            <h3 className="font-medium mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-400">
              Custom-built solutions designed for scale and performance.
            </p>
            <span className="block mt-6 font-semibold">{item.price}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
