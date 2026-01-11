'use client';

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion'
import { Send, Mail, Phone, Instagram, MapPin } from 'lucide-react';



type FormState = {
  name: string;
  message: string;
};

export default function ContactTerminal() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    message: '',
  });

  const handleSend = () => {
    if (!formState.name.trim() || !formState.message.trim()) {
      return;
    }

    const phone = '5566992427779';
    const text = `Olá Marcos! Sou ${formState.name}. Vim pelo seu portfólio e gostaria de falar sobre: ${formState.message}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <section id="contato" className="py-24 bg-[#02040a] relative overflow-hidden">
      {/* Grid de fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Cabeçalho */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
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

            {/* Infos de contato */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-[#050a14] p-8 rounded-xl border border-slate-800 hover:border-[#ff0055]/50 transition-colors group">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ff0055] rounded-full animate-pulse" />
                  CANAIS DIRETOS
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                    <div className="p-3 bg-slate-900 rounded-lg text-[#00f2ff]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-500">EMAIL_PROTOCOL</p>
                      <a
                        href="mailto:marcosporg1@gmail.com"
                        className="font-bold hover:text-[#00f2ff] transition-colors"
                      >
                        marcosporg1@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                    <div className="p-3 bg-slate-900 rounded-lg text-[#00f2ff]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-500">VOICE_LINK</p>
                      <a
                        href="https://wa.me/5566992427779"
                        target="_blank"
                        className="font-bold hover:text-[#00f2ff] transition-colors"
                        rel="noreferrer"
                      >
                        +55 (66) 99242-7779
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                    <div className="p-3 bg-slate-900 rounded-lg text-[#00f2ff]">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-500">SOCIAL_FEED</p>
                      <a
                        href="https://instagram.com/ps_marcos"
                        target="_blank"
                        className="font-bold hover:text-[#00f2ff] transition-colors"
                        rel="noreferrer"
                      >
                        @ps_marcos
                      </a>
                    </div>
                  </div>

                  {/* Localização */}
                  <div className="flex items-center gap-4 text-slate-400 group-hover:text-white transition-colors">
                    <div className="p-3 bg-slate-900 rounded-lg text-[#00f2ff]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-500">BASE_COORDS</p>
                      <p className="font-bold">Sinop, MT - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#0a1120] p-8 rounded-xl border border-[#00f2ff]/30 shadow-[0_0_20px_rgba(0,242,255,0.05)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent opacity-50 animate-scan" />

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="sr-only">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Digite sua identificação..."
                    className="w-full bg-[#050a14] border border-slate-700 rounded p-3 text-white font-mono focus:border-[#00f2ff] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Descreva a missão..."
                    className="w-full bg-[#050a14] border border-slate-700 rounded p-3 text-white font-mono resize-none focus:border-[#00f2ff] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Enviar mensagem pelo WhatsApp"
                  className="w-full bg-[#00f2ff] text-black font-bold py-4 rounded flex items-center justify-center gap-2 hover:brightness-110 hover:scale-[1.02] transition-all"
                >
                  <Send size={18} />
                  EXECUTAR ENVIO
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
