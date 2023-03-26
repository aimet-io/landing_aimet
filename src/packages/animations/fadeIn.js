/**
 * @type {import("framer-motion").MotionProps}
 */

export const fadeInUp = {
  initial: {
    opacity: 0,

    y: 60,
  },

  viewport: {
    once: true,
  },

  whileInView: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.5,
      delay: 0.1,

      ease: "easeInOut",
    },
  },
};
