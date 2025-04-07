import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CalendarIcon, ClipboardIcon, PuzzleIcon, UsersIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function SupportProcess() {
  const { t } = useTranslation();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps: Step[] = [
    {
      id: 1,
      title: t('support.steps.1.title'),
      description: t('support.steps.1.description'),
      icon: <CalendarIcon className="h-8 w-8 text-white" />,
    },
    {
      id: 2,
      title: t('support.steps.2.title'),
      description: t('support.steps.2.description'),
      icon: <ClipboardIcon className="h-8 w-8 text-white" />,
    },
    {
      id: 3,
      title: t('support.steps.3.title'),
      description: t('support.steps.3.description'),
      icon: <PuzzleIcon className="h-8 w-8 text-white" />,
    },
    {
      id: 4,
      title: t('support.steps.4.title'),
      description: t('support.steps.4.description'),
      icon: <UsersIcon className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <section id="support" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background bubbles */}
      <BackgroundBubbles density="high" opacity="low" className="z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
          {t('support.title')}
        </h2>
        <p className="text-center text-xl text-gray-700 mb-12">{t('support.subtitle')}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF9155] to-[#E23B3B] flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white hover:shadow-lg px-8 py-4 rounded-full text-lg font-medium inline-flex items-center transition-all"
          >
            {t('hero.button')}
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
