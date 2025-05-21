
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="https://www.linkedin.com/in/dswilliams/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <Linkedin size={20} className="mr-2" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          &copy; {currentYear} Dan Williams. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
