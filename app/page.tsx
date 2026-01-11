// @ts-nocheck
import Link from 'next/link'; // <--- Importante para o botão funcionar
import CyberNav from '@/components/CyberNav';
import HeroSection from '@/components/HeroSection';
import TechTicker from '@/components/TechTicker';
import AboutMatrix from '@/components/AboutMatrix';
import ProjectShowcase from '@/components/ProjectShowcase';
import ContactTerminal from '@/components/ContactTerminal';
import NerdDivider from '@/components/NerdDivider';
import ScrollToTop from '@/components/ScrollToTop';
import NeuralBackground from '@/components/NeuralBackground'; // <--- Importando o Fundo Animado

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black text-white selection:bg-[#ff0033] selection:text-white">
      
      {/* 1. FUNDO ANIMADO (Fica atrás de tudo) */}
      <NeuralBackground />

      {/* Envolvemos o conteúdo num div com z-index para ficar SOBRE o fundo */}
      <div className="relative z-10">
        
        <CyberNav />
        
        {/* Seção Hero (Entrada) */}
        <HeroSection />

        {/* --- NOVO BOTÃO CHAMATIVO (Azul Neon -> Vermelho) --- */}
        <div className="flex justify-center -mt-8 mb-16 relative z-20 px-4">
  <Link href="/animation-demo"> {/* Mantém o link para a página neural */}
    <button className="group relative px-8 py-4 font-bold rounded-full border-[2px] border-[#00f3ff] text-[#00f3ff] bg-black/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#ff0033] hover:text-[#ff0033] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,51,0.6)] shadow-[0_0_15px_rgba(0,243,255,0.4)]">
      <span className="relative z-10 tracking-[3px] uppercase text-sm md:text-base flex items-center gap-2">
        {/* Ícone de livro ou código fica legal aqui */}
        📚 DESBLOQUEAR O EBOOK: DOMINANDO NEXT.JS
      </span>
      {/* Brilho interno */}
      <div className="absolute inset-0 bg-[#ff0033]/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </button>
  </Link>
</div>
        {/* ----------------------------------------------------- */}

        <TechTicker />
        
        {/* Seção Sobre (Cartão Digital) */}
        <AboutMatrix />
        <ProjectShowcase />
        <NerdDivider />
        <ContactTerminal />
      </div>

      <ScrollToTop />
    </main>
  );
}