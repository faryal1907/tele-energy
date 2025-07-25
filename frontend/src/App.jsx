import React, { useEffect, useState } from 'react';
import './index.css';
import AnimatedBackground from './components/AnimatedBackground';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import PhaseAGraph from './components/PhaseAGraph';
import PhaseBGraph from './components/PhaseBGraph';
import PhaseCGraph from './components/PhaseCGraph';
import CombinedGraph from './components/CombinedGraph';
import BarComparison from './components/BarComparison';
import DataTable from './components/DataTable';
import Dashboard from './components/DashboardContainer';


import Speedometer from './components/Speedometer';

import useMQTTData from './hooks/useMQTTData';

// Example threshold
const THRESHOLD = 70;

export default function App() {
  
  // const currentData = useMQTTData();
  // useEffect(() => {
  //   document.title = 'Energy Dashboard';
  // }, []);

  // Simulated current data for demonstration
    const departmentNames = [
    'SCME', 'SEECS', 'SMME', 'NICE', 'IGIS', 'NBS', 'SADA',
    'S3H', 'ASAB', 'SNS', 'NSHS', 'SINES', 'NLS'
  ];

  const currentData = departmentNames.map(name => ({
    name,
    energy: Math.floor(Math.random() * 101) // Random energy between 0 and 100
  }));


  return (
    <div className="min-h-screen bg-energy-700">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="dashboard">
        <Speedometer currentData={currentData} />
      </main>
    </div>
  );
}
