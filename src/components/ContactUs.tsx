import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-red-600 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-center px-4 max-w-2xl mb-6">
        We would love to hear from you! Reach out to us through any of the following channels:
      </p>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Email:</h3>
        <p>info@karurkc.com</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Phone:</h3>
        <p>+254 700 000 000</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Social Media:</h3>
        <p>Follow us on our social media platforms!</p>
      </div>
    </section>
  );
};

export default ContactUs;
