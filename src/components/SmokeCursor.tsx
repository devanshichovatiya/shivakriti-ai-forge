import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  velocityX: number;
  velocityY: number;
}

export const SmokeCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Create multiple smoke particles per movement
      for (let i = 0; i < 3; i++) {
        const newParticle: Particle = {
          id: Date.now() + Math.random() + i,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          opacity: 1,
          scale: Math.random() * 1.5 + 0.8,
          velocityX: (Math.random() - 0.5) * 2,
          velocityY: -Math.random() * 3 - 1,
        };

        setParticles((prev) => [...prev, newParticle].slice(-40));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fade out and animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            opacity: p.opacity - 0.03,
            y: p.y + p.velocityY,
            x: p.x + p.velocityX,
            scale: p.scale + 0.05,
          }))
          .filter((p) => p.opacity > 0)
      );
    }, 30);

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
          className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9998]"
          style={{
            left: particle.x - 32,
            top: particle.y - 32,
            opacity: particle.opacity * 0.6,
            transform: `scale(${particle.scale})`,
            background: `radial-gradient(circle, rgba(147, 51, 234, ${0.6 * particle.opacity}) 0%, rgba(192, 132, 252, ${0.3 * particle.opacity}) 40%, transparent 70%)`,
            filter: 'blur(12px)',
            boxShadow: `0 0 30px rgba(147, 51, 234, ${0.4 * particle.opacity})`,
          }}
        />
      ))}
    </>
  );
};
