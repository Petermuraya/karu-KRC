import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; // Add this
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import EventsActivities from './components/EventsActivities';
import Leadership from './components/Leadership';
import Donation from './components/Donation';
import EventManagement from './components/EventManagement';
import ContactUs from './components/ContactUs';
import './index.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection /> {/* Include the HeroSection */}
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
