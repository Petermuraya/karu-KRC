import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-2xl font-bold">
            <img 
              src="/logo.png" // You can replace this with your logo's path
              alt="Red Cross Logo" 
              className="w-10 h-10 inline-block mr-2" 
            />
            Karatina Red Cross
          </a>
        </div>
        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About Us</a>
          <a href="#what-we-do" className="text-white hover:text-gray-300">What We Do</a>
          <a href="#donation" className="text-white hover:text-gray-300">Donation</a>
          <a href="#register" className="text-white hover:text-gray-300">Register</a>
          <a href="#login" className="text-white hover:text-gray-300">Login</a>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
