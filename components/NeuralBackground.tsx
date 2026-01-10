"use client";

import React, { useEffect, useRef } from 'react';

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Ajusta o tamanho
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Configuração das partículas
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      update: () => void;
      draw: () => void;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(window.innerWidth / 15, 100); 
    const connectionDistance = 120;

    class ParticleImpl implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.size = Math.random() * 2 + 1;
        this.color = '#00f3ff'; // Azul Neon
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0; // Limpa array
      for (let i = 0; i < particleCount; i++) {
        particles.push(new ParticleImpl());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Fundo semi-transparente para rastro
      ctx.fillStyle = 'rgba(0, 0, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Gradiente Vermelho sutil no centro
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, 'rgba(255, 0, 51, 0.03)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Desenha
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 243, 255, ${1 - distance / connectionDistance})`; 
            ctx.lineWidth = 0.5;
            ctx.shadowBlur = 5;
            ctx.shadowColor = '#00f3ff';
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[-1] bg-[#000014] pointer-events-none"
    />
  );
};

export default NeuralBackground;