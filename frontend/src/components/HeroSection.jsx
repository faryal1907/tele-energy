import React from 'react';

export default function HeroSection() {
  return (
    <div
      className="relative pt-16 pb-8 overflow-hidden pt-24"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
      }}
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-energy-800 to-electric-50/10"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Headline */}
        <h1 className="text-3xl pt-4 sm:text-4xl md:text-5xl font-bold text-energy-100 drop-shadow-lg animate-fade-in">
          Powered Insights with <span className="text-energy-400">Real-Time Energy Monitoring</span>
        </h1>

        {/* Feature Pills */}
        <div className="flex flex-col pt-4 sm:flex-row gap-4 justify-center items-center mt-10 animate-slide-up">
          <div className="flex items-center space-x-2 bg-power-600 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-energy-100">
            <div className="w-3 h-3 bg-energy-500 rounded-full animate-pulse"></div>
            <span className="text-energy-500 font-medium">Live Data</span>
          </div>
          <div className="flex items-center space-x-2 bg-power-600 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-power-100">
            <div className="w-3 h-3 bg-energy-500 rounded-full animate-pulse"></div>
            <span className="text-energy-500 font-medium">Real-time Updates</span>
          </div>
          <div className="flex items-center space-x-2 bg-power-600 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-electric-100">
            <div className="w-3 h-3 bg-energy-500 rounded-full animate-pulse"></div>
            <span className="text-energy-500 font-medium">Smart Alerts</span>
          </div>
        </div>
      </div>
    </div>
  );
}
