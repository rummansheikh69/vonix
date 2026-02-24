"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectSkeleton from "./ProjectSkeleton";
import { AnimatePresence } from "framer-motion";
import Modal from "../ui/Modal";
import ProjecrDetailsModal from "./ProjecrDetailsModal";
import { usePortfolioStore } from "@/app/store/usePortfolioStore";

function Projects() {
  const {
    isFetching,
    projects,
    fetchProjects,
    selectedCategory,
    isProjectModalOpen,
    closeProjectModal,
  } = usePortfolioStore();

  useEffect(() => {
    fetchProjects(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-[70vh] pb-20 max-w-5xl mx-auto px-4 md:px-0">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        <AnimatePresence>
          {isFetching
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProjectSkeleton key={`skeleton-${i}`} index={i} />
              ))
            : projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}

          {!isFetching && projects.length === 0 && (
            <div className="col-span-full text-center py-10 text-zinc-400">
              No projects found in this category.
            </div>
          )}
        </AnimatePresence>

        <Modal isOpen={isProjectModalOpen} onClose={closeProjectModal}>
          <ProjecrDetailsModal />
        </Modal>
      </div>
    </div>
  );
}
export default Projects;
