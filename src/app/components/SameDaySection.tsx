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
              <span className="text-[#ff1493]">"Sign and Go" Services</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#a8a8a8] max-w-3xl mx-auto leading-relaxed">
              Sometimes, the most important moment is right now. We understand that love doesn't wait for paperwork—and neither should you.
            </p>
          </div>

          {/* Problem → Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Pain Points */}
            <div className="space-y-6">
              <h3 className="font-['Playfair_Display'] text-3xl text-[#ff1493] mb-8">
                Common Challenges:
              </h3>
              
              {/* Small image gallery above pain points */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="aspect-video rounded-lg overflow-hidden border border-[#ff1493]/20">
                  <ImageWithFallback
                    src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t51.82787-15/546567125_18215835214309986_8985588986689589147_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFvS95XmzgfDNDR-aSNebMCSiY5hcWsQ3NKJjmFxaxDc-nYZZ8HnFJ5-udGKWTH5mVorjFwvZeYrEIzx_vyTSks&_nc_ohc=PKtNICckViQQ7kNvwGHIyVZ&_nc_oc=AdmA749rJDIqB4STKBLd_V7Eb_jfIYgAyEAnrXQR1p7o2fHXtaN0VHBORvwdFk6-dp0&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=352jp4sansaZ7lEzTMqUjA&oh=00_AfoDDE7m12Rew01lafaHytmMjVlxUZw3B12MInjBPSOwwQ&oe=69681E61"
                    alt="Romantic outdoor wedding"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden border border-[#ff1493]/20">
                  <ImageWithFallback
                    src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t51.82787-15/546507139_18215835223309986_1272827318883163216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHJtD3Rh5xoH3GX3N8QUNEAKQF4JHFY2d4pAXgkcVjZ3mHb-G2u30xjXH59PpecJysKk73W4Q7W18fl94FHZh5s&_nc_ohc=qB-zQXXZkJoQ7kNvwEZU2vl&_nc_oc=AdkK8t689C38el_97IYi1YUcj6G5wG6iIs-bMye52Lwrz9ahHlQasF8PDZqqeaIGsnk&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=tmnz6pojZaJ49-A4474mfQ&oh=00_Afo-bdG3alCyZNvwVbUcENGnEqr_kqtT56blm2U_kz5xjQ&oe=696832C8"
                    alt="Intimate elopement"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
  {[
    { icon: Clock, text: "Tight timelines and last-minute event requirements" },
    { icon: Users, text: "Coordinating multiple vendors and teams at once" },
    { icon: FileCheck, text: "Unexpected changes, delays, or logistics issues" },
    { icon: Heart, text: "You want a flawless event without stress or hassle" }
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start gap-4 bg-[#1a1a1a]/50 p-5 rounded-xl border border-[#ff1493]/10"
    >
      <item.icon className="w-6 h-6 text-[#ff1493] flex-shrink-0 mt-1" />
      <p className="font-['Inter'] text-[#f5f5f5]">{item.text}</p>
    </motion.div>
  ))}
</div>

            </div>

            {/* Solution */}
           <div className="bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#1a1a1a] border border-[#ff1493]/30 rounded-2xl p-10">
  <h3 className="font-['Playfair_Display'] text-3xl text-[#f7e7ce] mb-6">
    Our Solution:
  </h3>

  <p className="font-['Inter'] text-lg text-[#a8a8a8] mb-8 leading-relaxed">
    Deluxedecor12 is your trusted partner in premium event planning and management. 
    We transform ideas into unforgettable experiences by handling every detail with 
    creativity, precision, and elegance.
  </p>

  <ul className="space-y-4 mb-10">
    {[
      "Complete event planning & coordination",
      "Customized décor and theme design",
      "On-time execution and professional management",
      "Trusted vendors and quality arrangements",
      "Stress-free planning from start to finish",
      "Experienced, creative, and reliable team"
    ].map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center gap-3"
      >
        <div className="w-2 h-2 bg-[#ff1493] rounded-full" />
        <span className="font-['Inter'] text-[#f7e7ce]">{item}</span>
      </motion.li>
    ))}
  </ul>

  <div className="pt-6 border-t border-[#ff1493]/20">
    <p className="font-['Inter'] text-[#faf8f3] italic text-center leading-relaxed">
      "Every event deserves perfection. Let Deluxedecor12 bring your vision to life while you enjoy the moment."
    </p>
  </div>
</div>

          </div>

          {/* CTA */}
          <div className="text-center">
            <motion.a
              href="tel:+19802483144"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff99cc] to-[#ff1493] text-[#0a0a0a] px-12 py-5 rounded-full transition-all shadow-lg shadow-[#ff99cc]/30 hover:shadow-xl hover:shadow-[#ff1493]/50"
            >
              <span className="font-['Inter'] font-semibold text-lg">Get Married Today</span>
            </motion.a>
          </div>
        </motion.div>
      </div>  
    </section>
  );
}