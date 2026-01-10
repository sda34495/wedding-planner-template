import { motion } from "motion/react";
import { Play, Heart } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VideoShowcaseSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1765615196684-61b3b9b298c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwb2ZmaWNpYW50JTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY3OTEyMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Intimate Garden Ceremony",
      duration: "2:45"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1738800076252-205a5902fbb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjB3ZWRkaW5nJTIwYXJpem9uYXxlbnwxfHx8fDE3Njc5ODEyODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Desert Sunset Vows",
      duration: "3:12"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1765852549107-253999a3e511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMGVsb3BlbWVudCUyMGNlcmVtb255fGVufDF8fHx8MTc2Nzk4MTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Intimate Elopement",
      duration: "1:58"
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f7e7ce]/20 to-[#f7d76e]/20 rounded-full border border-[#f7e7ce]/30 mb-6">
              <Heart className="w-4 h-4 text-[#fff1b2]" />
              <span className="font-['Inter'] text-[#fff1b2] text-sm uppercase tracking-wider">Event Highlights</span>
            </div>

            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#f7e7ce] mb-6 leading-tight">
              See the Magic
              <br />
              <span className="text-[#f7e7ce]">Come to Life</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#a8a8a8] max-w-3xl mx-auto leading-relaxed">
              Experience the emotion, elegance, and unforgettable moments from ceremonies we've had the honor to perform.
            </p>
          </div>

          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 max-w-5xl mx-auto"
          >
              <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-[#f7e7ce]/30 group">
              {!isPlaying ? (
                <>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1767881897213-3999aa68f157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjByb21hbnRpY3xlbnwxfHx8fDE3Njc5ODA5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Featured ceremony video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent" />
                  
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-[#f7e7ce] to-[#f7d76e] rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-2xl shadow-[#f7e7ce]/50 group-hover:shadow-[#f7d76e]/70"
                  >
                    <Play className="w-10 h-10 text-[#0a0a0a] ml-1" fill="#0a0a0a" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-['Playfair_Display'] text-2xl text-[#f7e7ce] mb-2">
                      A Love Story Begins
                    </p>
                    <p className="font-['Inter'] text-[#f7e7ce]">
                      Featured Ceremony Highlights
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
                className="relative aspect-video rounded-xl overflow-hidden border border-[#f7e7ce]/20 hover:border-[#f7e7ce]/50 transition-all cursor-pointer group"
              >
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#f7e7ce]/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <Play className="w-6 h-6 text-[#0a0a0a] ml-0.5" fill="#0a0a0a" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-['Playfair_Display'] text-lg text-[#f7e7ce] mb-1">
                    {video.title}
                  </p>
                  <p className="font-['Inter'] text-sm text-[#f7e7ce]">
                    {video.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="font-['Inter'] text-lg text-[#a8a8a8] mb-6">
              Ready to create your own unforgettable moment?
            </p>
            <motion.a
              href="tel:602-570-6728"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#f7e7ce] to-[#f7d76e] text-[#0a0a0a] px-12 py-5 rounded-full transition-all shadow-lg shadow-[#f7e7ce]/30 hover:shadow-xl hover:shadow-[#f7e7ce]/50"
            >
              <span className="font-['Inter'] font-semibold text-lg">Start Planning Your Ceremony</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
