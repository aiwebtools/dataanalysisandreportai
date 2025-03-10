
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock } from 'lucide-react';

interface CookieConsentProps {
  onAccept: () => void;
}

const CookieConsent = ({ onAccept }: CookieConsentProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-md p-1 rounded-2xl"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink opacity-50 blur-sm" />
        
        <div className="relative rounded-xl bg-gradient-to-b from-cyber-dark to-cyber-black p-6 shadow-neon border border-white/10">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-cyber-purple/20 border border-cyber-purple/30">
              <Lock className="h-8 w-8 text-cyber-purple" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2">
            <span className="cyber-text text-shadow">Privacy Disclaimer</span>
          </h2>
          
          <div className="space-y-4 mb-6">
            <p className="text-gray-300 text-center">
              We prioritize your privacy while using this service:
            </p>
            
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="bg-cyber-purple/20 p-1 rounded-full mr-2 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-cyber-purple" />
                </span>
                <span>We do not access or store your personal data</span>
              </li>
              <li className="flex items-start">
                <span className="bg-cyber-purple/20 p-1 rounded-full mr-2 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-cyber-purple" />
                </span>
                <span>This service adheres to OpenAI's privacy policy</span>
              </li>
              <li className="flex items-start">
                <span className="bg-cyber-purple/20 p-1 rounded-full mr-2 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-cyber-purple" />
                </span>
                <span>Your interactions are not stored or used for training</span>
              </li>
              <li className="flex items-start">
                <span className="bg-cyber-purple/20 p-1 rounded-full mr-2 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-cyber-purple" />
                </span>
                <span>Results should be independently verified</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <motion.button
              onClick={onAccept}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-white shadow-neon hover:shadow-neon-purple transition-all duration-300 uppercase tracking-wider"
            >
              <span className="flex items-center justify-center">
                I Agree
                <CheckCircle className="ml-2 h-5 w-5" />
              </span>
            </motion.button>
          </div>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            By clicking "I Agree," you acknowledge that we don't store or access your data.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CookieConsent;
