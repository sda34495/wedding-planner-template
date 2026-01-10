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
                  src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/448539302_908950934578252_3979253405119487051_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWxSsCv25Y2RtPuwYZidKTEyBLFzwVbRYTIEsXPBVtFpqOXMV1MLn9TD6SnDzx7uRiQUZAul-tr5weg4VpWBCQ&_nc_ohc=VJurqMP8YaAQ7kNvwEG22dW&_nc_oc=AdkfF02brXAcXZek-BNQUb-8Nbl5gVIEU3nQxFOhD6X_igVZaq3DcCiObW7ZXLP3YLg&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=sylNxrdtW8kROZqLeQb56A&oh=00_Afp6OGSlNoJ7mAm0lhW-BgrEadQb18dzrEVaXedoNkqLTw&oe=69684111"
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
                    src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t51.82787-15/587784833_18227281816309986_3728352365626009051_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHqST5uuHe_ojcX0IKBnnUdr_TAg9dj7rCv9MCD12PusOWdXSjw0I-hG0nuRZmpdBtV5uHbXhxKi8WdiZVA4bXb&_nc_ohc=dd15PVUlQp4Q7kNvwE64YZ4&_nc_oc=AdkaC-XtYRy6GFSqp4UxnrsSgnM5zOpDam708DRKwTks_Ukzi0uRj-ydEiH25WfZgRw&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=EZHL1XHOymnTw_X8FYFYdQ&oh=00_AfqCa9J7nRuFFt4gG8jVIy7JshyxYuuQQy9piZlfCR0tmg&oe=69682235"
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
                    src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t51.82787-15/587785638_18227281771309986_8163498311833723322_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHMYhYO2vfQz_JlzSmv1utxBTA-0qR554MFMD7SpHnngxY1-S2aClgKgeJG3AHiXqXLQeeddjx5v6N7gSsbJTbg&_nc_ohc=SvgFsMeXv2QQ7kNvwEVxP3J&_nc_oc=Adk7MtGNK91R9CewaTrvpG3_KM5VzXCFDRlHXYfsilFSdLVExQWE8FWsSU6WMVB4j_E&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=1bHtXrmi--uezuFRoYax6w&oh=00_AfqEYMceZYfhzQKbnrIbyX-J-nI_KLZu_EI6RoYV9SOSkw&oe=696841C7"
                    alt="Beautiful ceremony moment"
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right: Story & Credentials */}
          <div className="space-y-8">
  {/* Company Story */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <h3 className="font-['Playfair_Display'] text-3xl text-[#f7e7ce] mb-4">
      Bringing Events to Life
    </h3>
    <div className="space-y-4 font-['Inter'] text-lg text-[#a8a8a8] leading-relaxed">
      <p>
        At Deluxedecor12, event planning isn’t just our profession—it’s our passion. We believe that every celebration, from intimate gatherings to grand galas, deserves to be executed flawlessly with creativity, precision, and style.
      </p>
      <p>
        Our team takes care of every detail, ensuring that your vision becomes reality. From décor and logistics to vendor coordination and seamless scheduling, we make sure each moment is memorable, stress-free, and uniquely yours.
      </p>
      <p>
        Over the years, we’ve curated experiences for countless clients—weddings, corporate events, birthday celebrations, and more—each leaving a lasting impression of elegance and excellence.
      </p>
      <p className="text-[#f7e7ce] italic">
        "With Deluxedecor12, your event isn’t just planned—it’s brought to life with passion, creativity, and perfection."
      </p>
    </div>
  </motion.div>

  {/* Credentials/Stats */}
  <div className="grid grid-cols-2 gap-4">
    {[
      { icon: Award, label: "Expert Planners", value: "Certified Professionals" },
      { icon: Users, label: "Events Managed", value: "200+ Successful Events" },
      { icon: Heart, label: "Years of Experience", value: "10+ Years" },
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
