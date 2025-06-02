
import React, { useEffect, useRef } from 'react';
import { Database, BarChart3, ArrowRight, Users, Star, Trophy, Sparkles } from 'lucide-react';

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
    <div className="relative min-h-screen pt-24 pb-20 flex items-center overflow-hidden">
      {/* Divine Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-purple/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyber-blue/30 rounded-full filter blur-3xl animate-pulse-slow animate-delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyber-pink/30 rounded-full filter blur-3xl animate-pulse-slow animate-delay-500"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden z-5">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto relative z-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fadeIn space-y-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyber-purple/20 via-cyber-blue/20 to-cyber-pink/20 border border-cyber-purple/40 text-sm text-white shadow-divine backdrop-blur-xl">
              <div className="relative mr-3">
                <Database className="h-5 w-5 text-cyber-blue animate-pulse" />
                <BarChart3 className="h-4 w-4 text-cyber-purple absolute -top-1 -right-1 animate-bounce" />
                <Sparkles className="h-3 w-3 text-cyber-pink absolute -bottom-1 -left-1 animate-ping" />
              </div>
              Ultimate Data & Image Analysis AI
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
              <span className="cyber-text text-shadow animate-glow block mb-4">Unleash the Power</span>
              <span className="block text-white">of Advanced</span>
              <span className="cyber-text text-shadow animate-glow block mt-2">Data Analysis</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              Your unparalleled AI assistant for comprehensive data analysis, image interpretation, and insightful reporting with strategic recommendations.
            </p>

            <div className="bg-cyber-dark/30 backdrop-blur-xl border border-cyber-purple/30 rounded-xl p-4 shadow-divine">
              <p className="text-cyber-blue text-sm font-medium">
                For informational, educational, and research purposes only
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center bg-gradient-to-r from-cyber-dark/80 to-cyber-purple/20 border border-cyber-purple/30 rounded-xl px-6 py-4 backdrop-blur-xl shadow-lg hover:shadow-neon transition-all duration-500 animate-levitate">
                <Users className="h-6 w-6 text-cyber-blue mr-3" />
                <span className="text-white font-semibold">250K+ Users Worldwide</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-cyber-dark/80 to-cyber-blue/20 border border-cyber-blue/30 rounded-xl px-6 py-4 backdrop-blur-xl shadow-lg hover:shadow-neon transition-all duration-500 animate-levitate animate-delay-200">
                <Trophy className="h-6 w-6 text-cyber-yellow mr-3" />
                <span className="text-white font-semibold">#8 in the world</span>
              </div>
              <div className="flex items-center bg-gradient-to-r from-cyber-dark/80 to-cyber-pink/20 border border-cyber-pink/30 rounded-xl px-6 py-4 backdrop-blur-xl shadow-lg hover:shadow-neon transition-all duration-500 animate-levitate animate-delay-400">
                <Star className="h-6 w-6 text-cyber-yellow mr-3" />
                <span className="text-white font-semibold">4.6 Star Rating</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a 
                href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center py-4 px-8 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-white rounded-xl hover:shadow-divine transition-all duration-500 transform hover:scale-105 text-lg font-semibold shadow-neon"
              >
                Start Analyzing Now 
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center py-4 px-8 border-2 border-cyber-purple/50 hover:border-cyber-purple text-white rounded-xl hover:bg-cyber-purple/10 transition-all duration-500 backdrop-blur-xl text-lg font-semibold transform hover:scale-105"
              >
                Explore Features
              </a>
            </div>
          </div>
          
          <div className="animate-fadeIn animate-delay-200">
            <div className="rounded-2xl overflow-hidden shadow-divine border-2 border-cyber-purple/40 p-2 bg-gradient-to-br from-cyber-dark/50 to-cyber-purple/10 backdrop-blur-xl transform hover:scale-105 transition-all duration-700 animate-levitate">
              <iframe
                ref={videoRef}
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/idxjOwUAD_I?autoplay=1&mute=0&enablejsapi=1&hd=1&vq=hd1080&loop=1"
                title="Ultimate Data & Image Analysis AI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl shadow-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
