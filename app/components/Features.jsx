"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function Features() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-0 py-32 text-center">
      <h2 className="text-3xl font-semibold mb-16">Built different</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {["100%", "Day 1", "30 Days"].map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-2">{t}</h3>
            <p className="text-sm text-zinc-400">
              Thoughtfully engineered with long-term scalability in mind.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
