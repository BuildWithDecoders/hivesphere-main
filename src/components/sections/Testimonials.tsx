import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adebayo Fashola",
      role: "Marketing Director, Lagos Fashion House",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      content: "HiveSphere helped us find authentic micro-influencers who perfectly aligned with our brand values. Our engagement rates increased by 150%."
    },
    {
      name: "Chioma Okeke",
      role: "Beauty Influencer, 45K followers",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      content: "The platform makes it so easy to connect with brands that actually value creators. Fair payments and transparent communication every time."
    },
    {
      name: "Emeka Nnadi",
      role: "Founder, Tech Startup Abuja",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      content: "We launched our app through HiveSphere's network of tech influencers. The ROI was incredible - 300% better than traditional advertising."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-background relative">
      <div className="absolute inset-0 minimal-grid opacity-15"></div>
      <div className="container">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-minimal">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Join thousands of brands and influencers who have found success through our platform.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="relative minimal-glass p-8 md:p-12 rounded-2xl shadow-minimal-lg border border-border/30 hover:shadow-minimal-lg transition-all duration-300 futuristic-border">
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-xl bg-muted/50 hover:bg-accent hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-accent scale-125' : 'bg-muted hover:bg-accent/50'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-xl bg-muted/50 hover:bg-accent hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 object-cover border border-border/30 shadow-minimal"
                />
                <h4 className="font-semibold text-lg mb-1">{testimonials[currentIndex].name}</h4>
                <p className="text-muted-foreground text-sm font-light">{testimonials[currentIndex].role}</p>
              </div>
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 relative font-light">
                "{testimonials[currentIndex].content}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;