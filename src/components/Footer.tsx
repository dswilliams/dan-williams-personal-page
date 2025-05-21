
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          &copy; {currentYear} Dan Williams. All rights reserved.
        </p>
        <div className="mt-2">
          <span className="text-xs text-gray-500">
            Designed with an Art Nouveau meets Pop Art aesthetic
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
