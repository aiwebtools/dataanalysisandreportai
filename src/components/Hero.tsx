
import React, { useEffect, useRef } from 'react';
import { Database, BarChart3, ArrowRight, Users, Star, Trophy } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Setup YouTube API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }, []);

  return (
    <div className="relative min-h-screen pt-20 pb-16 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cyber-dark/50 backdrop-blur-sm z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-purple/20 border border-cyber-purple/30 text-sm text-cyber-purple mb-6">
              <div className="relative mr-2">
                <Database className="h-4 w-4 text-cyber-blue" />
                <BarChart3 className="h-3 w-3 text-cyber-purple absolute -top-1 -right-1" />
              </div>
              Ultimate Data & Image Analysis AI
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="cyber-text text-shadow animate-glow">Unleash the Power</span> of 
              <span className="block">Advanced Data Analysis</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Your unparalleled AI assistant for comprehensive data analysis, image interpretation, and insightful reporting with strategic recommendations.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-cyber-dark/70 border border-cyber-purple/20 rounded-lg px-4 py-2">
                <Users className="h-5 w-5 text-cyber-blue mr-2" />
                <span className="text-white font-medium">250K+ Users Worldwide</span>
              </div>
              <div className="flex items-center bg-cyber-dark/70 border border-cyber-purple/20 rounded-lg px-4 py-2">
                <Trophy className="h-5 w-5 text-cyber-yellow mr-2" />
                <span className="text-white font-medium">#8 in the world</span>
              </div>
              <div className="flex items-center bg-cyber-dark/70 border border-cyber-purple/20 rounded-lg px-4 py-2">
                <Star className="h-5 w-5 text-cyber-yellow mr-2" />
                <span className="text-white font-medium">4.6 Star Rating</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-3 px-6 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg hover:shadow-neon transition-all"
              >
                Start Analyzing Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center py-3 px-6 border border-cyber-purple/50 hover:border-cyber-purple text-white rounded-lg hover:bg-cyber-purple/10 transition-all"
              >
                Explore Features
              </a>
            </div>
          </div>
          
          <div className="animate-fadeIn animate-delay-200">
            <div className="rounded-xl overflow-hidden shadow-neon border border-cyber-purple/30 p-1 bg-cyber-dark">
              <iframe
                ref={videoRef}
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/idxjOwUAD_I?autoplay=1&mute=0&enablejsapi=1&hd=1&vq=hd1080"
                title="Ultimate Data & Image Analysis AI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
