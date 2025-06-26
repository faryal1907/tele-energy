import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-energy-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-energy-gradient rounded-xl flex items-center justify-center shadow-lg animate-glow">
            <span className="text-white text-lg sm:text-xl font-bold">⚡</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold bg-energy-gradient bg-clip-text text-transparent">
            Energy Monitor
          </h1>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <a 
            href="#dashboard" 
            className="text-sm sm:text-base text-neutral-600 hover:text-energy-600 font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            Dashboard
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-energy-gradient transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#logs" 
            className="text-sm sm:text-base text-neutral-600 hover:text-power-600 font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            Logs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-power-gradient transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#settings" 
            className="text-sm sm:text-base text-neutral-600 hover:text-electric-600 font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-gradient transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
