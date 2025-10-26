'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Change navbar background and shadow on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(10, 14, 39, 0.95)']
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0 0 rgba(0, 212, 255, 0)', '0 4px 20px rgba(0, 212, 255, 0.15)']
  );

  const navLinks = [
    { href: '#program', label: 'Program' },
    { href: '#how-it-works', label: 'Jak to działa' },
    { href: '#faq', label: 'FAQ' },
    { href: '#purchase', label: 'Cena' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, boxShadow }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-matrix-cyan/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Strona główna Efektywniejsi">
            <Image
              src="/efektywniejsi-logo.svg"
              alt="Efektywniejsi"
              width={180}
              height={40}
              className="h-6 sm:h-8 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-matrix-cyan transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-matrix-cyan focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#purchase" className="focus:outline-none focus:ring-2 focus:ring-matrix-cyan focus:ring-offset-2 focus:ring-offset-black rounded-lg">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                aria-label="Dołącz do kursu programista AI"
              >
                {/* Pulsing dot */}
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                  aria-hidden="true"
                />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" aria-hidden="true" />

                <div className="absolute inset-0 bg-gradient-to-r from-matrix-cyan to-matrix-purple rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative bg-gradient-to-r from-matrix-cyan to-matrix-purple px-5 py-2.5 rounded-lg text-sm font-bold text-white">
                  Dołącz do kursu
                </div>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-matrix-cyan p-2 rounded-lg hover:bg-matrix-cyan/10 transition-colors focus:outline-none focus:ring-2 focus:ring-matrix-cyan focus:ring-offset-2 focus:ring-offset-black"
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          id="mobile-menu"
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 px-2 space-y-2 border-t border-matrix-cyan/10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={false}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-matrix-cyan hover:bg-matrix-cyan/10 transition-all text-base font-medium px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-matrix-cyan focus:ring-offset-2 focus:ring-offset-black"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={false}
              animate={{
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : -20,
              }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="pt-2"
            >
              <Link href="#purchase" onClick={() => setIsOpen(false)} className="block">
                <button className="w-full bg-gradient-to-r from-matrix-cyan to-matrix-purple px-6 py-3 rounded-lg text-base font-bold text-white hover:from-matrix-cyan/90 hover:to-matrix-purple/90 transition-all focus:outline-none focus:ring-2 focus:ring-matrix-cyan focus:ring-offset-2 focus:ring-offset-black">
                  Dołącz do kursu
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
