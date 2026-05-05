import React from 'react';
import { Database, BarChart3, Mail, Phone, ChevronRight } from 'lucide-react';
import { openExternal } from '@/lib/openLink';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-cyber-black to-black py-16 border-t border-cyber-purple/20 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-purple rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyber-blue rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-delay-300"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyber-pink rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animate-delay-500"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <Database className="h-10 w-10 text-black group-hover:text-cyber-purple transition-all duration-500" />
                <BarChart3 className="h-6 w-6 text-black group-hover:text-cyber-blue absolute -top-2 -right-2 transition-all duration-500" />
                <div className="absolute inset-0 bg-cyber-blue/20 rounded-full blur-lg animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="cyber-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent animate-glow">Data Analysis & Report AI</span>
                </h3>
                <p className="text-xs opacity-80 text-cyber-blue">Presented by AiWebTools.Ai</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Unleashing the power of advanced data analysis through AI innovation.
            </p>
            <div className="text-xs text-gray-400 bg-cyber-dark/50 p-3 rounded-lg border border-cyber-purple/20">
              For informational, educational, and research purposes only
            </div>
            <a 
              href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={openExternal('https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai')}
              className="inline-block py-3 px-6 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-white rounded-xl hover:shadow-neon transition-all duration-500 transform hover:scale-105 shadow-lg"
            >
              USE Data Analysis & Report AI🌍
            </a>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple"></div>
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-gray-300 hover:text-cyber-blue transition-all duration-300 flex items-center group transform hover:translate-x-2">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:text-cyber-purple transition-colors" /> Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-cyber-blue transition-all duration-300 flex items-center group transform hover:translate-x-2">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:text-cyber-purple transition-colors" /> How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-cyber-blue transition-all duration-300 flex items-center group transform hover:translate-x-2">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:text-cyber-purple transition-colors" /> Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-cyber-blue transition-all duration-300 flex items-center group transform hover:translate-x-2">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:text-cyber-purple transition-colors" /> FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover:text-cyber-blue transition-all duration-300 flex items-center group transform hover:translate-x-2">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:text-cyber-purple transition-colors" /> Disclaimer
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg mb-6 relative">
              Legal
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyber-purple to-cyber-pink"></div>
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-blue transition-all duration-300 flex items-center group transform hover:translate-x-2">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:text-cyber-purple transition-colors" /> Terms of Service
                </a>
              </li>
              <li>
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-blue transition-all duration-300 flex items-center group transform hover:translate-x-2">
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:text-cyber-purple transition-colors" /> Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg mb-6 relative">
              Contact Us
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-cyber-pink to-cyber-blue"></div>
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:4758008096" className="text-gray-300 hover:text-cyber-blue transition-all duration-300 flex items-center group transform hover:translate-x-2">
                  <Phone className="h-5 w-5 mr-3 group-hover:text-cyber-purple transition-colors" /> (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-300 hover:text-cyber-blue transition-all duration-300 flex items-center group transform hover:translate-x-2">
                  <Mail className="h-5 w-5 mr-3 group-hover:text-cyber-purple transition-colors" /> Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={openExternal('https://aiwebtools.lovable.app/?via=aiwebtools')}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-purple/30 to-cyber-blue/30 hover:from-cyber-purple/50 hover:to-cyber-blue/50 text-white border border-cyber-purple/50 hover:border-cyber-purple transition-all duration-500 backdrop-blur-md transform hover:scale-105 shadow-lg hover:shadow-neon"
              >
                More AI Tools
                <ChevronRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gradient-to-r from-transparent via-cyber-purple/50 to-transparent text-center">
          <p className="text-gray-400 text-sm">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-blue transition-colors duration-300 bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text hover:text-transparent"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
