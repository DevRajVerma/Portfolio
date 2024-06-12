// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App" style={{overflow : "hidden"}}>
      <Header />
      <HeroSection />
      <CaseStudies />
      <Testimonials/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
