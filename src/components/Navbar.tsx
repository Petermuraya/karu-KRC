import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Karatina Red Cross</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About Us</Link>
          <Link to="/what-we-do" className="text-white">What We Do</Link>
          <Link to="/donation" className="text-white">Donation</Link>
          <Link to="/register" className="text-white">Register</Link>
          <Link to="/login" className="text-white">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
