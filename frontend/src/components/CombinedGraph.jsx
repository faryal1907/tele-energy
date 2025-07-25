import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { currentData } from '../data/currentData';

export default function CombinedGraph({ data }) {
  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-cream-500">Combined Current</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-energy-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-cream-500 font-medium">All Phases</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="timestamp" hide />
          <YAxis unit="A" stroke="#6b7280" />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="phaseA" 
            stroke="#22c55e" 
            name="Phase A" 
            strokeWidth={2}
            dot={{ fill: '#22c55e', strokeWidth: 1, r: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="phaseB" 
            stroke="#3b82f6" 
            name="Phase B" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6', strokeWidth: 1, r: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="phaseC" 
            stroke="#eab308" 
            name="Phase C" 
            strokeWidth={2}
            dot={{ fill: '#eab308', strokeWidth: 1, r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
