'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { programModules } from '@/lib/content';
import FloatingTechStack from './FloatingTechStack';

interface ModuleCardProps {
  id: number;
  title: string;
  description: string;
  topics: Array<{ icon: string; title: string; items: string[] }>;
  technologies: string;
  requirements: string;
}

// Tech stack mapping for each module
const moduleTechStacks: Record<number, Array<{ iconKey: string; name: string; color: string }>> = {
  0: [
    { iconKey: 'claude', name: 'Claude', color: '#00d4ff' },
    { iconKey: 'cursor', name: 'Cursor', color: '#b429f9' },
    { iconKey: 'mcp', name: 'MCP', color: '#ff2e97' },
    { iconKey: 'github', name: 'GitHub', color: '#00d4ff' },
    { iconKey: 'figma', name: 'Figma', color: '#b429f9' },
    { iconKey: 'shadcn', name: 'Shadcn', color: '#ff2e97' },
  ],
  1: [
    { iconKey: 'python', name: 'Python', color: '#00d4ff' },
    { iconKey: 'fastapi', name: 'FastAPI', color: '#b429f9' },
    { iconKey: 'docker', name: 'Docker', color: '#ff2e97' },
    { iconKey: 'actions', name: 'Actions', color: '#00d4ff' },
    { iconKey: 'flake8', name: 'Flake8', color: '#b429f9' },
    { iconKey: 'ddd', name: 'DDD', color: '#ff2e97' },
  ],
  2: [
    { iconKey: 'postgres', name: 'Postgres', color: '#00d4ff' },
    { iconKey: 'rabbitmq', name: 'RabbitMQ', color: '#b429f9' },
    { iconKey: 'pytest', name: 'Pytest', color: '#ff2e97' },
    { iconKey: 'jwt', name: 'JWT', color: '#00d4ff' },
    { iconKey: 'sqlalchemy', name: 'SQLAlch', color: '#b429f9' },
    { iconKey: 'celery', name: 'Celery', color: '#ff2e97' },
  ],
  3: [
    { iconKey: 'aws', name: 'AWS', color: '#00d4ff' },
    { iconKey: 'k8s', name: 'K8s', color: '#b429f9' },
    { iconKey: 'terraform', name: 'Terraform', color: '#ff2e97' },
    { iconKey: 'sentry', name: 'Sentry', color: '#00d4ff' },
    { iconKey: 'monitoring', name: 'Monitor', color: '#b429f9' },
    { iconKey: 'security', name: 'Security', color: '#ff2e97' },
  ],
};

export default function ProgramModules() {
  return (
    <section id="program" className="relative py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-matrix-purple/20 border border-matrix-purple/30 rounded-md mb-3 sm:mb-4">
            <span className="text-matrix-purple font-mono text-xs sm:text-sm">{programModules.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{programModules.title}</h2>
          <p className="text-gray-400 text-base sm:text-lg px-4">{programModules.subtitle}</p>
        </motion.div>

        <div className="space-y-5 sm:space-y-6">
          {programModules.modules.map((module) => (
            <ModuleCard key={module.id} {...module} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ id, title, description, topics, technologies, requirements }: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-matrix-cyan via-matrix-purple to-matrix-pink rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" aria-hidden="true" />
      <div className="relative glass rounded-lg overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-matrix-cyan/20">
          <div className="flex items-start justify-between mb-4">
            <div className="px-4 py-2 bg-gradient-to-br from-matrix-cyan to-blue-600 rounded-md">
              <span className="font-mono text-sm font-bold text-white">MODULE_{id.toString().padStart(2, '0')}</span>
            </div>
            <div className="flex gap-1">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-matrix-cyan"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-start mb-3 sm:mb-4">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{title}</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">{description}</p>
            </div>
            <FloatingTechStack technologies={moduleTechStacks[id] || []} />
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-matrix-cyan hover:text-matrix-cyan/80 transition-colors text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-matrix-cyan focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Zwiń szczegóły modułu' : 'Zobacz szczegóły modułu'}
          >
            <span>{isExpanded ? 'Zwiń' : 'Zobacz szczegóły'}</span>
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="p-5 sm:p-6 space-y-5 sm:space-y-6">
            {topics.map((topic, idx: number) => (
              <div key={idx} className="border-l-2 border-matrix-cyan/30 pl-3 sm:pl-4">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                  <span className="mr-1.5 sm:mr-2">{topic.icon}</span>{topic.title}
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {topic.items.map((item: string, itemIdx: number) => (
                    <li key={itemIdx} className="text-gray-400 text-xs sm:text-sm flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-matrix-cyan mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="pt-3 sm:pt-4 border-t border-matrix-cyan/20">
              <div className="text-xs sm:text-sm text-matrix-cyan mb-2 font-semibold">Technologie:</div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {technologies.split(', ').map((tech: string, idx: number) => (
                  <span key={idx} className="px-2 sm:px-3 py-1 bg-matrix-cyan/10 border border-matrix-cyan/30 rounded text-xs text-matrix-cyan font-mono whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
