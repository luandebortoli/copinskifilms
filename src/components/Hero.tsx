'use client';

import React from "react";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative h-[65dvh] sm:h-[100dvh] flex items-center justify-start overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 w-full h-full -z-10">
        <video
          src="/GIF Site.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-contain sm:object-cover w-full h-full absolute inset-0"
        />
      </div>

      {/* Desktop Version */}
      <motion.div
        className="hidden sm:block relative z-10 text-left text-white px-4 max-w-2xl ml-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-wider">
          <span className="text-offwhite">COPINSKI</span>{" "}
          <span className="text-offwhite">FILMS</span>
        </h1>

        <p className="text-xl md:text-xl bg-black/10 mb-8 leading-snug max-w-4xl font-light px-4 py-2 border rounded-4xl">
          <span className="font-bold">Videomaker</span> com mais de cinco anos de experiência no mercado, ajudo empresas
          e pessoas a realizar produções audiovisuais para comerciais, eventos,
          casamentos, festas, imobiliários entre outros.<br /><br />
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-bordeux" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
            <span>Baseado em Curitiba, PR.</span>
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <a
            href="https://wa.me/5541999094463"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bordeux/90 text-offwhite border-2 border-offwhite px-6 py-3 rounded-4xl font-semibold transition-colors duration-200 hover:bg-ashgray/90 hover:text-bordeux hover:border-bordeux flex items-center justify-center"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Mobile Version */}
      <motion.div
        className="sm:hidden absolute bottom-0 right-25 w-full z-10 flex flex-col items-center pb-12 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-xl font-bold mb-4 tracking-wider text-offwhite text-center drop-shadow-lg">
          COPINSKI FILMS
        </h1>
      </motion.div>
    </motion.section>
  );
}
