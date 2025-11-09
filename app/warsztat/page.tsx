'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import WorkshopRegistrationForm from '@/components/WorkshopRegistrationForm'
import { workshop } from '@/lib/content'
import NeuralNetwork from '@/components/effects/NeuralNetwork'
import MatrixRain from '@/components/effects/MatrixRain'

function WorkshopIcon({ type }: { type: string }) {
  const iconClass = 'w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8'
  const strokeProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  if (type === 'target') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" {...strokeProps}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    )
  }
  if (type === 'rocket') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" {...strokeProps}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    )
  }
  if (type === 'brain') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" {...strokeProps}>
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    )
  }
  if (type === 'briefcase') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" {...strokeProps}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  }
  if (type === 'code') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" {...strokeProps}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  return null
}

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neural-darker via-neural-dark to-neural-darker relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Matrix effects */}
      <NeuralNetwork />
      <MatrixRain />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-10 md:mb-12"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-block mb-4 sm:mb-6"
              >
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-matrix-cyan/10 border border-matrix-cyan/30 text-matrix-cyan text-xs sm:text-sm font-medium">
                  {workshop.badge}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text"
              >
                {workshop.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8"
              >
                {workshop.subtitle}
              </motion.p>

              {/* Date & Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg"
              >
                <div className="flex items-center gap-2 text-matrix-cyan">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{workshop.date}</span>
                </div>
                <div className="flex items-center gap-2 text-matrix-cyan">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{workshop.time}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Registration Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2 gradient-text">{workshop.form.title}</h2>
                <p className="text-gray-400">{workshop.form.subtitle}</p>
              </div>

              <WorkshopRegistrationForm />
            </motion.div>

            {/* For Who Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center gradient-text">
                {workshop.forWho.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {workshop.forWho.personas.map((persona, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + idx * 0.15 }}
                    className="relative group"
                  >
                    <div className="relative glass rounded-lg p-4 sm:p-5 hover:border-matrix-cyan/30 transition-all h-full border-l-2 border-matrix-cyan/50">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="flex-shrink-0 mt-0.5 text-matrix-cyan">
                          <WorkshopIcon type={persona.icon} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{persona.title}</h3>
                          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{persona.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Learning Outcomes Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center gradient-text">
                {workshop.learningOutcomes.title}
              </h2>
              <p className="text-center text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">{workshop.learningOutcomes.subtitle}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {workshop.learningOutcomes.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + idx * 0.1 }}
                    className="text-center group"
                  >
                    <div className="flex justify-center mb-3 sm:mb-4 text-matrix-cyan group-hover:scale-110 transition-transform">
                      <WorkshopIcon type={item.icon} />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 group-hover:text-matrix-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Syllabus Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="glass rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center gradient-text">
                {workshop.syllabus.title}
              </h2>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {workshop.syllabus.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + index * 0.05 }}
                    className="border-l-2 border-matrix-cyan/30 pl-3 sm:pl-4 md:pl-6 py-2 group hover:border-matrix-cyan/60 transition-all"
                  >
                    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                      <div className="flex-shrink-0 text-matrix-cyan group-hover:scale-110 transition-transform mt-1">
                        <WorkshopIcon type={item.icon} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-matrix-cyan transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Course Teaser Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            >
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-matrix-cyan via-matrix-purple to-matrix-pink rounded-2xl blur opacity-20" />

                <div className="relative glass rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border-matrix-cyan/40">
                  {/* Badge */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-matrix-purple/20 border border-matrix-purple/50 rounded-full text-matrix-purple text-xs sm:text-sm font-mono">
                      {workshop.courseTeaser.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center gradient-text">
                    {workshop.courseTeaser.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-center text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
                    {workshop.courseTeaser.subtitle}
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto mb-6 sm:mb-8">
                    {workshop.courseTeaser.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + idx * 0.05 }}
                        className="flex items-start gap-2 sm:gap-3 group"
                      >
                        <div className="flex-shrink-0 text-matrix-cyan group-hover:scale-110 transition-transform mt-0.5">
                          <WorkshopIcon type={benefit.icon} />
                        </div>
                        <span className="text-gray-300 text-sm sm:text-base">{benefit.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlight */}
                  <div className="bg-neural-darker/50 border border-matrix-cyan/30 rounded-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 max-w-2xl mx-auto">
                    <p className="text-center text-matrix-cyan font-semibold text-sm sm:text-base">
                      {workshop.courseTeaser.highlight}
                    </p>
                  </div>

                  {/* Closing */}
                  <p className="text-center text-gray-400 font-mono text-xs sm:text-sm">
                    {workshop.courseTeaser.closing}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Presenters Section - Matrix/Hacker Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            >
              <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-mono text-matrix-green">
                  {workshop.presenters.title}
                </h2>
                <p className="text-gray-400 font-mono text-xs sm:text-sm">{workshop.presenters.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {workshop.presenters.team.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Terminal Card */}
                    <div className="relative bg-black/80 border border-matrix-cyan/30 rounded-lg p-4 sm:p-5 md:p-6 hover:border-matrix-cyan/60 transition-all overflow-hidden">
                      {/* Scanline effect */}
                      <div className="absolute inset-0 pointer-events-none opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matrix-cyan/20 to-transparent animate-scanline" />
                      </div>

                      {/* Glowing border on hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-matrix-cyan via-matrix-purple to-matrix-pink rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity" />

                      <div className="relative z-10">
                        {/* Header with status */}
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <span className="font-mono text-xs text-matrix-cyan">&gt; whoami</span>
                          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-matrix-green/20 border border-matrix-green/50 rounded text-matrix-green text-xs font-mono">
                            [{member.status}]
                          </span>
                        </div>

                        {/* Image with gradient border */}
                        <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                          <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-matrix-cyan to-matrix-purple rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
                            <motion.img
                              src={member.image}
                              alt={member.name}
                              whileHover={{ scale: 1.05 }}
                              className="relative w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full object-cover border-2 border-neural-dark group-hover:brightness-110 transition-all"
                            />
                          </div>
                        </div>

                        {/* Name and title */}
                        <div className="text-center mb-3 sm:mb-4">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 font-mono">
                            <span className="text-matrix-cyan">&lt;</span>
                            {member.name}
                            <span className="text-matrix-cyan">/&gt;</span>
                          </h3>
                          <p className="text-matrix-purple font-mono text-xs sm:text-sm">{member.title}</p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {member.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-matrix-cyan/10 border border-matrix-cyan/30 rounded text-matrix-cyan text-xs font-mono"
                            >
                              [{tag}]
                            </span>
                          ))}
                        </div>

                        {/* Terminal output - skills */}
                        <div className="bg-neural-darker/50 border border-matrix-cyan/20 rounded p-3 sm:p-4">
                          <div className="font-mono text-xs text-matrix-green mb-2">
                            &gt; skills --list
                          </div>
                          <ul className="space-y-1">
                            {member.points.map((point, pointIdx) => (
                              <li key={pointIdx} className="text-gray-400 text-xs sm:text-sm font-mono">
                                <span className="text-matrix-green mr-2">&gt;</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center text-gray-500 text-sm">
          <p>© 2025 Efektywniejsi. Wszystkie prawa zastrzeżone.</p>
        </footer>
      </div>
    </main>
  )
}
