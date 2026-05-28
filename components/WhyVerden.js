"use client";

import { motion } from "framer-motion";
import { WHY_REASONS } from "@/utils/data";
import { staggerContainer, fadeUp, fromRight, viewportOnce } from "@/utils/motion";
import SectionHeading from "@/components/ui/SectionHeading";

function ProgressRow({ reason }) {
  const Icon = reason.icon;
  return (
    <motion.div variants={fadeUp} className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-3 text-sm font-semibold text-cream">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cream/5 text-lime-400">
            <Icon className="h-5 w-5" />
          </span>
          {reason.title}
        </span>
        <span className="font-display text-sm font-bold tabular-nums text-lime-400">
          {reason.value}%
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-cream/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-forest-500 to-lime-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${reason.value}%` }}
          viewport={viewportOnce}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function WhyVerden() {
  return (
    <section className="grain relative isolate overflow-hidden bg-forest-950 section-pad text-cream">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-forest-700/40 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-lime-400/10 blur-[120px]" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          index="03"
          eyebrow="Why Verden Farms"
          title="Built to outperform traditional farming"
          description="Our systems are engineered around the realities of African agriculture — limited land, scarce water and a changing climate."
          light
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-6 rounded-4xl border border-cream/10 bg-cream/[0.03] p-8 backdrop-blur-sm sm:p-10"
        >
          {WHY_REASONS.map((reason) => (
            <ProgressRow key={reason.title} reason={reason} />
          ))}

          <motion.div
            variants={fromRight}
            className="!mt-8 flex items-center gap-4 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5"
          >
            <p className="font-display text-3xl font-extrabold text-lime-400">96%</p>
            <p className="text-sm text-cream/70">
              average reliability across our deployed pilot systems — production
              you can count on, every season.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
