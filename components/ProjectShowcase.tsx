'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, MonitorPlay } from 'lucide-react';
import Link from 'next/link';

export default function ProjectShowcase() {
  // Seus projetos reais baseados no nosso histórico
  const projects = [
    {
      title: "HOFFMANN SOLUÇÕES TECNOLOGICAS",
      category: "Institucional / Next.js",
      desc: "Portal corporativo de alta performance para soluções de energia e segurança. Integração com WhatsApp e sistema de franquias.",
      techs: ["React", "Tailwind", "Framer Motion"],
      color: "border-[#00f2ff] shadow-[#00f2ff]/20", // Ciano
      glow: "group-hover:shadow-[0_0_30px_rgba(0,242,255,0.3)]",
      link_repo: "https://marcosprog832.github.io/hoffmann/",
      link_demo: "https://marcosprog832.github.io/hoffmann/"
    },
    {
      title: "CONSTRUA.PRO",
      category: "Marketplace / Fullstack",
      desc: "Plataforma conectando engenheiros e pedreiros. Sistema complexo de filtros, perfis profissionais e avaliações.",
      techs: ["Node.js", "PostgreSQL", "Next.js"],
      color: "border-[#ff0055] shadow-[#ff0055]/20", // Magenta
      glow: "group-hover:shadow-[0_0_30px_rgba(255,0,85,0.3)]",
      link_repo: "https://construa.pro/",
      link_demo: "https://construa.pro/"
    },
    {
      title: "TELECOM NORMAS",
      category: "Pessoal / Design",
      desc: "Este site que você está vendo. Interface imersiva estilo Cyberpunk com animações reativas e performance máxima.",
      techs: ["TypeScript", "Lucide Icons", "Neon UI"],
      color: "border-[#00f2ff] shadow-[#00f2ff]/20",
      glow: "group-hover:shadow-[0_0_30px_rgba(0,242,255,0.3)]",
      link_repo: "Telecomnormas.com.br",
      link_demo: "https://www.telecomnormas.com.br/"
    }
  ];

  return (
    <section id="projetos" className="py-24 bg-[#050a14] relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f2ff]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Título da Seção */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        {/* @ts-ignore */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[#ff0055] font-mono text-sm tracking-widest mb-2">// SISTEMA DE ARQUIVOS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            PROJETOS <span className="text-[#00f2ff] text-glow-blue">EXECUTADOS</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00f2ff] to-[#ff0055] rounded-full" />
        </motion.div>
      </div>

      {/* Grid de Projetos */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          // @ts-ignore
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`group relative bg-[#0a1120] rounded-xl overflow-hidden border ${project.color} transition-all duration-500 hover:-translate-y-2 ${project.glow}`}
          >
            {/* Header do Card (Simulando uma pasta ou tela) */}
            <div className="h-48 bg-[#02040a] relative flex items-center justify-center overflow-hidden border-b border-slate-800">
                {/* Grid animado no fundo do card */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                
                <FolderGit2 className="text-slate-700 group-hover:text-[#00f2ff] transition-colors duration-500" size={64} />
                
                {/* Overlay colorido ao passar o mouse */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${project.color.includes('00f2ff') ? 'bg-[#00f2ff]' : 'bg-[#ff0055]'}`} />
            </div>

            {/* Corpo do Card */}
            <div className="p-6 relative z-20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1 tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00f2ff] transition-colors">{project.title}</h3>
                </div>
                <Link href={project.link_repo} className="text-slate-600 hover:text-white transition-colors">
                  <Github size={20} />
                </Link>
              </div>

              <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                {project.desc}
              </p>

              {/* Tags Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech, i) => (
                  <span key={i} className="text-[10px] font-mono border border-slate-800 px-2 py-1 rounded text-slate-300 bg-[#050a14]">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botão Deploy */}
              <Link href={project.link_demo} className="w-full flex items-center justify-center gap-2 py-3 rounded bg-slate-800 hover:bg-[#00f2ff] hover:text-black transition-all text-sm font-bold text-white group-hover:shadow-[0_0_15px_rgba(0,242,255,0.4)]">
                <MonitorPlay size={16} />
                ACESSAR SISTEMA
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}