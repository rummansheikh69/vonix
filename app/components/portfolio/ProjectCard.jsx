"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";
function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      onClick={onOpen}
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full h-64 rounded-xl bg-[#090909]  overflow-hidden relative cursor-pointer group hover:scale-[1.02] duration-500 transition-transform"
    >
      <Image
        src={project?.thumbnailImage}
        alt={project?.title}
        layout="fill"
        objectFit="cover"
        className=" group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Layer 1 → Full card blur */}
        <div className="absolute inset-0 z-10 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-500" />

        {/* Content wrapper */}
        <div className="relative z-20 p-3 flex flex-col w-full h-full">
          <div className=" absolute -z-10 top-0 left-0 w-full h-full bg-[radial-gradient(200px_200px_at_top_left,#111,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className=" absolute -z-10 top-0 left-0 w-full h-full bg-[radial-gradient(100px_100px_at_bottom_right,#111,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="rounded-md px-2 py-[3px] border border-primary-border bg-[#0b0b0b] flex items-center justify-center">
                <span className="text-xs font-medium text-zinc-300 capitalize">
                  {project?.category}
                </span>
              </div>

              <div className="opacity-0 group-hover:opacity-100 duration-500 size-8 rounded-full border border-primary-border bg-[#0b0b0b] flex items-center justify-center">
                <Eye size={18} className="text-zinc-300" />
              </div>
            </div>
          </div>

          {/* Layer 2 → Bottom glass blur */}
          <div className="relative z-30 h-20 w-full p-3 bg-black/30 backdrop-blur-[3px] group-hover:backdrop-blur-[12px] border border-primary-border rounded-xl group-hover:-translate-y-2 transition-all duration-500">
            {/* small card blur */}
            <div className=" px-2.5 py-1 absolute -top-4/6 group-hover:-translate-y-3 left-1/2 -translate-x-1/2 h-16 w-40 bg-white/10 backdrop-blur-[4px] rounded-t-2xl border-2 border-[#81818150] border-b-0 duration-500 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100">
              <h1 className=" text-lg text-center font-semibold truncate capitalize">
                {project?.title}
              </h1>
              <h1 className=" capitalize text-sm truncate text-zinc-300 text-center">
                {project?.description}
              </h1>
            </div>

            <h1 className=" capitalize font-medium text-lg truncate">
              {project?.title}
            </h1>
            <h1 className=" capitalize text-sm truncate text-zinc-400">
              {project?.description}
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
