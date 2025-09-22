export default function DataTable({ data }) {
  const rows = [...data].reverse().slice(0, 5);

  const handleDownload = () => {
  // Define the table header row
  const header = ["Time", "Phase A", "Phase B", "Phase C"];

  // Build + define all CSV rows
  const csvRows = [
    header.join(","), // turns ["Time","Phase A","Phase B","Phase C"] into "Time,Phase A,Phase B,Phase C"

    // Loop through each row of data
    ...rows.map((row) =>
      [
        `"${new Date(row.timestamp).toLocaleTimeString()}"`, // quoted time
        `"${row.phaseA}"`,
        `"${row.phaseB}"`,
        `"${row.phaseC}"`,
      ].join(",")
    ),
  ];

  // Combine everything into one big string
  const csvString = csvRows.join("\n");
  // Now looks like:
  // Time,Phase A,Phase B,Phase C
  // 05:48:01,12.73,7.96,7.61
  // 05:47:59,14.25,5.79,13.76
  // ...

  // Make a "blob" (file-like object in memory) from the string
  const blob = new Blob([csvString], { type: "text/csv" });

  // Create a temporary URL pointing to that blob
  const url = URL.createObjectURL(blob);

  // Make a hidden <a> (link) element
  const a = document.createElement("a");
  a.href = url;                      // point link to the blob
  a.download = "latest_readings.csv"; // tell browser this should download as a file

  // "Click" the link with JavaScript → triggers the download
  a.click();

  // Clean up the temporary URL (free memory)
  URL.revokeObjectURL(url);
};


  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-energy-700">Latest Readings</h3>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-electric-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-energy-700 font-medium">Recent</span>
          </div>
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="px-3 py-1.5 text-sm font-medium text-white bg-energy-600 rounded-lg shadow hover:bg-energy-700 transition duration-200"
          >
            Download
          </button>
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
              <tr
                key={idx}
                className="border-b border-electric-50 hover:bg-white/30 transition-colors duration-200"
              >
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
