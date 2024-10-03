import React from 'react';

const WhatWeDo: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-8">What We Do</h2>
        <ul className="text-lg text-gray-700 space-y-4">
          <li>First Aid Drills</li>
          <li>Community Involvement</li>
          <li>Emergency Response</li>
          <li>Blood Drives</li>
          <li>Health Awareness</li>
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;
