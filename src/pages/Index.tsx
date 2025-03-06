
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

// Lazy load the 3D scene with error boundary handling
const ThreeScene = lazy(() => import('../components/ThreeScene').catch(() => {
  console.error("Failed to load ThreeScene component");
  return { default: () => null };
}));

const Index = () => {
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [sceneError, setSceneError] = useState(false);

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

    // Set page title
    document.title = "Data Analysis & Report AI | Advanced Data Analytics";

    // Add fallback in case ThreeScene fails to load
    const timer = setTimeout(() => {
      if (!sceneLoaded) {
        setSceneError(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [sceneLoaded]);

  const handleSceneLoad = () => {
    setSceneLoaded(true);
  };

  const handleSceneError = () => {
    setSceneError(true);
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-hidden">
      {!sceneError && (
        <Suspense fallback={<div className="fixed inset-0 -z-10 bg-cyber-black" />}>
          <div onLoad={handleSceneLoad} onError={handleSceneError}>
            <ThreeScene />
          </div>
        </Suspense>
      )}
      
      {/* Fallback background gradient if ThreeScene fails */}
      {sceneError && (
        <div className="fixed inset-0 -z-10 bg-cyber-black bg-gradient-to-br from-cyber-dark via-cyber-black to-black" />
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
