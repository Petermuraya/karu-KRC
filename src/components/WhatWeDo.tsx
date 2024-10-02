import React from 'react';

const WhatWeDo: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-red-600 text-white">
      <h2 className="text-3xl font-bold mb-4">What We Do</h2>
      <p className="text-center px-4 max-w-2xl mb-6">
        Our chapter engages in various activities aimed at improving health and safety in our community:
      </p>
      <ul className="list-disc list-inside">
        <li>First Aid Drills</li>
        <li>Community Involvement</li>
        <li>Emergency Response</li>
        <li>Health Initiatives</li>
        <li>Child Welfare Programs</li>
        <li>Home Visits</li>
        <li>Blood Drives</li>
        <li>Community Events</li>
      </ul>
    </section>
  );
};

export default WhatWeDo;
