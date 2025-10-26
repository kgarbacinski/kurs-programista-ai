'use client';

import { motion } from 'framer-motion';
import { purchase } from '@/lib/content';
import Link from 'next/link';

export default function PurchaseSection() {
  return (
    <section id="purchase" className="relative py-20 bg-gradient-to-br from-neural-darker via-black to-blue-950 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {purchase.title}
          </h2>
          <p className="text-xl text-gray-400">
            i zostań <span className="gradient-text font-bold">3x wydajniejszym programistą</span> niż Twoja konkurencja
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="relative group">
            {/* Animated glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-matrix-cyan via-matrix-purple to-matrix-pink rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />

            <div className="relative glass rounded-2xl p-8 md:p-10">
              {/* Badge */}
              <div className="mb-6 text-center">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg">
                  <span className="text-white font-bold text-sm uppercase tracking-wider">
                    {purchase.badge}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{purchase.card.title}</h3>
                <p className="text-gray-400">{purchase.card.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  {purchase.card.price}
                </div>
              </div>

              {/* CTA Button */}
              <Link href="https://efektywniejsi.pl" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full group/btn mb-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-matrix-cyan to-matrix-purple rounded-xl blur-lg opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-r from-matrix-cyan to-matrix-purple hover:from-matrix-cyan/80 hover:to-matrix-purple/80 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg">
                    🔥 {purchase.card.buttonText}
                  </div>
                </motion.button>
              </Link>

              {/* Guarantees */}
              <div className="space-y-3 border-t border-matrix-cyan/20 pt-6">
                {purchase.card.guarantees.map((guarantee, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span className="text-sm">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
