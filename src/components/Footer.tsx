
import React from 'react';
import { Database, BarChart3, Mail, Phone, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark py-12 border-t border-cyber-purple/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Database className="h-8 w-8 text-cyber-blue" />
                <BarChart3 className="h-5 w-5 text-cyber-purple absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  <span className="cyber-text">Data Analysis & Report AI</span>
                </h3>
                <p className="text-xs opacity-70">Presented by AiWebTools.Ai</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Unleashing the power of advanced data analysis through AI innovation.
            </p>
            <a 
              href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block py-2 px-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-md hover:shadow-neon transition-all"
            >
              USE Data Analysis & Report AI🌍
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-cyber-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-cyber-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-cyber-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-cyber-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover:text-cyber-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Disclaimer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Terms of Service
                </a>
              </li>
              <li>
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-blue transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" /> Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:4758008096" className="text-gray-300 hover:text-cyber-blue transition-colors flex items-center">
                  <Phone className="h-4 w-4 mr-2" /> (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-300 hover:text-cyber-blue transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2" /> Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-purple/20 hover:bg-cyber-purple/30 text-white border border-cyber-purple/50 hover:border-cyber-purple transition-all"
              >
                More AI Tools
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-blue transition-colors"
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
