import { motion } from "motion/react";
import { Phone, Calendar, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-10">
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
            src="https://images.unsplash.com/photo-1767824122858-a2e0494b6077?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGRlY29yYXRpb24lMjBnb2xkfGVufDF8fHx8MTc2ODQ5NDcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury event decoration"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFD700]/20 to-[#FFED4E]/20 rounded-full border border-[#FFD700]/50 backdrop-blur-sm mb-8">
            <Sparkles className="w-5 h-5 text-[#FFD700]" />
            <span className="font-['Inter'] text-[#FFD700] text-sm uppercase tracking-widest font-semibold">
              Luxury Event Design & Coordination
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Playfair_Display'] text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.95] tracking-tight">
            Unforgettable
            <br />
            <span className="text-[#FFD700]">Celebrations</span>
          </h1>

          {/* Subheadline */}
          <p className="font-['Inter'] text-xl md:text-2xl text-[#f5f5f5] max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your vision into reality with expert event planning, stunning decoration design, and flawless coordination that creates moments you'll cherish forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.a
              href="tel:+1 980-248-3144"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFD700] to-[#FFED4E] text-black px-10 py-5 rounded-full transition-all shadow-2xl shadow-[#FFD700]/40 hover:shadow-[#FFD700]/60 w-full sm:w-auto"
            >
              <Phone className="w-6 h-6" />
              <span className="font-['Inter'] font-bold text-lg">Call Now: +1 980-248-3144</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-white/10 text-white border-2 border-[#FFD700] px-10 py-5 rounded-full backdrop-blur-sm hover:bg-[#FFD700]/20 transition-all w-full sm:w-auto"
            >
              <Calendar className="w-6 h-6" />
              <span className="font-['Inter'] font-bold text-lg">Book Consultation</span>
            </motion.a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Events Designed" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-[#FFD700]/30 rounded-2xl p-6"
              >
                <p className="font-['Playfair_Display'] text-4xl text-[#FFD700] mb-2">
                  {stat.number}
                </p>
                <p className="font-['Inter'] text-[#f5f5f5]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-[#FFD700] rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
