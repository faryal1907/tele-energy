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
    'S3H', 'ASAB', 'SNS', 'NSHS', 'SINES', 'LAW SCHOOL'
  ];

  const currentData = departmentNames.map(name => ({
    name,
    energy: Math.floor(Math.random() * 101) // Random energy between 0 and 100
  }));



  return (
    <div className="min-h-screen">
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

        {/* add code here such that a speedometer is displayed, having a certain threshold energy, beyond which 
        the reading background is red, the remaining speedometer background should match the theme of the page
        also add logic such that an alert pops up if any department's speedometer goes beyond that threshold */}
        <Speedometer currentData={currentData} />
      </main>
    </div>
  );
}
