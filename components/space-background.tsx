"use client";

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { SpaceIcons } from './space-icons';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: 'star' | 'planet' | 'moon' | 'spaceship' | 'asteroid';
  rotation: number;
  rotationSpeed: number;
}

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = prefersReducedMotion ? 50 : 200;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.5),
          vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0 : 0.5),
          size: Math.random() * 5 + 2,
          opacity: Math.random() * 0.6 + 0.2,
          type: Math.random() < 0.6 ? 'star' : 
                Math.random() < 0.75 ? 'planet' : 
                Math.random() < 0.85 ? 'moon' : 
                Math.random() < 0.95 ? 'spaceship' : 'asteroid',
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02
        });
      }
      return particles;
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      if (theme === 'dark') {
        gradient.addColorStop(0, 'rgba(15, 23, 42, 1)');
        gradient.addColorStop(0.5, 'rgba(30, 41, 59, 1)');
        gradient.addColorStop(1, 'rgba(51, 65, 85, 1)');
      } else {
        gradient.addColorStop(0, 'rgba(148, 163, 184, 0.3)');
        gradient.addColorStop(0.5, 'rgba(203, 213, 225, 0.2)');
        gradient.addColorStop(1, 'rgba(241, 245, 249, 0.1)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        if (!prefersReducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }

        // Draw particle based on type
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        if (!prefersReducedMotion) {
          particle.rotation += particle.rotationSpeed;
        }

        const color = theme === 'dark' ? '#ffffff' : '#64748b';
        ctx.fillStyle = color;
        ctx.strokeStyle = color;

        const scale = particle.size / 12;
        ctx.scale(scale, scale);

        // Draw SVG paths for each type
        ctx.beginPath();
        const icon = SpaceIcons[particle.type];
        if (icon && icon.props.children) {
          const path = icon.props.children;
          if (Array.isArray(path)) {
            path.forEach(p => {
              if (p.props && p.props.d) {
                const pathObj = new Path2D(p.props.d);
                ctx.fill(pathObj);
              }
            });
          } else if (path.props && path.props.d) {
            const pathObj = new Path2D(path.props.d);
            ctx.fill(pathObj);
          }
        }

        // Add twinkle effect for stars
        if (particle.type === 'star' && !prefersReducedMotion && Math.random() < 0.01) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = color;
          ctx.fill();
        }
        
        ctx.restore();
      });

      if (!prefersReducedMotion) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    resizeCanvas();
    particlesRef.current = createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      particlesRef.current = createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}