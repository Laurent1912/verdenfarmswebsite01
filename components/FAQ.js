"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { FAQS } from "@/utils/data";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";
import SectionHeading from "@/components/ui/SectionHeading";

function AccordionItem({ faq, isOpen, onToggle, idx }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-forest-700/30 bg-white shadow-soft"
          : "border-forest-900/8 bg-white/60"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
          {faq.q}
        </span>
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "rotate-45 bg-forest-700 text-lime-400"
              : "bg-forest-700/10 text-forest-700"
          }`}
        >
          <FiPlus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-ink/65">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="relative bg-sand section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          index="06"
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know about growing with Verden Farms towers."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-3"
        >
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={faq.q}
              faq={faq}
              idx={idx}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
