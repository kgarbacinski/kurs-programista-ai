'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faq } from '@/lib/content';

function EmailIcon() {
  return (
    <svg className="w-4 h-4 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-20 bg-gradient-to-br from-black via-slate-900 to-neural-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-matrix-cyan/20 border border-matrix-cyan/30 rounded-md mb-4">
            <span className="text-matrix-cyan font-mono text-sm">{faq.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{faq.title}</h2>
          <p className="text-gray-400 text-lg">{faq.subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faq.questions.map((item, idx) => (
            <FAQItem key={idx} {...item} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center glass rounded-lg p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-4">Masz więcej pytań?</h3>
          <p className="text-gray-400 mb-4">{faq.contact.text}</p>
          <div className="space-y-2">
            <p className="text-matrix-cyan text-sm flex items-center justify-center">
              <EmailIcon />
              {faq.contact.email}
            </p>
            <p className="text-matrix-cyan text-sm flex items-center justify-center">
              <LinkedInIcon />
              {faq.contact.linkedin}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass rounded-lg overflow-hidden hover:border-matrix-cyan/50 transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left group"
      >
        <div className="flex-1">
          <span className="text-white font-semibold group-hover:text-matrix-cyan transition-colors">{question}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-matrix-cyan" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4">
          <div className="border-l-2 border-matrix-purple/50 pl-4">
            <p className="text-gray-300 leading-relaxed">{answer}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
