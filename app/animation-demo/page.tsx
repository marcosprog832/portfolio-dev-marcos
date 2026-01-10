"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NeuralNetworkPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Variável para rastrear o mouse
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150
    };

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener("mouseout", () => {
      mouse.x = null;
      mouse.y = null;
    });

    const particleColor = "#00f2ff"; 
    const particleCount = 80; 
    const connectionDistance = 140; 
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      // REMOVIDO: baseX e baseY (não precisamos deles aqui)
      density: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
        this.density = (Math.random() * 30) + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Lógica de repulsão do mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;

            this.x -= directionX;
            this.y -= directionY;
          }
        }

        // Rebater nas bordas
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        for (let j = index; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(0, 242, 255, ${opacity})`; 
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#050a14]/90 flex flex-col overflow-hidden font-mono text-slate-300">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0" 
      />

      <div className="absolute top-8 left-8 z-50 pointer-events-auto">
        <Link 
          href="/" 
          className="group flex items-center gap-3 text-[#00f2ff] hover:text-white transition-colors duration-300"
        >
          <div className="p-2 rounded-full border border-[#00f2ff]/30 group-hover:border-[#00f2ff] group-hover:shadow-[0_0_15px_rgba(0,242,255,0.5)] transition-all">
            <ArrowLeft size={20} />
          </div>
          <span className="text-sm tracking-widest font-bold drop-shadow-[0_0_5px_rgba(0,242,255,0.8)]">
            VOLTAR AO INÍCIO
          </span>
        </Link>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-4 pointer-events-none">
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#00f2ff] to-cyan-700 drop-shadow-[0_0_30px_rgba(0,242,255,0.4)] tracking-tighter mb-4">
          NEURAL
          <br />
          NETWORK
        </h1>
        <p className="text-[#ff0055] font-bold tracking-[0.3em] text-lg md:text-xl drop-shadow-[0_0_10px_rgba(255,0,85,0.6)] animate-pulse">
          SYSTEM BREACH DETECTED
        </p>
      </div>
      
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050a14_100%)] z-20 opacity-80"></div>
    </div>
  );
}