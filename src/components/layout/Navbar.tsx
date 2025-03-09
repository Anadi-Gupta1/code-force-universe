
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-background/80 backdrop-blur-lg shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight gradient-blue-text">
              CodeForce
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#events" className="nav-link text-sm font-medium text-foreground hover:text-codeforce-blue transition-colors">
              Events
            </a>
            <a href="/#jobs" className="nav-link text-sm font-medium text-foreground hover:text-codeforce-blue transition-colors">
              Jobs
            </a>
            <a href="/#projects" className="nav-link text-sm font-medium text-foreground hover:text-codeforce-blue transition-colors">
              Projects
            </a>
            <div className="flex items-center space-x-3">
              <Link to="/login" className="flex items-center nav-link text-sm font-medium text-foreground hover:text-codeforce-blue transition-colors">
                <LogIn size={16} className="mr-1" />
                Login
              </Link>
              <Button 
                size="sm"
                asLink 
                href="https://chat.whatsapp.com/L2r4J3ehsWbGx4vCURf4Li" 
                target="_blank"
              >
                Join Community
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-foreground hover:bg-secondary focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="/#events" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary hover:text-codeforce-blue transition-colors" onClick={toggleMobileMenu}>
              Events
            </a>
            <a href="/#jobs" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary hover:text-codeforce-blue transition-colors" onClick={toggleMobileMenu}>
              Jobs
            </a>
            <a href="/#projects" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary hover:text-codeforce-blue transition-colors" onClick={toggleMobileMenu}>
              Projects
            </a>
            <Link to="/login" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary hover:text-codeforce-blue transition-colors" onClick={toggleMobileMenu}>
              <LogIn size={16} className="mr-2" />
              Login
            </Link>
            <Link to="/form" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary hover:text-codeforce-blue transition-colors" onClick={toggleMobileMenu}>
              <UserPlus size={16} className="mr-2" />
              Sign Up
            </Link>
            <div className="pt-2">
              <Button 
                size="sm"
                className="w-full"
                asLink 
                href="https://chat.whatsapp.com/L2r4J3ehsWbGx4vCURf4Li" 
                target="_blank"
              >
                Join WhatsApp
              </Button>
            </div>
            <div className="pt-2">
              <Button 
                size="sm"
                variant="outline"
                className="w-full"
                asLink 
                href="https://discord.gg/fMWYHy9UHX" 
                target="_blank"
              >
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
