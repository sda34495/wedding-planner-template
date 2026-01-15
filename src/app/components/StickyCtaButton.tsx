import { motion, useScroll, useTransform } from "motion/react";
import { Phone } from "lucide-react";

export function StickyCtaButton() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const scale = useTransform(scrollY, [0, 100], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="tel:+1 980-248-3144"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-gradient-to-r from-[#FFD700] to-[#FFED4E] text-black px-6 py-4 rounded-full shadow-2xl shadow-[#FFD700]/40 hover:shadow-[#FFD700]/60 transition-all"
      >
        <Phone className="w-5 h-5" />
        <span className="font-['Inter'] font-bold hidden sm:inline">Call Now</span>
      </motion.a>
    </motion.div>
  );
}