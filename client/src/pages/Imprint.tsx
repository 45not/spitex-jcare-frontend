import { useTranslation } from "react-i18next";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";
import { LegalPageHeader } from "@/components/LegalPageHeader";
import { Footer } from "@/components/Footer";

export default function Imprint() {
  const { t } = useTranslation();
  
  return (
    <>
      <LegalPageHeader />
      <main className="min-h-screen bg-white pt-24">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <BackgroundBubbles density="medium" opacity="low" className="z-0" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
              {t('footer.imprint')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <h2>{t('legal.imprint.title')}</h2>
              
              <h3>{t('legal.imprint.info')}</h3>
              <p>
                Spitex JCare<br />
                Bahnhofstrasse 10<br />
                8001 Zürich<br />
                Schweiz
              </p>
              
              <h3>{t('legal.imprint.contact')}</h3>
              <p>
                Telefon: +41 800 247 247<br />
                E-Mail: info@spitex-jcare.ch
              </p>
              
              <h3>{t('legal.imprint.responsible')}</h3>
              <p>
                Spitex JCare<br />
                Bahnhofstrasse 10<br />
                8001 Zürich<br />
                Schweiz
              </p>
              
              <h3>{t('legal.imprint.register')}</h3>
              <p>
                {t('legal.imprint.register_text')}<br />
                {t('legal.imprint.register_number')}: CHE-XXX.XXX.XXX
              </p>
              
              <h3>{t('legal.imprint.vat')}</h3>
              <p>
                {t('legal.imprint.vat_text')}<br />
                CHE-XXX.XXX.XXX MWST
              </p>
              
              <h2>{t('legal.imprint.disclaimer')}</h2>
              
              <h3>{t('legal.imprint.content_liability')}</h3>
              <p>{t('legal.imprint.content_text')}</p>
              
              <h3>{t('legal.imprint.link_liability')}</h3>
              <p>{t('legal.imprint.link_text')}</p>
              
              <h3>{t('legal.imprint.copyright')}</h3>
              <p>{t('legal.imprint.copyright_text')}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}