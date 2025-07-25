import React, { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShow(true);
      } else if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-transparent fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4 flex items-center justify-between">
        <div className="w-40 h-40 sm:w-28 sm:h-28 flex items-center justify-center">
            <Logo width="100%" height="100%" />
          </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-3 sm:space-x-6">

          {/* Departments Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm sm:text-base text-energy-100 hover:text-energy-200 font-medium transition-all duration-300 hover:scale-105 focus:outline-none">
              Departments
              <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className="absolute top-full left-0 sm:left-1/2 sm:-translate-x-1/2 mt-2 w-52 max-h-64 overflow-y-auto
                         bg-white bg-opacity-70 backdrop-blur border border-gray-200 rounded-lg shadow-lg
                         opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none
                         transition-opacity duration-200 z-50"
            >
              <ul className="py-2">
                {[
                  'SCME', 'SEECS', 'SMME', 'NICE', 'IGIS', 'NBS', 'SADA',
                  'S3H', 'ASAB', 'SNS', 'NSHS', 'SINES', 'NLS',
                ].map((dept) => (
                  <li key={dept}>
                    <a
                      href={`#${dept.replace(/\s+/g, '').toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-energy-800 bg-energy-600/20 hover:bg-energy-500/10 hover:text-orange-600 transition-all duration-150"
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
            className="text-sm sm:text-base text-energy-100 hover:text-energy-200 font-medium transition-all duration-300 hover:scale-105 relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-gradient transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
