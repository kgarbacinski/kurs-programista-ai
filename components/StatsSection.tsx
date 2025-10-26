'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '@/lib/content';

interface StatCardProps {
  value: string;
  label: string;
  delay: number;
  isInView: boolean;
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="stats" className="relative py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="font-mono text-matrix-cyan text-xs sm:text-sm mb-3 sm:mb-4">// SYSTEM_PERFORMANCE_METRICS</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            {stats.title.split(' ').slice(0, 3).join(' ')} <span className="gradient-text">3x szybciej</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">{stats.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.metrics.map((metric, idx) => (
            <StatCard key={idx} {...metric} delay={idx * 0.2} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, delay, isInView }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-matrix-cyan/20 via-matrix-purple/20 to-matrix-pink/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
      <div className="relative glass rounded-lg p-5 sm:p-6 md:p-8 hover:border-matrix-cyan/50 transition-all duration-300">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-3 sm:mb-4">{value}</div>
        <div className="h-1 bg-gray-800 rounded-full overflow-hidden mb-3 sm:mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-matrix-cyan to-matrix-purple"
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : {}}
            transition={{ duration: 1.5, delay: delay + 0.3 }}
          />
        </div>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
          <span className="font-mono text-green-400 mr-1">&gt;</span>
          {label}
        </p>
      </div>
    </motion.div>
  );
}
