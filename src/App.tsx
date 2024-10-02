import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import EventsActivities from './components/EventsActivities';
import Leadership from './components/Leadership';
import Donation from './components/Donation';
import EventManagement from './components/EventManagement';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer'; // Add the Footer component
import './index.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HomePage />
      <AboutUs />
      <WhatWeDo />
      <EventsActivities />
      <Leadership />
      <Donation />
      <EventManagement />
      <ContactUs />
      <Footer /> {/* Include the Footer at the bottom */}
    </div>
  );
};

export default App;
