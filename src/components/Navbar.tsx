import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onNavigate,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Before & After', id: 'before-after' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      id="main-navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#F9F7F2]/95 backdrop-blur-md shadow-xs py-3.5 border-b border-[#1A1A1A]/10 text-[#1A1A1A]'
          : 'bg-gradient-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/25 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="group flex flex-col text-left focus:outline-none cursor-pointer transition-transform duration-300 hover:opacity-90 active:scale-[0.99]"
          >
            <span
              className={`text-xl sm:text-2xl font-light tracking-[0.25em] sm:tracking-[0.3em] uppercase leading-none transition-colors duration-300 ${
                isScrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              NESTORA
            </span>
            <span
              className={`text-[7.5px] sm:text-[8px] tracking-[0.35em] sm:tracking-[0.5em] uppercase font-sans font-medium mt-1 transition-colors duration-300 ${
                isScrolled ? 'text-[#1A1A1A]/60' : 'text-stone-300'
              }`}
            >
              Interiors • Kerala
            </span>
          </button>

          {/* Desktop Navigation Links with animated underlines */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`nav-link-item ${isActive ? 'active-link' : ''} text-[10.5px] lg:text-[11px] uppercase tracking-[0.12em] lg:tracking-[0.15em] font-medium transition-colors duration-300 cursor-pointer py-1 ${
                    isScrolled
                      ? isActive
                        ? 'text-[#1A1A1A] font-bold'
                        : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                      : isActive
                      ? 'text-white font-bold'
                      : 'text-stone-200 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href="https://wa.me/919847012345?text=Hello%20Nestora%20Interiors,%20I%20would%20like%20to%20enquire%20about%20an%20interior%20project."
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-[10.5px] xl:text-[11px] uppercase tracking-[0.15em] font-medium px-2.5 xl:px-3 py-2 transition-all duration-300 hover:opacity-80 active:scale-95 ${
                isScrolled ? 'text-[#1A1A1A]' : 'text-stone-200'
              }`}
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
              <span>WhatsApp</span>
            </a>

            <button
              id="header-cta-btn"
              onClick={onOpenConsultation}
              className={`luxury-btn-primary group flex items-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer whitespace-nowrap ${
                isScrolled
                  ? 'bg-[#1A1A1A] text-[#F9F7F2] hover:bg-[#5A5A40]'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#F9F7F2] hover:text-[#5A5A40]'
              }`}
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu & Quick Contact */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/919847012345"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp quick chat"
              className={`p-2 rounded-full transition-transform active:scale-90 ${
                isScrolled ? 'text-emerald-700 bg-emerald-50' : 'text-emerald-400 bg-black/30'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors cursor-pointer active:scale-90 ${
                isScrolled ? 'text-[#1A1A1A] hover:bg-[#1A1A1A]/5' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#F9F7F2] border-b border-[#1A1A1A]/10 px-6 py-6 text-[#1A1A1A] shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left py-2 text-xs uppercase tracking-[0.2em] font-medium border-b border-[#1A1A1A]/05 transition-colors cursor-pointer ${
                    activeSection === link.id ? 'text-[#5A5A40] font-bold' : 'text-[#1A1A1A]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 bg-[#1A1A1A] text-[#F9F7F2] text-center text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#5A5A40] transition-colors active:scale-[0.98]"
              >
                Start Your Project
              </button>

              <div className="flex items-center justify-between pt-2 text-[10px] uppercase tracking-widest text-[#1A1A1A]/60">
                <a
                  href="tel:+919847012345"
                  className="flex items-center gap-1.5 text-[#1A1A1A] font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5A5A40]" />
                  <span>+91 98470 12345</span>
                </a>
                <span>Kerala, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
};
