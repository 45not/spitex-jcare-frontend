import { ContactForm } from "@/components/ui/contact-form";
import { PhoneIcon, MailIcon, CheckIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";

export function ContactSection() {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="w-full mx-auto">
        <div className="grid md:grid-cols-2">
          {/* Info Side - Full width to edge */}
          <div className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white p-8 lg:p-12 flex flex-col justify-between relative">
            {/* Background bubbles */}
            <BackgroundBubbles density="medium" opacity="medium" className="z-0" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">{t('contact.title')}</h3>
              <p className="text-lg mb-8">{t('contact.subtitle')}</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-lg">Telefonisch erreichen Sie uns unter:</p>
                    <p className="text-2xl font-bold mt-2">+41 800 247 247</p>
                    <p className="text-sm mt-1">zwischen 8:00 - 17:00 Uhr CET</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MailIcon className="h-6 w-6 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-lg">Per E-Mail:</p>
                    <p className="text-xl mt-2">info@spitex-jcare.ch</p>
                  </div>
                </div>
              </div>
            
              <div className="mt-12">
                <p className="text-lg font-medium mb-4">Wir unterstützen Sie in den folgenden Bereichen:</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    Antragsstellung und Behördengänge
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    Pflegetipps und -schulungen
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    Emotionale Unterstützung
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    Finanzielle Beratung
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="bg-white p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-gray-600 mb-8">
              Hinterlassen Sie uns Ihre Kontaktdaten, und wir melden uns innerhalb eines Werktages bei Ihnen.
            </p>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
