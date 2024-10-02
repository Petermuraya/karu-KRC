import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-center px-4 max-w-2xl">
        The Kenya Red Cross Society is a humanitarian organization dedicated to providing emergency assistance, disaster relief, and education in communities. 
        Our chapter at Karatina University engages students in volunteer work, helping to build a more resilient and caring community.
      </p>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Current Leadership</h3>
        <ul className="mt-4">
          <li>Chairman: [Name]</li>
          <li>Secretary: [Name]</li>
          <li>Treasurer: [Name]</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
