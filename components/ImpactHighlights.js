"use client";

import { motion } from "framer-motion";
import { IMPACT_STATS } from "@/utils/data";
import { useCountUp } from "@/hooks/useCountUp";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";

function StatCard({ stat, idx }) {
  const { value, ref } = useCountUp(stat.value, { duration: 1600 + idx * 120 });
  const Icon = stat.icon;

  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-3xl border border-forest-900/8 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-forest-700/30"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-forest-700/5 transition-transform duration-500 group-hover:scale-150" />
      <div className="relative">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-700/10 text-forest-700 transition-colors duration-300 group-hover:bg-forest-700 group-hover:text-lime-400">
          <Icon className="h-6 w-6" />
        </span>
        <p
          ref={ref}
          className="mt-6 font-display text-4xl font-extrabold tracking-tightest text-forest-800 sm:text-5xl"
        >
          {stat.prefix && (
            <span className="text-2xl font-bold text-forest-600">{stat.prefix}</span>
          )}
          {value}
          {stat.suffix}
        </p>
        <p className="mt-2 text-sm font-medium text-ink/60">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function ImpactHighlights() {
  return (
    <section className="relative bg-cream section-pad">
      <div className="container-x">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <motion.div variants={fadeUp} className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-forest-600">
              Impact at a glance
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tightest text-ink sm:text-4xl">
              Real numbers behind smarter farming
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="max-w-sm text-sm text-ink/55">
            Measurable gains in space, water and productivity — engineered for
            African conditions and built to scale.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {IMPACT_STATS.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} idx={idx} />
          ))}
        </motion.div>

        {/* Supporting badges */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 flex flex-wrap gap-3"
        >
          {["Space-Efficient Farming", "Climate-Smart Agriculture", "Towers Deployed"].map(
            (badge) => (
              <motion.span
                key={badge}
                variants={fadeUp}
                className="rounded-full border border-forest-700/20 bg-forest-700/5 px-4 py-2 text-sm font-medium text-forest-700"
              >
                {badge}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
