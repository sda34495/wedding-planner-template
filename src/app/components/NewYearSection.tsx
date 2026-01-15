import { motion } from "motion/react";
import { Sparkles, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewYearSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1635045180768-332216aac26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5ZWFyJTIwY2hhbXBhZ25lJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY3OTgwOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="New Year celebration"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]" />
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#d4af37] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d4af37]/20 to-[#f7d76e]/20 rounded-full border border-[#d4af37]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="font-['Inter'] text-[#d4af37] text-sm uppercase tracking-wider">New Year's Special</span>
          </div>

          {/* Headline */}
          <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#f7e7ce] mb-8 leading-tight">
            Start Your New Year
            <br />
            <span className="text-[#d4af37]">With a New Beginning</span>
          </h2>

          {/* Emotional Copy */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="font-['Inter'] text-xl md:text-2xl text-[#faf8f3] mb-6 leading-relaxed italic">
              "There is no better way to begin a new year than starting a new chapter together."
            </p>
            <p className="font-['Inter'] text-lg text-[#a8a8a8] leading-relaxed">
              New Year's Eve and New Year's Day ceremonies hold a magical significance. As the world celebrates new beginnings, you celebrate the beginning of your forever. Let us make your moment as unforgettable as the occasion itself.
            </p>
          </div>

          {/* Date Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#d4af37]/20 rounded-2xl p-8 text-left hover:border-[#d4af37]/40 transition-all">
              <Calendar className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="font-['Playfair_Display'] text-2xl text-[#f7e7ce] mb-3">
                New Year's Eve
              </h3>
              <p className="font-['Inter'] text-[#a8a8a8] leading-relaxed">
                Say "I do" as the clock strikes midnight. Begin your marriage as the new year begins—surrounded by celebration, hope, and promise.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#d4af37]/20 rounded-2xl p-8 text-left hover:border-[#d4af37]/40 transition-all">
              <Calendar className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="font-['Playfair_Display'] text-2xl text-[#f7e7ce] mb-3">
                New Year's Day
              </h3>
              <p className="font-['Inter'] text-[#a8a8a8] leading-relaxed">
                Start the year as newlyweds. A New Year's Day ceremony is the ultimate fresh start—a beautiful symbol of new love and new possibilities.
              </p>
            </div>
          </div>

          {/* CTA */}
          <motion.a
            href="tel:+1 980-248-3144"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f7d76e] text-[#0a0a0a] px-12 py-5 rounded-full transition-all shadow-lg shadow-[#d4af37]/30 hover:shadow-xl hover:shadow-[#d4af37]/50"
          >
            <span className="font-['Inter'] font-semibold text-lg">Reserve Your New Year Ceremony</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
