"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { ABOUT_PILLARS } from "@/utils/data";
import { staggerContainer, fadeUp, fromLeft, fromRight, viewportOnce } from "@/utils/motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function About() {
  return (
    <section id="about" className="relative bg-sand section-pad">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Visual side */}
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full">
            <ImagePlaceholder
              label="Vertical farm in operation"
              tone="from-forest-600 to-forest-950"
              className="border-4 border-cream shadow-soft"
            />
          </div>
          {/* floating accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -bottom-6 -right-2 w-52 rounded-2xl border-l-4 border-lime-400 bg-white p-5 shadow-soft sm:-right-6"
          >
            <p className="font-display text-3xl font-extrabold text-forest-700">2×</p>
            <p className="mt-1 text-xs font-medium text-ink/60">
              More productivity from the same land footprint
            </p>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          variants={fromRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <SectionHeading
            index="01"
            eyebrow="About Verden Farms"
            title="Transforming how Africa grows its food"
            description="Verden Farms is an agritech venture focused on transforming food production through innovative vertical farming systems adapted for African environments."
          />

          <motion.ul
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {ABOUT_PILLARS.map((pillar) => (
              <motion.li
                key={pillar}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-forest-900/8 bg-white px-4 py-3.5 transition-colors hover:border-forest-700/30"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest-700/10 text-forest-700">
                  <FiCheck className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-ink/80">{pillar}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
