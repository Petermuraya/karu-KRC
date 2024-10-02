import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <header className="bg-red-600 w-full py-4 text-center">
        <h1 className="text-3xl font-bold text-white">Kenya Red Cross Karatina University Chapter</h1>
      </header>
      <main className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-semibold">Welcome to Our Chapter</h2>
        <p className="mt-4 text-center px-4">
          Join us in our mission to provide humanitarian support and community service.
        </p>
        <div className="mt-8">
          <a href="#about" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            Learn More
          </a>
        </div>
      </main>
      <footer className="w-full py-4 bg-red-600 text-center mt-auto">
        <p className="text-white">© 2024 Kenya Red Cross Karatina University Chapter</p>
      </footer>
    </div>
  );
};

export default HomePage;
