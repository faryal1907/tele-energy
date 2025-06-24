import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-600">⚡ Energy Monitor</h1>
        <div className="space-x-4">
          <a href="#dashboard" className="text-gray-600 hover:text-indigo-500">Dashboard</a>
          <a href="#logs" className="text-gray-600 hover:text-indigo-500">Logs</a>
          <a href="#settings" className="text-gray-600 hover:text-indigo-500">Settings</a>
        </div>
      </div>
    </nav>
  );
}
