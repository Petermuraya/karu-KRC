import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-8">Contact Us</h2>
        <p className="text-lg text-gray-700">
          Reach out to us for any inquiries or support.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Email: <a href="mailto:info@karu-redcross.org" className="text-red-600">info@karu-redcross.org</a>
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Phone: +254 712 345 678
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
