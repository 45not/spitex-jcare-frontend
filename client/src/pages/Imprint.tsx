import { useTranslation } from "react-i18next";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";
import { LegalPageHeader } from "@/components/LegalPageHeader";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function Imprint() {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>Impressum | Spitex JCare</title>
        <meta name="description" content="Impressum und rechtliche Hinweise zu Spitex JCare, Ihrem Partner für Pflege und Betreuung in Zürich." />
        <link rel="canonical" href="https://j-care.ch/imprint" />
      </Helmet>
      <LegalPageHeader />
      <main className="min-h-screen bg-white pt-24">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <BackgroundBubbles density="medium" opacity="low" className="z-0" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
              {t('footer.imprint')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              {/* Title */}
              <h2>{t('legal.imprint.title')}</h2>
              
              {/* Company Details */}
              <h3>{t('legal.imprint.company_details.name')}</h3>
              <p>
                {t('legal.imprint.company_details.address')}
              </p>
              
              {/* Contact */}
              <h3>{t('legal.imprint.contact.email')}</h3>
              <p>{t('legal.imprint.contact.phone')}</p>
              
              {/* Registry */}
              <h3>{t('legal.imprint.registry.text')}</h3>
              <p>{t('legal.imprint.registry.uid')}</p>
              
              {/* Representative */}
              <h3>{t('legal.imprint.represented_by')}</h3>
              
              {/* Prohibitions & Legal Protection */}
              <p>{t('legal.imprint.advertising_prohibition')}</p>
              <p>{t('legal.imprint.legal_protection')}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}