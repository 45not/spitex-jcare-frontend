import { useTranslation } from "react-i18next";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";
import { LegalPageHeader } from "@/components/LegalPageHeader";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  
  return (
    <>
      <LegalPageHeader />
      <main className="min-h-screen bg-white pt-24">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <BackgroundBubbles density="medium" opacity="low" className="z-0" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
              {t('footer.privacy')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p>{t('legal.privacy.intro')}</p>
              
              <h2>{t('legal.privacy.responsible')}</h2>
              <p>Spitex JCare<br />
              Bahnhofstrasse 10<br />
              8001 Zürich<br />
              Schweiz<br />
              E-Mail: info@spitex-jcare.ch<br />
              Telefon: +41 800 247 247</p>
              
              <h2>{t('legal.privacy.data_types')}</h2>
              <ul>
                <li>{t('legal.privacy.data_types_list.inventory')}</li>
                <li>{t('legal.privacy.data_types_list.contact')}</li>
                <li>{t('legal.privacy.data_types_list.content')}</li>
                <li>{t('legal.privacy.data_types_list.usage')}</li>
                <li>{t('legal.privacy.data_types_list.meta')}</li>
              </ul>
              
              <h2>{t('legal.privacy.categories')}</h2>
              <p>{t('legal.privacy.categories_text')}</p>
              
              <h2>{t('legal.privacy.processing_purpose')}</h2>
              <ul>
                <li>{t('legal.privacy.purpose_list.provision')}</li>
                <li>{t('legal.privacy.purpose_list.contact')}</li>
                <li>{t('legal.privacy.purpose_list.security')}</li>
                <li>{t('legal.privacy.purpose_list.reach')}</li>
              </ul>
              
              <h2>{t('legal.privacy.terminology')}</h2>
              <p>{t('legal.privacy.personal_data')}</p>
              
              <p>{t('legal.privacy.processing')}</p>
              
              <p>{t('legal.privacy.pseudonymization')}</p>
              
              <p>{t('legal.privacy.profiling')}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}