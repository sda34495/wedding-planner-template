import { motion } from "motion/react";

export function BrandStatementSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
      
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,105,180,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Decorative Element */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#ff1493]" />
            <div className="mx-6 flex gap-2">
              <div className="w-1.5 h-1.5 bg-[#ff1493] rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#ff1493] rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#ff1493] rounded-full" />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#ff1493]" />
          </div>

          {/* Main Statement */}
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl text-[#f7e7ce] mb-8 leading-tight tracking-wide">
            A new year.
            <br />
            A new chapter.
            <br />
            <span className="text-[#ff1493]">Your love story deserves</span>
            <br />
            <span className="text-[#ff1493]">a ceremony that feels</span>
            <br />
            personal and unforgettable.
          </h2>

          {/* Decorative Element */}
          <div className="flex items-center justify-center mt-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#ff1493]" />
            <div className="mx-6 flex gap-2">
              <div className="w-1.5 h-1.5 bg-[#ff1493] rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#ff1493] rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#ff1493] rounded-full" />
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#ff1493]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
