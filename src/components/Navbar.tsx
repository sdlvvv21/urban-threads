"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import LoginModal from "./LoginModal";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const { scrollY } = useScroll();
  const { user, isAuthenticated, logout } = useAuth();
  const { state: cartState, toggleCart, getTotalItems } = useCart();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
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
              type: "spring" as const,
              stiffness: 100,
              damping: 25
            }}
            className="text-white font-bold text-xl uppercase tracking-wider"
          >
            Urban Threads
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring" as const,
              stiffness: 100,
              damping: 25
            }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94] font-medium">Home</a>
            <a href="#featured" className="text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94] font-medium">Shop</a>
            <a href="#collections" className="text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94] font-medium">Collections</a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94] font-medium">About</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94] font-medium">Contact</a>
            
            {/* Auth Button */}
            <button
              onClick={handleAuthClick}
              className="text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94] font-medium"
            >
              {isAuthenticated ? `Hi, ${user?.name}` : 'Sign In'}
            </button>
            
            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative text-white hover:text-gray-300 transition-colors duration-500 ease-[0.25,0.46,0.45,0.94]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black bg-opacity-95"
            >
              <div className="px-6 py-4 space-y-4">
                <a href="#" className="block text-white hover:text-gray-300 transition-colors font-medium">Home</a>
                <a href="#featured" className="block text-white hover:text-gray-300 transition-colors font-medium">Shop</a>
                <a href="#collections" className="block text-white hover:text-gray-300 transition-colors font-medium">Collections</a>
                <a href="#about" className="block text-white hover:text-gray-300 transition-colors font-medium">About</a>
                <a href="#contact" className="block text-white hover:text-gray-300 transition-colors font-medium">Contact</a>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <button
                    onClick={handleAuthClick}
                    className="text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    {isAuthenticated ? `Hi, ${user?.name}` : 'Sign In'}
                  </button>
                  
                  <button
                    onClick={toggleCart}
                    className="relative text-white hover:text-gray-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    {getTotalItems() > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {getTotalItems()}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={cartState.isOpen}
        onClose={() => toggleCart()}
      />
    </>
  );
} 
