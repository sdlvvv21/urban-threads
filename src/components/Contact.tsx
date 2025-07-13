"use client";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/urbanthreads",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <rect width="20" height="20" x="2" y="2" rx="5" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" strokeWidth="2" />
        <circle cx="17" cy="7" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@urbanthreads",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path d="M16 2v4a4 4 0 004 4h2v4a8 8 0 11-8-8h2z" strokeWidth="2" />
      </svg>
    ),
  },
];

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-black">
      <div className="max-w-2xl mx-auto px-4 text-center">
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
          Contact
        </motion.h2>
        <motion.div 
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
          className="mb-4 text-lg font-medium"
        >
          <p>Email: <a href="mailto:info@urbanthreads.com" className="underline hover:text-gray-700 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94]">info@urbanthreads.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="underline hover:text-gray-700 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94]">+1 (234) 567-890</a></p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            delay: 0.5, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 60,
            damping: 35
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center gap-6 mt-6"
        >
          {socials.map((s, index) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.7 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.2, 
                color: "#4B5563",
                transition: { 
                  duration: 0.4, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }
              }}
              className="text-black transition-colors duration-500 ease-[0.25,0.46,0.45,0.94]"
              aria-label={s.name}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 