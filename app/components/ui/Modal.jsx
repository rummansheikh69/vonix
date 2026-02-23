"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Modal({ isOpen, onClose, children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md pointer-events-auto"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center pointer-events-none">
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      y: 120,
                      scaleY: 0.6,
                      scaleX: 0.85,
                      borderRadius: "2rem",
                    }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      y: 0,
                      scaleY: 1,
                      scaleX: 1,
                      borderRadius: "1.25rem",
                    }
              }
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      y: 150,
                      scaleY: 0.6,
                      scaleX: 0.85,
                      borderRadius: "2rem",
                    }
              }
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                mass: 0.9,
              }}
              style={{
                transformOrigin: "bottom center",
              }}
              className={`relative w-full sm:max-w-5xl mx-4 mb-6 sm:mb-0 bg-[#0e0e0e] border border-[#1d1d1d] shadow-xl overflow-hidden pointer-events-auto ${className}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="">{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
