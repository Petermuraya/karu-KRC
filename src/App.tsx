import React from 'react';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import EventsActivities from './components/EventsActivities';
import ContactUs from './components/ContactUs';
import Donation from './components/Donation';
import Leadership from './components/Leadership';
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
      <ContactUs />
    </div>
  );
};

export default App;
