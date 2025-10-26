'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { presenters } from '@/lib/content';

// Helper function to render highlighted key phrases
function renderHighlightedQuote(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="font-bold text-matrix-cyan">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function PresentersSection() {
  return (
    <section id="presenters" className="relative py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-matrix-purple/20 border border-matrix-purple/30 rounded-md mb-3 sm:mb-4">
            <span className="text-matrix-purple font-semibold text-xs sm:text-sm">{presenters.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{presenters.title}</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto px-4">{presenters.subtitle}</p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <div className="glass rounded-lg p-6 sm:p-8 md:p-10 border-l-4 border-matrix-cyan">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 italic leading-relaxed mb-4 sm:mb-6 whitespace-pre-line">
              "{renderHighlightedQuote(presenters.quote)}"
            </p>
            <p className="text-matrix-cyan font-semibold text-sm sm:text-base">
              {presenters.tagline}
            </p>
          </div>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {presenters.team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-matrix-cyan via-matrix-purple to-matrix-pink rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" aria-hidden="true" />
              <div className="relative glass rounded-lg p-6 sm:p-8">
                {/* Avatar */}
                <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-matrix-cyan/50 flex-shrink-0">
                    <Image
                      src={idx === 0 ? '/images/damian.png' : '/images/kacper.png'}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{member.name}</h3>
                    <p className="text-matrix-cyan font-semibold text-sm sm:text-base">{member.title}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 sm:space-y-3">
                  {member.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-2 sm:gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-matrix-cyan mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-base">{point}</span>
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
