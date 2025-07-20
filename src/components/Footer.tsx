"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.nav 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring" as const,
            stiffness: 60,
            damping: 35
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-6 text-lg font-semibold uppercase"
        >
          <motion.a 
            href="#" 
            whileHover={{ 
              scale: 1.05, 
              color: "#9CA3AF",
              transition: { 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring" as const,
                stiffness: 300,
                damping: 25
              }
            }}
            className="hover:underline transition-colors duration-500 ease-[0.25,0.46,0.45,0.94]"
          >
            Home
          </motion.a>
          <motion.a 
            href="#featured" 
            whileHover={{ 
              scale: 1.05, 
              color: "#9CA3AF",
              transition: { 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring" as const,
                stiffness: 300,
                damping: 25
              }
            }}
            className="hover:underline transition-colors duration-500 ease-[0.25,0.46,0.45,0.94]"
          >
            Shop
          </motion.a>
          <motion.a 
            href="#collections" 
            whileHover={{ 
              scale: 1.05, 
              color: "#9CA3AF",
              transition: { 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring" as const,
                stiffness: 300,
                damping: 25
              }
            }}
            className="hover:underline transition-colors duration-500 ease-[0.25,0.46,0.45,0.94]"
          >
            Collections
          </motion.a>
          <motion.a 
            href="#about" 
            whileHover={{ 
              scale: 1.05, 
              color: "#9CA3AF",
              transition: { 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring" as const,
                stiffness: 300,
                damping: 25
              }
            }}
            className="hover:underline transition-colors duration-500 ease-[0.25,0.46,0.45,0.94]"
          >
            About
          </motion.a>
          <motion.a 
            href="#contact" 
            whileHover={{ 
              scale: 1.05, 
              color: "#9CA3AF",
              transition: { 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring" as const,
                stiffness: 300,
                damping: 25
              }
            }}
            className="hover:underline transition-colors duration-500 ease-[0.25,0.46,0.45,0.94]"
          >
            Contact
          </motion.a>
        </motion.nav>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            delay: 0.3, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring" as const,
            stiffness: 60,
            damping: 35
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-sm text-gray-400 font-medium text-center md:text-right"
        >
          &copy; {new Date().getFullYear()} Urban Threads. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
} 