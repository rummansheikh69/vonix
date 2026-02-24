"use client";
import { usePortfolioStore } from "@/app/store/usePortfolioStore";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Category() {
  const {
    categories,
    fetchCategories,
    isFetchingCategories,
    selectedCategory,
    setSelectedCategory,
  } = usePortfolioStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-20 px-4 md:px-0">
      <div className="mx-auto w-max">
        <div className="px-2 py-1 border border-primary-border rounded-full bg-[#080808]">
          {/* Fixed height container to prevent jump */}
          <div className="relative min-h-[42px] min-w-52 flex items-center">
            <AnimatePresence mode="wait">
              {isFetchingCategories ? (
                <motion.div
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-2 overflow-x-auto rounded-full no-scrollbar absolute inset-0"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="px-5 py-1.5 border border-primary-border bg-[#111] rounded-full"
                    >
                      <div className="w-8 h-4 bg-white/20 rounded-full animate-pulse" />
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="categories"
                  initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex items-center gap-2 overflow-x-auto rounded-full no-scrollbar"
                >
                  {categories?.map((category) => (
                    <motion.button
                      layout
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-5 py-1.5 cursor-pointer rounded-full capitalize ${selectedCategory === category?.name ? "bg-[#111] border border-primary-border" : ""}`}
                      key={category?._id}
                    >
                      {category?.name}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
