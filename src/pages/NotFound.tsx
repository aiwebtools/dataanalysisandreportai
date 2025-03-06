
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Set page title
    document.title = "404 - Page Not Found | Data Analysis & Report AI";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyber-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-cyber-purple/5"></div>
      
      <div className="glass rounded-xl p-8 backdrop-blur-xl max-w-md w-full text-center border border-white/5 relative z-10">
        <AlertTriangle className="h-16 w-16 text-cyber-yellow mx-auto mb-6 animate-pulse" />
        
        <h1 className="text-4xl font-bold mb-2 cyber-text text-shadow">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! This page doesn't exist</p>
        
        <div className="text-gray-400 mb-8">
          The page you're looking for might have been moved, deleted, or never existed in the first place.
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center py-3 px-6 border border-cyber-blue/50 hover:border-cyber-blue text-white rounded-lg hover:bg-cyber-blue/10 transition-all"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
          </button>
          
          <a
            href="/"
            className="inline-flex items-center justify-center py-3 px-6 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg hover:shadow-neon transition-all"
          >
            <Home className="mr-2 h-5 w-5" /> Return Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
