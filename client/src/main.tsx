import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize EmailJS
(function() {
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_emailjs_public_key";
  window.emailjs?.init(emailJsPublicKey);
})();

createRoot(document.getElementById("root")!).render(<App />);
