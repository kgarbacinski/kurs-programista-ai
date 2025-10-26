'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getTechIcon } from '@/lib/techIcons';

interface FloatingTechStackProps {
  technologies: Array<{ iconKey: string; name: string; color: string }>;
}

export default function FloatingTechStack({ technologies }: FloatingTechStackProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to viewport center
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-3 gap-4 perspective-1000">
        {technologies.map((tech, idx) => (
          <motion.div
            key={idx}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              // 3D parallax based on mouse position
              x: isHovered ? mousePosition.x * (idx % 2 === 0 ? 1 : -1) : 0,
              y: isHovered ? mousePosition.y * (idx % 2 === 0 ? -1 : 1) : 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
            }}
            whileHover={{
              scale: 1.15,
              rotateY: 10,
              rotateX: -10,
              z: 50,
            }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: tech.color }}
              animate={{
                opacity: isHovered ? [0.3, 0.6, 0.3] : 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: idx * 0.2,
              }}
            />

            {/* Icon card */}
            <motion.div
              className="relative bg-black/40 backdrop-blur-xl border border-matrix-cyan/30 rounded-xl p-4 overflow-hidden group-hover:border-matrix-cyan/60 transition-all"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: idx * 0.4,
                ease: 'easeInOut',
              }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}, transparent)`,
                }}
              />

              {/* Icon */}
              <div className="relative text-center mb-2" style={{ color: tech.color }}>
                {(() => {
                  const IconComponent = getTechIcon(tech.iconKey);
                  return <IconComponent className="mx-auto" size={36} />;
                })()}
              </div>

              {/* Tech name */}
              <div className="relative text-xs font-mono text-center text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile fallback - simple grid */}
      <div className="lg:hidden flex flex-wrap gap-3 justify-center mt-6">
        {technologies.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-2 px-3 py-2 bg-black/40 backdrop-blur-xl border border-matrix-cyan/30 rounded-lg"
          >
            <span style={{ color: tech.color }}>
              {(() => {
                const IconComponent = getTechIcon(tech.iconKey);
                return <IconComponent size={24} />;
              })()}
            </span>
            <span className="text-xs font-mono text-gray-400">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
