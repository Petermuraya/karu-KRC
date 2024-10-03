import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhatWeDo from './pages/WhatWeDo';
import ContactUs from './pages/ContactUs';
import Donation from './pages/Donation';
import Register from './pages/Register';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
