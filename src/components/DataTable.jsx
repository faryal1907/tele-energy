export default function DataTable({ data }) {
  const rows = [...data].reverse().slice(0, 5);

  return (
    <div className="bg-white p-4 rounded-xl shadow col-span-1">
      <h3 className="text-gray-800 font-semibold mb-2">Latest Readings</h3>
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="p-2">Time</th>
            <th className="p-2">Phase A</th>
            <th className="p-2">Phase B</th>
            <th className="p-2">Phase C</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b">
              <td className="p-2">{new Date(row.timestamp).toLocaleTimeString()}</td>
              <td className="p-2">{row.phaseA}</td>
              <td className="p-2">{row.phaseB}</td>
              <td className="p-2">{row.phaseC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
