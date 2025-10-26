'use client';

import { footer } from '@/lib/content';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-matrix-cyan/20 py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 font-display">Efektywniejsi<span className="text-matrix-cyan">.ai</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3 sm:mb-4">{footer.about}</p>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href={`https://${footer.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-matrix-cyan hover:text-matrix-cyan/80 transition-colors focus:outline-none focus:ring-2 focus:ring-matrix-cyan focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                aria-label="LinkedIn Efektywniejsi"
              >
                <span className="font-mono text-xs">LinkedIn</span>
              </Link>
              <Link
                href={`https://${footer.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-matrix-cyan hover:text-matrix-cyan/80 transition-colors focus:outline-none focus:ring-2 focus:ring-matrix-cyan focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                aria-label="Twitter Efektywniejsi"
              >
                <span className="font-mono text-xs">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 font-mono text-xs sm:text-sm">&gt; KURSY</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footer.courses.map((course, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-matrix-cyan transition-colors text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-matrix-cyan focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 inline-block"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 font-mono text-xs sm:text-sm">&gt; INFORMACJE</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footer.info.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-matrix-cyan transition-colors text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-matrix-cyan focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-matrix-cyan/10 text-center">
          <p className="text-gray-500 text-xs sm:text-sm font-mono">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
