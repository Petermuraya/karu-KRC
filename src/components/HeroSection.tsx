import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-red-600 text-white min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center max-w-2xl p-6">
        <h1 className="text-5xl font-bold mb-4">Kenya Red Cross Karatina University Chapter</h1>
        <p className="text-lg mb-8">
          Committed to community service, emergency response, and humanitarian efforts. Join us in making a difference.
        </p>
        <a href="#donation" className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Donate Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
