export const dropdownContainerVariant = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    overflow: "hidden",
    height: "auto",
    opacity: 1,
    type: "tween",
  },
  exit: { height: 0, overflow: "hidden" },
};

export const sideBarContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const sideBarChildrenVariant = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};
export const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export const carouselVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
};

export const animateIntoViewLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5, ease: "easeOut" } },
};
export const animateIntoViewRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.5, ease: "easeOut" } },
};
// export const animateIntoViewRight = {
//   initial: { opacity: 0, x: 100 },
//   animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
//   exit: { opacity: 0, x: 100, transition: { duration: 0.5, ease: "easeOut" } },
// };
