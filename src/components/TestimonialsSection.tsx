import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  const luxuryEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-24 sm:py-32 bg-[#F9F7F2] text-[#1A1A1A] relative border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: luxuryEase }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
            <span>Sample Client Stories (Demo)</span>
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
          </p>

          <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight mb-4">
            Words From Our Homeowners
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-sans font-light">
            Real experiences from families across Kochi, Thrissur, Calicut, and Dubai NRIs.
          </p>
        </motion.div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: luxuryEase }}
              className="relative bg-[#F0EBE3] hover:bg-[#E5DED4] p-8 border border-[#1A1A1A]/10 transition-all duration-400 flex flex-col justify-between group hover:shadow-lg"
            >
              <div className="relative">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#5A5A40] mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#5A5A40] text-[#5A5A40]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#5A5A40]/15 absolute top-0 right-0" />

                <p className="text-sm sm:text-base font-serif italic text-[#1A1A1A] leading-relaxed mb-6 font-light">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1A1A]">
                    {item.author}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#555555] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#5A5A40]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <span className="text-[9px] uppercase font-bold text-[#5A5A40] bg-[#F9F7F2] px-2 py-1 border border-[#1A1A1A]/10 tracking-wider">
                  {item.projectType.split('(')[0]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clear Demo Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[11px] text-[#555555] uppercase tracking-wider">
            * Note for interior designers: This section easily connects to your Google Reviews or client feedback forms.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
