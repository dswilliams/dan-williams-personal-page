
import React from 'react';
import { Calendar, Brain } from "lucide-react";

const Header = () => {
  return (
    <header className="relative pt-10 pb-16 mb-10 overflow-hidden">
      {/* Art Nouveau decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0">
        <div className="w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M0%2C50%20C25%2C0%2075%2C100%20100%2C50%20S75%2C0%2050%2C50%20S25%2C100%200%2C50%22%20stroke%3D%22%239b87f5%22%20fill%3D%22none%22%20stroke-width%3D%221%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Pop Art style name display */}
          <h1 className="font-playfair font-black text-5xl md:text-7xl mb-6 relative inline-block animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-nouveau-vividPurple to-nouveau-orange">
              Dan Williams
            </span>
          </h1>

          {/* Art Nouveau divider */}
          <div className="flex items-center justify-center my-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-nouveau-purple to-transparent"></div>
            <Brain size={24} className="mx-2 text-nouveau-vividPurple" />
            <div className="h-0.5 w-16 bg-gradient-to-l from-nouveau-purple to-transparent"></div>
          </div>
          
          <h2 className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <span className="font-medium">Product Manager</span> with a passion for <span className="font-medium">AI Innovation</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.4s"}}>
            Building and leading products at the intersection of technology and human needs, 
            now exploring the frontiers of artificial intelligence.
          </p>

          {/* Quick navigation icons */}
          <div className="mt-8 flex justify-center space-x-6 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <a href="#experience" className="flex items-center text-sm font-medium text-nouveau-vividPurple hover:text-nouveau-darkPurple transition-colors">
              <Calendar size={16} className="mr-1" />
              Experience
            </a>
            <a href="#projects" className="flex items-center text-sm font-medium text-nouveau-orange hover:text-amber-600 transition-colors">
              <Brain size={16} className="mr-1" />
              AI Projects
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
