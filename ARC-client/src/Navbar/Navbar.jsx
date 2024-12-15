import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo Image */}
        <a href="#home">
          <img src="images/logo.jpg" alt="Sport Logo" className="h-10 w-auto" />
        </a>
        
        {/* Navbar Links */}
        <ul className="flex space-x-8 text-gray-800 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About us</a></li>
          <li><a href="#sports" className="hover:text-blue-600">Sports Listing</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        
        {/* Search Bar and Login Button */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 w-60 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800">
              <i className="fas fa-search"></i> {/* Add FontAwesome or similar icons */}
            </button>
          </div>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
