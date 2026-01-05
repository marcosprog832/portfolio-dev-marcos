// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { Terminal, User, Code, Mail, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function CyberNav() {
  const navItems = [
    { name: 'HOME', icon: <Terminal size={18} />, href: '#home' },
    { name: 'SOBRE', icon: <User size={18} />, href: '#sobre' },
    { name: 'PROJETOS', icon: <Code size={18} />, href: '#projetos' },
    { name: 'CONTATO', icon: <Mail size={18} />, href: '#contato' },
  ];

  return (
    // TROCAMOS PARA motion.div (A solução infalível)
    // A classe 'fixed' garante que ele se comporte como um cabeçalho fixo
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto backdrop-blur-md bg-[#050a14]/80 border border-[#00f2ff]/30 rounded-full px-8 py-3 flex items-center gap-8 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
        
        {/* Logo / Ícone Principal */}
        <div className="text-[#ff0055] mr-4 animate-pulse">
          <Cpu size={24} />
        </div>

        {/* Links de Navegação */}
        <nav>
            <ul className="flex gap-6 md:gap-10">
            {navItems.map((item, index) => (
                <li key={index}>
                <Link 
                    href={item.href}
                    className="group flex items-center gap-2 text-xs md:text-sm font-mono font-bold text-slate-400 hover:text-[#00f2ff] transition-all"
                >
                    <span className="group-hover:drop-shadow-[0_0_5px_#00f2ff] transition-all">
                    {item.icon}
                    </span>
                    <span className="hidden md:block tracking-widest group-hover:text-glow-blue">
                    {item.name}
                    </span>
                </Link>
                </li>
            ))}
            </ul>
        </nav>
      </div>
    </motion.div>
  );
}