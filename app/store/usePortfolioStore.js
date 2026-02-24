import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const usePortfolioStore = create((set, get) => ({
  projects: [],
  categories: [],
  isFetchingCategories: false,
  isFetching: false,
  selectedCategory: "all",

  selectedProject: null,
  isProjectModalOpen: false,

  setSelectedCategory: (category) => {
    set({ selectedCategory: category });
  },

  openProjectModal: (project) => {
    set({
      selectedProject: project,
      isProjectModalOpen: true,
    });
  },

  closeProjectModal: () => {
    set({
      selectedProject: null,
      isProjectModalOpen: false,
    });
  },

  fetchProjects: async (category) => {
    set({ isFetching: true });
    try {
      const categoryQuery =
        category && category !== "all"
          ? `category=${category}`
          : "category=all";
      const res = await axiosInstance.get(
        `/gallery/projects-for-client?${categoryQuery}`,
      );
      const projects = res.data;
      set({ projects });
    } catch (error) {
      console.log("Error in fetching projects", error);
      toast.error(error.response.data.error);
    } finally {
      set({ isFetching: false });
    }
  },
  fetchCategories: async () => {
    set({ isFetchingCategories: true });
    try {
      const res = await axiosInstance.get("/gallery/all-categories");
      const categories = res.data;
      set({ categories });
    } catch (error) {
      console.log("Error in fetching categories", error);
      toast.error(error.response.data.error);
    } finally {
      set({ isFetchingCategories: false });
    }
  },
}));
