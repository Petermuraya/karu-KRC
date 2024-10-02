import React, { useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
}

const EventManagement: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  
  const handleAddEvent = () => {
    if (title && date) {
      const newEvent: Event = { id: Date.now(), title, date };
      setEvents([...events, newEvent]);
      setTitle('');
      setDate('');
    }
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h2 className="text-3xl font-bold mb-4">Manage Events & Activities</h2>
      <div className="w-full max-w-md p-4">
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Event Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="w-full p-2 mb-2 border rounded"
          />
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            className="w-full p-2 border rounded"
          />
        </div>
        <button 
          onClick={handleAddEvent} 
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Add Event
        </button>
        <ul className="mt-6">
          {events.map(event => (
            <li key={event.id} className="flex justify-between items-center border-b py-2">
              <span>{event.title} - {event.date}</span>
              <button 
                onClick={() => handleDeleteEvent(event.id)} 
                className="bg-black text-white px-2 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventManagement;
