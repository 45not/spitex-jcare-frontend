import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronDownIcon } from "lucide-react";
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

const faqs: FAQ[] = [
  {
    question: "Wer kann Spitex JCare in Anspruch nehmen?",
    answer: "Jede Person, die regelmäßig einen Angehörigen oder nahestehende Person betreut und pflegt, kann unsere Dienstleistungen in Anspruch nehmen. Voraussetzung ist, dass die betreute Person eine Pflegebedürftigkeit aufweist, die durch eine professionelle Einschätzung bestätigt wird."
  },
  {
    question: "Wie wird die Höhe meiner Vergütung bestimmt?",
    answer: "Die Vergütungshöhe richtet sich nach dem festgestellten Pflegebedarf der betreuten Person. Nach einer Bedarfsabklärung durch eine Pflegefachperson wird festgelegt, wie viele Stunden pro Woche vergütet werden können. Der Stundensatz beträgt bis zu CHF 37.90."
  },
  {
    question: "Was passiert nach der Kontaktaufnahme?",
    answer: "Nach Ihrer Kontaktaufnahme meldet sich einer unserer Berater innerhalb von 24 Stunden bei Ihnen. In einem ersten Gespräch werden Ihre individuelle Situation und Bedürfnisse besprochen. Anschließend wird ein Termin für die Bedarfsabklärung vereinbart, bei der eine Pflegefachperson die pflegebedürftige Person zu Hause besucht."
  },
  {
    question: "Muss ich spezielle Qualifikationen nachweisen?",
    answer: "Nein, Sie benötigen keine speziellen pflegerischen Qualifikationen. Wir bieten Ihnen aber bei Bedarf kostenlose Schulungen an, um Sie in Ihrer Pflegetätigkeit zu unterstützen und Ihnen mehr Sicherheit zu geben."
  },
  {
    question: "Wie werden die Zahlungen abgewickelt?",
    answer: "Nach Vertragsabschluss erhalten Sie monatlich eine Vergütung für Ihre Pflegeleistungen. Die Abrechnung erfolgt basierend auf dem festgestellten Pflegebedarf. Die Zahlung wird direkt auf Ihr Bankkonto überwiesen."
  }
];

export function FAQSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background bubbles */}
      <BackgroundBubbles density="medium" opacity="low" className="z-0" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
          Häufig gestellte Fragen
        </h2>
        
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
          <p className="text-lg text-gray-600 mb-6">Haben Sie weitere Fragen? Kontaktieren Sie uns für ein persönliches Gespräch.</p>
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white hover:shadow-lg px-6 py-3 rounded-full text-lg font-medium inline-flex items-center transition-all"
          >
            Zum Kontaktformular
            <ChevronRightIcon className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
