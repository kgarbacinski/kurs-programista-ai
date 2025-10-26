'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Matrix characters - mix of code symbols, binary, and special chars
    const characters = '01AIλΨ∞{}[]<>/\\|_-+=*&^%$#@!~`";:?.,';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Array of y-positions for each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Colors for variety
    const colors = [
      'rgba(0, 212, 255, ',  // cyan
      'rgba(0, 255, 65, ',   // matrix green
      'rgba(180, 41, 249, ', // purple
    ];

    function draw() {
      if (!ctx || !canvas) return;

      // Fade effect - creates the trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw characters
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters[Math.floor(Math.random() * characters.length)];

        // Random color with varying opacity for depth effect
        const colorIndex = Math.floor(Math.random() * colors.length);
        const opacity = Math.random() * 0.5 + 0.3; // 0.3 to 0.8
        ctx.fillStyle = colors[colorIndex] + opacity + ')';

        // Draw the character
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(char, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment y position
        drops[i]++;
      }
    }

    // Animation loop
    const interval = setInterval(draw, 33); // ~30fps

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{ zIndex: 1 }}
    />
  );
}
