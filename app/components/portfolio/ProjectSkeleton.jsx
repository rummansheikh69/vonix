"use client";
import { motion, useReducedMotion } from "framer-motion";

function ProjectSkeleton({ index }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      layout
      className="w-full h-64 rounded-xl bg-[#0b0b0b] border border-[#141414]"
      animate={
        reduceMotion ? { opacity: 0.65 } : { opacity: [0.55, 0.75, 0.55] }
      }
      transition={
        reduceMotion
          ? {}
          : {
              duration: 1.6,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.15,
            }
      }
    >
      <div className="p-4 space-y-3">
        <div className="h-36 rounded-lg bg-[#101010]" />
        <div className="h-4 w-3/4 rounded bg-[#121212]" />
        <div className="h-4 w-1/2 rounded bg-[#121212]" />
      </div>
    </motion.div>
  );
}

export default ProjectSkeleton;
