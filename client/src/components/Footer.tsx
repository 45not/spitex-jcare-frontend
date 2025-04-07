import { MapPinIcon, PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { HeartLogo } from "@/components/ui/HeartLogo";

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <HeartLogo className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">Spitex JCare</span>
            </div>
            <p className="mt-4 text-gray-400">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mt-0.5 mr-3 text-gray-400" />
                <span>Bahnhofstrasse 10, 8001 Zürich</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mt-0.5 mr-3 text-gray-400" />
                <span>+41 800 247 247</span>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 mt-0.5 mr-3 text-gray-400" />
                <span>info@spitex-jcare.ch</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.hours')}</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>{t('footer.monday')} - {t('footer.friday')}:</span>
                <span>8:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.saturday')}:</span>
                <span>9:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.sunday')}:</span>
                <span>{t('footer.closed')}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><Link href="/imprint" target="_blank" className="text-gray-400 hover:text-white transition-colors">{t('footer.imprint')}</Link></li>
              <li><Link href="/privacy" target="_blank" className="text-gray-400 hover:text-white transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link href="/terms" target="_blank" className="text-gray-400 hover:text-white transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Spitex JCare. {t('footer.rights')}</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
