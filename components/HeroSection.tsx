'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownCircle } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 bg-[#050a14]">
      
      {/* Background Tech Effects (Grid e Luzes) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f2ff]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff0055]/10 rounded-full blur-[100px]" />
      </div>

      {/* Conteúdo Principal Centralizado */}
      <div className="z-10 text-center px-4 flex flex-col items-center">
        
        {/* Badge Futurista */}
        {/* @ts-ignore */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8 px-4 py-1 border border-[#ff0055] rounded-full bg-[#ff0055]/10"
        >
          <span className="text-[#ff0055] text-xs font-mono tracking-[0.2em] uppercase">
            System Online • Portfolio v2.0
          </span>
        </motion.div>

        {/* Container Flex para Imagem e Nome */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          
          {/* Sua Imagem com Moldura Neon */}
          {/* @ts-ignore */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // Aumentei um pouco o tamanho do círculo para a foto caber melhor
            className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-r from-[#00f2ff] to-[#ff0055] shadow-[0_0_30px_rgba(0,242,255,0.3)]"
          >
            {/* Glow pulsante atrás da foto */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00f2ff] to-[#ff0055] blur-md opacity-50 animate-pulse"></div>
            
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#050a14] border-4 border-[#050a14]">
              <Image 
                src="/imagens/perfil.png"
                alt="Dev. Marcos"
                fill
                // AQUI ESTÁ A CORREÇÃO:
                // 'object-cover' preenche o círculo.
                // 'object-top' alinha a imagem no topo, evitando cortar a cabeça.
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Nome Principal com Efeito Glitch/Glow */}
          {/* @ts-ignore */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mt-4 md:mt-0"
          >
            DEV. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0066ff] text-glow-blue">
              MARCOS
            </span>
          </motion.h1>
        </div>

        {/* Texto Digitado (Typewriter Effect) */}
        {/* @ts-ignore */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-400 font-mono h-[60px] md:h-[40px]"
        >
          <span>Eu desenvolvo </span>
          <TypeAnimation
            sequence={[
              'Soluções em Next.js',
              1500,
              'Interfaces Futuristas',
              1500,
              'Sistemas Complexos',
              1500,
              'Experiências Digitais',
              1500
            ]}
            wrapper="span"
            speed={50}
            className="text-[#ff0055] font-bold"
            repeat={Infinity}
          />
        </motion.div>
      </div>

      {/* Indicador de Scroll Animado */}
      {/* @ts-ignore */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 z-10 text-[#00f2ff]/50"
      >
        <ArrowDownCircle size={32} />
      </motion.div>

    </section>
  );
}