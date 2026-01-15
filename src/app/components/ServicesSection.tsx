import { motion } from "motion/react";
import { Palette, Users, Sparkles, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServicesSection() {
const services = [
  {
    icon: Palette,
    title: "Event Decoration Design",
    description:
      "Custom decor themes that transform any venue into your dream space with exquisite attention to detail.",
    features: [
      "Custom color schemes & themes",
      "Floral arrangements & centerpieces",
      "Lighting design & ambiance",
      "Furniture & drapery styling",
    ],
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1080&q=80", // Party decoration
  },
  {
    icon: Users,
    title: "Full Event Coordination",
    description:
      "From timeline creation to day-of execution, we handle every detail so you can enjoy your celebration stress-free.",
    features: [
      "Complete timeline management",
      "Vendor coordination & communication",
      "Setup & breakdown supervision",
      "On-site problem solving",
    ],
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1080&q=80", // Birthday party setup
  },
  {
    icon: Sparkles,
    title: "Complete Event Planning",
    description:
      "Comprehensive planning services that bring your vision to life from concept to completion.",
    features: [
      "Budget planning & management",
      "Venue selection & booking",
      "Vendor sourcing & contracts",
      "Design concept development",
    ],
    image:
      "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=1080&q=80", // Elegant party decor
  },
];


  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFED4E]/20 rounded-full border border-[#FFD700]/50 mb-6">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span className="font-['Inter'] text-[#FFD700] text-sm uppercase tracking-wider font-semibold">Our Services</span>
            </div>

            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-white mb-6 leading-tight">
              Elevate Your
              <br />
              <span className="text-[#FFD700]">Special Occasion</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#9b9b9b] max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive event services tailored to your needs—from stunning decoration design to seamless coordination.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#FFD700]/30 hover:border-[#FFD700] transition-all group">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFED4E] rounded-2xl mb-6">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>

                  <h3 className="font-['Playfair_Display'] text-4xl text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="font-['Inter'] text-lg text-[#9b9b9b] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                        <span className="font-['Inter'] text-[#f5f5f5]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFED4E] text-black rounded-full font-['Inter'] font-semibold hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all"
                  >
                    Learn More
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
