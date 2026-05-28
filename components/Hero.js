"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { staggerContainer, fadeUp } from "@/utils/motion";
import Button from "@/components/ui/Button";

function TowerGraphic() {
  // Decorative CSS/SVG representation of a vertical farming tower.
  return (
    <div className="relative mx-auto h-full w-full max-w-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-[460px] items-end justify-center"
      >
        {/* glow */}
        <div className="absolute bottom-10 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl" />

        {/* the tower */}
        <div className="relative flex flex-col items-center gap-1.5">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
              className="relative flex items-center justify-center rounded-2xl border border-cream/15 bg-gradient-to-br from-forest-700/70 to-forest-900/70 backdrop-blur-sm"
              style={{ width: 150 - i * 6, height: 46 }}
            >
              {/* little sprouts on each tier */}
              <span className="absolute -left-3 h-3 w-3 rounded-full bg-lime-400/80" />
              <span className="absolute -right-3 h-3 w-3 rounded-full bg-forest-300/80" />
              <span className="h-2 w-10 rounded-full bg-lime-400/30" />
            </motion.div>
          ))}
          <div className="mt-1 h-3 w-44 rounded-full bg-ink/40 blur-[2px]" />
        </div>

        {/* floating stat chip */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-10 rounded-2xl border border-cream/15 bg-forest-900/80 px-4 py-3 backdrop-blur-md"
        >
          <p className="font-display text-2xl font-extrabold text-lime-400">95%</p>
          <p className="text-[11px] font-medium uppercase tracking-widest text-cream/70">
            Less Water
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-0 bottom-16 rounded-2xl border border-cream/15 bg-forest-900/80 px-4 py-3 backdrop-blur-md"
        >
          <p className="font-display text-2xl font-extrabold text-cream">32</p>
          <p className="text-[11px] font-medium uppercase tracking-widest text-cream/70">
            Plants / Tower
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate overflow-hidden bg-forest-950 pt-[72px] text-cream"
    >
      {/* atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-forest-700/40 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-lime-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(190,242,100,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(transparent_97%,rgba(255,255,255,0.7)_97%),linear-gradient(90deg,transparent_97%,rgba(255,255,255,0.7)_97%)] [background-size:60px_60px]" />
      </div>

      <div className="container-x grid min-h-[calc(100vh-72px)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-0">
        <motion.div
          variants={staggerContainer(0.14, 0.1)}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-lime-300 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />
            Climate-Smart Agritech · Tanzania
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl font-extrabold leading-[0.98] tracking-tightest sm:text-6xl lg:text-7xl"
          >
            Growing More Food in{" "}
            <span className="relative whitespace-nowrap text-lime-400">
              Less Space
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C60 3 240 3 298 9"
                  stroke="#bef264"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-lg leading-relaxed text-cream/75"
          >
            Verden Farms is building climate-smart vertical farming systems
            designed to help households, businesses and communities grow fresh
            produce efficiently — using limited space and far less water.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Request a Tower <FiArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Partner With Us <FiArrowUpRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-cream/10 pt-7 text-sm text-cream/60"
          >
            <span>
              <strong className="font-display text-cream">Up to 2×</strong> land
              productivity
            </span>
            <span className="hidden h-4 w-px bg-cream/15 sm:block" />
            <span>
              <strong className="font-display text-cream">Year-round</strong>{" "}
              production
            </span>
            <span className="hidden h-4 w-px bg-cream/15 sm:block" />
            <span>
              <strong className="font-display text-cream">Locally</strong>{" "}
              adapted
            </span>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block">
          <TowerGraphic />
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/25 p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-lime-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
