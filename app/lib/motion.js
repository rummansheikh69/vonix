export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
      delay,
    },
  }),
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
