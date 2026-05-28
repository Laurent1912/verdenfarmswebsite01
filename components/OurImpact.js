"use client";

import { motion } from "framer-motion";
import { IMPACT_AREAS } from "@/utils/data";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";

export default function OurImpact() {
  return (
    <section
      id="impact"
      className="relative isolate overflow-hidden bg-gradient-to-br from-forest-700 via-forest-800 to-forest-950 section-pad text-cream"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(circle,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="container-x">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-400"
          >
            Our Impact
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tightest sm:text-5xl lg:text-6xl"
          >
            Farming that feeds people{" "}
            <span className="text-lime-400">and futures.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {IMPACT_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                variants={fadeUp}
                className="group rounded-3xl border border-cream/10 bg-cream/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:border-lime-400/40 hover:bg-cream/[0.07]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/15 text-lime-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
