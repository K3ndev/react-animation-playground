import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

type FadeOnScrollType = {
  duration: number;
  delay: number;
  timingCubic: [number, number, number, number];
  translate: string;
  animateOnce: boolean;
  children: ReactNode;
};

/**
 * A component that animates an element on scroll into view using a specified CSS transition.
 *
 * This component uses the `useInView` hook from `framer-motion` to detect when the element is visible in the viewport.
 * When the element comes into view, it transitions from its initial state (with the specified transform and opacity) to its final state.
 * It also defines exit animations for when the element scrolls out of view.
 *
 * @param {FadeOnScrollType} props - The properties for configuring the animation and rendering.
 * @param {number} props.duration - Duration of the transition (e.g., 0.9). Specifies how long the transition should take in seconds.
 * @param {number} props.delay - Delay before the transition starts (e.g., 0.5). Specifies how long to wait before starting the transition in seconds.
 * @param {number[]} props.timingCubic - Array of four numbers for cubic-bezier timing function (e.g., [0.17, 0.55, 0.55, 1]).
 * @param {string} props.translate - CSS transform value for the initial state (e.g., "translateX(-20px)"). Determines the initial transform applied to the element before it becomes visible.
 * @param {boolean} props.animateOnce - If true, the animation will trigger only once when the element scrolls into view.
 * @param {ReactNode} props.children - Child elements to be rendered inside the component.
 * @returns {JSX.Element} The animated element with its children.
 */

export const AnimateOnScroll = ({
  duration,
  delay,
  timingCubic,
  translate,
  animateOnce,
  children,
}: FadeOnScrollType): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: animateOnce });

  const variants = {
    hidden: { opacity: 0, transform: translate },
    visible: { opacity: 1, transform: "none" },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="hidden"
      variants={variants}
      transition={{ duration: duration, delay: delay, ease: timingCubic }}
    >
      {children}
    </motion.div>
  );
};

// todo add exit animation
