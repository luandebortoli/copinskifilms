'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Array de logos (1 a 26)
const logos = Array.from({ length: 26 }, (_, i) => `/images/logo${i + 1}.png`);

// Duplicamos o array para criar um efeito contínuo sem pausas
const duplicatedLogos = [...logos, ...logos];

export default function Testimonials() {
  return (
    <motion.section
      className="section-padding bg-bordeux"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

        {/* Seção de Logos em Esteira */}
        <div className="text-center mb-12 overflow-hidden">
          <h3 className="text-2xl md:text-5xl font-bold text-offwhite mb-16">
            Marcas que já trabalharam conosco
          </h3>
          
            <div className="relative w-full h-40 md:h-48">
            {/* Primeira esteira */}
            <motion.div
              className="absolute top-0 left-0 flex items-center gap-8 md:gap-12"
              animate={{
              x: ["0%", "-100%"],
              }}
              transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={120}
                height={60}
                className="object-contain h-16 md:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              ))}
            </motion.div>

            {/* Segunda esteira (mais separada da primeira) */}
            <motion.div
              className="absolute left-0 flex items-center gap-8 md:gap-12"
              style={{ top: "60%" }}
              animate={{
              x: ["-100%", "0%"],
              }}
              transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={120}
                height={60}
                className="object-contain h-16 md:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              ))}
            </motion.div>
          </div>
        </div>
    </motion.section>
  );
}