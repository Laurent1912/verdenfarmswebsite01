"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { INTEREST_OPTIONS, CONTACT } from "@/utils/data";
import { staggerContainer, fadeUp, fromLeft, fromRight, viewportOnce } from "@/utils/motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    interest: INTEREST_OPTIONS[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired by default — see README for Formspree / Netlify Forms / API route.
    // For now we open a prefilled WhatsApp message and show a success state.
    const text = encodeURIComponent(
      `Hello Verden Farms!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ALocation: ${form.location}%0AInterest: ${form.interest}%0A%0A${form.message}`
    );
    window.open(`${CONTACT.whatsappLink}?text=${text}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-cream section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left: info */}
        <motion.div
          variants={fromLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <SectionHeading
            index="09"
            eyebrow="Get in touch"
            title="Let's grow something together"
            description="Tell us what you're interested in and our team will get back to you. Prefer to chat? Reach us instantly on WhatsApp."
          />

          <div className="mt-9 space-y-4">
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-forest-900/8 bg-white p-5 transition-all hover:border-forest-700/30 hover:shadow-soft"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#1ebe57]">
                <FaWhatsapp className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
                  WhatsApp
                </p>
                <p className="font-display text-base font-bold text-ink">
                  {CONTACT.whatsapp}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-forest-900/8 bg-white p-5 transition-all hover:border-forest-700/30 hover:shadow-soft"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-700/10 text-forest-700">
                <FiMail className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
                  Email
                </p>
                <p className="font-display text-base font-bold text-ink">
                  {CONTACT.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-forest-900/8 bg-white p-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-700/10 text-forest-700">
                <FiMapPin className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/45">
                  Location
                </p>
                <p className="font-display text-base font-bold text-ink">
                  {CONTACT.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          variants={fromRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-4xl border border-forest-900/8 bg-white p-7 shadow-soft sm:p-9"
        >
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <FiCheckCircle className="h-16 w-16 text-forest-600" />
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                Thank you!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-ink/60">
                Your details are ready in WhatsApp — just hit send, and our team
                will be in touch shortly.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold text-forest-700 underline-offset-4 hover:underline"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="space-y-5"
            >
              <motion.div variants={fadeUp}>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink/80">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-forest-900/12 bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-forest-700 focus:bg-white"
                />
              </motion.div>

              <motion.div variants={fadeUp} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink/80">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+255 ..."
                    className="w-full rounded-xl border border-forest-900/12 bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-forest-700 focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="mb-1.5 block text-sm font-semibold text-ink/80">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    value={form.location}
                    onChange={update("location")}
                    placeholder="City / region"
                    className="w-full rounded-xl border border-forest-900/12 bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-forest-700 focus:bg-white"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label htmlFor="interest" className="mb-1.5 block text-sm font-semibold text-ink/80">
                  Type of interest
                </label>
                <select
                  id="interest"
                  value={form.interest}
                  onChange={update("interest")}
                  className="w-full rounded-xl border border-forest-900/12 bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest-700 focus:bg-white"
                >
                  {INTEREST_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink/80">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us a little about what you need..."
                  className="w-full resize-none rounded-xl border border-forest-900/12 bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-forest-700 focus:bg-white"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <Button type="submit" variant="solid" size="lg" className="w-full">
                  Send Enquiry <FiSend className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
