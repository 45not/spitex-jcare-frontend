import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SupportProcess } from "@/components/SupportProcess";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function Home() {
  // Service structured data
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Spitex JCare Pflege und Betreuung",
    "provider": {
      "@type": "Organization",
      "name": "Spitex JCare",
      "url": "https://j-care.ch/"
    },
    "areaServed": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Zürich",
        "addressCountry": "CH"
      }
    },
    "description": "Professionelle Unterstützung und Beratung für pflegende Angehörige in Zürich und Umgebung. Ambulante Pflege, Betreuung und individuelle Pflegeberatung.",
    "availableLanguage": ["de", "en", "fr"]
  };
  return (
    <>
      <Helmet>
        <title>Spitex JCare - Unterstützung für pflegende Angehörige</title>
        <meta name="description" content="Spitex JCare bietet professionelle Unterstützung und Beratung für pflegende Angehörige in Zürich und Umgebung. Kontaktieren Sie uns für individuelle Pflegeberatung und Betreuung." />
        <meta name="keywords" content="Spitex, Pflege, Angehörige, Zürich, Betreuung, Beratung, JCare, ambulante Pflege, häusliche Pflege" />
        <meta property="og:title" content="Spitex JCare - Unterstützung für pflegende Angehörige" />
        <meta property="og:description" content="Spitex JCare bietet professionelle Unterstützung und Beratung für pflegende Angehörige in Zürich und Umgebung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://j-care.ch/" />
        <meta property="og:image" content="https://j-care.ch/favicon.png" />
        <meta property="og:locale" content="de_CH" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Spitex JCare - Unterstützung für pflegende Angehörige" />
        <meta name="twitter:description" content="Spitex JCare bietet professionelle Unterstützung und Beratung für pflegende Angehörige in Zürich und Umgebung." />
        <meta name="twitter:image" content="https://j-care.ch/favicon.png" />
        <link rel="canonical" href="https://j-care.ch/" />
        <link rel="alternate" href="https://j-care.ch/" hrefLang="de" />
        <link rel="alternate" href="https://j-care.ch/en" hrefLang="en" />
        <link rel="alternate" href="https://j-care.ch/fr" hrefLang="fr" />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>
      <div className="font-sans text-gray-700 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <SupportProcess />
          <AboutSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
