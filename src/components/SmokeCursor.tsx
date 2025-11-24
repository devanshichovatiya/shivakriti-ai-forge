import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

export const SmokeCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Create smoke particles
      const newParticle: Particle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        scale: Math.random() * 0.5 + 0.5,
      };

      setParticles((prev) => [...prev, newParticle].slice(-15));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fade out particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            opacity: p.opacity - 0.05,
            y: p.y - 1,
          }))
          .filter((p) => p.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-primary pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Following dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />

      {/* Smoke particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998]"
          style={{
            left: particle.x - 16,
            top: particle.y - 16,
            opacity: particle.opacity * 0.3,
            transform: `scale(${particle.scale})`,
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      ))}
    </>
  );
};
