'use client';

import { motion } from 'framer-motion';
import { aiDevStack } from '@/lib/content';
import { ArrowDown } from 'lucide-react';
import { getTechIcon } from '@/lib/techIcons';

export default function BeforeAfterSection() {
  const { layers } = aiDevStack;

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-slate-900 to-blue-950">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-matrix-purple/20 border border-matrix-purple/30 rounded-md mb-4">
            <span className="text-matrix-purple font-mono text-sm">{aiDevStack.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{aiDevStack.title}</h2>
          <p className="text-gray-400">{aiDevStack.subtitle}</p>
        </motion.div>

        {/* Layered Stack */}
        <div className="space-y-6">
          {/* Layer 1: Orchestration - YOU */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-matrix-cyan/20 rounded-lg blur-lg" />
              <div className="relative glass rounded-lg p-6 border-2 border-matrix-cyan/30">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2">Warstwa Orkiestracji</div>
                  <div className="text-2xl font-bold text-white mb-1">{layers.orchestration.title}</div>
                  <div className="text-sm text-matrix-cyan font-mono">{layers.orchestration.subtitle}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-matrix-cyan" />
            </motion.div>
          </div>

          {/* Layer 2: Multi-Agent Execution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-matrix-purple/20 rounded-lg blur-lg" />
              <div className="relative glass rounded-lg p-6 border-2 border-matrix-purple/30">
                <div className="text-center mb-4">
                  <div className="text-sm font-mono text-matrix-purple mb-1">Multi-Agent Execution</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {layers.agents.map((agent, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="text-center p-3 bg-black/40 rounded-lg border border-matrix-purple/40"
                    >
                      <div className="text-2xl mb-2">{agent.icon}</div>
                      <div className="text-[10px] font-mono text-white mb-1">{agent.name}</div>
                      <div className="text-[9px] text-gray-500">{agent.role}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <ArrowDown className="w-6 h-6 text-matrix-purple" />
            </motion.div>
          </div>

          {/* Layer 3: MCP Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-matrix-pink/20 rounded-lg blur-lg" />
              <div className="relative glass rounded-lg p-6 border-2 border-matrix-pink/30">
                <div className="text-center mb-4">
                  <div className="text-sm font-mono text-matrix-pink mb-1">MCP Integration</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {layers.mcp.map((server, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex flex-col items-center p-3 bg-black/40 rounded-lg border border-matrix-pink/40"
                    >
                      <div className="mb-2">
                        {(() => {
                          const IconComponent = getTechIcon(server.iconKey);
                          return <IconComponent size={24} className="text-matrix-pink" />;
                        })()}
                      </div>
                      <div className="text-[10px] font-mono text-white mb-1">{server.name}</div>
                      <div className="text-[9px] text-gray-500">{server.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <ArrowDown className="w-6 h-6 text-matrix-pink" />
            </motion.div>
          </div>

          {/* Result: Production */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-600 rounded-lg blur-lg opacity-40" />
              <div className="relative bg-gradient-to-r from-green-500/20 to-green-600/20 border-2 border-green-500/40 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">✓ {layers.result.title}</div>
                  <div className="text-sm text-gray-400 font-mono">{layers.result.subtitle}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
