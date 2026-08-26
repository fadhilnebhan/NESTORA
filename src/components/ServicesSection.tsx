import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, X } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const luxuryEase = [0.16, 1, 0.3, 1];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F9F7F2] text-[#1A1A1A] relative border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: luxuryEase }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
            <span>Comprehensive Expertise</span>
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight mb-3 sm:mb-4">
            What We Do
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-sans font-light leading-relaxed">
            From single-room transformations to complete turnkey villa architecture, our studio provides bespoke design, precision 3D modeling, and flawless on-site execution across Kerala.
          </p>
        </motion.div>

        {/* 8 Minimalist Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => setSelectedService(service)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.08, ease: luxuryEase }}
              className="group bg-[#F0EBE3] hover:bg-[#E5DED4] p-5 sm:p-6 border border-[#1A1A1A]/10 transition-all duration-400 cursor-pointer flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                {/* Service Card Image Preview */}
                <div className="relative h-40 sm:h-44 overflow-hidden mb-4 sm:mb-5 bg-[#E5DED4] border border-[#1A1A1A]/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono uppercase tracking-widest text-[#F9F7F2] bg-black/60 px-2 py-0.5">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-base sm:text-lg font-serif font-normal text-[#1A1A1A] mb-1.5 sm:mb-2 group-hover:text-[#5A5A40] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-xs text-[#555555] font-sans leading-relaxed mb-4">
                  {service.subtitle}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="pt-3.5 sm:pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between text-[10px] font-semibold text-[#1A1A1A] group-hover:text-[#5A5A40] uppercase tracking-[0.2em] transition-colors">
                <span>View Scope</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.15, ease: luxuryEase }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 bg-[#1A1A1A] text-[#F9F7F2] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#1A1A1A] shadow-xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-light text-[#F9F7F2]">
              Need a Custom Turnkey Solution for Your Kerala Home?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl font-light">
              We manage structural civil works, bespoke millwork, MEP, luxury lighting, and white-glove handover under a single guaranteed contract.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="luxury-btn-primary flex-shrink-0 w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#F9F7F2] text-[#1A1A1A] hover:bg-[#5A5A40] hover:text-[#F9F7F2] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer text-center"
          >
            Schedule Service Briefing
          </button>
        </motion.div>

      </div>

      {/* Service Detail Drawer / Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: luxuryEase }}
              className="relative bg-[#F9F7F2] text-[#1A1A1A] w-full max-w-2xl border border-[#1A1A1A]/20 shadow-2xl p-6 sm:p-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-4">
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-[#5A5A40]">
                    Service Scope
                  </span>
                  <h3 className="text-2xl font-serif font-light text-[#1A1A1A]">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-[#1A1A1A]/5 transition-colors cursor-pointer active:scale-95"
                >
                  <X className="w-5 h-5 text-[#1A1A1A]" />
                </button>
              </div>

              {/* Image Preview */}
              <div className="h-52 overflow-hidden border border-[#1A1A1A]/10">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-sm text-[#555555] leading-relaxed font-light">
                {selectedService.description}
              </p>

              {/* What is included / deliverables */}
              <div className="space-y-3 p-5 bg-[#F0EBE3] border border-[#1A1A1A]/10">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]">
                  What's Included in This Service
                </h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((item, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-[#1A1A1A]/80 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#5A5A40] mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal for & Timeline */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-white border border-[#1A1A1A]/10">
                  <span className="block text-[9px] uppercase tracking-wider text-[#5A5A40] font-bold">Ideal For</span>
                  <span className="font-medium text-[#1A1A1A] mt-0.5 block">{selectedService.idealFor}</span>
                </div>
                <div className="p-3 bg-white border border-[#1A1A1A]/10">
                  <span className="block text-[9px] uppercase tracking-wider text-[#5A5A40] font-bold">Typical Timeline</span>
                  <span className="font-medium text-[#1A1A1A] mt-0.5 block">{selectedService.timeline}</span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1A1A1A]/70 hover:text-[#1A1A1A] cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation();
                  }}
                  className="luxury-btn-primary px-6 py-3 bg-[#1A1A1A] text-[#F9F7F2] hover:bg-[#5A5A40] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer"
                >
                  Enquire for {selectedService.title}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
