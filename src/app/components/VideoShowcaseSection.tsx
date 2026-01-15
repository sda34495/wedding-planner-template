import { motion } from "motion/react";
import { Play, Heart } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VideoShowcaseSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      thumbnail: "https://scontent.fkhi2-2.fna.fbcdn.net/v/t51.82787-15/590420832_18227281843309986_5978442560504538293_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHhMBNFcIBnwzDkjxIH6Pj6VINXJ1vk6aJUg1cnW-TposhhEsKEE-6FCmiitT3F1ryi-ryYUfMC8K8pSyhRJWHK&_nc_ohc=LxGQM5Wko5QQ7kNvwGhA3hw&_nc_oc=AdnmdEB6qmfhEIjCUSVjZgCGxiN3ShoPGg3MCERYqRhxNtrgOAMxgdj3k4nospZJB2A&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=T9Wk3dLyDHN3X8rCciFLwA&oh=00_AfpHeZGGi6YnWLzcaC5Q00B2Fkulf6rfST8D1tk6mePtyw&oe=696F2D58",
      title: "Luxury Wedding Decor",
      duration: "2:45"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1738800076252-205a5902fbb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjB3ZWRkaW5nJTIwYXJpem9uYXxlbnwxfHx8fDE3Njc5ODEyODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Desert Event Setup",
      duration: "3:12"
    },
    {
      thumbnail: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t51.82787-15/587785638_18227281771309986_8163498311833723322_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHMYhYO2vfQz_JlzSmv1utxBTA-0qR554MFMD7SpHnngxY1-S2aClgKgeJG3AHiXqXLQeeddjx5v6N7gSsbJTbg&_nc_ohc=hQamv4LFaVoQ7kNvwEZ0Cnx&_nc_oc=AdnL3hZF1y24Ugc8PvHi4kZPBizcyWzc0NRCSolz7ZSqR4W4eZIzawlz9VOMD4pmCrQ&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=q-ceWrNXIX2wLyvRm_qb2Q&oh=00_Afrpk9qg5n0-PnC6fexfljd-uc35Z4rD8aMmKOraawqXDw&oe=696F1187",
      title: "Intimate Celebration",
      duration: "1:58"
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      {/* Background */}
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
          {/* Headline */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFED4E]/20 rounded-full border border-[#FFD700]/50 mb-6">
              <Heart className="w-4 h-4 text-[#FFD700]" />
              <span className="font-['Inter'] text-[#FFD700] text-sm uppercase tracking-wider font-semibold">Event Highlights</span>
            </div>

            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-black mb-6 leading-tight">
              See Our Events
              <br />
              <span className="text-[#FFD700]">Come to Life</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed">
              Experience the elegance, creativity, and unforgettable moments from events we've designed and coordinated.
            </p>
          </div>

          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 max-w-5xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-[#FFD700] group">
              {!isPlaying ? (
                <>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1767986012547-3fc29b18339f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGVjb3IlMjBlbGVnYW50fGVufDF8fHx8MTc2ODQ5NDcxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Featured event video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-[#FFD700] to-[#FFED4E] rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-2xl shadow-[#FFD700]/50 group-hover:shadow-[#FFD700]/70"
                  >
                    <Play className="w-10 h-10 text-black ml-1" fill="black" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-['Playfair_Display'] text-2xl text-white mb-2">
                      A Celebration to Remember
                    </p>
                    <p className="font-['Inter'] text-[#FFD700]">
                      Featured Event Highlights
                    </p>
                  </div>
                </>
              ) : (
                <video
                  autoPlay
                  controls
                  className="w-full h-full"
                >
                  <source
                    src="https://cdn.pixabay.com/video/2021/08/09/84711-590200628_large.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </motion.div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-video rounded-xl overflow-hidden border border-[#FFD700]/30 hover:border-[#FFD700] transition-all cursor-pointer group"
              >
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <Play className="w-6 h-6 text-black ml-0.5" fill="black" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-['Playfair_Display'] text-lg text-white mb-1">
                    {video.title}
                  </p>
                  <p className="font-['Inter'] text-sm text-[#FFD700]">
                    {video.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="font-['Inter'] text-lg text-[#6b6b6b] mb-6">
              Ready to create your own unforgettable celebration?
            </p>
            <motion.a
              href="tel:+1 980-248-3144"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFD700] to-[#FFED4E] text-black px-12 py-5 rounded-full transition-all shadow-lg shadow-[#FFD700]/30 hover:shadow-xl hover:shadow-[#FFD700]/50 font-['Inter'] font-semibold text-lg"
            >
              <span>Start Planning Your Event</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}