import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { currentData } from '../data/currentData';

export default function CombinedGraph({ data }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow col-span-2">
      <h3 className="text-gray-800 font-semibold mb-2">Combined Current</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" hide />
          <YAxis unit="A" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="phaseA" stroke="#3b82f6" name="Phase A" />
          <Line type="monotone" dataKey="phaseB" stroke="#10b981" name="Phase B" />
          <Line type="monotone" dataKey="phaseC" stroke="#f59e0b" name="Phase C" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
