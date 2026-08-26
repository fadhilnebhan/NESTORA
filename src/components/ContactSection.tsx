import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { EnquiryData } from '../types';

interface ContactSectionProps {
  initialData?: {
    projectType?: string;
    estimatedBudget?: string;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialData }) => {
  const luxuryEase = [0.16, 1, 0.3, 1];

  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    phone: '',
    email: '',
    projectType: 'Villa Interiors',
    location: 'Kochi, Kerala',
    estimatedBudget: '₹40L - ₹80L',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialData.projectType || prev.projectType,
        estimatedBudget: initialData.estimatedBudget || prev.estimatedBudget,
      }));
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate polished response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F9F7F2] text-[#1A1A1A] relative border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: luxuryEase }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-3 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
            <span>Begin The Journey</span>
          </p>

          <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight mb-4">
            Start Your Project
          </h2>

          <p className="text-base sm:text-lg text-[#555555] font-sans font-light leading-relaxed">
            Tell us about your home, villa, or commercial space. We typically respond within 24 hours with an initial project consultation schedule.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, ease: luxuryEase }}
            className="lg:col-span-7"
          >
            <div className="bg-[#F0EBE3] p-8 sm:p-10 border border-[#1A1A1A]/10 shadow-sm">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 bg-[#5A5A40] text-[#F9F7F2] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-light text-[#1A1A1A]">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] max-w-md mx-auto leading-relaxed font-light">
                    Your enquiry for <strong>{formData.projectType}</strong> in <strong>{formData.location}</strong> has been received. Our senior architect will review your brief and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        projectType: 'Villa Interiors',
                        location: 'Kochi, Kerala',
                        estimatedBudget: '₹40L - ₹80L',
                        message: '',
                      });
                    }}
                    className="luxury-btn-primary mt-4 px-6 py-3 bg-[#1A1A1A] text-[#F9F7F2] hover:bg-[#5A5A40] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Menon"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98470 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                    />
                  </div>

                  {/* Project Type & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      >
                        <option value="Villa Interiors">Villa Interiors</option>
                        <option value="Residential Interiors">Residential Interiors</option>
                        <option value="Apartment Interiors">Apartment Interiors</option>
                        <option value="Modular Kitchen Design">Kitchen Design</option>
                        <option value="Master Bedroom Suite">Bedroom Design</option>
                        <option value="Commercial / Office">Office / Commercial</option>
                        <option value="Complete Turnkey Solution">Turnkey Interior Solution</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-2">
                        Site Location (Kerala / NRI)
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      >
                        <option value="Kochi (Ernakulam)">Kochi (Ernakulam)</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Calicut (Kozhikode)">Calicut (Kozhikode)</option>
                        <option value="Trivandrum">Trivandrum</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Kannur">Kannur</option>
                        <option value="Palakkad">Palakkad</option>
                        <option value="Other Kerala District">Other Kerala District</option>
                        <option value="NRI (Dubai / GCC / UK)">NRI (Gulf / International)</option>
                      </select>
                    </div>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-2">
                      Estimated Interior Budget
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                    >
                      <option value="₹15L – ₹25L">₹15L – ₹25L (Essential / 2BHK)</option>
                      <option value="₹25L – ₹40L">₹25L – ₹40L (Premium Apartment)</option>
                      <option value="₹40L – ₹80L">₹40L – ₹80L (Luxury Villa)</option>
                      <option value="₹80L – ₹1.5 Cr">₹80L – ₹1.5 Cr (Bespoke Residence)</option>
                      <option value="₹1.5 Cr+">₹1.5 Cr+ (Ultra-Luxury Estate)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-2">
                      Project Notes / Special Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about the property status (new build / handover stage), square footage, design style, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] resize-none font-light transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="luxury-btn-primary w-full py-4 bg-[#1A1A1A] hover:bg-[#5A5A40] text-[#F9F7F2] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Project Brief...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-[#555555] pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#5A5A40]" />
                    <span>Your privacy is respected. No spam, guaranteed.</span>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

          {/* Right Column: Studio Contact Details & Channels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, delay: 0.15, ease: luxuryEase }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            
            <div className="space-y-6">
              {/* Studio Info Card */}
              <div className="p-6 bg-[#F0EBE3] border border-[#1A1A1A]/10 space-y-4">
                <h3 className="text-xl font-serif font-light text-[#1A1A1A]">
                  Studio Locations
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#5A5A40] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[10px] uppercase tracking-wider text-[#1A1A1A] block">
                        Kochi Studio
                      </span>
                      <p className="text-xs text-[#555555] leading-relaxed font-light">
                        3rd Floor, Panampilly Nagar Main Ave, Ernakulam, Kerala 682036
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-[#1A1A1A]/10">
                    <MapPin className="w-4 h-4 text-[#5A5A40] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[10px] uppercase tracking-wider text-[#1A1A1A] block">
                        Thrissur Experience Center
                      </span>
                      <p className="text-xs text-[#555555] leading-relaxed font-light">
                        Near Sobha City, Puzhakkal, Thrissur, Kerala 680553
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Channels Card */}
              <div className="p-6 bg-white border border-[#1A1A1A]/10 space-y-4">
                <h3 className="text-xl font-serif font-light text-[#1A1A1A]">
                  Direct Channels
                </h3>

                <div className="space-y-3">
                  <a
                    href="tel:+919847012345"
                    className="flex items-center gap-3 p-3 border border-[#1A1A1A]/10 hover:bg-[#F0EBE3] transition-colors group"
                  >
                    <div className="w-8 h-8 bg-[#1A1A1A] text-[#F9F7F2] flex items-center justify-center group-hover:bg-[#5A5A40] transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#555555] block font-mono">Studio Desk</span>
                      <span className="text-xs font-semibold text-[#1A1A1A]">+91 98470 12345</span>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@nestorainteriors.com"
                    className="flex items-center gap-3 p-3 border border-[#1A1A1A]/10 hover:bg-[#F0EBE3] transition-colors group"
                  >
                    <div className="w-8 h-8 bg-[#1A1A1A] text-[#F9F7F2] flex items-center justify-center group-hover:bg-[#5A5A40] transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#555555] block font-mono">Email Inquiries</span>
                      <span className="text-xs font-semibold text-[#1A1A1A]">hello@nestorainteriors.com</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919847012345?text=Hello%20Nestora%20Interiors,%20I%20would%20like%20to%20enquire%20about%20an%20interior%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-btn-primary flex items-center gap-3 p-3 bg-[#5A5A40] text-[#F9F7F2] hover:bg-[#1A1A1A] transition-colors"
                  >
                    <div className="w-8 h-8 bg-white/20 text-white flex items-center justify-center">
                      <MessageCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#E5DED4] font-bold block">WhatsApp Instant Desk</span>
                      <span className="text-xs font-semibold text-white">Chat with Design Director</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Studio Hours */}
            <div className="p-4 bg-[#F0EBE3] text-xs text-[#555555] flex items-center gap-3 border border-[#1A1A1A]/10 font-light">
              <Clock className="w-4 h-4 text-[#5A5A40] flex-shrink-0" />
              <span>Studio Hours: Monday – Saturday, 9:30 AM – 6:30 PM IST (Virtual NRI Consultations 24/7)</span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
