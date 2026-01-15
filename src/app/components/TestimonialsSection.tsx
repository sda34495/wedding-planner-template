import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah & Michael",
    image: "https://images.unsplash.com/photo-1665258608444-54f857b2ed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwaGFwcHl8ZW58MXx8fHwxNzY3OTYzMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Wedding Reception 2025",
    text: "Dafnetransformed our reception venue into an absolute dream! The gold and white decor was stunning, and every detail was perfect. Her coordination made our day completely stress-free."
  },
  {
    name: "Jennifer & David",
    image: "https://images.unsplash.com/photo-1604378282113-1fde3be480ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwdm93c3xlbnwxfHx8fDE3Njc5ODEyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Anniversary Gala",
    text: "We hired Deluxe Decor for our 25th anniversary celebration, and it exceeded all expectations. The decoration design was breathtaking, and the event flowed seamlessly. Highly recommend!"
  },
  {
    name: "Amanda & Robert",
    image: "https://images.unsplash.com/photo-1767127428139-dbc4bbaf150f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3Njc5ODA5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Luxury Wedding",
    text: "From planning to execution, Dafnewas phenomenal. She understood our vision perfectly and brought it to life with elegant decorations and flawless coordination. Our guests are still raving about it!"
  },
  {
    name: "Lisa & Mark",
    image: "https://images.unsplash.com/photo-1612883809638-9314edb33efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBvdXRkb29yfGVufDF8fHx8MTc2Nzk4MTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Garden Event",
    text: "Working with Deluxe Decor was the best decision we made. Cicely's attention to detail and creative vision made our outdoor event absolutely stunning. Everything was perfectly coordinated!"
  }
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-black">
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
              <Star className="w-4 h-4 text-[#FFD700]" />
              <span className="font-['Inter'] text-[#FFD700] text-sm uppercase tracking-wider font-semibold">Client Stories</span>
            </div>

            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-white mb-6 leading-tight">
              What Our Clients
              <br />
              <span className="text-[#FFD700]">Are Saying</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#9b9b9b] max-w-3xl mx-auto leading-relaxed">
              Real experiences from clients who trusted us to make their celebrations unforgettable.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-[#FFD700]/30 rounded-2xl p-8 hover:border-[#FFD700]/60 transition-all backdrop-blur-sm"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#FFD700]/40 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-['Inter'] text-white text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#FFD700]/20">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFD700]">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-['Playfair_Display'] text-lg text-white">
                      {testimonial.name}
                    </p>
                    <p className="font-['Inter'] text-sm text-[#FFD700]">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-[#FFD700]/30 rounded-full backdrop-blur-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <span className="font-['Inter'] text-white text-lg">
                Rated 5.0 Stars by Our Clients
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}