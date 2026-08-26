import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Instagram, Facebook, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const luxuryEase = [0.16, 1, 0.3, 1];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F9F7F2] pt-16 sm:pt-20 pb-24 sm:pb-16 md:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, ease: luxuryEase }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10"
        >
          
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <span className="text-2xl font-serif tracking-[0.2em] font-light text-white block">
                NESTORA
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase font-mono text-[#5A5A40] font-bold">
                Interiors • Kerala
              </span>
            </div>

            <p className="text-sm font-serif italic text-stone-400 max-w-sm leading-relaxed font-light">
              "Thoughtful interiors. Beautifully lived."
            </p>

            <p className="text-xs text-stone-400 font-sans leading-relaxed max-w-sm font-light">
              A bespoke architectural interior studio based in Kerala, India. Crafting distinctive residences, luxury villas, and contemporary commercial spaces with enduring warmth.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5A5A40] text-stone-300 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5A5A40] text-stone-300 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/919847012345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5A5A40] text-stone-300 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#5A5A40]">
              Studio
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'Selected Projects', id: 'projects' },
                { label: 'Our Services', id: 'services' },
                { label: 'Design Philosophy', id: 'philosophy' },
                { label: '4-Step Process', id: 'process' },
                { label: 'Before & After', id: 'before-after' },
                { label: 'Contact Studio', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-white transition-colors cursor-pointer text-stone-400 font-light"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#5A5A40]">
              Interior Services
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li>Residential Interiors</li>
              <li>Villa Interiors (Thrissur & Kochi)</li>
              <li>Modern Island Kitchens</li>
              <li>Master Bedroom Sanctuaries</li>
              <li>Living & Dining Lounge Spaces</li>
              <li>Commercial & Executive Offices</li>
              <li>Turnkey Interior Solutions</li>
              <li>3D CGI Architectural Walkthroughs</li>
            </ul>
          </div>

          {/* Contact & Locations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#5A5A40]">
              Kerala Locations
            </h4>
            <div className="space-y-3 text-xs text-stone-400 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5A5A40] flex-shrink-0 mt-0.5" />
                <span>Panampilly Nagar, Kochi & Puzhakkal, Thrissur, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5A5A40] flex-shrink-0" />
                <a href="tel:+919847012345" className="hover:text-white transition-colors">
                  +91 98470 12345
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5A5A40] flex-shrink-0" />
                <a href="mailto:hello@nestorainteriors.com" className="hover:text-white transition-colors">
                  hello@nestorainteriors.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="luxury-btn-outline w-full py-3 bg-white/10 hover:bg-[#5A5A40] text-[#F9F7F2] text-[10px] uppercase tracking-[0.2em] font-medium transition-all cursor-pointer"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>

        </motion.div>

        {/* Footer Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-stone-500 font-mono">
          <div>
            © {new Date().getFullYear()} NESTORA INTERIORS. Spaces Designed Around You. Kerala, India.
          </div>

          <div className="flex items-center gap-6">
            <span>Client Presentation Demo</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
