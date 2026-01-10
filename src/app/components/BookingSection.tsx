import { motion } from "motion/react";
import { Calendar, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BookingSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      
      {/* Decorative background images */}
      <div className="absolute top-20 left-10 w-48 h-48 opacity-10 rounded-full overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1674970538959-e7475d8d376f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlfGVufDF8fHx8MTc2NzkxMDMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Elegant venue"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-20 right-10 w-48 h-48 opacity-10 rounded-full overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1665258608444-54f857b2ed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwaGFwcHl8ZW58MXx8fHwxNzY3OTYzMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Happy couple"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Headline */}
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#f7e7ce] mb-6 leading-tight">
            Book Your
            <br />
            <span className="bg-gradient-to-r from-[#f7e7ce] to-[#f7d76e] bg-clip-text text-transparent">Perfect Moment</span>
          </h2>

          <p className="font-['Inter'] text-xl text-[#a8a8a8] mb-16 max-w-2xl mx-auto leading-relaxed">
            Whether you need us today or you're planning ahead, we're here to make your ceremony unforgettable.
          </p>

          {/* Availability Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Same Day */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#ff1493]/10 to-[#1a1a1a] border-2 border-[#f7e7ce] rounded-2xl p-10 text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7e7ce]/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                  <div className="bg-[#f7e7ce] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-[#0a0a0a]" />
                </div>
                  <h3 className="font-['Playfair_Display'] text-3xl text-[#f7e7ce]  mb-4">
                  Available Today
                </h3>
                <p className="font-['Inter'] text-[#f5f5f5] mb-6 leading-relaxed">
                  Need to get married right now? We're ready when you are. Same-day ceremonies available with flexible scheduling.
                </p>
                <ul className="space-y-3">
                  {["Immediate availability", "Flexible hours", "Quick & seamless process"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#f7e7ce] " />
                      <span className="font-['Inter'] text-[#f7e7ce]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Future Bookings */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#f7e7ce]/30 rounded-2xl p-10 text-left relative overflow-hidden hover:border-[#f7d76e]/50 transition-all"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7e7ce]/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                  <div className="bg-[#f7e7ce]/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    <Calendar className="w-7 h-7 text-[#f7e7ce] " />
                </div>
                <h3 className="font-['Playfair_Display'] text-3xl text-[#f7e7ce] mb-4">
                  2026–2027 Bookings
                </h3>
                <p className="font-['Inter'] text-[#a8a8a8] mb-6 leading-relaxed">
                  Planning ahead? Secure your preferred date and time now. Popular dates fill quickly, especially around holidays.
                </p>
                <ul className="space-y-3">
                  {["Reserve your date", "Personalized planning", "Premium ceremony options"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#f7e7ce] " />
                      <span className="font-['Inter'] text-[#f7e7ce]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.a
            href="tel:+19802483144"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#f7e7ce] to-[#f7d76e] text-[#0a0a0a] px-12 py-5 rounded-full transition-all shadow-lg shadow-[#f7e7ce]/30 hover:shadow-xl hover:shadow-[#f7d76e]/50"
          >
            <Calendar className="w-6 h-6" />
            <span className="font-['Inter'] font-semibold text-lg">Reserve Your Date Now</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}