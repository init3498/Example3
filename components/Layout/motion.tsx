export const navigationAnimations = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 200,
    transition: {
      x: { velocity: 100 },
      delay: 1,
      duration: 1,
    },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      x: { velocity: 200 },
      delay: 0.2,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -200,
    transition: {
      x: { velocity: 200 },
      delay: 1,
      duration: 1,
    },
  },
};
