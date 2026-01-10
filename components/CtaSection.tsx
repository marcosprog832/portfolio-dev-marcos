"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
         {/* Luz de fundo pulsante */}
         <motion.div
           animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           className="absolute w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[100px]"
         />
        {/* Feixes de dados (Data Streams) */}
        <DataStream initial={{ x: "-40vw", y: "-30vh", rotate: 45 }} delay={0} />
        <DataStream initial={{ x: "40vw", y: "-30vh", rotate: -45 }} delay={1.5} />
        <DataStream initial={{ x: "-40vw", y: "30vh", rotate: -45 }} delay={0.8} />
        <DataStream initial={{ x: "40vw", y: "30vh", rotate: 45 }} delay={2.2} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-2xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">
          <span className="text-green-500">{`<`}</span> Vamos Codar? <span className="text-green-500">{`/>`}</span>
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          Transforme ideias em sistemas robustos e seguros.
        </p>
        
        {/* Botão que leva para a Demo Visual */}
        <Link href="/animation-demo">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-3 px-8 py-4 font-bold text-black bg-green-500 rounded hover:bg-green-400 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)]"
          >
            <Mail className="w-5 h-5" /> 
            <span>INICIAR PROTOCOLO</span>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

// Sub-componente interno para os raios de luz
function DataStream({ initial, delay }: { initial: any, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, ...initial, scaleY: 0.5 }}
      animate={{
        opacity: [0, 1, 0], 
        x: ["0vw", "0vw"], 
        y: ["0vh", "0vh"],
        scaleY: [0.5, 2, 0.5], 
        scaleX: [1, 0.5, 0],
      }}
      transition={{ duration: 2, repeat: Infinity, delay: delay, ease: "easeInOut" }}
      className={`absolute top-1/2 left-1/2 w-[2px] h-60 bg-gradient-to-b from-transparent via-green-500 to-transparent blur-[1px] origin-bottom`}
    />
  );
}