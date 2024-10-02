import React from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import EventsActivities from './components/EventsActivities';
import Leadership from './components/Leadership';
import Donation from './components/Donation';
import ContactUs from './components/ContactUs';
import EventManagement from './components/EventManagement';
import './index.css'; // Ensure your styles are included

const App: React.FC = () => {
  return (
    <div>
      <HomePage />
      <AboutUs />
      <WhatWeDo />
      <EventsActivities />
      <Leadership />
      <Donation />
      <EventManagement />
      <ContactUs />
    </div>
  );
};

export default App;
