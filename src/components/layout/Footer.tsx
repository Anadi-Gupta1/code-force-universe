
import React from 'react';
import { Github, Linkedin, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 gradient-blue-text">CodeForce</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              The largest developer community focused on collaboration, growth, and innovation in the tech industry.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-codeforce-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-codeforce-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://discord.gg/fMWYHy9UHX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-codeforce-blue transition-colors"
                aria-label="Discord"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Community</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-codeforce-blue transition-colors">
                  Join WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-codeforce-blue transition-colors">
                  Join Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-codeforce-blue transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-codeforce-blue transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-codeforce-blue transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-codeforce-blue transition-colors">
                  Job Board
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-codeforce-blue transition-colors">
                  Open Source
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-codeforce-blue transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Code Force. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
