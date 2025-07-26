import React, { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`bg-transparent fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center">
              <Logo width="100%" height="100%" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#contact"
              className="text-sm sm:text-base text-energy-100 hover:text-energy-200 font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-gradient transition-all duration-300 group-hover:w-full"></span>
            </a>
            
              

            <a
              href="#settings"
              className="text-sm sm:text-base text-energy-100 hover:text-energy-200 font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-gradient transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-energy-100 hover:text-energy-200 focus:outline-none focus:text-energy-200 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Departments Dropdown */}
              <div className="relative">
                <button className="w-full text-left flex items-center justify-between px-3 py-2 text-sm text-energy-800 hover:bg-energy-500/10 hover:text-orange-600 transition-all duration-150 rounded-md">
                  <span>Departments</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="mt-1 ml-4 space-y-1">
                  {[
                    'SCME', 'SEECS', 'SMME', 'NICE', 'IGIS', 'NBS', 'SADA',
                    'S3H', 'ASAB', 'SNS', 'NSHS', 'SINES', 'NLS',
                  ].map((dept) => (
                    <a
                      key={dept}
                      href={`#${dept.replace(/\s+/g, '').toLowerCase()}`}
                      className="block px-3 py-2 text-sm text-energy-700 hover:bg-energy-500/10 hover:text-orange-600 transition-all duration-150 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {dept}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#settings"
                className="block px-3 py-2 text-sm text-energy-800 hover:bg-energy-500/10 hover:text-orange-600 transition-all duration-150 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
