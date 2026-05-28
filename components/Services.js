"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SERVICES } from "@/utils/data";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="relative bg-cream section-pad">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="What we do"
          title="End-to-end vertical farming services"
          description="From the towers themselves to fresh produce, installation and training — everything you need to grow more with less."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-forest-900/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                {/* hover wash */}
                <div className="pointer-events-none absolute inset-0 -z-10 translate-y-full bg-gradient-to-br from-forest-700 to-forest-900 transition-transform duration-500 ease-out group-hover:translate-y-0" />

                <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-700/10 text-forest-700 transition-colors duration-300 group-hover:bg-lime-400/20 group-hover:text-lime-400">
                  <Icon className="h-7 w-7" />
                </span>

                <span className="mb-2 font-display text-xs font-bold tabular-nums text-forest-600 transition-colors group-hover:text-lime-400">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-cream">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60 transition-colors duration-300 group-hover:text-cream/75">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 transition-colors duration-300 group-hover:text-lime-400"
                >
                  Learn More
                  <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
