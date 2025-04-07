import { useTranslation } from "react-i18next";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";
import { LegalPageHeader } from "@/components/LegalPageHeader";
import { Footer } from "@/components/Footer";

export default function Terms() {
  const { t } = useTranslation();
  
  return (
    <>
      <LegalPageHeader />
      <main className="min-h-screen bg-white pt-24">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <BackgroundBubbles density="medium" opacity="low" className="z-0" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
              {t('footer.terms')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>Allgemeine Geschäftsbedingungen</h2>
              
              <p>Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) regeln das Vertragsverhältnis zwischen dem Nutzer und Spitex JCare betreffend den Zugriff, das Durchsuchen sowie jede Form der Nutzung der Spitex JCare Webseite.</p>
              
              <h2>1. Geltungsbereich</h2>
              <p>Diese AGB gelten für sämtliche Dienstleistungen und Angebote, die von Spitex JCare angeboten werden. Durch die Nutzung unserer Dienste erklären Sie sich mit diesen Bedingungen einverstanden. Bitte lesen Sie diese sorgfältig durch.</p>
              
              <h2>2. Leistungsbeschreibung</h2>
              <p>Spitex JCare bietet Unterstützung für pflegende Angehörige durch verschiedene Dienstleistungen an, darunter beratende und unterstützende Tätigkeiten im Bereich der Pflege und Betreuung von pflegebedürftigen Personen.</p>
              
              <h2>3. Vertragsschluss</h2>
              <p>Ein Vertrag zwischen dem Nutzer und Spitex JCare kommt durch die ausdrückliche Auftragserteilung des Nutzers bzw. durch die Inanspruchnahme der Leistungen von Spitex JCare zustande.</p>
              
              <h2>4. Preise und Zahlungsbedingungen</h2>
              <p>Die Preise für unsere Dienstleistungen werden individuell vereinbart und richten sich nach dem jeweiligen Leistungsumfang. Die Zahlungsbedingungen werden im Einzelfall festgelegt und dem Kunden mitgeteilt. Alle Preise verstehen sich in Schweizer Franken (CHF) und inklusive der gesetzlichen Mehrwertsteuer.</p>
              
              <h2>5. Haftung</h2>
              <p>Spitex JCare haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. Eine Haftung für leichte Fahrlässigkeit besteht nur bei der Verletzung von wesentlichen Vertragspflichten, auf deren Erfüllung der Kunde in besonderem Maße vertrauen darf. In diesem Fall ist die Haftung auf den typischerweise vorhersehbaren Schaden beschränkt.</p>
              
              <h2>6. Datenschutz</h2>
              <p>Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir halten uns bei der Erhebung, Verarbeitung und Nutzung personenbezogener Daten streng an die gesetzlichen Bestimmungen des Datenschutzrechts. Einzelheiten finden Sie in unserer Datenschutzerklärung.</p>
              
              <h2>7. Schlussbestimmungen</h2>
              <p>Es gilt das Recht der Schweiz unter Ausschluss des UN-Kaufrechts. Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Zürich, Schweiz.</p>
              
              <p>Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, so wird hierdurch die Gültigkeit der übrigen Bestimmungen nicht berührt.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}