// src/App.js
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer"; //
import CaseStudies from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import "./App.css";

import { useEffect } from 'react';
import { initGA } from './utils/analytics';
import usePageTracking from "./components/usePageTracking";

function App() {
  // Initialize Google Analytics
  useEffect(() => {
    initGA('G-8VSG4RFGVV');
  }, []);

  usePageTracking(); // Call the custom hook
 
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Header />
      <HeroSection />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
