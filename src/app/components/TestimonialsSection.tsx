    import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah & Michael",
    image: "https://images.unsplash.com/photo-1665258608444-54f857b2ed8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwaGFwcHl8ZW58MXx8fHwxNzY3OTYzMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "New Year's Eve 2025",
    text: "Dafne made our New Year's Eve wedding absolutely magical. We couldn't wait another day to get married, and she made it happen with such grace and warmth. Starting our new year as husband and wife was the best decision we ever made."
  },
  {
    name: "Jennifer & David",
    image: "https://images.unsplash.com/photo-1604378282113-1fde3be480ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMGdyb29tJTIwdm93c3xlbnwxfHx8fDE3Njc5ODEyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Same-Day Ceremony",
    text: "We needed to get married quickly, and Dafne was there for us. Professional, compassionate, and made our simple ceremony feel incredibly special. She truly cares about every couple she serves."
  },
  {
    name: "Amanda & Robert",
    image: "https://images.unsplash.com/photo-1767127428139-dbc4bbaf150f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3Njc5ODA5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Desert Ceremony",
    text: "Our Arizona desert wedding was like a dream, and Dafne was the perfect officiant. She understood our vision and created a ceremony that was both elegant and deeply personal. We couldn't have asked for more."
  },
  {
    name: "Lisa & Mark",
    image: "https://images.unsplash.com/photo-1612883809638-9314edb33efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBvdXRkb29yfGVufDF8fHx8MTc2Nzk4MTI4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Intimate Garden Wedding",
    text: "From our first conversation to saying 'I do,' Dafne made everything seamless. Her warmth and professionalism gave us the confidence to enjoy every moment. She's not just an officiant—she's a blessing."
  }
];

export function TestimonialsSection() {
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
              <Star className="w-4 h-4 text-[#f7e7ce]" />
              <span className="font-['Inter'] text-[#f7e7ce] text-sm uppercase tracking-wider">Real Stories</span>
            </div>

            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#f7e7ce] mb-6 leading-tight">
              Voices of
              <br />
              <span className="text-[#f7e7ce]">Happy Couples</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#a8a8a8] max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it—hear from couples who trusted us with their special moments.
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
                className="bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#f7e7ce]/20 rounded-2xl p-8 hover:border-[#f7e7ce]/40 transition-all"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#f7e7ce]/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f7e7ce] text-[#f7e7ce]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-['Inter'] text-[#f5f5f5] text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#f7e7ce]/10">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#f7e7ce]/30">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-['Playfair_Display'] text-lg text-[#f7e7ce]">
                      {testimonial.name}
                    </p>
                    <p className="font-['Inter'] text-sm text-[#f7e7ce]">
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
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1a1a1a]/50 via-[#141414]/80 to-[#1a1a1a]/50 border border-[#f7e7ce]/20 rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#f7e7ce] text-[#f7e7ce]" />
                ))}
              </div>
              <span className="font-['Inter'] text-[#f7e7ce] text-lg">
                Rated 5.0 Stars by Our Couples
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
