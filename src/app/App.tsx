import { HeroSection } from "./components/HeroSection";
import { LimitedOfferSection } from "./components/LimitedOfferSection";
import { NewYearSection } from "./components/NewYearSection";
import { SameDaySection } from "./components/SameDaySection";
import { MemorialSection } from "./components/MemorialSection";
import { BrandStatementSection } from "./components/BrandStatementSection";
import { BookingSection } from "./components/BookingSection";
import { ContactSection } from "./components/ContactSection";
import { StickyCtaButton } from "./components/StickyCtaButton";
import { GallerySection } from "./components/GallerySection";
import { OwnerStorySection } from "./components/OwnerStorySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { VideoShowcaseSection } from "./components/VideoShowcaseSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      {/* Sticky CTA Button */}
      <StickyCtaButton />

      {/* Main Content */}
      <main>
        <HeroSection />
        <OwnerStorySection />
        <VideoShowcaseSection />
        <LimitedOfferSection />
        <NewYearSection />
        <SameDaySection />
        <GallerySection />
        <TestimonialsSection />
        <MemorialSection />
        <BrandStatementSection />
        <BookingSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-[#d4af37]/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-['Playfair_Display'] text-2xl text-[#d4af37] mb-4">
            Hitch Happens
          </p>
          <p className="font-['Inter'] text-[#a8a8a8] mb-6">
            Licensed Wedding & Memorial Officiant • Serving Arizona with Love & Compassion
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-[#a8a8a8]">
            <a href="tel:602-570-6728" className="hover:text-[#d4af37] transition-colors">
              602-570-6728
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:hitched2youhappened@gmail.com" className="hover:text-[#d4af37] transition-colors">
              hitched2youhappened@gmail.com
            </a>
          </div>
          <p className="font-['Inter'] text-xs text-[#a8a8a8] mt-8">
            © 2026 Hitch Happens. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}