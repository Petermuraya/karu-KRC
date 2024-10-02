import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>
            Kenya Red Cross Karatina University Chapter is dedicated to humanitarian service, emergency response, and community empowerment. 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-red-600 transition">Home</a></li>
            <li><a href="#about" className="hover:text-red-600 transition">About Us</a></li>
            <li><a href="#what-we-do" className="hover:text-red-600 transition">What We Do</a></li>
            <li><a href="#donation" className="hover:text-red-600 transition">Donation</a></li>
            <li><a href="#register" className="hover:text-red-600 transition">Register</a></li>
            <li><a href="#login" className="hover:text-red-600 transition">Login</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:karatina-redcross@example.com" className="hover:text-red-600 transition">karatina-redcross@example.com</a></li>
            <li>Phone: +254 712 345 678</li>
            <li>Address: Karatina University, Karatina, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-center">
        <p>&copy; 2024 Kenya Red Cross Karatina University Chapter. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
