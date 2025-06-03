
import React, { useState, useEffect } from 'react';
import { Database, BarChart3, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-cyber-dark py-4 fixed top-0 left-0 w-full z-30 border-b border-cyber-purple/20" role="banner">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative" aria-hidden="true">
            <Database className="h-8 w-8 text-cyber-blue" />
            <BarChart3 className="h-5 w-5 text-cyber-purple absolute -top-1 -right-1" />
          </div>
          <div>
            <a 
              href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Data Analysis & Report AI - Free AI Tools by AIWEBTOOLS.AI"
            >
              <h1 className="text-lg font-bold">
                <span className="cyber-text">Data Analysis & Report AI</span>
              </h1>
              <p className="text-xs opacity-70">Presented by AiWebTools.Ai</p>
            </a>
          </div>
        </div>

        {isSmallScreen ? (
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        ) : (
          <nav className="space-x-6" role="navigation" aria-label="Main navigation">
            <a href="#features" className="text-gray-300 hover:text-cyber-blue transition-colors" aria-label="View AI tool features">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-cyber-blue transition-colors" aria-label="Learn how our AI tools work">How It Works</a>
            <a href="#testimonials" className="text-gray-300 hover:text-cyber-blue transition-colors" aria-label="Read user testimonials">Testimonials</a>
            <a href="#faq" className="text-gray-300 hover:text-cyber-blue transition-colors" aria-label="Frequently asked questions">FAQ</a>
            <a
              href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-2 px-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-md hover:shadow-neon transition-all"
              aria-label="Use our free AI data analysis tool now"
            >
              USE Data Analysis & Report AI🌍
            </a>
          </nav>
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && isSmallScreen && (
          <motion.div
            className="bg-cyber-dark absolute top-full left-0 w-full py-4 px-6 border-b border-cyber-purple/20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-cyber-blue transition-colors block py-2" aria-label="View AI tool features">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-cyber-blue transition-colors block py-2" aria-label="Learn how our AI tools work">How It Works</a>
              <a href="#testimonials" className="text-gray-300 hover:text-cyber-blue transition-colors block py-2" aria-label="Read user testimonials">Testimonials</a>
              <a href="#faq" className="text-gray-300 hover:text-cyber-blue transition-colors block py-2" aria-label="Frequently asked questions">FAQ</a>
              <a
                href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-2 px-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-md hover:shadow-neon transition-all"
                aria-label="Use our free AI data analysis tool now"
              >
                USE Data Analysis & Report AI🌍
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
