import { useTranslation } from "react-i18next";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Imprint() {
  const { t } = useTranslation();
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <BackgroundBubbles density="medium" opacity="low" className="z-0" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
              {t('footer.imprint')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>Impressum</h2>
              
              <h3>Angaben gemäß § 5 TMG</h3>
              <p>
                Spitex JCare<br />
                Bahnhofstrasse 10<br />
                8001 Zürich<br />
                Schweiz
              </p>
              
              <h3>Kontakt</h3>
              <p>
                Telefon: +41 800 247 247<br />
                E-Mail: info@spitex-jcare.ch
              </p>
              
              <h3>Verantwortlich für den Inhalt</h3>
              <p>
                Spitex JCare<br />
                Bahnhofstrasse 10<br />
                8001 Zürich<br />
                Schweiz
              </p>
              
              <h3>Handelsregistereintrag</h3>
              <p>
                Eingetragen im Handelsregister des Kantons Zürich<br />
                Handelsregisternummer: CHE-XXX.XXX.XXX
              </p>
              
              <h3>Mehrwertsteuer-Identifikationsnummer</h3>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                CHE-XXX.XXX.XXX MWST
              </p>
              
              <h2>Haftungsausschluss</h2>
              
              <h3>Haftung für Inhalte</h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              
              <h3>Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              
              <h3>Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}