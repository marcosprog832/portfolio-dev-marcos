// @ts-nocheck
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Instagram, MapPin } from 'lucide-react';

export default function ContactTerminal() {
  const [formState, setFormState] = useState({
    name: '',
    message: ''
  });

  const handleSend = () => {
    // SEU NÚMERO REAL AQUI (Código do país 55 + DDD 66 + Número)
    const phone = "5566992427779"; 
    
    // Mensagem padrão que chegará no seu WhatsApp
    const text = `Olá Marcos! Sou ${formState.name}. Vim pelo seu portfólio e gostaria de falar sobre: ${formState.message}`;
    
    // Abre o WhatsApp Web ou App
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-[#02040a] relative overflow-hidden">
      
      {/* Grid de fundo sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Cabeçalho do Terminal */}
          {/* @ts-ignore */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-2">
              INICIAR <span className="text-[#00f2ff] text-glow-blue">TRANSMISSÃO</span>
            </h2>
            <p className="text-slate-500 font-mono text-sm">
              &gt; Canal seguro estabelecido. Aguardando input de dados...
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Lado Esquerdo: Infos de Contato Reais */}
            {/* @ts-ignore */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-[#050a14] p-8 rounded-xl border border-slate-800 hover:border-[#ff0055]/50 transition-colors group">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ff0055] rounded-full animate-pulse" />
                  CANAIS DIRETOS
                </h3>
                
                <div className="space-y-6">
                  {/* EMAIL */}
                  <div className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                    <div className="p-3 bg-slate-900 rounded-lg text-[#00f2ff]"><Mail size={20} /></div>
                    <div>
                      <p className="text-xs font-mono text-slate-500">EMAIL_PROTOCOL</p>
                      <a href="mailto:marcosporg1@gmail.com" className="font-bold hover:text-[#00f2ff] transition-colors">
                        marcosporg1@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* WHATSAPP */}
                  <div className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                    <div className="p-3 bg-slate-900 rounded-lg text-[#00f2ff]"><Phone size={20} /></div>
                    <div>
                      <p className="text-xs font-mono text-slate-500">VOICE_LINK</p>
                      <a href="https://wa.me/5566992427779" target="_blank" className="font-bold hover:text-[#00f2ff] transition-colors">
                        +55 (66) 99242-7779
                      </a>
                    </div>
                  </div>

                  {/* INSTAGRAM (NOVO) */}
                  <div className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                    <div className="p-3 bg-slate-900 rounded-lg text-[#00f2ff]"><Instagram size={20} /></div>
                    <div>
                      <p className="text-xs font-mono text-slate-500">SOCIAL_FEED</p>
                      <a href="https://instagram.com/ps_marcos" target="_blank" className="font-bold hover:text-[#00f2ff] transition-colors">
                        @ps_marcos
                      </a>
                    </div>
                  </div>

                  {/* LOCALIZAÇÃO */}
                  <div className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                    <div className="p-3 bg-slate-900 rounded-lg text-[#00f2ff]"><MapPin size={20} /></div>
                    <div>
                      <p className="text-xs font-mono text-slate-500">BASE_COORDS</p>
                      <p className="font-bold">Sinop, MT - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lado Direito: Formulário Terminal */}
            {/* @ts-ignore */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#0a1120] p-8 rounded-xl border border-[#00f2ff]/30 shadow-[0_0_20px_rgba(0,242,255,0.05)] relative overflow-hidden"
            >
              {/* Scanline decoration */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent opacity-50 animate-scan" />

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-[#00f2ff] font-mono text-xs mb-2 block">&gt; NOME_DO_REMETENTE:</label>
                  <input 
                    type="text" 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="Digite sua identificação..."
                    className="w-full bg-[#050a14] border border-slate-700 rounded p-3 text-white focus:border-[#00f2ff] focus:shadow-[0_0_10px_rgba(0,242,255,0.2)] outline-none transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="text-[#00f2ff] font-mono text-xs mb-2 block">&gt; MENSAGEM_DE_TEXTO:</label>
                  <textarea 
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Descreva a missão..."
                    className="w-full bg-[#050a14] border border-slate-700 rounded p-3 text-white focus:border-[#00f2ff] focus:shadow-[0_0_10px_rgba(0,242,255,0.2)] outline-none transition-all font-mono resize-none"
                  />
                </div>

                <button 
                  onClick={handleSend}
                  className="w-full bg-[#00f2ff] text-black font-bold py-4 rounded flex items-center justify-center gap-2 hover:brightness-110 hover:scale-[1.02] transition-all"
                >
                  <Send size={18} />
                  EXECUTAR ENVIO
                </button>
                
                <p className="text-center text-slate-600 text-[10px] font-mono mt-4">
                  // MENSAGEM CRIPTOGRAFADA END-TO-END VIA WHATSAPP API
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}