'use client';

import { motion } from 'framer-motion';
import { certificate } from '@/lib/content';

export default function CertificateSection() {
  return (
    <section id="certificate" className="relative py-20 bg-gradient-to-br from-neural-dark via-black to-blue-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{certificate.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificate.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-matrix-cyan via-matrix-purple to-matrix-pink rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative glass rounded-2xl p-8 md:p-10 h-full">
                {/* Icon */}
                <div className="text-6xl mb-6">{item.icon}</div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">{item.description}</p>

                {/* Points */}
                <ul className="space-y-3">
                  {item.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-3">
                      <motion.span
                        animate={{
                          boxShadow: [
                            '0 0 5px rgba(0, 212, 255, 0.5)',
                            '0 0 15px rgba(0, 212, 255, 0.8)',
                            '0 0 5px rgba(0, 212, 255, 0.5)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: pointIdx * 0.2 }}
                        className="inline-block w-2 h-2 rounded-full bg-matrix-cyan mt-2 flex-shrink-0"
                      />
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
