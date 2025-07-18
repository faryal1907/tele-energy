import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-energy-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-energy-gradient rounded-xl flex items-center justify-center shadow-lg animate-glow">
            <span className="text-white text-lg sm:text-xl font-bold">⚡</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold bg-energy-gradient bg-clip-text text-transparent">
            Tele-energy
          </h1>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <a 
            href="#dashboard" 
            className="text-sm sm:text-base text-neutral-600 hover:text-energy-600 font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            NUST dashboard
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-energy-gradient transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* Department Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm sm:text-base text-neutral-600 hover:text-power-600 font-medium transition-all duration-300 hover:scale-105 focus:outline-none">
              Departments
              <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="
              absolute
              top-full
              left-0
              sm:left-1/2
              sm:-translate-x-1/2
              mt-2
              w-52
              max-h-64
              overflow-y-auto
              bg-white
              border border-gray-200
              rounded-lg
              shadow-lg
              opacity-0
              group-hover:opacity-100
              group-hover:pointer-events-auto
              pointer-events-none
              transition-opacity
              duration-200
              z-50
            ">
              <ul className="py-2">
                {[
                  'SCME', 'SEECS', 'SMME', 'NICE', 'IGIS', 'NBS', 'SADA',
                  'S3H', 'ASAB', 'SNS', 'NSHS', 'SINES', 'LAW SCHOOL'
                ].map((dept) => (
                  <li key={dept}>
                    <a
                      href={`#${dept.replace(/\s+/g, '').toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-energy-50 hover:text-energy-600 transition-all duration-150"
                    >
                      {dept}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a 
            href="#settings" 
            className="text-sm sm:text-base text-neutral-600 hover:text-electric-600 font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-gradient transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
