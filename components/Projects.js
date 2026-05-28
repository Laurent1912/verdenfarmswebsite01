"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiMapPin } from "react-icons/fi";
import { PROJECT_TIMELINE } from "@/utils/data";
import { staggerContainer, fadeUp, fromLeft, viewportOnce } from "@/utils/motion";
import SectionHeading from "@/components/ui/SectionHeading";

const SLIDES = [
  { label: "Prototype Towers — Iringa", tone: "from-forest-600 to-forest-900" },
  { label: "Lettuce Production", tone: "from-forest-500 to-forest-800" },
  { label: "Spinach Beds", tone: "from-forest-700 to-forest-950" },
  { label: "Irrigation Loop", tone: "from-forest-600 to-forest-800" },
];

function Carousel() {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <motion.div
      variants={fromLeft}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-4xl border-4 border-white shadow-soft">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`absolute inset-0 flex items-end bg-gradient-to-br ${SLIDES[index].tone}`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_30%_20%,rgba(190,242,100,0.4),transparent_45%)]" />
            <div className="relative z-10 m-5 rounded-2xl bg-forest-950/55 px-4 py-2 backdrop-blur-md">
              <span className="text-sm font-semibold text-cream">
                {SLIDES[index].label}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-forest-700" : "w-2 bg-forest-700/25"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest-700/20 text-forest-700 transition-colors hover:bg-forest-700 hover:text-cream"
          >
            <FiArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest-700/20 text-forest-700 transition-colors hover:bg-forest-700 hover:text-cream"
          >
            <FiArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-sand section-pad">
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-4">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-forest-700/20 bg-forest-700/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">
            <FiMapPin className="h-3.5 w-3.5" /> Pilot Deployment
          </span>
          <SectionHeading
            index="04"
            eyebrow="Projects & Pilots"
            title="Current Pilot Deployment — Iringa, Tanzania"
            description="Our first fleet of towers is on the ground in Iringa — growing real crops, validating the market and preparing for commercial supply."
          />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Carousel />

          {/* Timeline */}
          <motion.ol
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative space-y-7 border-l-2 border-forest-700/15 pl-8"
          >
            {PROJECT_TIMELINE.map((item) => (
              <motion.li key={item.phase} variants={fadeUp} className="relative">
                <span className="absolute -left-[41px] flex h-7 w-7 items-center justify-center rounded-full border-2 border-forest-700/20 bg-cream font-display text-[11px] font-bold text-forest-700">
                  {item.phase}
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
