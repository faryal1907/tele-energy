export default function DataTable({ data }) {
  const rows = [...data].reverse().slice(0, 5);

  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-energy-700">Latest Readings</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-electric-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-energy-700 font-medium">Recent</span>
        </div>
      </div>
      <div className="bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden border border-electric-100">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-electric-50 to-electric-100">
            <tr>
              <th className="p-3 text-left font-semibold text-electric-800">Time</th>
              <th className="p-3 text-left font-semibold text-energy-800">Phase A</th>
              <th className="p-3 text-left font-semibold text-power-800">Phase B</th>
              <th className="p-3 text-left font-semibold text-electric-800">Phase C</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-b border-electric-50 hover:bg-white/30 transition-colors duration-200">
                <td className="p-3 text-energy-700 font-medium">
                  {new Date(row.timestamp).toLocaleTimeString()}
                </td>
                <td className="p-3 font-semibold text-power-600">{row.phaseA} A</td>
                <td className="p-3 font-semibold text-power-600">{row.phaseB} A</td>
                <td className="p-3 font-semibold text-electric-600">{row.phaseC} A</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
