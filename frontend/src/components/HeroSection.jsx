import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative pt-32 pb-28 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-energy-50 via-power-50 to-electric-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-energy-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-power-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-electric-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-energy-gradient rounded-2xl shadow-lg mb-4 animate-glow">
            <span className="text-white text-2xl">⚡</span>
          </div>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 animate-slide-up">
          <span className="bg-energy-gradient bg-clip-text text-transparent">
            Real-Time Energy
          </span>
          <br />
          <span className="bg-power-gradient bg-clip-text text-transparent">
            Monitoring
          </span>
        </h2>
        
        <p className="text-xl text-neutral-600 mb-4 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          View entire campus energy consumption in real-time, track usage patterns, and receive smart alerts for anomalies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-slide-up">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-energy-100">
            <div className="w-3 h-3 bg-energy-500 rounded-full animate-pulse"></div>
            <span className="text-neutral-700 font-medium">Live Data</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-power-100">
            <div className="w-3 h-3 bg-power-500 rounded-full animate-pulse"></div>
            <span className="text-neutral-700 font-medium">Real-time Updates</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-electric-100">
            <div className="w-3 h-3 bg-electric-500 rounded-full animate-pulse"></div>
            <span className="text-neutral-700 font-medium">Smart Alerts</span>
          </div>
        </div>
        
        <p className="text-lg text-neutral-500 mt-6 font-medium">
          NUST at a glance, or view detailed analytics for each department!
        </p>
        {/* Decorative SVG Arrow */}
        
      </div>
    </div>
  );
}
