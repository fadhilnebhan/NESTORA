import React from 'react';
import { motion } from 'motion/react';

interface IntroductionProps {
  onLearnMore?: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onLearnMore }) => {
  const luxuryEase = [0.16, 1, 0.3, 1];

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-[#F9F7F2] text-[#1A1A1A] relative border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Minimalist Framed Interior Image with Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.95, ease: luxuryEase }}
            className="lg:col-span-6 relative"
          >
            <div className="relative group overflow-hidden border border-[#1A1A1A]/10 bg-[#E5DED4]">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="Nestora Interiors Living Space Craftsmanship"
                className="w-full h-[320px] xs:h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Subtle decorative offset border */}
            <div className="hidden sm:block absolute -bottom-3 -left-3 w-full h-full border border-[#1A1A1A]/10 -z-10" />
          </motion.div>

          {/* Right Column: Editorial Narrative & Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.95, delay: 0.15, ease: luxuryEase }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-3 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#5A5A40]" />
                <span>Studio Manifesto</span>
              </p>

              <h2
                id="intro-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1A1A] font-light leading-[1.1] mb-5 sm:mb-6"
              >
                Interiors With <br />
                <span className="italic font-display-italic">Purpose & Emotion.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#1A1A1A] font-serif italic leading-relaxed mb-4">
                We believe great interiors are more than beautiful spaces. They should reflect your personality, improve the way you live and feel timeless for years to come.
              </p>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-sans font-light">
                Rooted in Kerala's rich architectural heritage while embracing contemporary global aesthetics, Nestora specializes in crafting residences, coastal villas, and high-end commercial spaces that breathe freely, celebrate natural light, and age with grace.
              </p>
            </div>

            {/* Statistics Showcase */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-[#1A1A1A]/10">
              <div className="flex flex-col group cursor-default">
                <span className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#1A1A1A] transition-transform duration-300 group-hover:-translate-y-0.5">
                  10+
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-60 text-[#1A1A1A] mt-1">
                  Years Exp.
                </span>
              </div>

              <div className="flex flex-col border-l border-[#1A1A1A]/10 pl-3 sm:pl-4 group cursor-default">
                <span className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#1A1A1A] transition-transform duration-300 group-hover:-translate-y-0.5">
                  150+
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-60 text-[#1A1A1A] mt-1">
                  Projects
                </span>
              </div>

              <div className="flex flex-col border-l border-[#1A1A1A]/10 pl-3 sm:pl-4 group cursor-default">
                <span className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#5A5A40] transition-transform duration-300 group-hover:-translate-y-0.5">
                  Kerala
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-60 text-[#1A1A1A] mt-1">
                  Studio Base
                </span>
              </div>
            </div>

            {/* Small demo note */}
            <p className="text-[10px] text-[#1A1A1A]/40 tracking-wide pt-2 uppercase font-mono">
              Demo metrics • Kochi • Thrissur • Calicut • Trivandrum
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
