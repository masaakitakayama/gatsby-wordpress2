// gatsby-browser.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// gatsby-browser.js

export const onRouteUpdate = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
};
