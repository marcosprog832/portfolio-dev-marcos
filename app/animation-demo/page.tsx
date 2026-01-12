"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ShoppingCart, Zap } from "lucide-react";

export default function NeuralSalesPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // --- ANIMAÇÃO NEURAL (MANTIDA IGUAL) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    window.addEventListener("mousemove", (e) => { mouse.x = e.x; mouse.y = e.y; });
    window.addEventListener("mouseout", () => { mouse.x = null; mouse.y = null; });

    const particleColor = "#00f2ff"; 
    const particleCount = 50; 
    const connectionDistance = 140; 
    const particles: Particle[] = [];

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number; density: number;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.8; 
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2 + 1;
        this.density = (Math.random() * 30) + 1;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x; let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance; const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;
            this.x -= directionX; this.y -= directionY;
          }
        }
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor; ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.update(); particle.draw();
        for (let j = index; j < particles.length; j++) {
          const dx = particles[j].x - particle.x; const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(0, 242, 255, ${opacity})`; ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y); ctx.lineTo(particles[j].x, particles[j].y);
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
  // --- FIM DA ANIMAÇÃO ---

  return (
    <div className="relative w-full min-h-screen bg-[#050a14] font-sans text-slate-300 overflow-x-hidden selection:bg-[#00f2ff] selection:text-black">
      
      {/* CANVAS (FIXO) */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-50" />

      {/* BOTÃO VOLTAR */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/" className="group flex items-center gap-2 text-[#00f2ff] hover:text-white transition-colors bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-[#00f2ff]/20">
          <ArrowLeft size={16} /> <span className="text-xs font-bold tracking-widest">VOLTAR</span>
        </Link>
      </div>

      {/* LAYOUT PRINCIPAL (Z-INDEX 10) */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center py-20">
        
        {/* GRID DE DUAS COLUNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl items-center">
          
          {/* COLUNA ESQUERDA: COPY E BENEFÍCIOS (Ocupa 7 colunas) */}
          <div className="lg:col-span-7 space-y-6 bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
            <div>
              <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-[#00f2ff]/10 text-[#00f2ff] text-xs font-bold tracking-widest border border-[#00f2ff]/30 mb-4">
                <Zap size={12} fill="currentColor" /> OFERTA RELÂMPAGO
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                FRONT-END <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-cyan-600">PROFISSIONAL</span>
              </h1>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Pare de copiar código sem entender. Aprenda a lógica por trás do <strong>React, Next.js e Tailwind</strong> e construa portfólios que atraem recrutadores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
               <ListItem text="JavaScript Moderno (ES6+)" />
               <ListItem text="Next.js 14: Server Actions" />
               <ListItem text="Projetos Reais para Portfólio" />
               <ListItem text="VScode - Ambiente de Desenvolvimento" />
               <ListItem text="Integração : Vscode + GitHub + Vercel " />
              
            </div>
          </div>

          {/* COLUNA DIREITA: CARD DE PREÇO (Ocupa 5 colunas) */}
          <div className="lg:col-span-5 relative">
            {/* Efeito de brilho atrás do card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ff] to-[#ff0055] rounded-2xl blur-2xl opacity-20 animate-pulse"></div>

            <div className="relative bg-[#0a1120]/90 backdrop-blur-xl border border-[#00f2ff]/30 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center">
              
              <div className="mb-2 text-slate-400 text-sm font-mono uppercase tracking-widest">Acesso Vitalício</div>
              
              <div className="flex items-center gap-3 mb-6">
                 <span className="text-slate-500 line-through text-xl decoration-red-500/50">R$ 97,00</span>
                 <div className="flex flex-col items-start">
                    <span className="text-5xl font-black text-white tracking-tighter">R$ 9,97</span>
                 </div>
              </div>

              {/* BOTÃO DE CHECKOUT */}
              <a 
                href="https://pay.kiwify.com.br/8Flvy3m" 
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-4 bg-[#ff0055] hover:bg-[#d90045] text-white font-black rounded-lg text-lg tracking-wide shadow-[0_0_20px_rgba(255,0,85,0.4)] hover:shadow-[0_0_30px_rgba(255,0,85,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 mb-4"
              >
                <ShoppingCart size={24} className="group-hover:animate-bounce" />
                COMPRAR AGORA
              </a>

              <p className="text-xs text-slate-500 mb-6 px-4">
                Receba o PDF no seu e-mail imediatamente após a confirmação do pagamento.
              </p>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-4"></div>
              
              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                <CheckCircle size={12} className="text-[#00f2ff]" />
                <span>PAGAMENTO SEGURO</span>
                <span className="mx-1">•</span>
                <CheckCircle size={12} className="text-[#00f2ff]" />
                <span>ENTREGA AUTOMÁTICA</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

// Componente visual dos itens
function ListItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-300 bg-[#00f2ff]/5 p-2 rounded border border-[#00f2ff]/10">
      <CheckCircle size={14} className="text-[#00f2ff] min-w-[14px]" />
      <span>{text}</span>
    </div>
  );
}