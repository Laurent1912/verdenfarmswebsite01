"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative bg-cream pb-24 pt-4 sm:pb-28">
      <div className="container-x">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grain relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-forest-700 via-forest-800 to-forest-950 px-7 py-16 text-center text-cream sm:px-16 sm:py-20"
        >
          {/* glow accents */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lime-400/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-forest-500/30 blur-[100px]" />

          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-lime-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" /> Join the movement
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tightest sm:text-5xl lg:text-6xl"
          >
            Let&apos;s Build the Future of{" "}
            <span className="text-lime-400">Smart Farming</span> Together.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base text-cream/70 sm:text-lg"
          >
            Whether you want a tower at home, a commercial system, or a
            partnership — we&apos;d love to hear from you.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <Button href="#contact" variant="primary" size="lg">
              Request a Consultation <FiArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Become a Partner <FiArrowUpRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
