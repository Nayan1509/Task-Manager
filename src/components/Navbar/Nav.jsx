import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-indigo-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard" className="text-2xl font-bold text-purple-300 hover:text-white transition">
          Taskverse
        </Link>

        {/* Tabs */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to="/dashboard" className="hover:text-purple-300">Home</Link></li>
          <li><Link to="/tasks" className="hover:text-purple-300">Tasks</Link></li>
          <li><Link to="/about" className="hover:text-purple-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-purple-300">Contact</Link></li>
        </ul>

        {/* Profile Dropdown */}
        <div className="relative">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
            onClick={toggleDropdown}
          />

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Edit Profile</Link>
              <button
                onClick={() => {
                  console.log('Logging out...');
                  // You can add logout logic here
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
