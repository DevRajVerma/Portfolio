// src/App.js
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer"; //
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import "./App.css";

import usePageTracking from "./components/usePageTracking";

import GA4React from "ga-4-react";
const ga4react = new GA4React("G-8VSG4RFGVV");
ga4react.initialize().then().catch();

function App() {
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
