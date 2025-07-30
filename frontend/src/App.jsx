import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DepartmentDashboard from './components/DepartmentDashboard';
import Speedometer from './components/Speedometer';

// Replace this with `useMQTTData()` when using live data
const departments = [
  { id: 'scme', name: 'SCME' },
  { id: 'seecs', name: 'SEECS' },
  { id: 'smme', name: 'SMME' },
  { id: 'nice', name: 'NICE' },
  { id: 'igis', name: 'IGIS' },
  { id: 'nbs', name: 'NBS' },
  { id: 'sada', name: 'SADA' },
  { id: 's3h', name: 'S3H' },
  { id: 'asab', name: 'ASAB' },
  { id: 'sns', name: 'SNS' },
  { id: 'nshs', name: 'NSHS' },
  { id: 'sines', name: 'SINES' },
  { id: 'nls', name: 'NLS' }
];

const currentData = departments.map(dept => ({
  ...dept,
  energy: Math.floor(Math.random() * 101) // Random energy for each department
}));

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream-200">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="dashboard">
                  <Speedometer currentData={currentData} />
                </main>
              </>
            }
          />
          <Route path="/dashboard/:department" element={<DepartmentDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
