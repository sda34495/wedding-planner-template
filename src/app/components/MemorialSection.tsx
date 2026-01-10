import { motion } from "motion/react";
import { Heart, FileText, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MemorialSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760201656695-76e8765eef67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1lbW9yaWFsJTIwZmxvd2Vyc3xlbnwxfHx8fDE3Njc5ODA5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Memorial flowers"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/98 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Divider Line */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#f7d76e]/50" />
            <div className="mx-4 w-2 h-2 bg-[#f7e7ce]/50 rounded-full" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#f7d76e]/50" />
          </div>

          {/* Headline */}
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-[#f7e7ce] mb-6 leading-tight">
              Compassionate
              <br />
              <span className="text-[#f7e7ce] ">Events, Celebrations & Memorials</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#a8a8a8] max-w-3xl mx-auto leading-relaxed">
              Honoring lives lived with dignity, respect, and heartfelt compassion.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "Funeral & Memorial Officiation",
                description: "Professional, heartfelt ceremonies that honor your loved one's life and legacy with the dignity they deserve."
              },
              {
                icon: FileText,
                title: "Professional Obituary Writing",
                description: "Thoughtfully crafted obituaries that capture the essence of a life well-lived, written with care and sensitivity."
              },
              {
                icon: BookOpen,
                title: "Memorial Program Content",
                description: "Assistance with memorial program content and tribute materials that help families celebrate cherished memories."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-b from-[#1a1a1a] to-[#141414] border border-[#f7e7ce]/10 rounded-2xl p-8 hover:border-[#f7e7ce]/30 transition-all"
              >
                <div className="bg-[#f7e7ce]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#f7e7ce] " />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl text-[#f7e7ce] mb-4">
                  {service.title}
                </h3>
                <p className="font-['Inter'] text-[#a8a8a8] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Supportive Statement */}
          <div className="bg-gradient-to-r from-[#1a1a1a]/50 via-[#141414]/80 to-[#1a1a1a]/50 border border-[#f7e7ce]/10 rounded-2xl p-10 mb-12 max-w-4xl mx-auto">
            <p className="font-['Inter'] text-lg text-[#faf8f3] text-center leading-relaxed italic mb-6">
              "In times of loss, words can be hard to find. Let us help you create a meaningful tribute that brings comfort and celebrates a life that mattered."
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-[#f7e7ce]/30" />
              <Heart className="w-4 h-4 text-[#f7e7ce] " />
              <div className="h-px w-12 bg-[#f7e7ce]/30" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <motion.a
              href="mailto:deluxe.decor.12.0@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-[#1a1a1a] text-[#f7e7ce]  px-12 py-5 rounded-full border-2 border-[#f7d76e]/50 transition-all hover:bg-[#f7e7ce]/10 hover:border-[#f7e7ce]"
            >
              <span className="font-['Inter'] font-semibold text-lg">Speak With Us Confidentially</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
