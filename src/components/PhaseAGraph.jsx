import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function PhaseAGraph({ data }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow col-span-1">
      <h3 className="text-gray-800 font-semibold mb-2">Phase A Current</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" hide />
          <YAxis unit="A" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="phaseA"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
