import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Heart, ExternalLink, X } from 'lucide-react';
import { INSTAGRAM_POSTS, InstagramPost } from '../data/instagramData';

export const InstagramGallery: React.FC = () => {
  const [activePost, setActivePost] = useState<InstagramPost | null>(null);
  const luxuryEase = [0.16, 1, 0.3, 1];

  return (
    <section className="py-24 sm:py-32 bg-[#F9F7F2] text-[#1A1A1A] relative border-b border-[#1A1A1A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: luxuryEase }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#5A5A40] font-bold mb-3 flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>Visual Journal</span>
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1A1A1A] tracking-tight">
              Follow Our Work
            </h2>
            <p className="text-sm sm:text-base text-[#555555] font-sans font-light mt-1">
              Daily design dispatches, on-site joinery details, and finished Kerala spaces.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#5A5A40]">
              @nestorainteriors
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-btn-primary inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A1A] text-[#F9F7F2] hover:bg-[#5A5A40] text-[10px] uppercase tracking-[0.2em] font-medium transition-colors min-h-[44px]"
            >
              <Instagram className="w-3 h-3" />
              <span>View Instagram</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </motion.div>

        {/* 8 Images Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
          {INSTAGRAM_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: index * 0.05, ease: luxuryEase }}
              onClick={() => setActivePost(post)}
              className="group relative h-48 sm:h-64 overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]/10 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Hover overlay with likes & caption */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#E5DED4]">Nestora Feed</span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <Heart className="w-3 h-3 fill-[#E5DED4] text-[#E5DED4]" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <p className="text-xs line-clamp-3 text-stone-200 font-light">
                  {post.caption}
                </p>

                <span className="text-[10px] text-[#5A5A40] font-mono">
                  {post.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Post Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setActivePost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: luxuryEase }}
              className="relative bg-[#F9F7F2] border border-[#1A1A1A]/20 max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 sm:h-96">
                <img
                  src={activePost.image}
                  alt={activePost.caption}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 bg-black/70 text-white p-2 hover:bg-black cursor-pointer transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#1A1A1A] text-[#F9F7F2] flex items-center justify-center text-[10px] font-bold">
                      N
                    </div>
                    <span className="text-xs font-semibold text-[#1A1A1A]">nestorainteriors</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#555555]">
                    <Heart className="w-3.5 h-3.5 fill-[#5A5A40] text-[#5A5A40]" />
                    <span>{activePost.likes} likes</span>
                  </div>
                </div>
                <p className="text-xs text-[#555555] mb-3 leading-relaxed font-light">
                  {activePost.caption}
                </p>
                <p className="text-[11px] text-[#5A5A40] font-mono">
                  {activePost.tag}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
