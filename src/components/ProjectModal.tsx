import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, CheckCircle2, Quote } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onBookConsultation
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const luxuryEase = [0.16, 1, 0.3, 1];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          id="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 md:p-8"
          onClick={onClose}
        >
          <motion.div
            id="project-modal-content"
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.35, ease: luxuryEase }}
            className="relative bg-[#F9F7F2] text-[#1A1A1A] w-full max-w-5xl border border-[#1A1A1A]/20 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/10 bg-[#F0EBE3]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-[9px] uppercase font-bold tracking-[0.2em] bg-[#1A1A1A] text-[#F9F7F2]">
                  {project.categoryLabel}
                </span>
                <span className="text-xs text-[#555555] font-light flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" />
                  {project.location}
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close project modal"
                className="p-1.5 text-[#1A1A1A] hover:bg-[#E5DED4] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-10">
              
              {/* Header Title Section */}
              <div>
                <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#1A1A1A] mb-2">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-[#555555] font-serif italic max-w-3xl font-light">
                  "{project.subtitle}"
                </p>
              </div>

              {/* Large Main Gallery Visuals */}
              <div className="space-y-3">
                <div className="relative h-[300px] sm:h-[450px] bg-stone-900 border border-[#1A1A1A]/10 overflow-hidden">
                  <img
                    src={project.galleryImages[activeImageIndex] || project.coverImage}
                    alt={`${project.title} gallery preview`}
                    className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-[#1A1A1A]/90 text-white px-3 py-1 text-[10px] font-mono">
                    {activeImageIndex + 1} / {project.galleryImages.length}
                  </div>
                </div>

                {/* Thumbnail Selectors */}
                {project.galleryImages.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {project.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative flex-shrink-0 w-20 h-14 sm:w-24 sm:h-16 overflow-hidden border transition-all cursor-pointer ${
                          activeImageIndex === idx
                            ? 'border-[#1A1A1A] ring-1 ring-[#1A1A1A]'
                            : 'border-[#1A1A1A]/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="thumb" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Specifications Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#F0EBE3] border border-[#1A1A1A]/10">
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-[#5A5A40] font-bold">Design Style</span>
                  <span className="text-xs font-semibold text-[#1A1A1A]">{project.style}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-[#5A5A40] font-bold">Built-Up Area</span>
                  <span className="text-xs font-semibold text-[#1A1A1A]">{project.area}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-[#5A5A40] font-bold">Execution Timeline</span>
                  <span className="text-xs font-semibold text-[#1A1A1A]">{project.duration}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-[#5A5A40] font-bold">Year Completed</span>
                  <span className="text-xs font-semibold text-[#1A1A1A]">{project.year}</span>
                </div>
              </div>

              {/* Case Study Depth: Overview, Challenge, Approach, Result */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8 space-y-6">
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#5A5A40] mb-2">
                      Project Overview
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="p-4 bg-white border border-[#1A1A1A]/10">
                      <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#5A5A40]" />
                        The Architectural Challenge
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed font-light">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-[#1A1A1A]/10">
                      <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#1A1A1A]" />
                        Our Design & Engineering Approach
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed font-light">
                        {project.approach}
                      </p>
                    </div>

                    <div className="p-4 bg-[#F0EBE3] border border-[#1A1A1A]/10">
                      <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#5A5A40] mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5A5A40]" />
                        The Final Living Outcome
                      </h4>
                      <p className="text-xs text-[#1A1A1A] leading-relaxed font-normal">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Materials & Testimonial */}
                <div className="md:col-span-4 space-y-6">
                  {/* Materials Used */}
                  <div className="p-5 bg-white border border-[#1A1A1A]/10">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-3">
                      Key Material Palette
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.materials.map((mat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[10px] bg-[#F0EBE3] text-[#1A1A1A] border border-[#1A1A1A]/10 font-mono"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Client Quote if available */}
                  {project.testimonial && (
                    <div className="p-5 bg-[#F0EBE3] border border-[#1A1A1A]/10 relative">
                      <Quote className="w-6 h-6 text-[#5A5A40]/20 absolute top-4 right-4" />
                      <p className="text-xs font-serif italic text-[#1A1A1A] mb-3 leading-relaxed font-light">
                        "{project.testimonial.quote}"
                      </p>
                      <p className="text-xs font-semibold text-[#1A1A1A]">
                        {project.testimonial.author}
                      </p>
                      <p className="text-[9px] uppercase tracking-wider text-[#555555]">
                        {project.testimonial.role} • {project.location}
                      </p>
                    </div>
                  )}

                  {/* Action Box */}
                  <div className="p-5 bg-[#1A1A1A] text-[#F9F7F2] text-center space-y-3">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#5A5A40] font-bold">
                      Love this aesthetic?
                    </p>
                    <p className="text-xs font-serif text-stone-300 font-light">
                      Let’s design a tailored interior for your property in Kerala.
                    </p>
                    <button
                      onClick={() => {
                        onClose();
                        onBookConsultation();
                      }}
                      className="luxury-btn-primary w-full py-3 bg-[#F9F7F2] text-[#1A1A1A] hover:bg-[#5A5A40] hover:text-[#F9F7F2] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer"
                    >
                      Enquire For Your Home
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[#1A1A1A]/10 bg-[#F0EBE3] flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono text-[#555555]">
                NESTORA INTERIORS • Architectural Portfolio
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#1A1A1A] hover:bg-[#E5DED4] transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
