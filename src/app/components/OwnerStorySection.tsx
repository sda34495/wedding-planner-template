import { motion } from "motion/react";
import { Heart, Award, Sparkles, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function OwnerStorySection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)',
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFED4E]/20 rounded-full border border-[#FFD700]/50 mb-6">
              <Heart className="w-4 h-4 text-[#FFD700]" />
              <span className="font-['Inter'] text-[#FFD700] text-sm uppercase tracking-wider font-semibold">Meet Your Event Designer</span>
            </div>
            
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-black mb-6 leading-tight">
              About
              <br />
              <span className="text-[#FFD700]">Dafne Valadez</span>
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
                className="relative rounded-2xl overflow-hidden border-4 border-[#FFD700]"
              >
                <ImageWithFallback
                  src="/images/deluxe.jpeg"
                  alt="Dafne Valadez - Event Designer"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                  <p className="font-['Playfair_Display'] text-2xl text-[#FFD700]">Dafne Valadez</p>
                  <p className="font-['Inter'] text-white">Lead Event Designer & Coordinator</p>
                </div>
              </motion.div>

              {/* Secondary Photos Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative rounded-xl overflow-hidden border-2 border-[#FFD700]/50"
                >
                  <ImageWithFallback
                    src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t51.82787-15/587784833_18227281816309986_3728352365626009051_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHqST5uuHe_ojcX0IKBnnUdr_TAg9dj7rCv9MCD12PusOWdXSjw0I-hG0nuRZmpdBtV5uHbXhxKi8WdiZVA4bXb&_nc_ohc=NfiWtoJ4dYAQ7kNvwFGbzaP&_nc_oc=AdlN4h_gMFNAdibKK1UEJ0NiO0azbkllv7Z2nYAtymkQpr7zo3sdNUF7CKINLA0UHAg&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=RLbmMslp2O98fGqYxq3-OQ&oh=00_AfomUF3GnK4gNjcILlisKE2pAmWNjKUOd3jJaeKYtWb01g&oe=696F2A35"
                    alt="Event decoration setup"
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative rounded-xl overflow-hidden border-2 border-[#FFD700]/50"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1767986012547-3fc29b18339f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGVjb3IlMjBlbGVnYW50fGVufDF8fHx8MTc2ODQ5NDcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Elegant reception setup"
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
                <h3 className="font-['Playfair_Display'] text-3xl text-black mb-4">
                  Creating Moments That Matter
                </h3>
                <div className="space-y-4 font-['Inter'] text-lg text-[#6b6b6b] leading-relaxed">
                  <p>
                    For over a decade, I've had the privilege of transforming dreams into breathtaking realities. Event design isn't just about beautiful decorations—it's about creating an atmosphere where memories are made and emotions come alive.
                  </p>
                  <p>
                    Every celebration tells a unique story. Whether you're planning an intimate gathering or a grand affair, I believe your event should reflect your personality, style, and vision with impeccable attention to detail.
                  </p>
                  <p>
                    From concept to execution, I work closely with each client to understand their desires and exceed their expectations. My approach combines artistic creativity with meticulous planning and seamless coordination.
                  </p>
                  <p className="text-black italic font-medium">
                    "Your event is more than just a date on the calendar—it's a celebration of life's most precious moments. Let's make it extraordinary together."
                  </p>
                </div>
              </motion.div>

              {/* Credentials/Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "Certified Planner", value: "Licensed Pro" },
                  { icon: Sparkles, label: "Events Designed", value: "500+ Events" },
                  { icon: Heart, label: "Years Experience", value: "10+ Years" },
                  { icon: Star, label: "Client Rating", value: "5-Star Rated" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-black border border-[#FFD700] rounded-xl p-6 text-center hover:border-[#FFED4E] transition-all"
                  >
                    <stat.icon className="w-8 h-8 text-[#FFD700] mx-auto mb-3" />
                    <p className="font-['Inter'] text-sm text-[#9b9b9b] mb-1">{stat.label}</p>
                    <p className="font-['Playfair_Display'] text-lg text-white">{stat.value}</p>
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
            className="bg-black border-l-4 border-[#FFD700] rounded-r-2xl p-10 max-w-5xl mx-auto"
          >
            <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-white text-center leading-relaxed mb-4">
              "Excellence is in the details. Luxury is in the experience. Magic happens when both come together perfectly."
            </p>
            <p className="font-['Inter'] text-[#FFD700] text-center">
              — Dafne Valadez, Lead Event Designer
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
