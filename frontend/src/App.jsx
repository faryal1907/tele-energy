import React, { useEffect, useState } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import PhaseAGraph from './components/PhaseAGraph';
import PhaseBGraph from './components/PhaseBGraph';
import PhaseCGraph from './components/PhaseCGraph';
import CombinedGraph from './components/CombinedGraph';
import BarComparison from './components/BarComparison';
import DataTable from './components/DataTable';

import useMQTTData from './hooks/useMQTTData';


export default function App() {
  
  const currentData = useMQTTData();
  useEffect(() => {
    document.title = 'Energy Dashboard';
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-energy-50 to-power-50">
      <Navbar />
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="dashboard">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-energy-gradient bg-clip-text text-transparent">
              Energy Dashboard
            </span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Current Monitoring & Analytics
          </p>
        </div>

        {currentData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <div className="w-16 h-16 bg-energy-gradient rounded-2xl flex items-center justify-center mb-6 animate-pulse">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <p className="text-xl text-neutral-500 font-medium">Waiting for data...</p>
            <p className="text-neutral-400 mt-2">Connecting to energy monitoring system</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-energy-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <PhaseAGraph data={currentData} />
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-power-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <PhaseBGraph data={currentData} />
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-electric-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <PhaseCGraph data={currentData} />
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-energy-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <CombinedGraph data={currentData} />
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-power-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <BarComparison data={currentData} />
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-electric-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
              <DataTable data={currentData} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
