import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// Import i18n
import "./i18n/i18n";

// Initialize EmailJS
(function() {
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_emailjs_public_key";
  // Only initialize emailjs if the library is loaded
  if (typeof (window as any).emailjs !== 'undefined') {
    (window as any).emailjs.init(emailJsPublicKey);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
