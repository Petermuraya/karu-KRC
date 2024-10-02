import React from 'react';

const EventsActivities: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h2 className="text-3xl font-bold mb-4">Upcoming Events & Activities</h2>
      <p className="text-center px-4 max-w-2xl mb-6">
        Join us in our upcoming events to make a difference in our community!
      </p>
      <ul className="list-disc list-inside">
        <li className="mb-2">Community Blood Drive - Date: [Insert Date]</li>
        <li className="mb-2">First Aid Training - Date: [Insert Date]</li>
        <li className="mb-2">Health Awareness Campaign - Date: [Insert Date]</li>
        <li className="mb-2">Emergency Response Drill - Date: [Insert Date]</li>
      </ul>
    </section>
  );
};

export default EventsActivities;
