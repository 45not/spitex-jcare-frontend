import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import aboutImage from "@assets/aboutimg.png";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";

export function AboutSection() {
  const { t } = useTranslation();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background bubbles */}
      <BackgroundBubbles density="medium" opacity="low" className="z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content (left) */}
          <div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-700 mb-6">{t('about.subtitle')}</p>
            <div className="space-y-4 text-lg text-gray-700">
              <p>{t('about.description')}</p>
              
              {/* German contact info (non-translated) */}
              <div className="mt-8 space-y-4">
                <div>
                  <p className="font-semibold">Telefonisch erreichen Sie uns unter:</p>
                  <p className="text-xl text-[#E23B3B] font-bold">+41 800 247 247</p>
                  <p className="text-sm text-gray-600">zwischen 8:00 - 17:00 Uhr CET</p>
                </div>
                
                <div>
                  <p className="font-semibold">Per E-Mail:</p>
                  <p className="text-[#E23B3B]">info@spitex-jcare.ch</p>
                </div>
                
                <div>
                  <p className="font-semibold">Wir unterstützen Sie in den folgenden Bereichen:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Antragsstellung und Behördengänge</li>
                    <li>Pflegetipps und -schulungen</li>
                    <li>Emotionale Unterstützung</li>
                    <li>Finanzielle Beratung</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white hover:shadow-lg px-6 py-3 rounded-full text-lg font-medium inline-flex items-center transition-all"
              >
                {t('hero.button')}
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Image (right) */}
          <div>
            <img 
              src={aboutImage} 
              alt="Caregiver and senior" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
