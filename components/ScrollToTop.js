"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function ScrollToTop() {
  const { y } = useScrollPosition();
  const visible = y > 600;

  const scrollUp = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollUp}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest-700 text-lime-400 shadow-soft transition-colors hover:bg-forest-600"
        >
          <FiArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
