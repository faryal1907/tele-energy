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
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="dashboard">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Energy Dashboard: Current Monitoring
        </h1>

        {currentData.length === 0 ? (
          <p className="text-center text-gray-500">Waiting for data...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <PhaseAGraph data={currentData} />
            <PhaseBGraph data={currentData} />
            <PhaseCGraph data={currentData} />
            <CombinedGraph data={currentData} />
            <BarComparison data={currentData} />
            <DataTable data={currentData} />
          </div>
        )}
      </main>
    </div>
  );
}
