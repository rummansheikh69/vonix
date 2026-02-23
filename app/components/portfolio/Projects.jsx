"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectSkeleton from "./ProjectSkeleton";
import { AnimatePresence } from "framer-motion";
import Modal from "../ui/Modal";
import ProjecrDetailsModal from "./ProjecrDetailsModal";

function Projects() {
  const projects = [
    {
      _id: "ajksal",
      title: "Logo ",
      description:
        "Olympus is a good company to start small business with multiple currency online along with crypto and NFTs",
      thumbnailImage: "https://i.makeagif.com/media/5-18-2015/ZgtMpI.gif",
      images: ["", "", ""],
      category: "logo",
    },
    {
      _id: "dsggd",
      title: "threads",
      description: "Custom made",
      thumbnailImage:
        "https://marketplace.canva.com/EAFauoQSZtY/2/0/1600w/canva-brown-mascot-lion-free-logo-kAK-ljYAGXg.jpg",
      images: ["", "", ""],
      category: "development",
    },
    {
      _id: "hfasa",
      title: "Logo for small business",
      description:
        "Olympus is a good company to start small business with multiple currency online along with crypto and NFTs",
      thumbnailImage:
        "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/76499/optimized_product_thumb_stage.jpg",
      images: ["", "", ""],
      category: "thread",
    },
  ];

  const isGettingProjects = false;
  const [open, setOpen] = useState(false);
  return (
    <div className=" pb-20 max-w-5xl mx-auto px-4 md:px-0">
      <div className=" w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        <AnimatePresence>
          {isGettingProjects
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProjectSkeleton key={`skeleton-${i}`} index={i} />
              ))
            : projects.map((project) => (
                <ProjectCard
                  onOpen={() => setOpen(true)}
                  key={project._id}
                  project={project}
                />
              ))}
        </AnimatePresence>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <ProjecrDetailsModal onclose={() => setOpen(false)} />
        </Modal>
      </div>
    </div>
  );
}

export default Projects;
