"use client";

import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Laptop, Rocket } from "lucide-react";
import { fadeUp } from "../lib/motion";

const steps = [
  { icon: MessageCircle, label: "Consult" },
  { icon: Lightbulb, label: "Strategy" },
  { icon: Laptop, label: "Build" },
  { icon: Rocket, label: "Launch" },
];

export default function Process() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-0 py-32 text-center">
      <h2 className="text-3xl font-semibold mb-20">How we work</h2>

      <div className="grid md:grid-cols-4 gap-10">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="opacity-70"
          >
            <s.icon className="mx-auto mb-4 text-zinc-500" />
            <p>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
