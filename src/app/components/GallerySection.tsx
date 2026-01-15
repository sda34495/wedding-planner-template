import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [ { url: "https://scontent.fkhi2-3.fna.fbcdn.net/v/t51.82787-15/590411402_18227282464309986_5181614060181392075_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGcoo7IWevz0zPVJfgBXoLlfmXNDEC_vjB-Zc0MQL--MF46TZjB4KnCp3Kb2Wj41cC6FQpClRlQmiixaPnyoExF&_nc_ohc=dnQFfbfxEPkQ7kNvwEtYaQG&_nc_oc=AdmXxfh8K4smZvgjbPv3WtYM27hhwYMExa6ghvQFKwcggnOCnmJhKENtfyg2A_CZlrM&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=NqVhb1-nR6QP9UQTYm9kgA&oh=00_AfqaQOj-bTzghFk32wB2TwI0dHDPAtFuEHf7i1WK_NvwkQ&oe=696F0CDD", alt: "Luxury event decoration with gold accents" }, { url: "https://scontent.fkhi2-2.fna.fbcdn.net/v/t51.82787-15/590420808_18227282512309986_2886142029720207701_n.jpg?stp=dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEGOymOboSxuslAXFGswT0EMEqwBJ_80E8wSrAEn_zQT1IGnMbUmup06_CK2gS-9zSYW-b905ePROnu-t_RDGly&_nc_ohc=DvIGIk8wF-AQ7kNvwGhba9N&_nc_oc=AdmJJ-prPfWXhgobNf4nuLiTvkz_bAfHubcqM389L6Z1jnJwFfQPNdFvSt5dWluwGug&_nc_zt=23&se=-1&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=l37YMh5pRvftpfwxLJGlCQ&oh=00_Afr9qScGbiv8iusw8NOsIGDuHiFgbkrQH4V9mlas6toeYg&oe=696F0E61", alt: "Elegant reception decor setup" }, { url: "https://images.unsplash.com/photo-1571929711205-14aae07834ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwYmFsbHJvb20lMjBzZXR1cHxlbnwxfHx8fDE3Njg0OTQ3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Ballroom event setup" }, { url: "https://images.unsplash.com/photo-1612883809638-9314edb33efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBvdXRkb29yfGVufDF8fHx8MTc2Nzk4MTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Romantic outdoor event" }, { url: "https://images.unsplash.com/photo-1765852549107-253999a3e511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMGVsb3BlbWVudCUyMGNlcmVtb255fGVufDF8fHx8MTc2Nzk4MTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Intimate event ceremony" }, { url: "https://images.unsplash.com/photo-1664312696723-173130983e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMGZsb3dlcnN8ZW58MXx8fHwxNzY3OTE2NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Beautiful floral arrangements" }, { url: "https://images.unsplash.com/photo-1674970538959-e7475d8d376f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlfGVufDF8fHx8MTc2NzkxMDMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Elegant venue decoration" }, { url: "https://images.unsplash.com/photo-1665258608444-54f857b2ed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwaGFwcHl8ZW58MXx8fHwxNzY3OTYzMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Happy celebration moment" }, { url: "https://images.unsplash.com/photo-1738800076252-205a5902fbb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjB3ZWRkaW5nJTIwYXJpem9uYXxlbnwxfHx8fDE3Njc5ODEyODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Desert event styling" }, { url: "https://images.unsplash.com/photo-1765615196684-61b3b9b298c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwb2ZmaWNpYW50JTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY3OTEyMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Ceremony decoration" }, { url: "https://images.unsplash.com/photo-1604378282113-1fde3be480ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwdm93c3xlbnwxfHx8fDE3Njc5ODEyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Event moment capture" }, { url: "https://images.unsplash.com/photo-1688790026521-b7b14a885116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBleGNoYW5nZXxlbnwxfHx8fDE3Njc5ODEyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Elegant detail styling" } ];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 px-6 overflow-hidden bg-white">
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
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-black mb-6 leading-tight">
              Our Portfolio of
              <br />
              <span className="text-[#FFD700]">Stunning Events</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed">
              Browse through our collection of beautifully designed and coordinated celebrations that showcase our attention to detail and creative excellence.
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border-2 border-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-[#FFD700] hover:text-[#FFED4E] transition-colors"
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
              className="px-6 py-3 bg-[#FFD700] text-black rounded-full hover:bg-[#FFED4E] transition-colors font-['Inter'] font-semibold"
            >
              Previous
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
              }}
              className="px-6 py-3 bg-[#FFD700] text-black rounded-full hover:bg-[#FFED4E] transition-colors font-['Inter'] font-semibold"
            >
              Next
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}