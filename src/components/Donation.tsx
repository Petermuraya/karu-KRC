import React from 'react';

const Donation: React.FC = () => {
  const handleDonateClick = () => {
    // Redirect to M-Pesa payment link
    window.open('https://www.mpesa.com/donate', '_blank'); // Replace with the actual M-Pesa link
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h2 className="text-3xl font-bold mb-4">Support Us Through Donations</h2>
      <p className="text-center px-4 max-w-2xl mb-6">
        Your contributions help us to continue our humanitarian efforts and community service. 
        Click the button below to donate through M-Pesa.
      </p>
      <button 
        onClick={handleDonateClick}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Donate Now
      </button>
    </section>
  );
};

export default Donation;
