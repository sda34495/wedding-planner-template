import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-black mb-6 leading-tight">
              Let's Create
              <br />
              <span className="text-[#FFD700]">Something Amazing</span>
            </h2>
            <p className="font-['Inter'] text-xl text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed">
              Ready to start planning your dream event? Contact us today for a consultation and let's bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-['Playfair_Display'] text-3xl text-black mb-6">
                  Get in Touch
                </h3>
                <p className="font-['Inter'] text-[#6b6b6b] leading-relaxed mb-8">
                  Whether you're planning a wedding, anniversary, corporate event, or any special celebration, we're here to help make it extraordinary.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.a
                  href="tel:+1 980-248-3144"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-6 bg-black rounded-2xl border border-[#FFD700]/30 hover:border-[#FFD700] transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFED4E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-sm text-[#9b9b9b] mb-1">Call Us</p>
                    <p className="font-['Inter'] text-white text-lg">+1 980-248-3144</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:deluxe.decor.12.0@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-6 bg-black rounded-2xl border border-[#FFD700]/30 hover:border-[#FFD700] transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFED4E] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-sm text-[#9b9b9b] mb-1">Email Us</p>
                    <p className="font-['Inter'] text-white text-lg">deluxe.decor.12.0@gmail.com</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-6 bg-black rounded-2xl border border-[#FFD700]/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFED4E] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-sm text-[#9b9b9b] mb-1">Location</p>
                    <p className="font-['Inter'] text-white text-lg">Serving All of Arizona</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-gradient-to-br from-black to-[#1a1a1a] rounded-2xl border border-[#FFD700]/30">
                <h4 className="font-['Playfair_Display'] text-xl text-[#FFD700] mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 font-['Inter'] text-[#f5f5f5]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-[#9b9b9b]">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#9b9b9b]">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-[#9b9b9b]">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black rounded-2xl p-8 border border-[#FFD700]/30">
              <h3 className="font-['Playfair_Display'] text-2xl text-white mb-6">
                Request a Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-['Inter'] text-sm text-[#9b9b9b] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-[#FFD700]/30 rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block font-['Inter'] text-sm text-[#9b9b9b] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-[#FFD700]/30 rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-['Inter'] text-sm text-[#9b9b9b] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-[#FFD700]/30 rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="event-type" className="block font-['Inter'] text-sm text-[#9b9b9b] mb-2">
                    Event Type *
                  </label>
                  <select
                    id="event-type"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-[#FFD700]/30 rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="other">Other Celebration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-['Inter'] text-sm text-[#9b9b9b] mb-2">
                    Tell us about your event *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-[#FFD700]/30 rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors resize-none"
                    placeholder="Share your vision, date, guest count, and any special requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFD700] to-[#FFED4E] text-black px-8 py-4 rounded-full font-['Inter'] font-semibold text-lg hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}