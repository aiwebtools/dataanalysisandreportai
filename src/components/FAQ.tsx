
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What types of data can this AI analyze?",
      answer: "Our AI can analyze virtually any type of data, including structured databases, unstructured text, JSON, CSV, XML, Excel files, images (charts, diagrams, photographs), and more. It's designed to handle multi-format data and provide integrated insights across different data types."
    },
    {
      question: "How does the image analysis feature work?",
      answer: "The AI uses advanced computer vision technology to interpret images, extracting text, identifying objects, analyzing charts and graphs, and recognizing patterns. It can then convert images to grayscale for deeper analysis and integrate these visual insights with other data for comprehensive reporting."
    },
    {
      question: "What kind of reports will I receive?",
      answer: "You'll receive detailed, comprehensive reports that include data visualizations, trend analysis, anomaly detection, pattern recognition, and strategic recommendations. Each report is customized to your specific data and includes clear explanations of all findings and actionable next steps."
    },
    {
      question: "Is my data secure when using this AI tool?",
      answer: "Yes, security is a top priority. Your data is processed according to OpenAI's strict security protocols. The AI doesn't permanently store your data after analysis, and all processing adheres to industry-standard encryption and data protection practices."
    },
    {
      question: "Do I need technical expertise to use this AI?",
      answer: "No technical expertise is required. The AI is designed to be user-friendly and conversational. Simply upload your data or describe what you need, and the AI will guide you through the process, explaining concepts clearly and providing insights in an accessible way."
    },
    {
      question: "Can the AI perform specialized industry analysis?",
      answer: "Yes, the AI is capable of performing specialized analysis across various industries including finance, healthcare, marketing, retail, manufacturing, research, and more. It adapts its analytical approach based on your specific industry context and data characteristics."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-cyber-dark relative">
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-yellow/20 border border-cyber-yellow/30 text-sm text-cyber-yellow mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="cyber-text text-shadow">Questions</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Get answers to common questions about our Data Analysis & Report AI system.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 glass rounded-xl backdrop-blur-lg overflow-hidden border border-white/5 hover:border-cyber-blue/30 transition-all"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <div className="ml-4">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-cyber-blue" />
                  ) : (
                    <Plus className="h-5 w-5 text-white" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
