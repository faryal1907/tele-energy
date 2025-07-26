import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

export default function Speedometer({ currentData }) {
  if (!Array.isArray(currentData)) {
    return (
      <div className="card text-cream-500 p-6">
        Waiting for department data...
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Animated background circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-energy-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow z-0"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-power-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow z-0"></div>
      <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-electric-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow z-0"></div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {currentData.map((department, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.2}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.02}
              transitionSpeed={800}
              className="rounded-2xl"
            >
              <Link
                to={`/dashboard/${department.id}`}
                className="block rounded-2xl focus:outline-none focus:ring-2 focus:ring-power-400"
              >
                <div
                  className="card bg-power-600/90 text-cream-500 rounded-2xl shadow-lg p-2 flex flex-col items-center justify-center
                  transition duration-300 hover:shadow-2xl"
                >
                  <div className="flex justify-center items-center w-full mb-1 mt-16">
                    <div className="w-44 h-32 flex justify-center items-center">
                      <ReactSpeedometer
                        value={department.energy}
                        minValue={0}
                        maxValue={100}
                        segments={4}
                        needleColor="#051462"
                        segmentColors={["#008d34ff", "#c49300ff", "#b5540eff", "#ae0000ff"]}
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
                  <h2 className="text-lg font-semibold text-center bg-energy-gradient bg-clip-text text-[#1f2937]/100 px-2 py-1 rounded-lg">
                    {department.name}
                  </h2>
                </div>
              </Link>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}
