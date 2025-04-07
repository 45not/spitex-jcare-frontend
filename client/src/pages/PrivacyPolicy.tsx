import { useTranslation } from "react-i18next";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <BackgroundBubbles density="medium" opacity="low" className="z-0" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
              {t('footer.privacy')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte (nachfolgend gemeinsam bezeichnet als „Onlineangebot" oder „Website") auf. Die Datenschutzerklärung gilt unabhängig von den verwendeten Domains, Systemen, Plattformen und Geräten (z.B. Desktop oder Mobile) auf denen das Onlineangebot ausgeführt wird.</p>
              
              <h2>Verantwortlicher</h2>
              <p>Spitex JCare<br />
              Bahnhofstrasse 10<br />
              8001 Zürich<br />
              Schweiz<br />
              E-Mail: info@spitex-jcare.ch<br />
              Telefon: +41 800 247 247</p>
              
              <h2>Arten der verarbeiteten Daten</h2>
              <ul>
                <li>Bestandsdaten (z.B., Namen, Adressen).</li>
                <li>Kontaktdaten (z.B., E-Mail, Telefonnummern).</li>
                <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).</li>
                <li>Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
                <li>Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).</li>
              </ul>
              
              <h2>Kategorien betroffener Personen</h2>
              <p>Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer").</p>
              
              <h2>Zweck der Verarbeitung</h2>
              <ul>
                <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.</li>
                <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.</li>
                <li>Sicherheitsmaßnahmen.</li>
                <li>Reichweitenmessung/Marketing</li>
              </ul>
              
              <h2>Verwendete Begrifflichkeiten</h2>
              <p>„Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.</p>
              
              <p>„Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten.</p>
              
              <p>„Pseudonymisierung" die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.</p>
              
              <p>„Profiling" jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}