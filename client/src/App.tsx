import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import Imprint from "@/pages/Imprint";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/imprint" component={Imprint} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Only show the alert once per session
    if (window.sessionStorage.getItem('gt_warned')) return;
    if (document.querySelector('iframe.goog-te-banner-frame')) {
      alert('Please turn off Google Translate for the contact form to work properly.');
      window.sessionStorage.setItem('gt_warned', '1');
    } else {
      const observer = new MutationObserver(() => {
        if (document.querySelector('iframe.goog-te-banner-frame')) {
          if (!window.sessionStorage.getItem('gt_warned')) {
            alert('Please turn off Google Translate for the contact form to work properly.');
            window.sessionStorage.setItem('gt_warned', '1');
          }
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
