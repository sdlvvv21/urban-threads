"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  // Removed unused isScrolled state
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );

  // Removed useEffect and handleScroll related to isScrolled

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 25
          }}
          className="text-white font-bold text-xl uppercase tracking-wider"
        >
          Urban Threads
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1.0, 
            delay: 0.3, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 25
          }}
          className="hidden md:flex space-x-8"
        >
          <a href="#" className="text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94] font-medium">Home</a>
          <a href="#featured" className="text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94] font-medium">Shop</a>
          <a href="#collections" className="text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94] font-medium">Collections</a>
          <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94] font-medium">About</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94] font-medium">Contact</a>
        </motion.div>
      </div>
    </motion.nav>
  );
} 