import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import { Menu, X, Github } from 'lucide-react';

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`transition-colors duration-300 ${
        isScrolled
          ? isActive
            ? 'text-white'
            : 'text-codeforce-gray hover:text-white'
          : isActive
            ? 'text-white'
            : 'text-codeforce-light hover:text-white'
      }`}
    >
      {label}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-codeforce-dark/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-white flex items-center">
            <span className="text-codeforce-blue">&lt;</span>
            Code
            <span className="text-codeforce-blue">Force</span>
            <span className="text-codeforce-blue">/&gt;</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" isScrolled={isScrolled} />
          <NavLink to="/google-form" label="Apply" isScrolled={isScrolled} />
          <NavLink to="/form" label="Join" isScrolled={isScrolled} />
          <a 
            href="https://github.com/Anadi-Gupta1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center transition-colors duration-300 ${
              isScrolled ? 'text-codeforce-gray hover:text-white' : 'text-codeforce-light hover:text-white'
            }`}
          >
            <Github className="h-4 w-4 mr-1" />
            <span>GitHub</span>
          </a>
        </nav>

        {/* Auth Buttons on Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link to="/google-form">
            <Button size="sm">Join Us</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-codeforce-dark border-t border-codeforce-blue/20 shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-3">
          <Link to="/" className="block py-2 text-white hover:text-codeforce-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/google-form" className="block py-2 text-white hover:text-codeforce-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Apply
          </Link>
          <Link to="/form" className="block py-2 text-white hover:text-codeforce-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Join
          </Link>
          <a 
            href="https://github.com/Anadi-Gupta1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block py-2 text-white hover:text-codeforce-blue transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </span>
          </a>
          <div className="pt-3 border-t border-codeforce-gray/20 flex items-center justify-between">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-center">Sign In</Button>
            </Link>
            <Link to="/google-form" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="w-full justify-center">Join Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
