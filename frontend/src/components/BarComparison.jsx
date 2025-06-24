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
    { name: 'Phase A', current: latest.phaseA },
    { name: 'Phase B', current: latest.phaseB },
    { name: 'Phase C', current: latest.phaseC },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Current Comparison</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="current" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
