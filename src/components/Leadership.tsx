import React from 'react';

const Leadership: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
      <p className="text-center px-4 max-w-2xl mb-6">
        Meet the dedicated individuals leading the Kenya Red Cross Karatina University Chapter.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Chairman" className="rounded-full mb-4" />
          <h3 className="text-xl font-semibold">Chairman: [Name]</h3>
          <p>Leading the team with dedication and passion.</p>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Secretary" className="rounded-full mb-4" />
          <h3 className="text-xl font-semibold">Secretary: [Name]</h3>
          <p>Ensuring smooth communication and operations.</p>
        </div>
        <div className="text-center">
          <img src="https://via.placeholder.com/150" alt="Treasurer" className="rounded-full mb-4" />
          <h3 className="text-xl font-semibold">Treasurer: [Name]</h3>
          <p>Managing our financial resources responsibly.</p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
