
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import ThreeScene from '../components/ThreeScene';
import SeoOptimizer from '../components/SeoOptimizer';
import { useToast } from '@/components/ui/use-toast';
import CookieConsent from '../components/CookieConsent';

const Index = () => {
  const [sceneError, setSceneError] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    if (!hasAccepted) {
      setShowConsent(true);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });

    // Set initial background to ensure visibility
    document.body.classList.add('bg-cyber-black');

    // Handle errors for Three.js scene
    const handleSceneError = (event) => {
      console.error('WebGL context lost or initialization failed');
      setSceneError(true);
      toast({
        title: "3D Background Disabled",
        description: "We've disabled the 3D background for better performance.",
        duration: 5000,
      });
    };

    // Listen for WebGL context lost events
    window.addEventListener('webglcontextlost', handleSceneError);
    
    // If rendering doesn't start within a few seconds, show the fallback
    const fallbackTimer = setTimeout(() => {
      if (!document.querySelector('#scene-container canvas')) {
        handleSceneError({});
      }
    }, 3000);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('webglcontextlost', handleSceneError);
      document.body.classList.remove('bg-cyber-black');
    };
  }, [toast]);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setShowConsent(false);
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-hidden">
      <SeoOptimizer />
      
      {/* Robust fallback background */}
      <div className="fixed inset-0 -z-10 bg-cyber-black bg-gradient-to-br from-cyber-dark via-cyber-black to-black" />
      
      {!sceneError && <ThreeScene />}
      
      <Header />
      <main role="main">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
      
      {showConsent && <CookieConsent onAccept={handleAccept} />}
    </div>
  );
};

export default Index;
