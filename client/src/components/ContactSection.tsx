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
                    <p className="font-medium text-lg">{t('about.contact_phone_title')}</p>
                    <p className="text-2xl font-bold mt-2">+41 797 70 90</p>
                    <p className="text-sm mt-1">{t('about.contact_hours')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MailIcon className="h-6 w-6 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-lg">{t('about.contact_email_title')}</p>
                    <p className="text-xl mt-2">info@j-care.ch</p>
                  </div>
                </div>
              </div>
            
              <div className="mt-12">
                <p className="text-lg font-medium mb-4">{t('about.support_areas_title')}</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    {t('about.support_areas.applications')}
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    {t('about.support_areas.care_tips')}
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    {t('about.support_areas.emotional_support')}
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    {t('about.support_areas.financial_advice')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="bg-white p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-gray-600 mb-8">
              {t('contact.leave_message')}
            </p>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
