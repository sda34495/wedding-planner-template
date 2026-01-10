import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    url: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t51.82787-15/590411457_18227282524309986_9171539462628551314_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHpdXS3CnqDQES23Z2ojckG01HY2V9u1z_TUdjZX27XP14UlP7Hevv6zCjNpl7gQyREQt3LiJObbh8KIgLxdiGr&_nc_ohc=7T5fP_YplHsQ7kNvwGGVCcy&_nc_oc=Adnqwfy-6NW0YhxmfS7ogOs-g59CH5nL3_Q6hQTuHS0dCCkyju3s9CaKSffSbUgIsXI&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=VAli6K3DhVedUemGamIRug&oh=00_AfrKcs8UGhS-0VKwcVE7WerzuyYuq9hu2750GZ4zRk-q2Q&oe=69682F68",
    alt: "Wedding officiant ceremony"
  },
  {
    url: "https://scontent.fkhi2-2.fna.fbcdn.net/v/t51.82787-15/588639977_18227282455309986_7870057146595857533_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEJwnSwHzvwbI81y10mwcbhxMDLbmf_jSzEwMtuZ_-NLO5gI1qVRpU43H6f2GT8NrIiPjMJ7qy003yN9nmSxou-&_nc_ohc=B2tVtTwS6BsQ7kNvwF7b_Yh&_nc_oc=AdlSD80yI9iE-AUa7wsa8wELpxBCMhmwizje1Hwc00goV3b7ADpLbqupYmcGlxk7mi4&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=TBCcsYPMo8hVtZrh0D0giw&oh=00_AfoWmqhC1Zjjjy14eF0FQP-Qsa-1xyhHTFQNHrIsEGgRTA&oe=69681BA5",
    alt: "Bride and groom exchanging vows"
  },
  {
    url: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t51.82787-15/590411402_18227282464309986_5181614060181392075_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGcoo7IWevz0zPVJfgBXoLlfmXNDEC_vjB-Zc0MQL--MF46TZjB4KnCp3Kb2Wj41cC6FQpClRlQmiixaPnyoExF&_nc_ohc=RF42tP-FLFwQ7kNvwEkw62B&_nc_oc=AdkXYoegVhT9_fKKK9P0Sd-euIB0pxRo6Lpe_GEIZ121U2t8iWdZSY1tSpdO_EKmZJk&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=N0lJmzqe4JCk-bvz7tqo4A&oh=00_AfrlBaA9vKEtRZYWmYpj9BXAkALzy3VPUZM8xJGVCHCCBA&oe=69683D1D",
    alt: "Wedding rings exchange"
  },
  {
    url: "https://images.unsplash.com/photo-1612883809638-9314edb33efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBvdXRkb29yfGVufDF8fHx8MTc2Nzk4MTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Romantic outdoor wedding"
  },
  {
    url: "https://images.unsplash.com/photo-1765852549107-253999a3e511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMGVsb3BlbWVudCUyMGNlcmVtb255fGVufDF8fHx8MTc2Nzk4MTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Intimate elopement ceremony"
  },
  {
    url: "https://images.unsplash.com/photo-1664312696723-173130983e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMGZsb3dlcnN8ZW58MXx8fHwxNzY3OTE2NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Wedding bouquet flowers"
  },
  {
    url: "https://images.unsplash.com/photo-1674970538959-e7475d8d376f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlfGVufDF8fHx8MTc2NzkxMDMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Elegant wedding venue"
  },
  {
    url: "https://images.unsplash.com/photo-1665258608444-54f857b2ed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwaGFwcHl8ZW58MXx8fHwxNzY3OTYzMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Happy wedding couple"
  },
  {
    url: "https://images.unsplash.com/photo-1738800076252-205a5902fbb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjB3ZWRkaW5nJTIwYXJpem9uYXxlbnwxfHx8fDE3Njc5ODEyODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Desert wedding Arizona"
  },
  {
    url: "https://images.unsplash.com/photo-1767127428139-dbc4bbaf150f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3Njc5ODA5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Elegant wedding couple at sunset"
  },
  {
    url: "https://images.unsplash.com/photo-1767881897213-3999aa68f157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2VyZW1vbnklMjByb21hbnRpY3xlbnwxfHx8fDE3Njc5ODA5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Luxury wedding ceremony"
  },
  {
    url: "https://images.unsplash.com/photo-1635045180768-332216aac26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5ZWFyJTIwY2hhbXBhZ25lJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY3OTgwOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "New Year celebration"
  }
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#f7e7ce] mb-6 leading-tight">
              Moments That
              <br />
              <span className="text-[#f7e7ce] ">Last Forever</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#a8a8a8] max-w-3xl mx-auto leading-relaxed">
              Every ceremony tells a unique story. Browse through our collection of beautiful moments and celebrations we've had the honor of being part of.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border-2 border-[#f7e7ce] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-[#f7e7ce]  hover:text-[#f7d76e] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
          </motion.div>

          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1));
              }}
              className="px-6 py-3 bg-[#f7e7ce] text-[#0a0a0a] rounded-full hover:bg-[#7dd3cc] transition-colors"
            >
              Previous
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
              }}
              className="px-6 py-3 bg-[#f7e7ce] text-[#0a0a0a] rounded-full hover:bg-[#7dd3cc] transition-colors"
            >
              Next
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
