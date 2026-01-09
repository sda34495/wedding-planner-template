import { motion } from "motion/react";
import { Clock, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function LimitedOfferSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Background Images */}
      <div className="absolute left-0 top-1/4 w-64 h-64 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1688790026521-b7b14a885116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBleGNoYW5nZXxlbnwxfHx8fDE3Njc5ODEyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wedding rings"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1664312696723-173130983e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMGZsb3dlcnN8ZW58MXx8fHwxNzY3OTE2NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wedding bouquet"
          className="w-full h-full object-cover rounded-full"
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d4af37]/20 to-[#f7d76e]/20 rounded-full border border-[#d4af37]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="font-['Inter'] text-[#d4af37] text-sm uppercase tracking-wider">Limited Time Offer</span>
          </div>

          {/* Headline */}
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl text-[#f7e7ce] mb-6 leading-tight">
            48-Hour Special Ceremony Pricing
          </h2>

          {/* Description */}
          <p className="font-['Inter'] text-lg md:text-xl text-[#a8a8a8] mb-10 max-w-3xl mx-auto leading-relaxed">
            Book within the next 48 hours and secure exclusive pricing for your ceremony. Whether it's an intimate elopement or a full wedding celebration, now is the perfect moment to say "I do."
          </p>

          {/* Urgency Visual */}
          <div className="bg-gradient-to-r from-[#1a1a1a] via-[#141414] to-[#1a1a1a] border border-[#d4af37]/20 rounded-2xl p-8 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-[#d4af37]" />
              <span className="font-['Playfair_Display'] text-3xl text-[#d4af37]">Offer Ends Soon</span>
            </div>
            <p className="font-['Inter'] text-[#f7e7ce]">
              Don't let this opportunity slip away. Secure your special rate before time runs out.
            </p>
          </div>

          {/* CTA */}
          <motion.a
            href="tel:602-570-6728"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f7d76e] text-[#0a0a0a] px-12 py-5 rounded-full transition-all shadow-lg shadow-[#d4af37]/30 hover:shadow-xl hover:shadow-[#d4af37]/50"
          >
            <span className="font-['Inter'] font-semibold text-lg">Secure Your Rate Before It's Gone</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}