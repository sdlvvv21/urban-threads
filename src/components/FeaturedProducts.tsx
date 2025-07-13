"use client";

const products = [
  {
    name: "Minimalist Hoodie",
    price: "$80",
    image: "/product-hoodie.jpg",
  },
  {
    name: "Urban Tee",
    price: "$40",
    image: "/product-tee.jpg",
  },
  {
    name: "Essential Joggers",
    price: "$70",
    image: "/product-joggers.jpg",
  },
  {
    name: "Street Cap",
    price: "$30",
    image: "/product-cap.jpg",
  },
];

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
      type: "spring",
      stiffness: 80,
      damping: 25,
    },
  },
};

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            ease: "easeInOut",
            type: "spring",
            stiffness: 70,
            damping: 30
          }}
          viewport={{ once: true, margin: "-150px" }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center uppercase tracking-wide"
        >
          Featured Products
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.name} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { 
                  duration: 0.5, 
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }
              }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow transition-all duration-500"
            >
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-64 hover:scale-110 transition-transform duration-700 ease-[0.25,0.46,0.45,0.94]"
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <span className="text-gray-600 font-bold">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 