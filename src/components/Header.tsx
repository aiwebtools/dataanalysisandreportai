
import React, { useState, useEffect } from 'react';
import { Database, BarChart3, FileAnalytics, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-cyber-black/90 backdrop-blur-lg shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Database className="h-8 w-8 text-cyber-blue animate-pulse-glow" />
            <BarChart3 className="h-5 w-5 text-cyber-purple absolute -top-1 -right-1" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold leading-none">
              <span className="cyber-text">Data Analysis & Report AI</span>
              <span className="text-xs block opacity-70 mt-0.5">Presented by AiWebTools.Ai</span>
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-purple transition-colors px-4 py-2 rounded-full border border-cyber-purple/30 hover:border-cyber-purple/80 hover:shadow-neon"
          >
            USE Data Analysis & Report AI🌍
          </a>
          <a 
            href="#faq" 
            className="text-white hover:text-cyber-blue transition-colors"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white hover:text-cyber-blue transition-colors"
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-blue transition-colors"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-4 bg-cyber-dark/90 backdrop-blur-lg">
            <a 
              href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-2 text-center text-white bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              USE Data Analysis & Report AI🌍
            </a>
            <a 
              href="#faq" 
              className="block py-2 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="block py-2 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-2 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
