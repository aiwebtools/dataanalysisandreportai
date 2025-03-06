
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      content: "This AI completely transformed how we analyze our market data. The image analysis feature saved us countless hours of manual work, and the insights were spot on.",
      author: "Sarah Johnson",
      role: "Data Scientist, TechNova Inc.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&h=150"
    },
    {
      content: "I was skeptical about AI data analysis tools, but this exceeded my expectations. It handled our complex datasets effortlessly and provided actionable recommendations.",
      author: "Michael Chen",
      role: "Research Director, GlobalResearch",
      rating: 4,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=150&h=150"
    },
    {
      content: "The multi-format data processing is a game-changer. We can now analyze our spreadsheets, charts, and text reports simultaneously for better business insights.",
      author: "Emily Rodriguez",
      role: "Business Intelligence Manager",
      rating: 3,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=150&h=150"
    },
    {
      content: "As a non-technical user, I found this AI incredibly easy to use. The comprehensive reports are detailed yet understandable, making data-driven decisions simpler.",
      author: "David Patel",
      role: "Marketing Director, InnovateCorp",
      rating: 4,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&h=150"
    }
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextTestimonial,
    onSwipedRight: prevTestimonial,
    preventDefaultTouchmoveEvent: true,
    trackMouse: false
  });

  const renderDesktopView = () => (
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
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-800">
              <img 
                src={testimonial.image} 
                alt={`${testimonial.author} portrait`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h4 className="font-semibold text-white">{testimonial.author}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
            <div className="ml-auto flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <Star key={i + testimonial.rating} className="h-4 w-4 text-gray-600" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderMobileView = () => (
    <div {...handlers} className="relative w-full overflow-hidden touch-pan-y">
      <div 
        className="glass rounded-xl p-6 backdrop-blur-lg border border-white/5 hover:border-cyber-purple/30 transition-all relative min-h-[16rem]"
      >
        <Quote className="absolute top-4 right-4 h-6 w-6 text-cyber-purple opacity-20" />
        
        <p className="text-gray-200 mb-6 relative z-10">{testimonials[activeIndex].content}</p>
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-800">
            <img 
              src={testimonials[activeIndex].image} 
              alt={`${testimonials[activeIndex].author} portrait`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h4 className="font-semibold text-white">{testimonials[activeIndex].author}</h4>
            <p className="text-sm text-gray-400">{testimonials[activeIndex].role}</p>
          </div>
          <div className="ml-auto flex">
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
            ))}
            {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
              <Star key={i + testimonials[activeIndex].rating} className="h-4 w-4 text-gray-600" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 items-center">
        <button 
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-cyber-dark/70 text-gray-300 hover:text-white hover:bg-cyber-purple/20 mr-4"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {testimonials.map((_, index) => (
          <div 
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${index === activeIndex ? 'bg-cyber-purple' : 'bg-gray-600'}`}
            onClick={() => setActiveIndex(index)}
            role="button"
            aria-label={`Go to testimonial ${index + 1}`}
            tabIndex={0}
          />
        ))}

        <button 
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-cyber-dark/70 text-gray-300 hover:text-white hover:bg-cyber-purple/20 ml-4"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-green/20 border border-cyber.green/30 text-sm text-cyber-green mb-4">
            <Star className="h-4 w-4 mr-2 text-amber-400" /> Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="cyber-text text-shadow">Users Say</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Discover how our AI is helping professionals across industries uncover valuable insights from their data.
          </p>
        </div>

        {isMobile ? renderMobileView() : renderDesktopView()}
      </div>
    </section>
  );
};

export default Testimonials;
