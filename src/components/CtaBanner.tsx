import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onBookConsultation: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onBookConsultation }) => {
  const luxuryEase = [0.16, 1, 0.3, 1];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[#1A1A1A] text-[#F9F7F2] border-b border-[#1A1A1A]">
      {/* Background Curated Architectural Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: [0.2, 0.8, 0.2, 1] }}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Kerala Villa Interior"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/85 to-[#1A1A1A]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: luxuryEase }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center flex flex-col items-center"
      >
        {/* Subtle Badge */}
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-4 flex items-center gap-2">
          <span className="w-4 h-[1px] bg-[#5A5A40]" />
          <span>Bespoke Interior Studio</span>
          <span className="w-4 h-[1px] bg-[#5A5A40]" />
        </p>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#F9F7F2] tracking-tight leading-[1.05] max-w-3xl mb-6">
          Let’s Create A Space <br />
          <span className="italic font-display-italic text-[#E5DED4]">That Feels Like You.</span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-stone-300 font-sans font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Tell us about your project and let’s explore what’s possible.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          <button
            id="cta-banner-consultation-btn"
            onClick={onBookConsultation}
            className="luxury-btn-primary w-full sm:w-auto px-8 py-4 bg-[#F9F7F2] text-[#1A1A1A] hover:bg-[#5A5A40] hover:text-[#F9F7F2] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Book A Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="https://wa.me/919847012345?text=Hello%20Nestora%20Interiors,%20I%20would%20like%20to%20discuss%20an%20interior%20project%20in%20Kerala."
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-btn-outline w-full sm:w-auto px-8 py-4 bg-transparent text-[#F9F7F2] hover:bg-white/10 border border-white/30 text-[10px] uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Studio Location & NRI Support Note */}
        <p className="text-[11px] text-[#5A5A40] font-mono tracking-wider mt-8">
          Offices in Kochi & Thrissur • Site consultations across all 14 districts of Kerala & NRI virtual briefings.
        </p>
      </motion.div>
    </section>
  );
};
