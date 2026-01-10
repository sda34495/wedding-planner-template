import { motion } from "motion/react";
import { Heart, Award, Users, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function OwnerStorySection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #ff1493 1px, transparent 0)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff1493]/20 to-[#7dd3cc]/20 rounded-full border border-[#ff1493]/30 mb-6">
              <Heart className="w-4 h-4 text-[#ff1493]" />
              <span className="font-['Inter'] text-[#ff1493] text-sm uppercase tracking-wider">Meet DeluxeDecor12</span>
            </div>
            
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#f7e7ce] mb-6 leading-tight">
              About
              <br />
              <span className="text-[#ff1493]">DeluxeDecor12</span>
            </h2>
          </div>

          {/* Main Story Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Left: Owner Photos */}
            <div className="space-y-6">
              {/* Main Photo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border-4 border-[#ff1493]/30"
              >
                <ImageWithFallback
                  src="/images/cicely.jpg"
                  alt="DeluxeDecor12 - Event Planner"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent p-6">
                  <p className="font-['Playfair_Display'] text-2xl text-[#ff1493]">DeluxeDecor12</p>
                  <p className="font-['Inter'] text-[#f7e7ce]">Event Planning & Decor</p>
                </div>
              </motion.div>

              {/* Secondary Photos Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                    className="relative rounded-xl overflow-hidden border-2 border-[#ff1493]/20"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1765615196684-61b3b9b298c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwb2ZmaWNpYW50JTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY3OTEyMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Cicely officiating ceremony"
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                    className="relative rounded-xl overflow-hidden border-2 border-[#ff1493]/20"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1604378282113-1fde3be480ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwdm93c3xlbnwxfHx8fDE3Njc5ODEyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Beautiful ceremony moment"
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right: Story & Credentials */}
            <div className="space-y-8">
              {/* Personal Story */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-['Playfair_Display'] text-3xl text-[#f7e7ce] mb-4">
                  A Passion for Love Stories
                </h3>
                <div className="space-y-4 font-['Inter'] text-lg text-[#a8a8a8] leading-relaxed">
                  <p>
                    For me, being a wedding officiant isn't just a profession—it's a calling. There's something profoundly beautiful about standing at the intersection of two people's lives as they promise to walk forward together.
                  </p>
                  <p>
                    I believe every love story deserves to be honored with dignity, warmth, and authenticity. Whether you're celebrating in front of hundreds or saying your vows with just the two of you present, your ceremony should feel deeply personal and unforgettable.
                  </p>
                  <p>
                    Over the years, I've had the privilege of officiating ceremonies that ranged from grand celebrations to intimate elopements, from traditional vows to completely personalized promises. Each one has reminded me why I love what I do.
                  </p>
                  <p className="text-[#f7e7ce] italic">
                    "When you choose me as your officiant, you're not just getting someone to sign your certificate—you're gaining a partner who truly cares about making your moment as special as you've always dreamed."
                  </p>
                </div>
              </motion.div>

              {/* Credentials/Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "Licensed & Certified", value: "Official Officiant" },
                  { icon: Users, label: "Ceremonies Performed", value: "100+ Couples" },
                  { icon: Heart, label: "Years of Experience", value: "Trusted Service" },
                  { icon: Sparkles, label: "Client Satisfaction", value: "5-Star Rated" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#ff1493]/20 rounded-xl p-6 text-center hover:border-[#ff1493]/50 transition-all"
                  >
                    <stat.icon className="w-8 h-8 text-[#ff1493] mx-auto mb-3" />
                    <p className="font-['Inter'] text-sm text-[#a8a8a8] mb-1">{stat.label}</p>
                    <p className="font-['Playfair_Display'] text-lg text-[#f7e7ce]">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1a1a1a]/50 via-[#141414]/80 to-[#1a1a1a]/50 border-l-4 border-[#ff1493] rounded-r-2xl p-10 max-w-5xl mx-auto"
          >
            <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#f7e7ce] text-center leading-relaxed mb-4">
              "Love is patient. Love is kind. And your ceremony should reflect both—with a touch of elegance and a whole lot of heart."
            </p>
            <p className="font-['Inter'] text-[#ff1493] text-center">
              — DeluxeDecor12
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
