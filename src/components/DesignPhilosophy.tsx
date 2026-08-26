import React from 'react';
import { motion } from 'motion/react';

export const DesignPhilosophy: React.FC = () => {
  const luxuryEase = [0.16, 1, 0.3, 1];

  const principles = [
    {
      number: '01',
      title: 'Function',
      quote: 'Every space should work beautifully.',
      description: 'Beyond visual luxury, authentic design starts with spatial logic. We optimize daily flow, natural light orientation, cross-ventilation for Kerala’s climate, and concealed storage so everyday living remains effortless.',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '02',
      title: 'Character',
      quote: 'Your home should feel like yours.',
      description: 'We do not impose repetitive trends or copy-paste templates. We unearth your aesthetic inclinations, family traditions, and lifestyle rituals to shape an architectural identity that is uniquely and genuinely your own.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '03',
      title: 'Detail',
      quote: 'The smallest details create the biggest difference.',
      description: 'From shadowline reveals and concealed door hinges to brass inlay thresholds and bespoke Nilambur teak joinery, our obsession with millimeter precision elevates a room from good to timeless.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#1A1A1A] text-[#F9F7F2] relative overflow-hidden border-b border-[#1A1A1A]">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: luxuryEase }}
          className="max-w-3xl mb-16 sm:mb-24"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-3 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
            <span>Design Philosophy</span>
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-[1.05]">
            Designed With <br />
            <span className="italic font-display-italic text-[#E5DED4]">Pure Intention.</span>
          </h2>

          <p className="text-sm sm:text-base text-stone-300 font-sans font-light mt-4 max-w-xl leading-relaxed">
            Three guiding architectural pillars that inform every wall, surface, light fixture, and finish we specify.
          </p>
        </motion.div>

        {/* 3 Principles Minimalist Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, delay: index * 0.1, ease: luxuryEase }}
              className="group relative bg-[#222222] p-8 border border-white/10 hover:border-white/25 transition-all duration-400 flex flex-col justify-between hover:shadow-2xl"
            >
              <div>
                {/* Principle Number */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <span className="text-3xl sm:text-4xl font-serif italic text-[#F9F7F2] font-light tracking-tight group-hover:text-white transition-colors">
                    {item.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#5A5A40] font-mono font-bold">
                    Principle
                  </span>
                </div>

                {/* Principle Image */}
                <div className="h-44 overflow-hidden mb-6 bg-stone-900 border border-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Title & Core Quote */}
                <h3 className="text-2xl font-serif text-white font-light mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-serif italic text-[#E5DED4] mb-4">
                  "{item.quote}"
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#5A5A40] font-bold">
                <span className="w-1.5 h-1.5 bg-[#5A5A40]" />
                <span>Nestora Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
