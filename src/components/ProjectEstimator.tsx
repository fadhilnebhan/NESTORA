import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ProjectEstimatorProps {
  onApplyEstimateToForm: (data: { projectType: string; estimatedBudget: string; area: string }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimateToForm }) => {
  const [propertyType, setPropertyType] = useState<'apartment' | 'villa' | 'renovation' | 'commercial'>('villa');
  const [bhk, setBhk] = useState<'2bhk' | '3bhk' | '4bhk' | '5bhk'>('4bhk');
  const [areaSqft, setAreaSqft] = useState<number>(3500);
  const [tier, setTier] = useState<'essential' | 'premium' | 'ultra-luxury'>('premium');
  const luxuryEase = [0.16, 1, 0.3, 1];

  const tierMultipliers = {
    essential: { min: 1400, max: 1800, label: 'Contemporary Essential', spec: 'Standard modular, pre-laminated ply, branded hardware' },
    premium: { min: 2200, max: 2800, label: 'Architectural Premium', spec: 'Marine ply, Nilambur teak trims, Blum fittings, designer lighting' },
    'ultra-luxury': { min: 3400, max: 4600, label: 'Bespoke Ultra-Luxury', spec: 'Full Italian marble, bespoke solid hardwoods, motorized automation' }
  };

  const currentTier = tierMultipliers[tier];
  const minCostLakhs = Math.round((areaSqft * currentTier.min) / 100000);
  const maxCostLakhs = Math.round((areaSqft * currentTier.max) / 100000);

  const handleApply = () => {
    const propertyLabel = `${bhk.toUpperCase()} ${propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}`;
    const budgetRange = `₹${minCostLakhs}L – ₹${maxCostLakhs}L (${currentTier.label})`;
    onApplyEstimateToForm({
      projectType: propertyLabel,
      estimatedBudget: budgetRange,
      area: `${areaSqft} sq.ft`
    });
  };

  return (
    <section className="py-20 bg-[#F9F7F2] text-[#1A1A1A] border-b border-[#1A1A1A]/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: luxuryEase }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
            <span>Instant Spatial Budget Estimator</span>
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
          </p>

          <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#1A1A1A] tracking-tight mb-2">
            Estimate Your Interior Investment
          </h2>

          <p className="text-xs sm:text-sm text-[#555555] font-sans font-light">
            Get an instant preliminary estimate tailored for Kerala residential & commercial benchmarks.
          </p>
        </motion.div>

        {/* Interactive Estimator Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="bg-[#F0EBE3] p-5 sm:p-8 md:p-10 border border-[#1A1A1A]/10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center shadow-lg"
        >
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Property Type */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-2">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                {[
                  { id: 'villa', label: 'Luxury Villa' },
                  { id: 'apartment', label: 'Apartment' },
                  { id: 'renovation', label: 'Renovation' },
                  { id: 'commercial', label: 'Commercial' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPropertyType(item.id as any)}
                    className={`py-2 px-2 text-[9.5px] sm:text-[10px] font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95 text-center ${
                      propertyType === item.id
                        ? 'bg-[#1A1A1A] text-[#F9F7F2]'
                        : 'bg-white text-[#1A1A1A]/70 hover:text-[#1A1A1A] border border-[#1A1A1A]/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* BHK / Size */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-2">
                2. Configuration & Built-Up Area ({areaSqft} sq.ft)
              </label>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-3">
                {[
                  { id: '2bhk', label: '2 BHK', defaultSqft: 1400 },
                  { id: '3bhk', label: '3 BHK', defaultSqft: 2200 },
                  { id: '4bhk', label: '4 BHK', defaultSqft: 3500 },
                  { id: '5bhk', label: '5+ BHK', defaultSqft: 4800 },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setBhk(item.id as any);
                      setAreaSqft(item.defaultSqft);
                    }}
                    className={`py-2 text-[9.5px] sm:text-[10px] font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95 text-center ${
                      bhk === item.id
                        ? 'bg-[#5A5A40] text-[#F9F7F2]'
                        : 'bg-white text-[#1A1A1A]/70 hover:text-[#1A1A1A] border border-[#1A1A1A]/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Area Slider */}
              <input
                type="range"
                min={800}
                max={7500}
                step={100}
                value={areaSqft}
                onChange={(e) => setAreaSqft(Number(e.target.value))}
                className="w-full h-2 bg-[#E5DED4] appearance-none cursor-pointer accent-[#5A5A40]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#555555] mt-1">
                <span>800 sq.ft</span>
                <span className="font-semibold text-[#1A1A1A]">{areaSqft} sq.ft</span>
                <span>7,500 sq.ft</span>
              </div>
            </div>

            {/* Design & Material Tier */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-2">
                3. Design & Material Finishes Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'essential', label: 'Essential', sub: 'Standard Modular' },
                  { id: 'premium', label: 'Premium', sub: 'Teak & Quartz' },
                  { id: 'ultra-luxury', label: 'Ultra Luxury', sub: 'Italian Marble & Custom' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTier(item.id as any)}
                    className={`p-2.5 sm:p-2 text-left transition-all duration-200 cursor-pointer border active:scale-95 ${
                      tier === item.id
                        ? 'bg-[#1A1A1A] text-[#F9F7F2] border-[#1A1A1A]'
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
                    }`}
                  >
                    <span className="block text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                    <span className={`block text-[9px] ${tier === item.id ? 'text-stone-300' : 'text-[#555555]'}`}>{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Output Display Card */}
          <div className="lg:col-span-5 bg-[#1A1A1A] text-[#F9F7F2] p-5 sm:p-7 border border-[#1A1A1A] flex flex-col justify-between space-y-5 sm:space-y-6">
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#5A5A40] font-bold block mb-1">
                Estimated Turnkey Investment
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-serif font-light text-white">
                  ₹{minCostLakhs} – ₹{maxCostLakhs} Lakhs
                </span>
              </div>
              <p className="text-xs text-stone-300 mt-1 font-light">
                Estimated for {areaSqft} sq.ft ({currentTier.label})
              </p>
            </div>

            <div className="p-3 bg-white/5 border border-white/10 text-xs space-y-1.5">
              <span className="text-[9px] uppercase tracking-wider text-[#5A5A40] font-bold block">
                Includes:
              </span>
              <p className="text-stone-300 text-[11px] leading-relaxed font-light">
                {currentTier.spec}, full 3D renders, site MEP & modular installation, on-site supervisor.
              </p>
            </div>

            <button
              onClick={handleApply}
              className="luxury-btn-primary w-full py-3.5 bg-[#F9F7F2] text-[#1A1A1A] hover:bg-[#5A5A40] hover:text-[#F9F7F2] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer flex items-center justify-center gap-2 group min-h-[44px]"
            >
              <span>Use This In Consultation Form</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
