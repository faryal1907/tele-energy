import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { currentData } from '../data/currentData';

export default function BarComparison({ data }) {
  const latest = data[data.length - 1];
  const barData = [
    { phase: 'A', value: latest.phaseA },
    { phase: 'B', value: latest.phaseB },
    { phase: 'C', value: latest.phaseC },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow col-span-1">
      <h3 className="text-gray-800 font-semibold mb-2">Real-Time Comparison</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={barData}>
          <XAxis dataKey="phase" />
          <YAxis unit="A" />
          <Tooltip />
          <Bar dataKey="value" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
