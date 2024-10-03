import React from 'react';

const Donation: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-8">Make a Donation</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Support us by making a donation via M-Pesa. Your contributions go towards emergency response, community programs, and more.
        </p>
        <a
          href="https://www.safaricom.co.ke/personal/m-pesa"
          className="bg-red-600 text-white px-6 py-3 rounded-full mt-4 inline-block hover:bg-red-700 transition"
        >
          Donate via M-Pesa
        </a>
      </div>
    </section>
  );
};

export default Donation;
