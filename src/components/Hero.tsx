"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const handleShopNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    
    // Wait for fade-out animation to complete, then scroll
    scrollToSection('featured', 500);
    
    // Reset animation state after scroll completes
    setTimeout(() => setIsAnimating(false), 1500);
  };

  return (
    <motion.section 
      className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden"
      animate={isAnimating ? { opacity: 0, y: -80 } : { opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 60,
        damping: 30
      }}
    >
      <Image
        src="/hero-placeholder.jpg"
        alt="Urban Threads Hero"
        layout="fill"
        objectFit="cover"
        className="opacity-60"
        priority
      />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 uppercase"
        >
          Urban Threads
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            delay: 0.4, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 80,
            damping: 25
          }}
          className="text-xl md:text-2xl mb-8 font-medium text-gray-200"
        >
          Elevate Your Essentials
        </motion.p>
        <motion.button 
          onClick={handleShopNowClick}
          disabled={isAnimating}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            delay: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 120,
            damping: 18
          }}
          whileHover={!isAnimating ? { 
            scale: 1.05,
            transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
          } : {}}
          whileTap={!isAnimating ? { 
            scale: 0.92,
            transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
          } : {}}
          className={`px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
            isAnimating 
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          {isAnimating ? 'Loading...' : 'Shop Now'}
        </motion.button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />
    </motion.section>
  );
} 