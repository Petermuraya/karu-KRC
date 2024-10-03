import React, { useState } from 'react';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for registering, ${name}!`);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-8">Register</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
