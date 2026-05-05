
import React from 'react';
import { Upload, Search, BarChart3, FileText } from 'lucide-react';
import { openExternal } from '@/lib/openLink';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-6 w-6 text-white" />,
      title: "Upload Your Data",
      description: "Share your data in any format - spreadsheets, images, text files, or databases with the AI assistant."
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "AI Analysis Begins",
      description: "Our AI processes your data, extracts patterns, recognizes images, and consolidates information across formats."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "Get Visualized Insights",
      description: "Receive detailed visualizations of your data with patterns highlighted and anomalies identified."
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Comprehensive Report",
      description: "Get a strategic report with actionable recommendations and next steps for your business or research."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-cyber-dark relative">
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-blue/20 border border-cyber-blue/30 text-sm text-cyber-blue mb-4">
            <Search className="h-4 w-4 mr-2" /> Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="cyber-text text-shadow">Data Analysis AI</span> Works
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Our streamlined process ensures you get powerful insights without complexity. Here's how it works:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center text-white font-bold shadow-neon">
                {index + 1}
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyber-purple/50 to-transparent -translate-x-8"></div>
              )}
              
              <div className="glass p-6 rounded-xl h-full backdrop-blur-lg hover:shadow-neon transition-all duration-300 border border-white/5 hover:border-cyber-blue/30">
                <div className="bg-gradient-to-br from-cyber-blue to-cyber-purple w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-neon">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={openExternal('https://chatgpt.com/g/g-2OebMtWeG-data-analysis-report-ai')}
            className="inline-flex items-center justify-center py-3 px-8 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg hover:shadow-neon transition-all"
          >
            Try It Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
