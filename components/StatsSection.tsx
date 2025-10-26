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

interface PersonaCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

function PersonaIcon({ type }: { type: string }) {
  if (type === 'target') {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }
  if (type === 'rocket') {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    );
  }
  return null;
}

function PersonaCard({ icon, title, description, delay, isInView }: PersonaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
      <div className="relative glass rounded-lg p-4 sm:p-5 hover:border-matrix-cyan/30 transition-all duration-300 h-full border-l-2 border-matrix-cyan/50">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5 text-matrix-cyan">
            <PersonaIcon type={icon} />
          </div>
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatValue({ value }: { value: string }) {
  if (value === '🔥') {
    return (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1-1-7v-4z" />
      </svg>
    );
  }
  return <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">{value}</div>;
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
        <div className="mb-3 sm:mb-4 flex items-center justify-center text-amber-500">{value === '🔥' ? <StatValue value={value} /> : <StatValue value={value} />}</div>
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

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-10 max-w-3xl mx-auto">
          {stats.personas.map((persona, idx) => (
            <PersonaCard key={idx} {...persona} delay={idx * 0.15} isInView={isInView} />
          ))}
        </div>

        {/* Separator */}
        <div className="flex items-center gap-4 my-12 max-w-4xl mx-auto px-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-matrix-cyan/50 to-transparent" />
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-matrix-cyan/50" />
            <div className="w-1 h-1 rounded-full bg-matrix-cyan" />
            <div className="w-1 h-1 rounded-full bg-matrix-cyan/50" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-matrix-cyan/50 to-transparent" />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.metrics.map((metric, idx) => (
            <StatCard key={idx} {...metric} delay={idx * 0.2 + 0.3} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
