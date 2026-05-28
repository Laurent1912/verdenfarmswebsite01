"use client";

import { motion } from "framer-motion";
import { FiCamera } from "react-icons/fi";
import { GALLERY_ITEMS } from "@/utils/data";
import { staggerContainer, scaleIn, viewportOnce } from "@/utils/motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream section-pad">
      <div className="container-x">
        <SectionHeading
          index="07"
          eyebrow="Gallery"
          title="Inside the farm"
          description="A look at the towers, crops and people behind Verden Farms. Replace these placeholders with your real photography."
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] md:grid-cols-4"
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.figure
              key={item.label}
              variants={scaleIn}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.tone} ${item.span}`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-40 [background-image:radial-gradient(circle_at_30%_25%,rgba(190,242,100,0.45),transparent_50%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(transparent_94%,rgba(255,255,255,0.7)_94%),linear-gradient(90deg,transparent_94%,rgba(255,255,255,0.7)_94%)] [background-size:24px_24px]" />

              {/* hover overlay */}
              <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-forest-950/0 text-center transition-all duration-300 group-hover:bg-forest-950/40">
                <FiCamera className="h-6 w-6 text-cream/0 transition-all duration-300 group-hover:text-cream/90" />
                <span className="translate-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-cream/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-cream">
                  {item.label}
                </span>
              </figcaption>

              {/* default label */}
              <span className="absolute bottom-3 left-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream/70 transition-opacity duration-300 group-hover:opacity-0">
                {item.label}
              </span>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
