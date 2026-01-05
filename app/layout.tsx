import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. Configurando a fonte principal (Moderna/Geométrica)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// 2. Configurando a fonte de código (Estilo Hacker/Terminal)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev. Junior | Portfólio Fullstack", // Edite com seu nome aqui
  description: "Portfólio interativo desenvolvido com Next.js, Tailwind e Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased bg-[#050a14] selection:bg-[#00f2ff] selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}