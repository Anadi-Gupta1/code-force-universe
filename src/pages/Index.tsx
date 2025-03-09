
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import EventsSection from '../components/sections/EventsSection';
import JobsSection from '../components/sections/JobsSection';
import ProjectsSection from '../components/sections/ProjectsSection';

const Index = () => {
  // Fade in animation for page elements as they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.js-section-fade');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <div className="opacity-0 js-section-fade">
          <EventsSection />
        </div>
        
        <div className="opacity-0 js-section-fade">
          <JobsSection />
        </div>
        
        <div className="opacity-0 js-section-fade">
          <ProjectsSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
