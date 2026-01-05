// @ts-nocheck
'use client';

import { Database, Code2, Server, Terminal, Wifi, Layout, GitBranch, Cpu, Globe } from 'lucide-react';

export default function TechTicker() {
  // Lista de Tecnologias baseada no seu perfil
  const techs = [
    { name: "NEXT.JS 15", icon: <Globe size={16} /> },
    { name: "REACT", icon: <Code2 size={16} /> },
    { name: "TYPESCRIPT", icon: <Code2 size={16} /> },
    { name: "NODE.JS", icon: <Server size={16} /> },
    { name: "SQL DATABASE", icon: <Database size={16} /> },
    { name: "TAILWIND CSS", icon: <Layout size={16} /> },
    { name: "REDES / INFRA", icon: <Wifi size={16} /> },
    { name: "LINUX / BASH", icon: <Terminal size={16} /> },
    { name: "GIT / GITHUB", icon: <GitBranch size={16} /> },
    { name: "API REST", icon: <Cpu size={16} /> },
  ];

  // Duplicamos a lista para garantir o loop infinito sem buracos
  const items = [...techs, ...techs];

  return (
    <section className="py-8 bg-[#02040a] border-y border-[#00f2ff]/10 relative overflow-hidden">
      
      {/* Máscaras de Gradiente nas laterais (para suavizar a entrada/saída) */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#02040a] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#02040a] to-transparent z-10" />

      {/* Container da Animação */}
      <div className="flex w-full overflow-hidden hover:pause">
        <div className="flex animate-scroll whitespace-nowrap">
          {items.map((tech, index) => (
            <div 
              key={index} 
              className="mx-4 flex items-center gap-2 px-6 py-2 border border-slate-800 rounded-full bg-[#050a14] text-slate-400 hover:border-[#00f2ff] hover:text-[#00f2ff] hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all cursor-default group"
            >
              <span className="group-hover:animate-pulse">{tech.icon}</span>
              <span className="font-mono text-sm font-bold tracking-wider">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}