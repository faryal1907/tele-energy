import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { currentData } from '../data/currentData';

export default function PhaseCGraph({ data }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow col-span-1">
      <h3 className="text-gray-800 font-semibold mb-2">Phase C Current</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" hide />
          <YAxis unit="A" />
          <Tooltip />
          <Line type="monotone" dataKey="phaseC" stroke="#f59e0b" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
