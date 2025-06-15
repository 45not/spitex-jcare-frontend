import { useTranslation } from "react-i18next";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";
import { LegalPageHeader } from "@/components/LegalPageHeader";
import { Footer } from "@/components/Footer";

export default function Terms() {
  const { t } = useTranslation();
  
  return (
    <>
      <LegalPageHeader />
      <main className="min-h-screen bg-white pt-24 pb-24">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <BackgroundBubbles density="medium" opacity="low" className="z-0" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
              {t('footer.terms')}
            </h1>
            <div className="prose prose-lg max-w-none">
              <h2>{t('legal.terms.title')}</h2>

              <h3>{t('legal.terms.scope')}</h3>
              <p>{t('legal.terms.scope_text')}</p>

              <h3>{t('legal.terms.services')}</h3>
              <p>{t('legal.terms.services_text')}</p>

              <h3>{t('legal.terms.contract')}</h3>
              <p>{t('legal.terms.contract_text')}</p>

              <h3>{t('legal.terms.rates')}</h3>
              <p>{t('legal.terms.rates_text')}</p>

              <h3>{t('legal.terms.liability')}</h3>
              <p>{t('legal.terms.liability_text')}</p>

              <h3>{t('legal.terms.errors')}</h3>
              <p>{t('legal.terms.errors_text')}</p>

              <h3>{t('legal.terms.privacy')}</h3>
              <p>{t('legal.terms.privacy_text')}</p>

              <h3>{t('legal.terms.law')}</h3>
              <p>{t('legal.terms.law_text')}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
          </>
  );
}