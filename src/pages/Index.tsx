
import React, { useEffect, Suspense, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import { lazy } from 'react';

// Lazy load the 3D scene with better error handling
const ThreeScene = lazy(() => import('../components/ThreeScene').then(
  module => ({ default: module.default }),
  error => {
    console.error("Failed to load ThreeScene component:", error);
    return { default: () => null };
  }
));

const Index = () => {
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [sceneError, setSceneError] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(2); // Allow 2 attempts to load the scene

  useEffect(() => {
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

    // Shorter fallback timer to improve UX if scene fails
    const timer = setTimeout(() => {
      if (!sceneLoaded) {
        console.log("ThreeScene fallback timer triggered");
        setSceneError(true);
      }
    }, 3000); // Longer timeout to give 3D scene more time to load

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('bg-cyber-black');
    };
  }, [sceneLoaded]);

  const handleSceneLoad = () => {
    setSceneLoaded(true);
    console.log("ThreeScene loaded successfully");
  };

  const handleSceneError = () => {
    if (attemptsLeft > 0) {
      console.log(`ThreeScene failed, attempting reload. Attempts left: ${attemptsLeft}`);
      setAttemptsLeft(attemptsLeft - 1);
      // Force remount of ThreeScene by toggling sceneError state
      setSceneError(true);
      setTimeout(() => setSceneError(false), 100);
    } else {
      console.error("ThreeScene failed to load after multiple attempts");
      setSceneError(true);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-hidden">
      {/* Robust fallback background */}
      <div className="fixed inset-0 -z-10 bg-cyber-black bg-gradient-to-br from-cyber-dark via-cyber-black to-black" />
      
      {!sceneError && (
        <Suspense fallback={null}>
          <div 
            className="scene-container" 
            onLoad={handleSceneLoad} 
            onError={handleSceneError}
          >
            <ThreeScene />
          </div>
        </Suspense>
      )}
      
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
