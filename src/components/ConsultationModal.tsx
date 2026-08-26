import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [consultType, setConsultType] = useState<'site' | 'studio' | 'virtual'>('site');
  const luxuryEase = [0.16, 1, 0.3, 1];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Kochi, Kerala',
    preferredDate: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="consultation-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            id="consultation-modal-box"
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.35, ease: luxuryEase }}
            className="relative bg-[#F9F7F2] text-[#1A1A1A] w-full max-w-lg shadow-2xl overflow-hidden border border-[#1A1A1A]/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/10 bg-[#F0EBE3]">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#5A5A40] block">
                  Private Appointment
                </span>
                <h3 className="text-xl font-serif font-light text-[#1A1A1A]">
                  Book A Design Consultation
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 text-[#1A1A1A] hover:bg-[#E5DED4] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {step === 'success' ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 bg-[#5A5A40] text-[#F9F7F2] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-serif font-light text-[#1A1A1A]">
                    Consultation Requested
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-sm mx-auto font-light">
                    Thank you, <strong>{formData.name}</strong>. Our design coordinator will confirm your {consultType === 'virtual' ? 'Virtual NRI Meeting' : 'Site / Studio Consultation'} via WhatsApp & Email.
                  </p>
                  <button
                    onClick={onClose}
                    className="luxury-btn-primary mt-4 px-6 py-3 bg-[#1A1A1A] text-[#F9F7F2] hover:bg-[#5A5A40] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Consultation Type Selector */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-2">
                      Select Format
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'site', label: 'On-Site Visit', sub: 'At your property' },
                        { id: 'studio', label: 'Studio Meeting', sub: 'Kochi / Thrissur' },
                        { id: 'virtual', label: 'NRI Virtual', sub: 'Zoom / WhatsApp' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setConsultType(item.id as any)}
                          className={`p-2.5 text-left border transition-all cursor-pointer ${
                            consultType === item.id
                              ? 'bg-[#1A1A1A] text-[#F9F7F2] border-[#1A1A1A]'
                              : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
                          }`}
                        >
                          <span className="block text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                          <span className={`block text-[9px] ${consultType === item.id ? 'text-stone-300' : 'text-[#555555]'}`}>
                            {item.sub}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98470 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@address.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-1">
                        District / City in Kerala
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Thrissur / Kochi"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Time preferences */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A] mb-1">
                        Preferred Time
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#1A1A1A]/15 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      >
                        <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                        <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                        <option value="Evening (5 PM - 7:30 PM)">Evening (5 PM - 7:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="luxury-btn-primary w-full py-3.5 bg-[#1A1A1A] hover:bg-[#5A5A40] text-[#F9F7F2] text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer mt-2"
                  >
                    Confirm Appointment Request
                  </button>

                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
