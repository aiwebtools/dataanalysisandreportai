
import React from 'react';
import { 
  Database, 
  FileImage, 
  Layers, 
  CheckCircle, 
  Globe, 
  Lightbulb, 
  FileText, 
  BookOpen, 
  TrendingUp, 
  MessageSquare
} from 'lucide-react';

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <div 
      className={`glass rounded-xl p-6 backdrop-blur-lg border border-white/5 hover:border-cyber-purple/30 transition-all hover:shadow-neon animate-fadeIn`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-gradient-to-br from-cyber-blue to-cyber-purple w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-neon">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Database className="text-white h-6 w-6" />,
      title: "Universal Data Processing",
      description: "Expertly handle & analyze data in ANY format, including structured databases, unstructured text, JSON, CSV, XML, excel, and more."
    },
    {
      icon: <FileImage className="text-white h-6 w-6" />,
      title: "Vision/Python Image Analysis",
      description: "Interpret & extract ALL insights from images of all types, including photographs, charts, diagrams using vision."
    },
    {
      icon: <Layers className="text-white h-6 w-6" />,
      title: "Multi-Modal Integration",
      description: "Seamlessly combine insights from various data sources & formats, including cross-referencing image content with textual or numerical data."
    },
    {
      icon: <CheckCircle className="text-white h-6 w-6" />,
      title: "Unmatched Accuracy",
      description: "Deliver precise, reliable analysis through advanced AI processing, ensuring trustworthy insights for decision-making."
    },
    {
      icon: <Globe className="text-white h-6 w-6" />,
      title: "Deep Web Research",
      description: "Conduct in-depth web searches to supplement your analysis with relevant external information if needed."
    },
    {
      icon: <Lightbulb className="text-white h-6 w-6" />,
      title: "Strategic Recommendations",
      description: "Conclude every response with actionable, forward-thinking suggestions for next steps based on data insights."
    },
    {
      icon: <FileText className="text-white h-6 w-6" />,
      title: "Maximum Detail Reporting",
      description: "Generate extensive, thorough reports that push the boundaries of token limits, ensuring no aspect of the analysis is left unexplored."
    },
    {
      icon: <BookOpen className="text-white h-6 w-6" />,
      title: "Comprehensive Explanations",
      description: "Provide clear definitions & context for all terms. Clearly compare, summarize, define all data discovered."
    },
    {
      icon: <TrendingUp className="text-white h-6 w-6" />,
      title: "Insight Extraction",
      description: "Uncover & highlight significant trends, patterns, anomalies, & correlations across all analyzed data & images."
    },
    {
      icon: <MessageSquare className="text-white h-6 w-6" />,
      title: "Unlimited Assistance",
      description: "Do whatever the user asks and answer their questions with comprehensive, accurate, and actionable information."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-purple/20 border border-cyber-purple/30 text-sm text-cyber-purple mb-4">
            <CheckCircle className="h-4 w-4 mr-2" /> Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="cyber-text text-shadow">Comprehensive</span> AI Analysis Capabilities
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Our AI combines cutting-edge technology with intuitive design to offer you the most powerful data analysis tools available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
