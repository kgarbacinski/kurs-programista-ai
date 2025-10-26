'use client';

import { motion } from 'framer-motion';
import { vscodeApproach } from '@/lib/content';

export default function VSCodeApproach() {
  return (
    <section id="vscode" className="relative py-16 sm:py-20 bg-gradient-to-br from-black via-neural-dark to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-matrix-cyan/20 border border-matrix-cyan/30 rounded-md mb-3 sm:mb-4">
            <svg className="w-4 h-4 text-matrix-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span className="text-matrix-cyan text-xs sm:text-sm font-semibold">{vscodeApproach.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{vscodeApproach.title}</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto px-4">{vscodeApproach.subtitle}</p>
        </motion.div>

        {/* Video Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-br from-matrix-cyan/20 via-matrix-purple/20 to-matrix-pink/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
            <div className="relative rounded-xl overflow-hidden border border-gray-800 group-hover:border-matrix-cyan/50 transition-all">
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-matrix-cyan/90 group-hover:bg-matrix-cyan rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-matrix-cyan/20" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
