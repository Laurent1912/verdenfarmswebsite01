"use client";

import { motion } from "framer-motion";
import { PARTNER_CATEGORIES } from "@/utils/data";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Partners() {
  return (
    <section id="partners" className="relative bg-sand section-pad">
      <div className="container-x">
        <SectionHeading
          index="08"
          eyebrow="Market interest"
          title="Organizations and clients engaging with Verden Farms"
          description="Early demand spans hospitality, education, agribusiness and demonstration farms across the region."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PARTNER_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.category}
              variants={fadeUp}
              className="rounded-3xl border border-forest-900/8 bg-white p-6"
            >
              <h3 className="mb-5 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-forest-700">
                <span className="h-2 w-2 rounded-full bg-lime-500" />
                {cat.category}
              </h3>
              <div className="space-y-3">
                {cat.logos.map((logo) => (
                  <div
                    key={logo}
                    className="flex h-14 items-center justify-center rounded-xl border border-dashed border-forest-700/20 bg-forest-700/[0.03] text-xs font-semibold uppercase tracking-wider text-forest-700/60"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 text-center text-xs text-ink/45"
        >
          Logo placeholders — swap in real partner logos as engagements are confirmed.
        </motion.p>
      </div>
    </section>
  );
}
