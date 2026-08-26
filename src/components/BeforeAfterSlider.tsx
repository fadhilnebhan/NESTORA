import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';
import { BEFORE_AFTER_ROOMS } from '../data/beforeAfterData';

export const BeforeAfterSlider: React.FC = () => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const luxuryEase = [0.16, 1, 0.3, 1];

  const activeRoom = BEFORE_AFTER_ROOMS[activeRoomIndex];

  React.useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-20 sm:py-28 lg:py-32 bg-[#F9F7F2] text-[#1A1A1A] relative border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: luxuryEase }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
            <span>Interactive Spatial Transformation</span>
            <span className="w-4 h-[1px] bg-[#5A5A40]" />
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight mb-3">
            From Empty Space To A Home.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#555555] font-sans font-light">
            Slide horizontally to experience the architectural evolution from bare builder shell to refined luxury sanctuary.
          </p>

          {/* Room Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {BEFORE_AFTER_ROOMS.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => {
                  setActiveRoomIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-3 sm:px-4 py-2 text-[9.5px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer active:scale-95 whitespace-nowrap ${
                  activeRoomIndex === idx
                    ? 'bg-[#1A1A1A] text-[#F9F7F2]'
                    : 'bg-transparent text-[#1A1A1A]/70 hover:text-[#1A1A1A] border border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                }`}
              >
                {room.type} • {room.location.split(',')[0]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* The Interactive Comparison Stage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="max-w-5xl mx-auto"
        >
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[280px] xs:h-[340px] sm:h-[440px] md:h-[500px] lg:h-[540px] overflow-hidden select-none cursor-ew-resize border border-[#1A1A1A]/15 bg-[#1A1A1A] shadow-xl"
          >
            {/* After Image (Background layer - 100% width) */}
            <img
              src={activeRoom.afterImage}
              alt="After Transformation"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-300"
            />
            
            {/* After Label */}
            <div className="absolute top-3 sm:top-5 right-3 sm:right-5 z-20 bg-[#1A1A1A]/85 backdrop-blur-md text-[#F9F7F2] px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold border border-white/20">
              After: Nestora Design
            </div>

            {/* Before Image (Clipped overlay layer) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeRoom.beforeImage}
                alt="Before Transformation"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none transition-opacity duration-300"
                style={{ width: containerWidth > 0 ? `${containerWidth}px` : (containerRef.current ? `${containerRef.current.clientWidth}px` : '100%') }}
              />
              {/* Before Label */}
              <div className="absolute top-3 sm:top-5 left-3 sm:left-5 bg-black/80 backdrop-blur-md text-stone-300 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold border border-white/10">
                Before: Raw Site
              </div>
            </div>

            {/* Draggable Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none transition-transform duration-75 ease-out"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Vertical line */}
              <div className="w-[2px] h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.7)] -ml-[1px]" />
              
              {/* Center Draggable Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-[#F9F7F2] text-[#1A1A1A] shadow-2xl flex items-center justify-center border border-[#1A1A1A] transition-transform duration-200 hover:scale-110">
                <MoveHorizontal className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#1A1A1A]" />
              </div>
            </div>

            {/* Mobile Drag hint overlay */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 sm:px-3 py-1 pointer-events-none whitespace-nowrap">
              Drag slider left or right
            </div>
          </div>

          {/* Detailed Transformation Explanations with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoom.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
              className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 bg-[#F0EBE3] p-5 sm:p-7 md:p-8 border border-[#1A1A1A]/10"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-stone-400" />
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#555555]">
                    Before (The Challenge)
                  </h4>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed mb-4 font-light">
                  {activeRoom.beforeDescription}
                </p>
                <div className="p-2.5 sm:p-3 bg-white text-[10px] sm:text-[11px] text-[#555555] border border-[#1A1A1A]/10 font-mono break-words">
                  Location: {activeRoom.location} • {activeRoom.title}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-[#5A5A40]" />
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#5A5A40]">
                    After (Nestora Architectural Execution)
                  </h4>
                </div>
                <p className="text-xs text-[#1A1A1A] font-medium leading-relaxed mb-3">
                  {activeRoom.afterDescription}
                </p>
                
                <ul className="space-y-2">
                  {activeRoom.transformationPoints.map((pt, i) => (
                    <li key={i} className="text-xs text-[#555555] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#5A5A40] mt-1 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
};
