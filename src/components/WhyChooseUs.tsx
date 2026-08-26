import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Sparkles, Workflow, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const luxuryEase = [0.16, 1, 0.3, 1];

  const points = [
    {
      id: 'personalized',
      title: 'Personalized Design',
      tagline: 'Crafted Around You',
      description: 'Every project is designed around the client. No pre-packaged templates; your routine, aesthetic taste, and family rituals shape the spatial blueprint.',
      icon: UserCheck,
      badge: 'Bespoke Concept'
    },
    {
      id: 'transparent',
      title: 'Transparent Process',
      tagline: 'Zero Surprises',
      description: 'Clear communication from concept to completion. Itemized BOQs, locked budgets, weekly video progress logs, and strict milestone tracking.',
      icon: Workflow,
      badge: 'Fixed Pricing'
    },
    {
      id: 'materials',
      title: 'Quality Materials',
      tagline: 'Built To Endure',
      description: 'Thoughtfully selected materials and finishes. Premium seasoned hardwoods, marine-grade ply, imported quartz, and Blum/Hafele hardware.',
      icon: Sparkles,
      badge: 'Certified Genuine'
    },
    {
      id: 'execution',
      title: 'End-to-End Execution',
      tagline: 'Single Point of Contact',
      description: 'One team from initial design to final handover. Civil works, false ceilings, electrical, carpentry, factory finish, and white-glove handover.',
      icon: ShieldCheck,
      badge: 'Turnkey Guarantee'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F9F7F2] text-[#1A1A1A] relative border-b border-[#1A1A1A]/10 overflow-hidden">
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
            <span>The Nestora Standard</span>
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
          </p>

          <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight mb-4">
            Why Choose Us
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-sans font-light leading-relaxed">
            We bridge the gap between world-class architectural vision and rigorous ground-level execution in Kerala.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, index) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: index * 0.09, ease: luxuryEase }}
                className="group relative bg-[#F0EBE3] hover:bg-[#E5DED4] p-8 border border-[#1A1A1A]/10 transition-all duration-400 flex flex-col justify-between hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-[#1A1A1A] text-[#F9F7F2] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 bg-[#F9F7F2] text-[#1A1A1A] border border-[#1A1A1A]/10">
                      {pt.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-normal text-[#1A1A1A] mb-1 group-hover:text-[#5A5A40] transition-colors">
                    {pt.title}
                  </h3>
                  
                  <p className="text-[10px] uppercase tracking-wider text-[#5A5A40] font-bold mb-3">
                    {pt.tagline}
                  </p>

                  <p className="text-xs text-[#555555] leading-relaxed font-sans font-light">
                    {pt.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1A1A1A]/10 flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#1A1A1A]/70 font-semibold">
                  <span className="w-1.5 h-1.5 bg-[#5A5A40]" />
                  <span>100% Quality Assured</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
