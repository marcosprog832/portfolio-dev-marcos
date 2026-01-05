'use client';

import { motion } from 'framer-motion';

export default function NerdDivider() {
  return (
    <section className="py-16 bg-[#050a14] relative overflow-hidden flex justify-center items-center">
      
      {/* Linha do tempo decorativa */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent"></div>
      </div>

      {/* Container da Animação */}
      {/* @ts-ignore */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-4 bg-[#0a1120] border border-[#00f2ff]/30 rounded-full shadow-[0_0_30px_rgba(0,242,255,0.1)]"
      >
        {/* SVG do Nerd com Café Animado */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          {/* Fumaça Animada (3 ondas) */}
          <g className="text-slate-400">
            <path className="animate-smoke" d="M60 30C60 30 65 25 60 20C55 15 60 10 60 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path className="animate-smoke delay-1000" d="M68 32C68 32 73 27 68 22C63 17 68 12 68 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path className="animate-smoke delay-2000" d="M52 32C52 32 57 27 52 22C47 17 52 12 52 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Personagem Nerd */}
          {/* Cabeça */}
          <rect x="40" y="40" width="40" height="40" rx="8" fill="#FFCC99" />
          {/* Cabelo */}
          <path d="M40 48C40 40 45 35 60 35C75 35 80 40 80 48V50H40V48Z" fill="#663300"/>
          {/* Óculos */}
          <g fill="#00f2ff">
            <rect x="42" y="55" width="14" height="10" rx="2" stroke="#050a14" strokeWidth="2" fillOpacity="0.5" />
            <rect x="64" y="55" width="14" height="10" rx="2" stroke="#050a14" strokeWidth="2" fillOpacity="0.5" />
            <line x1="56" y1="60" x2="64" y2="60" stroke="#050a14" strokeWidth="2" />
          </g>
          {/* Sorriso */}
          <path d="M55 72C55 72 58 75 60 75C62 75 65 72 65 72" stroke="#CC6600" strokeWidth="2" strokeLinecap="round"/>

          {/* Corpo/Camiseta */}
          <rect x="35" y="80" width="50" height="40" rx="10" fill="#00f2ff" />
          <path d="M55 85L60 90L65 85" stroke="#050a14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Caneca de Café */}
          <g transform="translate(10, 10)">
            <rect x="65" y="70" width="20" height="25" rx="4" fill="#ffffff" stroke="#050a14" strokeWidth="2" />
            <path d="M85 75C90 75 92 78 92 82C92 86 90 89 85 89" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <rect x="68" y="73" width="14" height="2" rx="1" fill="#663300" /> {/* Café dentro */}
          </g>
        </svg>
        
        <div className="text-center mt-2 font-mono text-[10px] text-[#00f2ff]">
          // RECARREGANDO ENERGIA...
        </div>
      </motion.div>

    </section>
  );
}