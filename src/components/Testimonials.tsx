
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "This AI completely transformed how we analyze our market data. The image analysis feature saved us countless hours of manual work, and the insights were spot on.",
      author: "Sarah Johnson",
      role: "Data Scientist, TechNova Inc.",
      rating: 5,
      image: "/testimonial-1.jpg"
    },
    {
      content: "I was skeptical about AI data analysis tools, but this exceeded my expectations. It handled our complex datasets effortlessly and provided actionable recommendations.",
      author: "Michael Chen",
      role: "Research Director, GlobalResearch",
      rating: 5,
      image: "/testimonial-2.jpg"
    },
    {
      content: "The multi-format data processing is a game-changer. We can now analyze our spreadsheets, charts, and text reports simultaneously for better business insights.",
      author: "Emily Rodriguez",
      role: "Business Intelligence Manager",
      rating: 5,
      image: "/testimonial-3.jpg"
    },
    {
      content: "As a non-technical user, I found this AI incredibly easy to use. The comprehensive reports are detailed yet understandable, making data-driven decisions simpler.",
      author: "David Patel",
      role: "Marketing Director, InnovateCorp",
      rating: 4,
      image: "/testimonial-4.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-green/20 border border-cyber.green/30 text-sm text-cyber-green mb-4">
            <Star className="h-4 w-4 mr-2 text-cyber-yellow" /> Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="cyber-text text-shadow">Users Say</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Discover how our AI is helping professionals across industries uncover valuable insights from their data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass rounded-xl p-6 backdrop-blur-lg hover:shadow-neon transition-all border border-white/5 hover:border-cyber-purple/30 animate-fadeIn relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-4 right-4 h-6 w-6 text-cyber-purple opacity-20" />
              
              <p className="text-gray-200 mb-6 relative z-10">{testimonial.content}</p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.author} portrait`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-cyber-yellow fill-cyber-yellow" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} className="h-4 w-4 text-gray-600" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
