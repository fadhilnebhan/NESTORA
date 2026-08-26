import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquareText, Palette, Hammer, KeyRound } from 'lucide-react';

interface ProcessSectionProps {
  onStartProject: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const luxuryEase = [0.16, 1, 0.3, 1];

  const steps = [
    {
      step: '01',
      title: 'Consultation',
      subtitle: 'Discovery & Spatial Assessment',
      description: 'We meet at your site or studio to understand your lifestyle, architectural aspirations, space requirements, and investment parameters.',
      icon: MessageSquareText,
      keyMilestone: 'Detailed Spatial Brief & Estimate'
    },
    {
      step: '02',
      title: 'Concept',
      subtitle: 'Mood, Palette & Layouts',
      description: 'We develop 2D space plans, customized material boards, lighting concepts, and mood directions tailored to your aesthetic identity.',
      icon: Palette,
      keyMilestone: 'Curated Material & Mood Palette'
    },
    {
      step: '03',
      title: 'Design & Build',
      subtitle: '3D CGI & Precision Execution',
      description: 'Full photorealistic 3D visualization, detailed MEP and carpentry drawings, followed by factory modular fabrication and on-site craftsmanship.',
      icon: Hammer,
      keyMilestone: 'Turnkey On-Site Quality Control'
    },
    {
      step: '04',
      title: 'Handover',
      subtitle: 'White-Glove Delivery',
      description: 'Deep site cleaning, furniture placement, ambient light calibration, and handing over the keys to a finished home ready for you to enjoy.',
      icon: KeyRound,
      keyMilestone: 'Zero-Defect Sign-off & Warranty'
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#F9F7F2] text-[#1A1A1A] relative border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: luxuryEase }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
            <span>Structured Transparency</span>
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
          </p>

          <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight mb-4">
            From First Idea To Final Detail.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-sans font-light leading-relaxed">
            A seamless, stress-free 4-step execution framework engineered to eliminate guesswork, budget overruns, and timeline delays.
          </p>
        </motion.div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: luxuryEase }}
                className="relative bg-[#F0EBE3] hover:bg-[#E5DED4] p-7 border border-[#1A1A1A]/10 transition-all duration-400 flex flex-col justify-between group hover:shadow-lg"
              >
                <div>
                  {/* Step Header with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-[#1A1A1A] text-[#F9F7F2] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-serif italic font-light text-[#1A1A1A]/30 group-hover:text-[#5A5A40] transition-colors duration-300">
                      {item.step}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-serif font-normal text-[#1A1A1A] mb-1 group-hover:text-[#5A5A40] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-[#5A5A40] font-bold mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#555555] leading-relaxed mb-6 font-sans font-light">
                    {item.description}
                  </p>
                </div>

                {/* Milestone Badge */}
                <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center gap-2 text-[10px] text-[#1A1A1A]/70 uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 bg-[#5A5A40]" />
                  <span>{item.keyMilestone}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
          className="mt-16 text-center"
        >
          <button
            id="process-cta-btn"
            onClick={onStartProject}
            className="luxury-btn-primary inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] hover:bg-[#5A5A40] text-[#F9F7F2] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
