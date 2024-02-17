// Navbar.js

// Navbar.js
import React from 'react';
import { FaSearch, FaCog, FaQuestionCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2 hover:cursor-pointer">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png"
          alt="Google Drive"
          className="h-8"
        />
        <span className="text-gray-600 font-sans font-semibold text-2xl hover:cursor-pointer">Drive</span>
      </div>
      <div className="flex justify-center flex-1 mx-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search in Drive"
            className="bg-gray-200 border border-gray-300 py-1 px-4 w-full focus:outline-none focus:border-blue-500 rounded-2xl"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
            <FaSearch />
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <FaCog />
        </button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <FaQuestionCircle />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
