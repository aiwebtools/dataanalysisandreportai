
import React, { useState, useEffect, useCallback } from 'react';
import { Database, BarChart3, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const small = window.innerWidth < 768;
      setIsSmallScreen(small);
      if (!small) setIsMenuOpen(false);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    checkScreenSize();
    handleScroll();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features', ariaLabel: 'View AI tool features' },
    { href: '#how-it-works', label: 'How It Works', ariaLabel: 'Learn how our AI tools work' },
    { href: '#testimonials', label: 'Testimonials', ariaLabel: 'Read user testimonials' },
    { href: '#faq', label: 'FAQ', ariaLabel: 'Frequently asked questions' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-dark/95 backdrop-blur-lg shadow-lg border-b border-cyber-purple/20' : 'bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-purple/10'
      }`} 
      role="banner"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="relative" aria-hidden="true">
            <Database className="h-7 w-7 sm:h-8 sm:w-8 text-cyber-blue" />
            <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-cyber-purple absolute -top-1 -right-1" />
          </div>
          <div className="min-w-0">
            <a 
              href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Data Analysis & Report AI - Free AI Tools by AIWEBTOOLS.AI"
            >
              <h1 className="text-base sm:text-lg font-bold leading-tight">
                <span className="cyber-text">Data Analysis & Report AI</span>
              </h1>
              <p className="text-[10px] sm:text-xs opacity-70">Presented by AiWebTools.Ai</p>
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        {!isSmallScreen && (
          <nav className="flex items-center space-x-1 lg:space-x-4 xl:space-x-6" role="navigation" aria-label="Main navigation">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-sm lg:text-base text-gray-300 hover:text-cyber-blue transition-colors px-2 py-1 rounded-md hover:bg-white/5 whitespace-nowrap" 
                aria-label={link.ariaLabel}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm lg:text-base text-gray-300 hover:text-cyber-blue transition-colors px-2 py-1 rounded-md hover:bg-white/5 whitespace-nowrap"
              aria-label="Discover more free AI tools at AiWebTools.Ai"
            >
              More AI Tools
            </a>
            <a
              href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-2 px-4 lg:px-5 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-sm lg:text-base rounded-md hover:shadow-neon transition-all whitespace-nowrap flex-shrink-0"
              aria-label="Use our free AI data analysis tool now"
            >
              USE AI Tool 🌍
            </a>
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isSmallScreen && (
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 -mr-2 focus:outline-none active:scale-95 transition-transform touch-manipulation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && isSmallScreen && (
          <motion.div
            className="bg-cyber-dark/98 backdrop-blur-xl absolute top-full left-0 w-full border-b border-cyber-purple/20 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col py-3 px-4">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-cyber-blue active:text-cyber-blue transition-colors py-3 px-3 rounded-lg hover:bg-white/5 active:bg-white/10 flex items-center justify-between touch-manipulation" 
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 opacity-40" />
                </a>
              ))}
              <a
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="text-gray-300 hover:text-cyber-blue active:text-cyber-blue transition-colors py-3 px-3 rounded-lg hover:bg-white/5 active:bg-white/10 flex items-center justify-between touch-manipulation"
                aria-label="Discover more free AI tools at AiWebTools.Ai"
              >
                More AI Tools
                <ChevronRight className="h-4 w-4 opacity-40" />
              </a>
              <a
                href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center py-3 px-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg hover:shadow-neon transition-all touch-manipulation active:scale-95"
                aria-label="Use our free AI data analysis tool now"
              >
                USE Data Analysis & Report AI 🌍
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
