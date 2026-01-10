import { motion } from "motion/react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#ff69b4]/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
           <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#ff99cc] to-[#ff1493]">
  <img
    src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/448539302_908950934578252_3979253405119487051_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFWxSsCv25Y2RtPuwYZidKTEyBLFzwVbRYTIEsXPBVtFpqOXMV1MLn9TD6SnDzx7uRiQUZAul-tr5weg4VpWBCQ&_nc_ohc=VJurqMP8YaAQ7kNvwEG22dW&_nc_oc=AdkfF02brXAcXZek-BNQUb-8Nbl5gVIEU3nQxFOhD6X_igVZaq3DcCiObW7ZXLP3YLg&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=sylNxrdtW8kROZqLeQb56A&oh=00_Afp6OGSlNoJ7mAm0lhW-BgrEadQb18dzrEVaXedoNkqLTw&oe=69684111" // yahan apni image ka path ya URL daalo
    alt="Avatar"
    className="w-full h-full object-cover"
  />
</div>

            <div>
              <h1 className="font-['Playfair_Display'] text-xl text-[#ff1493]">DeluxeDecor12</h1>
              <p className="text-xs text-[#a8a8a8]">Event Planning & Decor</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#f7e7ce] hover:text-[#ff69b4] transition-colors font-['Inter'] font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#f7e7ce] hover:text-[#ff69b4] transition-colors font-['Inter'] font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-[#f7e7ce] hover:text-[#ff69b4] transition-colors font-['Inter'] font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#f7e7ce] hover:text-[#ff69b4] transition-colors font-['Inter'] font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+19802483144"
              className="flex items-center gap-2 text-[#f7e7ce] hover:text-[#ff69b4] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-['Inter'] text-sm">+1 980-248-3144</span>
            </a>
            <a
              href="mailto:deluxe.decor.12.0@gmail.com"
              className="flex items-center gap-2 text-[#f7e7ce] hover:text-[#ff69b4] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-['Inter'] text-sm">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#f7e7ce] hover:text-[#ff69b4] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-[#ff69b4]/10"
          >
            <nav className="flex flex-col gap-4 pt-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-[#f7e7ce] hover:text-[#ff69b4] transition-colors font-['Inter'] font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-[#f7e7ce] hover:text-[#ff69b4] transition-colors font-['Inter'] font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-[#f7e7ce] hover:text-[#ff69b4] transition-colors font-['Inter'] font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-[#f7e7ce] hover:text-[#ff69b4] transition-colors font-['Inter'] font-medium"
              >
                Contact
              </button>
              <div className="flex flex-col gap-3 pt-4 border-t border-[#ff69b4]/10">
                <a
                  href="tel:+19802483144"
                  className="flex items-center gap-2 text-[#f7e7ce] hover:text-[#ff69b4] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-['Inter'] text-sm">+1 980-248-3144</span>
                </a>
                <a
                  href="mailto:deluxe.decor.12.0@gmail.com"
                  className="flex items-center gap-2 text-[#f7e7ce] hover:text-[#ff69b4] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-['Inter'] text-sm">deluxe.decor.12.0@gmail.com</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
