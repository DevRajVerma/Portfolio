// usePageTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track the page view with Google Analytics
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);
};
 
export default usePageTracking;
