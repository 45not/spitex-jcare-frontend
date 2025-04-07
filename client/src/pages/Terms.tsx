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
              <h2>{t('legal.terms.title')}</h2>
              
              <p>{t('legal.terms.intro')}</p>
              
              <h2>{t('legal.terms.scope')}</h2>
              <p>{t('legal.terms.scope_text')}</p>
              
              <h2>{t('legal.terms.services')}</h2>
              <p>{t('legal.terms.services_text')}</p>
              
              <h2>{t('legal.terms.contract')}</h2>
              <p>{t('legal.terms.contract_text')}</p>
              
              <h2>{t('legal.terms.prices')}</h2>
              <p>{t('legal.terms.prices_text')}</p>
              
              <h2>{t('legal.terms.liability')}</h2>
              <p>{t('legal.terms.liability_text')}</p>
              
              <h2>{t('legal.terms.data_protection')}</h2>
              <p>{t('legal.terms.data_protection_text')}</p>
              
              <h2>{t('legal.terms.final')}</h2>
              <p>{t('legal.terms.final_text')}</p>
              
              <p>{t('legal.terms.final_text2')}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}