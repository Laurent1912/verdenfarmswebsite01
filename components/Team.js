"use client";

import { motion } from "framer-motion";
import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { TEAM } from "@/utils/data";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Team() {
  return (
    <section id="team" className="relative bg-cream section-pad">
      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="The people"
          title="A youth-led team growing the future"
          description="Verden Farms is built and run by a driven team blending technology, operations, agronomy and business."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TEAM.map((member) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              className="group overflow-hidden rounded-3xl border border-forest-900/8 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
            >
              {/* Photo placeholder */}
              <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden bg-gradient-to-br from-forest-700 to-forest-950">
                <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_50%_30%,rgba(190,242,100,0.4),transparent_55%)]" />
                <span className="font-display text-5xl font-extrabold text-cream/90">
                  {member.initials}
                </span>
                <span className="absolute bottom-3 left-3 rounded-full bg-cream/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream/70 backdrop-blur-sm">
                  Photo
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-forest-600">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {member.bio}
                </p>

                <div className="mt-5 flex gap-2">
                  {[FiLinkedin, FiTwitter, FiMail].map((Icon, i) => (
                    <a
                      key={i}
                      href="#contact"
                      aria-label={`${member.name} social link`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest-700/8 text-forest-700 transition-colors hover:bg-forest-700 hover:text-lime-400"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
