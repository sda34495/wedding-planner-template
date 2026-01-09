import { motion } from "motion/react";
import { Phone, Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2021/08/09/84711-590200628_large.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1767881897213-3999aa68f157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjByb21hbnRpY3xlbnwxfHx8fDE3Njc5ODA5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury wedding ceremony"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/85 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Headline */}
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl text-[#f7e7ce] mb-8 leading-tight">
            When love cannot wait,
            <br />
            <span className="text-[#d4af37]">neither should your marriage.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-['Inter'] text-xl md:text-2xl text-[#faf8f3] mb-12 max-w-3xl mx-auto leading-relaxed">
            Personal, professional, and unforgettable ceremonies — from same-day signings to once-in-a-lifetime moments.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-[#d4af37]">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/60 backdrop-blur-sm rounded-lg border border-[#d4af37]/20">
              <div className="w-2 h-2 bg-[#d4af37] rounded-full" />
              <span className="font-['Inter']">Licensed Officiant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/60 backdrop-blur-sm rounded-lg border border-[#d4af37]/20">
              <div className="w-2 h-2 bg-[#d4af37] rounded-full" />
              <span className="font-['Inter']">Same-Day Services Available</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/60 backdrop-blur-sm rounded-lg border border-[#d4af37]/20">
              <div className="w-2 h-2 bg-[#d4af37] rounded-full" />
              <span className="font-['Inter']">Serving Today & 2026–2027 Dates</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="tel:602-570-6728"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f7d76e] text-[#0a0a0a] px-10 py-5 rounded-full transition-all shadow-lg shadow-[#d4af37]/30 hover:shadow-xl hover:shadow-[#d4af37]/50"
            >
              <Calendar className="w-6 h-6" />
              <span className="font-['Inter'] font-semibold text-lg">Book Same-Day Service</span>
            </motion.a>
            
            <motion.a
              href="tel:602-570-6728"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-[#1a1a1a]/80 backdrop-blur-sm text-[#d4af37] px-10 py-5 rounded-full border-2 border-[#d4af37] transition-all hover:bg-[#d4af37]/10"
            >
              <Phone className="w-6 h-6" />
              <span className="font-['Inter'] font-semibold text-lg">Call Now</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}