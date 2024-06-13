// usePageTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import GA4React from "ga-4-react";
const ga4react = new GA4React("G-8VSG4RFGVV");
ga4react.initialize().then().catch()

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track the page view with Google Analytics
    // ReactGA.pageview(location.pathname + location.search);
    ReactGA.send("pageview", location);
  }, [location]);
};

export default usePageTracking;
