"use client";

const collections = [
  {
    name: "Core Collection",
    image: "/collection-core.jpg",
    link: "#core",
  },
  {
    name: "Street Essentials",
    image: "/collection-street.jpg",
    link: "#street",
  },
  {
    name: "Seasonal Drops",
    image: "/collection-seasonal.jpg",
    link: "#seasonal",
  },
];

import Image from "next/image";
import { motion } from "framer-motion";

export default function Collections() {
  return (
    <section id="collections" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
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
          className="text-3xl md:text-4xl font-bold mb-10 text-center uppercase tracking-wide"
        >
          Collections
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((col, index) => (
            <motion.a
              key={col.name}
              href={col.link}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.9, 
                delay: index * 0.25,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 80,
                damping: 25
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  duration: 0.5, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }
              }}
              className="relative group rounded-lg overflow-hidden shadow-lg block"
            >
              <div className="overflow-hidden">
                <Image
                  src={col.image}
                  alt={col.name}
                  width={500}
                  height={600}
                  className="object-cover w-full h-80 group-hover:scale-125 transition-transform duration-800 ease-[0.25,0.46,0.45,0.94]"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-600 ease-[0.25,0.46,0.45,0.94]">
                <motion.span 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  className="text-white text-2xl font-bold uppercase tracking-wider"
                >
                  {col.name}
                </motion.span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 