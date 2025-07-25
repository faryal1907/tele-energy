import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function BarComparison({ data }) {
  // Prepare a single latest snapshot for the bar chart
  const latest = data[data.length - 1] || {
    phaseA: 0,
    phaseB: 0,
    phaseC: 0,
  };

  const barData = [
    { name: 'Phase A', current: latest.phaseA, color: '#22c55e' },
    { name: 'Phase B', current: latest.phaseB, color: '#3b82f6' },
    { name: 'Phase C', current: latest.phaseC, color: '#eab308' },
  ];

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-cream-500">Current Comparison</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-power-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-cream-500 font-medium">Latest</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Bar 
            dataKey="current" 
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
