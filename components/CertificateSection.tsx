'use client';

import { motion } from 'framer-motion';
import { certificate } from '@/lib/content';

function CertificateIcon({ type }: { type: string }) {
  if (type === 'trophy') {
    return (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    );
  }
  if (type === 'users') {
    return (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  return null;
}

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
                <div className="mb-6 text-matrix-cyan">
                  <CertificateIcon type={item.icon} />
                </div>

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
