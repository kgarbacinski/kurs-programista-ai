'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function NeuralNetwork() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set dimensions
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Initialize nodes
    const nodeCount = 20;
    const initialNodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      initialNodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
    setNodes(initialNodes);

    // Animate nodes
    const animate = () => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          let { x, y, vx, vy } = node;

          x += vx;
          y += vy;

          // Bounce off edges
          if (x < 0 || x > window.innerWidth) vx *= -1;
          if (y < 0 || y > window.innerHeight) vy *= -1;

          return { x, y, vx, vy };
        })
      );
    };

    const interval = setInterval(animate, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Calculate connections between nearby nodes
  const connections: Array<{ x1: number; y1: number; x2: number; y2: number; distance: number }> = [];
  const maxDistance = 200;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        connections.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
          distance,
        });
      }
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30" style={{ zIndex: 0 }}>
      <svg width={dimensions.width} height={dimensions.height} className="absolute inset-0">
        {/* Connections */}
        {connections.map((conn, idx) => {
          const opacity = 1 - conn.distance / maxDistance;
          return (
            <motion.line
              key={`conn-${idx}`}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke="url(#gradient)"
              strokeWidth="1"
              opacity={opacity * 0.6}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, idx) => (
          <motion.circle
            key={`node-${idx}`}
            cx={node.x}
            cy={node.y}
            r="4"
            fill="#00d4ff"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: idx * 0.2,
            }}
          />
        ))}

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="1" />
            <stop offset="50%" stopColor="#b429f9" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff2e97" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
