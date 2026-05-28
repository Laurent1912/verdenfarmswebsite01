"use client";

import { FiMapPin, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn, FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { NAV_LINKS, CONTACT } from "@/utils/data";
import Logo from "@/components/ui/Logo";

const SOCIALS = [
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaXTwitter, label: "X" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaFacebookF, label: "Facebook" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-gradient-to-b from-forest-950 to-ink text-cream">
      <div className="pointer-events-none absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-forest-700/30 blur-[120px]" />

      <div className="container-x relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            Climate-smart vertical farming systems helping Africa grow more food
            in less space, with less water.
          </p>
          <div className="mt-6 flex gap-2.5">
            {SOCIALS.map(({ Icon, label }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/5 text-cream/70 transition-colors hover:bg-lime-400 hover:text-forest-900"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-cream/90">
            Quick Links
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-cream/60 transition-colors hover:text-lime-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-cream/90">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3 text-cream/60">
              <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
              {CONTACT.location}
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-cream/60 transition-colors hover:text-lime-400"
              >
                <FiMail className="h-4 w-4 shrink-0 text-lime-400" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/60 transition-colors hover:text-lime-400"
              >
                <FaWhatsapp className="h-4 w-4 shrink-0 text-lime-400" />
                {CONTACT.whatsapp}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/45 sm:flex-row">
          <p>© {year} Verden Farms. All rights reserved.</p>
          <p>
            Growing more food in less space · Iringa, Tanzania
          </p>
        </div>
      </div>
    </footer>
  );
}
