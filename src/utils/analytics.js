import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = (measurementId) => {
  ReactGA.initialize(measurementId);
};

// Track page views
export const trackPageView = (page, title) => {
  ReactGA.send({
    hitType: 'pageview',
    page,
    title
  });
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  ReactGA.event({
    action,
    category,
    label,
    value
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, section) => {
  ReactGA.event({
    action: 'click',
    category: 'button',
    label: `${section} - ${buttonName}`
  });
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  ReactGA.event({
    action: 'submit',
    category: 'form',
    label: formName
  });
};

// Track downloads (for resume, etc.)
export const trackDownload = (fileName) => {
  ReactGA.event({
    action: 'download',
    category: 'file',
    label: fileName
  });
};

// Track external link clicks
export const trackExternalLink = (url, linkText) => {
  ReactGA.event({
    action: 'click',
    category: 'external_link',
    label: `${linkText} - ${url}`
  });
};

// Track contact interactions
export const trackContact = (method) => {
  ReactGA.event({
    action: 'contact',
    category: 'engagement',
    label: method
  });
}; 