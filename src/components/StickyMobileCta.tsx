import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

interface StickyMobileCtaProps {
  onOpenConsultation: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenConsultation }) => {
  return (
    <motion.div
      id="mobile-sticky-action-bar"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F9F7F2]/95 backdrop-blur-md border-t border-[#1A1A1A]/10 p-3 px-4 flex items-center gap-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
    >
      {/* Direct Call Button */}
      <a
        href="tel:+919847012345"
        className="flex-1 py-2.5 bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] text-[11px] font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 active:bg-[#F0EBE3] transition-colors"
        aria-label="Call studio"
      >
        <Phone className="w-3.5 h-3.5 text-[#5A5A40]" />
        <span>Call</span>
      </a>

      {/* Direct WhatsApp Button */}
      <a
        href="https://wa.me/919847012345?text=Hello%20Nestora%20Interiors,%20I%20would%20like%20to%20enquire%20about%20an%20interior%20project%20in%20Kerala."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 bg-[#5A5A40] text-[#F9F7F2] text-[11px] font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 active:bg-[#1A1A1A] transition-colors"
        aria-label="WhatsApp studio"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Book Consultation Button */}
      <button
        onClick={onOpenConsultation}
        className="flex-1 py-2.5 bg-[#1A1A1A] text-[#F9F7F2] text-[11px] font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 active:bg-[#5A5A40] transition-colors cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5 text-[#E5DED4]" />
        <span>Enquire</span>
      </button>
    </motion.div>
  );
};
