
import { useEffect } from 'react';

const SeoOptimizer = () => {
  useEffect(() => {
    // Add semantic markup for better SEO
    const addSemanticMarkup = () => {
      // Add breadcrumb structured data
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://aiwebtools.lovable.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI Tools",
            "item": "https://aiwebtools.lovable.app#features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Data Analysis AI",
            "item": "https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai"
          }
        ]
      });
      document.head.appendChild(breadcrumbScript);

      // Add FAQ structured data
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Data Analysis & Report AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Data Analysis & Report AI is a free AI-powered tool that provides comprehensive data analysis, image interpretation, and strategic report generation with actionable insights for businesses, researchers, and students."
            }
          },
          {
            "@type": "Question",
            "name": "Is the AI data analysis tool free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our AI data analysis tool is completely free to use for informational, educational, and research purposes."
            }
          },
          {
            "@type": "Question",
            "name": "What types of data can the AI analyze?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI can analyze any format including structured databases, unstructured text, JSON, CSV, XML, Excel files, images, charts, and diagrams."
            }
          }
        ]
      });
      document.head.appendChild(faqScript);

      // Add review/rating structured data
      const reviewScript = document.createElement('script');
      reviewScript.type = 'application/ld+json';
      reviewScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Data Analysis & Report AI",
        "description": "Free AI tool for comprehensive data analysis and report generation",
        "brand": {
          "@type": "Brand",
          "name": "AI Web Tools"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "250000"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      });
      document.head.appendChild(reviewScript);
    };

    // Add performance optimizations
    const optimizePerformance = () => {
      // Preload critical resources
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      preloadLink.as = 'style';
      document.head.appendChild(preloadLink);

      // Add critical CSS for above-the-fold content
      const criticalCSS = document.createElement('style');
      criticalCSS.textContent = `
        .cyber-text { background: linear-gradient(45deg, #60A5FA, #A855F7, #EC4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .animate-glow { animation: glow 2s ease-in-out infinite alternate; }
        @keyframes glow { from { text-shadow: 0 0 10px #60A5FA; } to { text-shadow: 0 0 20px #A855F7; } }
      `;
      document.head.appendChild(criticalCSS);
    };

    addSemanticMarkup();
    optimizePerformance();

    // Clean up function
    return () => {
      // Remove scripts if component unmounts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SeoOptimizer;
