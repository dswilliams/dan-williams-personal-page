
import React from 'react';
import { Calendar, Brain, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="relative pt-16 pb-20 mb-10 overflow-hidden">
      {/* Art Nouveau and Pop Art background styling inspired by uploaded images */}
      <div className="absolute inset-0 z-0">
        {/* Floral Art Nouveau pattern background with transparency */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/6b98f99e-08be-4349-b55c-c069467453a4.png')] bg-repeat opacity-10"></div>
        
        {/* Pop art dotted overlay inspired by the second image */}
        <div className="absolute inset-0 bg-[radial-gradient(#9b87f5_1px,transparent_1px)] bg-[length:20px_20px] opacity-5"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-nouveau-purple/10 to-nouveau-orange/10"></div>
        <div className="w-full h-full opacity-15 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M0%2C50%20C20%2C20%2080%2C80%20100%2C50%20S80%2C20%2050%2C50%20S20%2C80%200%2C50%22%20stroke%3D%22%239b87f5%22%20fill%3D%22none%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
        
        {/* Color burst effect inspired by Pop Art */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-nouveau-orange/5 via-nouveau-purple/5 to-transparent rounded-full"></div>
        
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Name display with Art Nouveau styling */}
          <div className="relative mb-6 inline-block">
            {/* Decorative elements behind name */}
            <div className="absolute -inset-4 bg-white/80 rounded-full blur-md"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-nouveau-purple/20 to-nouveau-orange/20 rounded-full"></div>
            
            {/* Name with professional styling */}
            <h1 className="font-playfair font-black text-5xl md:text-7xl relative z-10 animate-fade-in text-gray-800 px-4">
              Dan Williams
            </h1>
          </div>

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

          {/* Quick navigation icons with LinkedIn */}
          <div className="mt-8 flex justify-center space-x-6 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <a href="#experience" className="flex items-center text-sm font-medium text-nouveau-vividPurple hover:text-nouveau-darkPurple transition-colors">
              <Calendar size={16} className="mr-1" />
              Experience
            </a>
            <a href="#projects" className="flex items-center text-sm font-medium text-nouveau-orange hover:text-amber-600 transition-colors">
              <Brain size={16} className="mr-1" />
              AI Projects
            </a>
            <a href="https://www.linkedin.com/in/dswilliams/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
              <Linkedin size={16} className="mr-1" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
