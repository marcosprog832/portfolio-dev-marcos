'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora o scroll para mostrar/esconder o botão
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-[#00f2ff] rounded-full shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:brightness-110 hover:scale-110 transition-all group"
        >
          {/* Efeito de propulsão */}
          <div className="absolute inset-0 rounded-full bg-[#00f2ff] animate-ping opacity-20"></div>
          
          <ArrowUp className="text-black group-hover:-translate-y-1 transition-transform font-bold" size={24} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}