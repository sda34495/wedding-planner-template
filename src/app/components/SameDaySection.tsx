import { motion } from "motion/react";
import { Clock, Users, FileCheck, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SameDaySection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
      
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1767127428139-dbc4bbaf150f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3Njc5ODA5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Elegant wedding couple"
          className="w-full h-full object-cover"
        />
      </div>

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
              Same-Day
              <br />
              <span className="text-[#d4af37]">"Sign and Go" Services</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#a8a8a8] max-w-3xl mx-auto leading-relaxed">
              Sometimes, the most important moment is right now. We understand that love doesn't wait for paperwork—and neither should you.
            </p>
          </div>

          {/* Problem → Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Pain Points */}
            <div className="space-y-6">
              <h3 className="font-['Playfair_Display'] text-3xl text-[#d4af37] mb-8">
                Common Challenges:
              </h3>
              
              {/* Small image gallery above pain points */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="aspect-video rounded-lg overflow-hidden border border-[#d4af37]/20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1612883809638-9314edb33efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBvdXRkb29yfGVufDF8fHx8MTc2Nzk4MTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Romantic outdoor wedding"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden border border-[#d4af37]/20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765852549107-253999a3e511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMGVsb3BlbWVudCUyMGNlcmVtb255fGVufDF8fHx8MTc2Nzk4MTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Intimate elopement"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: Clock, text: "Clerk's office hours don't match your schedule" },
                  { icon: Users, text: "Missing witnesses at the last minute" },
                  { icon: FileCheck, text: "Unexpected delays or complications" },
                  { icon: Heart, text: "You simply can't wait another day" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-[#1a1a1a]/50 p-5 rounded-xl border border-[#d4af37]/10"
                  >
                    <item.icon className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
                    <p className="font-['Inter'] text-[#f5f5f5]">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#1a1a1a] border border-[#d4af37]/30 rounded-2xl p-10">
              <h3 className="font-['Playfair_Display'] text-3xl text-[#f7e7ce] mb-6">
                Our Solution:
              </h3>
              
              <p className="font-['Inter'] text-lg text-[#a8a8a8] mb-8 leading-relaxed">
                Hitch Happens is your calm, professional solution. We offer:
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Same-day availability",
                  "Flexible scheduling (evenings & weekends)",
                  "Witnesses provided if needed",
                  "Discreet, respectful service",
                  "Quick, seamless process",
                  "Professional and compassionate officiant"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full" />
                    <span className="font-['Inter'] text-[#f7e7ce]">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-6 border-t border-[#d4af37]/20">
                <p className="font-['Inter'] text-[#faf8f3] italic text-center leading-relaxed">
                  "Your moment matters. Let us handle the details while you focus on each other."
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <motion.a
              href="tel:602-570-6728"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f7d76e] text-[#0a0a0a] px-12 py-5 rounded-full transition-all shadow-lg shadow-[#d4af37]/30 hover:shadow-xl hover:shadow-[#d4af37]/50"
            >
              <span className="font-['Inter'] font-semibold text-lg">Get Married Today</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}