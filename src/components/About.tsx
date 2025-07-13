"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-black">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 70,
            damping: 30
          }}
          viewport={{ once: true, margin: "-150px" }}
          className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide"
        >
          About Urban Threads
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            delay: 0.3, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 60,
            damping: 35
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-lg md:text-xl text-gray-700 font-medium"
        >
          Urban Threads is inspired by the rhythm of the city. We believe in the power of minimalism, crafting essentials that elevate your everyday. Our pieces blend clean lines, muted tones, and premium materials—designed for those who value quality and understated style. Welcome to the new era of streetwear.
        </motion.p>
      </div>
    </section>
  );
} 