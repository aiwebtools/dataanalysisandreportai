
import React, { useEffect, Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import { lazy } from 'react';

// Lazy load the 3D scene to improve initial loading performance
const ThreeScene = lazy(() => import('../components/ThreeScene'));

const Index = () => {
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
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white overflow-hidden">
      <Suspense fallback={<div className="fixed inset-0 -z-10 bg-cyber-black" />}>
        <ThreeScene />
      </Suspense>
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
