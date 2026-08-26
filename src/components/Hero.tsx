import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onStartProject
}) => {
  // Premium easing curve for architectural luxury animations
  const luxuryEase = [0.16, 1, 0.3, 1];

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: 'blur(5px)',
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.05,
        delay: custom,
        ease: luxuryEase,
      }
    }),
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: custom,
        ease: luxuryEase,
      }
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#F9F7F2] text-[#1A1A1A] pt-24 pb-16 overflow-hidden border-b border-[#1A1A1A]/10"
    >
      {/* Background Subtle Paper Texture & Architecture Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A1A1A_0.5px,transparent_0.5px)] opacity-[0.03] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[calc(100vh-160px)] py-8">
          
          {/* Left Column: Clean Minimalist Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
            <div>
              {/* Category Pill / Tag */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease: luxuryEase }}
                className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-6 flex items-center gap-2"
              >
                <span className="w-4 h-[1px] bg-[#5A5A40]" />
                <span>Residential • Commercial • Turnkey</span>
              </motion.p>

              {/* Main Display Headline with 3 Sequential Line Reveals */}
              <h1
                id="hero-headline"
                className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[82px] leading-[0.96] sm:leading-[0.92] font-serif italic font-light mb-6 sm:mb-8 text-[#1A1A1A] tracking-tight overflow-hidden"
              >
                <motion.span
                  custom={0.15}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className="block"
                >
                  We Design Spaces
                </motion.span>
                <motion.span
                  custom={0.4}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className="block"
                >
                  You Love Coming
                </motion.span>
                <motion.span
                  custom={0.65}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className="block"
                >
                  Home To.
                </motion.span>
              </h1>

              {/* Body narrative */}
              <motion.p
                id="hero-subtext"
                custom={0.88}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                className="max-w-[440px] text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed font-light font-sans mb-8 sm:mb-10"
              >
                Thoughtful interiors, refined details and spaces designed around the way you live in Kerala.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                custom={1.05}
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6"
              >
                <button
                  id="hero-btn-explore"
                  onClick={onExploreProjects}
                  className="luxury-btn-primary border border-[#1A1A1A] bg-[#1A1A1A] text-[#F9F7F2] hover:bg-[#5A5A40] hover:border-[#5A5A40] px-7 sm:px-8 py-3.5 sm:py-4 text-[10.5px] sm:text-[11px] uppercase tracking-[0.2em] font-medium cursor-pointer text-center min-h-[46px] flex items-center justify-center"
                >
                  Explore Our Projects
                </button>

                <button
                  id="hero-btn-start"
                  onClick={onStartProject}
                  className="flex items-center justify-center sm:justify-start gap-3 text-[10.5px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] group py-3 sm:py-4 px-2 cursor-pointer hover:text-[#5A5A40] transition-colors min-h-[44px]"
                >
                  <span className="w-8 sm:w-10 h-[1px] bg-[#1A1A1A] group-hover:w-14 group-hover:bg-[#5A5A40] transition-all duration-300" />
                  <span>Start Your Project</span>
                </button>
              </motion.div>
            </div>

            {/* Bottom Minimalist Metrics Row */}
            <motion.div
              custom={1.22}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-14 pt-6 sm:pt-8 border-t border-[#1A1A1A]/10 mt-6"
            >
              <div className="flex flex-col group cursor-default">
                <span className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#1A1A1A] transition-transform duration-300 group-hover:-translate-y-0.5">10+</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-60 text-[#1A1A1A] mt-0.5">Years Exp.</span>
              </div>
              <div className="flex flex-col group cursor-default border-l sm:border-l-0 pl-3 sm:pl-0 border-[#1A1A1A]/10">
                <span className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#1A1A1A] transition-transform duration-300 group-hover:-translate-y-0.5">150+</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-60 text-[#1A1A1A] mt-0.5">Projects</span>
              </div>
              <div className="flex flex-col group cursor-default border-l sm:border-l-0 pl-3 sm:pl-0 border-[#1A1A1A]/10">
                <span className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#1A1A1A] transition-transform duration-300 group-hover:-translate-y-0.5">Kerala</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-60 text-[#1A1A1A] mt-0.5">Studio Base</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Minimalist Architecture Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 1.04, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.35, delay: 0.25, ease: luxuryEase }}
              className="bg-[#F0EBE3] p-5 sm:p-7 md:p-8 rounded-none border border-[#1A1A1A]/10 relative shadow-sm"
            >
              
              {/* Card top bar */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1A1A1A]/05">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]">
                  Kerala Portfolio
                </span>
                <span className="text-[10px] tracking-widest text-[#5A5A40] uppercase font-mono">
                  Bespoke Design
                </span>
              </div>

              {/* Main Image */}
              <div className="aspect-[4/3] sm:aspect-[16/11] bg-[#E5DED4] mb-4 relative overflow-hidden group cursor-pointer" onClick={onExploreProjects}>
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern Villa Living Space Kerala"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#5A5A40]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-white border border-white px-4 py-2 bg-black/30 backdrop-blur-xs transition-transform duration-300 group-hover:scale-105">
                    View Portfolio
                  </span>
                </div>
              </div>

              {/* Caption & Location */}
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-[13px] font-medium uppercase tracking-wider text-[#1A1A1A]">
                    Modern Tropical Villa
                  </h3>
                  <p className="text-[11px] italic opacity-60 text-[#1A1A1A]">
                    Thrissur & Kochi • Turnkey Residence
                  </p>
                </div>
                <button
                  onClick={onExploreProjects}
                  className="text-[10px] uppercase tracking-widest underline hover:text-[#5A5A40] transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* Floating Minimalist Box */}
              <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 bg-[#1A1A1A] p-5 text-[#F9F7F2]">
                <p className="text-[9px] uppercase tracking-[0.3em] mb-1.5 opacity-60 text-[#F9F7F2]">
                  Ready to begin?
                </p>
                <h4 className="text-lg font-serif italic mb-3 text-[#F9F7F2]">
                  Let's Create A Space That Feels Like You.
                </h4>
                <button
                  onClick={onStartProject}
                  className="luxury-btn-outline w-full border border-[#F9F7F2]/30 py-2.5 text-[10px] uppercase tracking-widest hover:bg-[#F9F7F2] hover:text-[#1A1A1A] cursor-pointer text-center"
                >
                  Book A Consultation
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
