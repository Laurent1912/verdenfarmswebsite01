"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "@/utils/data";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const { scrolled } = useScrollPosition(40);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-forest-900/10 bg-cream/85 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Logo light={!scrolled} />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-ink/70 hover:bg-forest-700/8 hover:text-forest-700"
                      : "text-cream/85 hover:bg-cream/10 hover:text-cream"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              href="#contact"
              variant={scrolled ? "solid" : "primary"}
              size="md"
            >
              Request a Tower
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
              scrolled ? "text-forest-800 hover:bg-forest-700/10" : "text-cream hover:bg-cream/10"
            }`}
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-forest-900/10 bg-cream lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-forest-700/8 hover:text-forest-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-2 pt-2">
                <Button
                  href="#contact"
                  variant="solid"
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Request a Tower
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
