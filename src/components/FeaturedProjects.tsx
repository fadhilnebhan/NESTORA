import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Eye } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onOpenConsultation
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const luxuryEase = [0.16, 1, 0.3, 1];

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'villa', label: 'Villa Interiors' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#F9F7F2] text-[#1A1A1A] border-b border-[#1A1A1A]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: luxuryEase }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 lg:mb-16 gap-6"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-3 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#5A5A40]" />
              <span>Architectural Portfolio</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight">
              Selected Projects
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-sans font-light mt-2 max-w-xl">
              A glimpse into the spaces we've created across Kerala.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-nowrap sm:flex-wrap items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer active:scale-95 whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#1A1A1A] text-[#F9F7F2]'
                    : 'bg-transparent text-[#1A1A1A]/70 hover:text-[#1A1A1A] border border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Asymmetrical Clean Minimalist Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFeatured = index === 0;
              const isMedium = index === 1 || index === 2;
              const colSpan = isFeatured 
                ? 'md:col-span-12 lg:col-span-8' 
                : isMedium 
                ? index === 1 ? 'md:col-span-12 lg:col-span-4' : 'md:col-span-6' 
                : 'md:col-span-6 lg:col-span-4';

              const heightClass = isFeatured 
                ? 'h-[360px] sm:h-[440px] lg:h-[500px]' 
                : isMedium 
                ? 'h-[320px] sm:h-[380px] lg:h-[420px]' 
                : 'h-[300px] sm:h-[340px] lg:h-[380px]';

              return (
                <motion.div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.85, delay: (index % 4) * 0.08, ease: luxuryEase }}
                  className={`${colSpan} group relative overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]/15 cursor-pointer transition-all duration-500 hover:shadow-xl`}
                >
                  {/* Background Project Image */}
                  <div className={`w-full ${heightClass} overflow-hidden relative`}>
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Subtle Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-[#141311]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* Floating Top Badges */}
                    <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between z-10">
                      <span className="px-2.5 sm:px-3 py-1 text-[8.5px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold bg-[#F9F7F2] text-[#1A1A1A] transition-transform duration-300 group-hover:scale-105">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-white/90 font-mono tracking-wider bg-black/40 backdrop-blur-md px-2 sm:px-2.5 py-1">
                        {project.area}
                      </span>
                    </div>

                    {/* Bottom Information Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8 z-10 flex flex-col justify-end">
                      <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#E5DED4] mb-1 font-light">
                        <MapPin className="w-3.5 h-3.5 text-[#5A5A40]" />
                        <span className="tracking-wide font-sans">{project.location}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white font-light mb-1.5 sm:mb-2 group-hover:text-[#F9F7F2] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-300 font-sans line-clamp-2 mb-3 sm:mb-4 font-light opacity-90">
                        {project.subtitle}
                      </p>

                      {/* View Case Study CTA link */}
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#F9F7F2] font-semibold group-hover:translate-x-1.5 transition-transform duration-300">
                        <Eye className="w-3.5 h-3.5 text-[#5A5A40]" />
                        <span>View Case Study</span>
                        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Footer Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: luxuryEase }}
          className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className="luxury-btn-primary inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-[#F9F7F2] hover:bg-[#5A5A40] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer group"
          >
            <span>View All Kerala Projects ({PROJECTS_DATA.length})</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="luxury-btn-outline inline-flex items-center gap-2 px-7 py-4 bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F9F7F2] border border-[#1A1A1A] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer"
          >
            <span>Request Portfolio Book PDF</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
