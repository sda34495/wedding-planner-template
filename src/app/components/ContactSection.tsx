import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#f7e7ce] mb-6 leading-tight">
              Let's Make It
              <br />
              <span className="text-[#d4af37]">Happen</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#a8a8a8] max-w-2xl mx-auto leading-relaxed">
              Your perfect moment is just one call or email away. Reach out today, and let's create something unforgettable together.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Phone */}
            <motion.a
              href="tel:602-570-6728"
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#d4af37]/30 rounded-2xl p-10 text-center hover:border-[#d4af37] transition-all group"
            >
              <div className="bg-gradient-to-br from-[#d4af37] to-[#f7d76e] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-[#d4af37]/50 transition-all">
                <Phone className="w-10 h-10 text-[#0a0a0a]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#f7e7ce] mb-3">
                Call Cicely
              </h3>
              <p className="font-['Inter'] text-3xl text-[#d4af37] mb-4 tracking-wide">
                602-570-6728
              </p>
              <p className="font-['Inter'] text-[#a8a8a8]">
                Available for immediate inquiries and same-day bookings
              </p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:hitched2youhappened@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#d4af37]/30 rounded-2xl p-10 text-center hover:border-[#d4af37] transition-all group"
            >
              <div className="bg-gradient-to-br from-[#d4af37] to-[#f7d76e] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-[#d4af37]/50 transition-all">
                <Mail className="w-10 h-10 text-[#0a0a0a]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#f7e7ce] mb-3">
                Email Us
              </h3>
              <p className="font-['Inter'] text-lg text-[#d4af37] mb-4 break-all">
                hitched2youhappened@gmail.com
              </p>
              <p className="font-['Inter'] text-[#a8a8a8]">
                For detailed inquiries and confidential consultations
              </p>
            </motion.a>
          </div>

          {/* Business Info */}
          <div className="bg-gradient-to-r from-[#1a1a1a]/50 via-[#141414]/80 to-[#1a1a1a]/50 border border-[#d4af37]/10 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <h3 className="font-['Playfair_Display'] text-3xl text-[#f7e7ce] mb-6">
                Hitch Happens
              </h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
                <p className="font-['Inter'] text-[#a8a8a8]">
                  Proudly serving Arizona and surrounding areas
                </p>
              </div>
              <p className="font-['Inter'] text-[#f7e7ce] italic">
                Officiant: Cicely Denean Cobb
              </p>
            </div>
          </div>

          {/* Final CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="tel:602-570-6728"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f7d76e] text-[#0a0a0a] px-12 py-5 rounded-full transition-all shadow-lg shadow-[#d4af37]/30 hover:shadow-xl hover:shadow-[#d4af37]/50"
            >
              <Phone className="w-6 h-6" />
              <span className="font-['Inter'] font-semibold text-lg">Call for Same-Day Service</span>
            </motion.a>
            
            <motion.a
              href="mailto:hitched2youhappened@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-[#1a1a1a]/80 backdrop-blur-sm text-[#d4af37] px-12 py-5 rounded-full border-2 border-[#d4af37] transition-all hover:bg-[#d4af37]/10"
            >
              <Mail className="w-6 h-6" />
              <span className="font-['Inter'] font-semibold text-lg">Email Hitch Happens</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
