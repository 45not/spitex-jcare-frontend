import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// Import i18n
import "./i18n/i18n";


// Debug environment variables
//console.log('Environment:', import.meta.env.MODE);
//console.log('Site Key:', import.meta.env.VITE_RECAPTCHA_SITE_KEY);
//console.log('All env vars:', import.meta.env);



createRoot(document.getElementById("root")!).render(
  <App />
);
