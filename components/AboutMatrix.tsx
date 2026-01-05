// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { Database, Cpu, Code2, Zap, Network, Server } from 'lucide-react';

export default function AboutMatrix() {
  const skills = [
    { name: 'React / Next.js', level: 90, color: 'bg-[#00f2ff]' },
    { name: 'Node.js / API Rest', level: 85, color: 'bg-[#ff0055]' },
    { name: 'SQL / Database', level: 80, color: 'bg-[#00f2ff]' },
    { name: 'TypeScript', level: 75, color: 'bg-[#ff0055]' },
    { name: 'Tailwind CSS', level: 95, color: 'bg-[#00f2ff]' },
  ];

  return (
    <section id="sobre" className="py-24 relative bg-[#050a14] overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* @ts-ignore */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-[2px] w-12 bg-[#ff0055]" />
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
            DADOS DO <span className="text-[#00f2ff] text-glow-blue">OPERADOR</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Coluna 1: O "Cartão" de Identificação */}
          {/* @ts-ignore */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group h-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ff] to-[#ff0055] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            
            <div className="relative bg-[#0a1120] border border-slate-800 p-8 rounded-xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">DEV. MARCOS</h3>
                    <p className="text-[#ff0055] font-mono text-xs tracking-widest">CLASSE: FULLSTACK & INFRA</p>
                  </div>
                  <Cpu className="text-[#00f2ff] animate-spin-slow" size={32} />
                </div>

                <div className="text-slate-400 leading-relaxed mb-8 font-mono text-sm space-y-2">
                  <p>&gt; Iniciando varredura de perfil...</p>
                  <p>&gt; Desenvolvedor apaixonado por criar interfaces futuristas e sistemas robustos.</p>
                  <p>
                    <span className="text-[#00f2ff]">&gt; TÉCNICO EM TI:</span> Especialista em Redes de Computadores e Infraestrutura.
                  </p>
                  <p>
                    <span className="text-[#ff0055]">&gt; BANCO DE DADOS:</span> Modelagem e otimização em SQL.
                  </p>
                  <p>&gt; Status atual: Disponível para missões complexas.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-3">
                  <Network size={24} className="text-[#00f2ff]" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase">Especialidade</div>
                    <div className="font-bold text-white text-sm">Redes & Infra</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Server size={24} className="text-[#ff0055]" />
                  <div>
                    <div className="text-xs text-slate-500 uppercase">Backend</div>
                    <div className="font-bold text-white text-sm">SQL Expert</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna 2: Barras de Habilidade (Skills) */}
          <div className="space-y-8 mt-4 lg:mt-0">
            <h3 className="text-xl text-white font-mono flex items-center gap-2 mb-8">
              <Code2 size={20} className="text-[#00f2ff]" />
              CAPACIDADE DE PROCESSAMENTO
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 text-sm font-mono">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className={skill.color === 'bg-[#00f2ff]' ? 'text-[#00f2ff]' : 'text-[#ff0055]'}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    {/* @ts-ignore */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className={`h-full ${skill.color} shadow-[0_0_10px_currentColor] relative`}
                    >
                        <div className="absolute top-0 right-0 h-full w-1 bg-white animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}