// @ts-nocheck
import CyberNav from '@/components/CyberNav';
import HeroSection from '@/components/HeroSection';
import TechTicker from '@/components/TechTicker';
import AboutMatrix from '@/components/AboutMatrix'; // <--- Adicionei esta importação
import ProjectShowcase from '@/components/ProjectShowcase';
import ContactTerminal from '@/components/ContactTerminal';
import NerdDivider from '@/components/NerdDivider';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CyberNav />
      
      {/* Seção Hero (Entrada) */}
      <HeroSection />
      <TechTicker />
      
      {/* Seção Sobre (Cartão Digital) */}
      <AboutMatrix />
      <ProjectShowcase />
      <NerdDivider />
      <ContactTerminal />
      <ScrollToTop />

      {/* Espaço temporário para testar o scroll */}
      
    </main>
  );
}