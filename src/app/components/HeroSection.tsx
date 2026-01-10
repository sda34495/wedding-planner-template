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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,105,180,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div id="hero" className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Headline */}
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl text-[#f7e7ce] mb-8 leading-tight">
            Make every celebration unforgettable.
            <br />
            <span className="text-[#ff1493]">Events, parties & bespoke decor.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-['Inter'] text-xl md:text-2xl text-[#faf8f3] mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional event planning and decor for birthdays, corporate events, private parties, and more.
          </p>

          {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-[#ff1493]">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/60 backdrop-blur-sm rounded-lg border border-[#ff1493]/20">
                <div className="w-2 h-2 bg-[#ff1493] rounded-full" />
                <span className="font-['Inter']">Professional Event Planner</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/60 backdrop-blur-sm rounded-lg border border-[#ff1493]/20">
                <div className="w-2 h-2 bg-[#ff1493] rounded-full" />
                <span className="font-['Inter']">Same-Day & On-Demand Services</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/60 backdrop-blur-sm rounded-lg border border-[#ff1493]/20">
                <div className="w-2 h-2 bg-[#ff1493] rounded-full" />
                <span className="font-['Inter']">Serving Concord, NC & Beyond</span>
              </div>
            </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="tel:+19802483144"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff1493] to-[#7dd3cc] text-[#0a0a0a] px-10 py-5 rounded-full transition-all shadow-lg shadow-[#ff1493]/30 hover:shadow-xl hover:shadow-[#ff1493]/50"
            >
              <Calendar className="w-6 h-6" />
              <span className="font-['Inter'] font-semibold text-lg">Book Same-Day Service</span>
            </motion.a>
            
            <motion.a
              href="tel:+19802483144"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-[#1a1a1a]/80 backdrop-blur-sm text-[#ff1493] px-10 py-5 rounded-full border-2 border-[#ff1493] transition-all hover:bg-[#ff1493]/10"
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
              className="w-6 h-10 border-2 border-[#ff1493]/50 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 bg-[#ff1493] rounded-full" />
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}