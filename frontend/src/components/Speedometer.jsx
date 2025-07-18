import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

export default function Speedometer({ currentData }) {
  if (!Array.isArray(currentData)) {
    return (
      <div className="card text-gray-800 dark:text-gray-100 p-6">
        Waiting for department data...
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-energy-50 via-power-50 to-electric-50 z-0 rounded-ful"></div>
      {/* Animated circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-energy-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow z-0"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-power-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow z-0"></div>
      <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-electric-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow z-0"></div>
      <div className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {currentData.map((department, index) => (
            <div
              key={index}
              className="card bg-[#61dafb]/10 text-gray-800 dark:text-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-2 flex flex-col items-center justify-center"
            >
              <div className="flex justify-center items-center w-full mb-1 mt-16">
                <div className="w-44 h-32 flex justify-center items-center">
                  <ReactSpeedometer
                    value={department.energy}
                    minValue={0}
                    maxValue={100}
                    segments={4}
                    needleColor="#3b82f6"
                    segmentColors={["#22c55e", "#eab308", "#f97316", "#ef4444"]}
                    textColor="#1f2937"
                    ringWidth={24}
                    height={220}
                    width={220}
                    customSegmentStops={[0, 25, 50, 75, 100]}
                    needleTransition="easeElastic"
                    needleTransitionDuration={2000}
                  />
                </div>
              </div>
              <h2 className="text-lg font-semibold text-center bg-energy-gradient bg-clip-text text-transparent px-2 py-1 rounded-lg backdrop-blur-sm">
                {department.name ?? `Department ${index + 1}`}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}