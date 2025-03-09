
import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowRight, MessageSquare } from 'lucide-react';

const HeroSection: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        spotlightRef.current.style.left = `${x}px`;
        spotlightRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 flex items-center overflow-hidden">
      {/* Animated spotlight effect */}
      <div ref={spotlightRef} className="spotlight"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-hero-pattern"></div>
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-codeforce-blue bg-secondary rounded-full">
              The Largest Developer Community
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Code Force
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in-delay">
            Join the force of developers and grow together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-longer">
            <Button 
              size="lg"
              asLink 
              href="https://chat.whatsapp.com/L2r4J3ehsWbGx4vCURf4Li" 
              target="_blank"
              rightIcon={<ArrowRight size={20} />}
              className="animate-pulse-glow"
            >
              Join WhatsApp Community
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asLink 
              href="https://discord.gg/fMWYHy9UHX" 
              target="_blank"
              leftIcon={<MessageSquare size={20} />}
            >
              Join Discord Community
            </Button>
          </div>
          
          <div className="mt-20 opacity-0 animate-fade-in-delay-longer">
            <p className="text-muted-foreground mb-4">Trusted by developers from</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-muted-foreground/60 font-bold text-lg">Google</div>
              <div className="text-muted-foreground/60 font-bold text-lg">Microsoft</div>
              <div className="text-muted-foreground/60 font-bold text-lg">Amazon</div>
              <div className="text-muted-foreground/60 font-bold text-lg">Meta</div>
              <div className="text-muted-foreground/60 font-bold text-lg">Apple</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated down arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#events" aria-label="Scroll to events">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-codeforce-blue">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
