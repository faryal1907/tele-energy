import React from 'react';
import PhaseAGraph from './PhaseAGraph';
import PhaseBGraph from './PhaseBGraph';
import PhaseCGraph from './PhaseCGraph';
import CombinedGraph from './CombinedGraph';
import BarComparison from './BarComparison';
import DataTable from './DataTable';

export default function DashboardContainer({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 rounded-2x1">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-energy-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
        <PhaseAGraph data={data} />
      </div>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-power-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
        <PhaseBGraph data={data} />
      </div>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-electric-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
        <PhaseCGraph data={data} />
      </div>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-energy-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
        <CombinedGraph data={data} />
      </div>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-power-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
        <BarComparison data={data} />
      </div>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-electric-100 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up">
        <DataTable data={data} />
      </div>
    </div>
  );
} 