'use client';

import { motion } from 'framer-motion';
import { howItWorks } from '@/lib/content';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-matrix-pink/20 border border-matrix-pink/30 rounded-md mb-4">
            <span className="text-matrix-pink font-semibold text-sm">{howItWorks.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{howItWorks.title}</h2>
          <p className="text-gray-400 text-lg">{howItWorks.subtitle}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {howItWorks.steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              {/* Connection line (except for last item) */}
              {idx < howItWorks.steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-matrix-cyan to-matrix-purple opacity-50" />
              )}

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Step Number */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0, 212, 255, 0.5)',
                        '0 0 40px rgba(0, 212, 255, 0.8)',
                        '0 0 20px rgba(0, 212, 255, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-matrix-cyan to-matrix-purple flex items-center justify-center"
                  >
                    <span className="text-4xl font-bold text-white">{step.number}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 glass rounded-lg p-6 md:p-8 group hover:border-matrix-cyan/50 transition-all">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-gray-300 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
