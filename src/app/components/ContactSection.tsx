import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
      
  {/* Decorative Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#f7e7ce]/5 rounded-full blur-3xl" />

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
              <span className="text-[#f7e7ce] ">Happen</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#a8a8a8] max-w-2xl mx-auto leading-relaxed">
              Your perfect event is just one call or email away. We design and deliver memorable birthday parties, corporate events, and private celebrations.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Phone */}
            <motion.a
              href="tel:+19802483144"
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#f7e7ce]/30 rounded-2xl p-10 text-center hover:border-[#f7e7ce] transition-all group"
            >
              <div className="bg-gradient-to-r from-[#f7e7ce] to-[#f7d76e] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-[#f7e7ce]/50 transition-all">
                <Phone className="w-10 h-10 text-[#0a0a0a]" />
              </div>
                <p className="font-['Playfair_Display'] text-2xl text-[#f7e7ce] mb-3">
                  Call Deluxe Decor
                </p>
                <p className="font-['Inter'] text-3xl text-[#f7e7ce]  mb-4 tracking-wide">
                  +1 980-248-3144
                </p>
              <p className="font-['Inter'] text-[#a8a8a8]">
                Available for immediate inquiries and same-day bookings
              </p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:deluxe.decor.12.0@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#f7e7ce]/30 rounded-2xl p-10 text-center hover:border-[#f7e7ce] transition-all group"
            >
              <div className="bg-gradient-to-r from-[#f7e7ce] to-[#f7d76e] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-[#f7e7ce]/50 transition-all">
                <Mail className="w-10 h-10 text-[#0a0a0a]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#f7e7ce] mb-3">
                Email Us
              </h3>
              <p className="font-['Inter'] text-lg text-[#f7e7ce]  mb-4 break-all">
                deluxe.decor.12.0@gmail.com
              </p>
              <p className="font-['Inter'] text-[#a8a8a8]">
                For detailed inquiries and confidential consultations
              </p>
            </motion.a>
          </div>

          {/* Business Info */}
          <div className="bg-gradient-to-r from-[#1a1a1a]/50 via-[#141414]/80 to-[#1a1a1a]/50 border border-[#f7e7ce]/10 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <h3 className="font-['Playfair_Display'] text-3xl text-[#f7e7ce] mb-6">
                Deluxe Decor
              </h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#f7e7ce] " />
                <p className="font-['Inter'] text-[#a8a8a8]">
                  Concord, NC, United States, North Carolina
                </p>
              </div>
              <p className="font-['Inter'] text-[#f7e7ce] italic">
                Event Planning & Decor
              </p>
              {/* Social links */}
              <div className="mt-4 flex items-center justify-center gap-4">
                <a href="https://www.tiktok.com/@dafnevaladez3" target="_blank" rel="noreferrer" className="text-[#f7e7ce]  hover:opacity-80">
                  {/* TikTok SVG (simple mark) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12.5 2h2.5v4.2c1.2.1 2.2.6 3 1.4.6.6 1 1.4 1.2 2.2-.5-.2-1-.3-1.5-.3-.8 0-1.6.2-2.3.6V9.2c-.6-.1-1.2-.2-1.8-.2V16a4 4 0 1 1-4-4v-6H8v-2.2c.6-.1 1.2-.2 1.8-.2h2.7V2z" />
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@Deluxe Decor" target="_blank" rel="noreferrer" className="text-[#f7e7ce]  hover:opacity-80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12.5 2h2.5v4.2c1.2.1 2.2.6 3 1.4.6.6 1 1.4 1.2 2.2-.5-.2-1-.3-1.5-.3-.8 0-1.6.2-2.3.6V9.2c-.6-.1-1.2-.2-1.8-.2V16a4 4 0 1 1-4-4v-6H8v-2.2c.6-.1 1.2-.2 1.8-.2h2.7V2z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/Deluxe Decor" target="_blank" rel="noreferrer" className="text-[#f7e7ce]  hover:opacity-80">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Final CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="tel:+19802483144"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#f7e7ce] to-[#f7d76e] text-[#0a0a0a] px-12 py-5 rounded-full transition-all shadow-lg shadow-[#f7e7ce]/30 hover:shadow-xl hover:shadow-[#f7d76e]/50"
            >
              <Phone className="w-6 h-6" />
              <span className="font-['Inter'] font-semibold text-lg">Call for Same-Day Service</span>
            </motion.a>
            
            <motion.a
              href="mailto:deluxe.decor.12.0@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-[#1a1a1a]/80 backdrop-blur-sm text-[#f7e7ce]  px-12 py-5 rounded-full border-2 border-[#f7e7ce] transition-all hover:bg-[#f7e7ce]/10"
            >
              <Mail className="w-6 h-6" />
              <span className="font-['Inter'] font-semibold text-lg">Email Deluxe Decor</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
