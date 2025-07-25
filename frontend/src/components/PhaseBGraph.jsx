import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { currentData } from '../data/currentData';

export default function PhaseBGraph({ data }) {
  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-power-700">Phase B Current</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-power-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-cream-500 font-medium">Live</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={ data }>
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
          <Line 
            type="monotone" 
            dataKey="phaseB" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
