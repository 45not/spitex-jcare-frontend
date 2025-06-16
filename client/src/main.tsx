import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// Import i18n
import "./i18n/i18n";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// Debug environment variables
//console.log('Environment:', import.meta.env.MODE);
//console.log('Site Key:', import.meta.env.VITE_RECAPTCHA_SITE_KEY);
//console.log('All env vars:', import.meta.env);

// Initialize EmailJS
(function() {
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_emailjs_public_key";
  // Only initialize emailjs if the library is loaded
  if (typeof (window as any).emailjs !== 'undefined') {
    (window as any).emailjs.init(emailJsPublicKey);
  }
})();

createRoot(document.getElementById("root")!).render(
  <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
    <App />
  </GoogleReCaptchaProvider>
);
