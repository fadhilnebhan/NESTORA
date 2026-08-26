import React, { useState, useEffect } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectModal } from './components/ProjectModal';
import { ServicesSection } from './components/ServicesSection';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { ProcessSection } from './components/ProcessSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectEstimator } from './components/ProjectEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramGallery } from './components/InstagramGallery';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [estimatorData, setEstimatorData] = useState<{
    projectType?: string;
    estimatedBudget?: string;
  }>({});

  // Smooth scroll handler with sticky navbar offset calculation
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navbarOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  // Intersection observer to track active section for navbar
  useEffect(() => {
    const sections = ['hero', 'projects', 'services', 'about', 'philosophy', 'process', 'before-after', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When user clicks "Use This In Consultation Form" in ProjectEstimator
  const handleApplyEstimate = (data: { projectType: string; estimatedBudget: string; area: string }) => {
    setEstimatorData({
      projectType: data.projectType,
      estimatedBudget: data.estimatedBudget,
    });
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1F1E] font-sans selection:bg-[#C2A379]/30 selection:text-[#1F1F1E] relative">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreProjects={() => handleNavigate('projects')}
          onStartProject={() => handleNavigate('contact')}
        />

        {/* 2. Introduction Section */}
        <Introduction onLearnMore={() => handleNavigate('philosophy')} />

        {/* 3. Featured Projects Portfolio */}
        <FeaturedProjects
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* 4. Services Section */}
        <ServicesSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 5. Design Philosophy */}
        <DesignPhilosophy />

        {/* 6. Our 4-Step Process */}
        <ProcessSection onStartProject={() => handleNavigate('contact')} />

        {/* 7. Interactive Before / After Slider */}
        <BeforeAfterSlider />

        {/* 8. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. Interactive Spatial Budget Estimator */}
        <ProjectEstimator onApplyEstimateToForm={handleApplyEstimate} />

        {/* 10. Testimonials */}
        <TestimonialsSection />

        {/* 11. Instagram / Visual Gallery */}
        <InstagramGallery />

        {/* 12. Strong CTA Banner */}
        <CtaBanner onBookConsultation={() => setIsConsultationOpen(true)} />

        {/* 13. Contact & Direct Consultation Section */}
        <ContactSection initialData={estimatorData} />
      </main>

      {/* 14. Luxury Studio Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Mobile Sticky Quick CTA Bar */}
      <StickyMobileCta onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookConsultation={() => {
          setSelectedProject(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Private Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
