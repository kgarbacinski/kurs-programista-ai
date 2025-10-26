'use client';

import { motion } from 'framer-motion';
import { vscodeApproach } from '@/lib/content';

// Helper function to render bold text safely
function renderBoldText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index} className="text-white">{part}</strong> : part
  );
}

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
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-matrix-cyan/20 border border-matrix-cyan/30 rounded-md mb-3 sm:mb-4">
            <span className="text-matrix-cyan text-xs sm:text-sm font-semibold">{vscodeApproach.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{vscodeApproach.title}</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto px-4">{vscodeApproach.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {vscodeApproach.benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-matrix-cyan/20 via-matrix-purple/20 to-matrix-pink/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              <div className="relative glass rounded-lg p-5 sm:p-6 h-full hover:border-matrix-cyan/50 transition-all">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl flex-shrink-0">{idx === 0 ? '⚡' : idx === 1 ? '🤖' : '🎯'}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex-1">{benefit.title}</h3>
                </div>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {renderBoldText(benefit.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
