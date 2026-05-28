"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";

/**
 * Editorial section heading: small index number, eyebrow label, big title,
 * and an optional supporting line. Works on light and dark backgrounds.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const eyebrowColor = light ? "text-lime-400" : "text-forest-600";
  const titleColor = light ? "text-cream" : "text-ink";
  const descColor = light ? "text-cream/70" : "text-ink/60";
  const ruleColor = light ? "bg-lime-400/60" : "bg-forest-700/30";

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col ${alignment} max-w-2xl`}
    >
      {(index || eyebrow) && (
        <motion.div
          variants={fadeUp}
          className={`mb-4 flex items-center gap-3 ${eyebrowColor}`}
        >
          {index && (
            <span className="font-display text-sm font-semibold tabular-nums tracking-tightest">
              {index}
            </span>
          )}
          <span className={`h-px w-8 ${ruleColor}`} />
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              {eyebrow}
            </span>
          )}
        </motion.div>
      )}

      <motion.h2
        variants={fadeUp}
        className={`font-display text-4xl font-extrabold leading-[1.02] tracking-tightest sm:text-5xl ${titleColor}`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-base leading-relaxed sm:text-lg ${descColor}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
