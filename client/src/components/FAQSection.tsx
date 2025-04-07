import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";

type FAQ = {
  question: string;
  answer: string;
};

export function FAQSection() {
  const { t } = useTranslation();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs: FAQ[] = [
    {
      question: t('faq.questions.1.question'),
      answer: t('faq.questions.1.answer')
    },
    {
      question: t('faq.questions.2.question'),
      answer: t('faq.questions.2.answer')
    },
    {
      question: t('faq.questions.3.question'),
      answer: t('faq.questions.3.answer')
    },
    {
      question: t('faq.questions.4.question'),
      answer: t('faq.questions.4.answer')
    },
    {
      question: t('faq.questions.5.question'),
      answer: t('faq.questions.5.answer')
    }
  ];

  return (
    <section id="faq" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background bubbles */}
      <BackgroundBubbles density="medium" opacity="low" className="z-0" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
          {t('faq.title')}
        </h2>
        <p className="text-center text-xl text-gray-700 mb-12">{t('faq.subtitle')}</p>
        
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                <AccordionTrigger className="p-4 text-left bg-gray-50 hover:bg-gray-100 font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-white text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white hover:shadow-lg px-6 py-3 rounded-full text-lg font-medium inline-flex items-center transition-all"
          >
            {t('hero.button')}
            <ChevronRightIcon className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
