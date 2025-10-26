'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { hero } from '@/lib/content';
import MatrixRain from './effects/MatrixRain';
import NeuralNetwork from './effects/NeuralNetwork';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-blue-950">
      <NeuralNetwork />
      <MatrixRain />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            {/* Terminal Init */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-matrix-cyan text-xs sm:text-sm mb-6 md:mb-8"
            >
              <div className="space-y-1">
                <p>&gt; system_init()</p>
                <p>&gt; loading_ai_matrix_protocol...</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-green-400"
                >
                  &gt; status: <span className="animate-pulse">READY</span>
                </motion.p>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-snug">
                <span className="text-white block mb-2 sm:mb-3">
                  {hero.mainHeading.normal}
                </span>
                <span className="relative inline-block">
                  <TypeAnimation
                    sequence={[
                      hero.mainHeading.animated,
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"
                    repeat={Infinity}
                  />
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Right Column - CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="relative"
          >
          <div className="absolute inset-0 bg-gradient-to-r from-matrix-cyan via-matrix-purple to-matrix-pink rounded-lg blur-xl opacity-50 animate-pulse" />

          <div className="relative glass rounded-lg p-5 sm:p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 md:mb-6 gap-3 sm:gap-4">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  {hero.cta.title}
                </h2>
              </div>
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-matrix-purple to-matrix-pink rounded-md self-start flex-shrink-0">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  ⚡ {hero.badge}
                </span>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8">
              {hero.cta.benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + idx * 0.2 }}
                  className="flex items-start gap-2 sm:gap-3 group"
                >
                  <motion.span
                    animate={{
                      boxShadow: [
                        '0 0 5px #00d4ff',
                        '0 0 15px #00d4ff',
                        '0 0 5px #00d4ff',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block w-2 h-2 rounded-full bg-matrix-cyan mt-1.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-gray-300 text-sm sm:text-base">
                    <span className="text-green-400 mr-1.5 sm:mr-2">✓</span>
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="#purchase" className="focus:outline-none focus:ring-2 focus:ring-matrix-cyan focus:ring-offset-2 focus:ring-offset-black rounded-lg">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full group min-h-[44px]"
                aria-label="Dołącz do kursu programista AI teraz"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-matrix-cyan to-matrix-purple rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative bg-gradient-to-r from-matrix-cyan to-matrix-purple hover:from-matrix-cyan/80 hover:to-matrix-purple/80 text-white font-bold py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-lg transition-all text-sm sm:text-base">
                  🚀 {hero.cta.buttonText}
                </div>
              </motion.button>
            </Link>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
