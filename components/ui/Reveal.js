"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/utils/motion";

/**
 * Lightweight wrapper that fades + slides its children into view on scroll.
 * Accepts an optional `variants` override and `delay`.
 */
export default function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className = "",
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
