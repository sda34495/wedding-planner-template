import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";

export function StickyCtaButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.a
            href="tel:+19802483144"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-3 bg-gradient-to-r from-[#f7e7ce] to-[#f7d76e] text-[#0a0a0a] px-6 py-4 rounded-full shadow-2xl shadow-[#f7e7ce]/50 hover:shadow-[#f7d76e]/70 transition-all"
          >
            <Phone className="w-6 h-6" />
            <span className="font-['Inter'] font-semibold hidden sm:inline">Call Now</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
