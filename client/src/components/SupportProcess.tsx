import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CalendarIcon, ClipboardIcon, PuzzleIcon, UsersIcon } from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    title: "1. Voraussetzungen",
    description: "Sie sind volljährig und kümmern sich regelmäßig um eine nahestehende Person – etwa bei der Körperpflege, beim Essen oder An- und Auskleiden.",
    icon: <CalendarIcon className="h-8 w-8 text-white" />,
  },
  {
    id: 2,
    title: "2. Überprüfung des Pflegebedarfs",
    description: "Eine Pflegefachperson besucht die betreute Person zu Hause und klärt ab, wie viel Unterstützung notwendig ist. Diese Einschätzung wird regelmäßig wiederholt.",
    icon: <ClipboardIcon className="h-8 w-8 text-white" />,
  },
  {
    id: 3,
    title: "3. Vertragsabschluss",
    description: "Sie unterschreiben einen Vertrag und erhalten für Ihre Pflegearbeit bis zu CHF 37.9.- pro Stunde.",
    icon: <PuzzleIcon className="h-8 w-8 text-white" />,
  },
  {
    id: 4,
    title: "4. Unterstützung",
    description: "Wir begleiten Sie dauerhaft – persönlich oder telefonisch. Bei allen Fragen rund um Anträge, Leistungen oder Pflege stehen wir Ihnen zur Seite.",
    icon: <UsersIcon className="h-8 w-8 text-white" />,
  },
];

export function SupportProcess() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="support" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
          So erhalten Sie Lohn und Unterstützung bei Spitex JCare
        </h2>
        
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
            Jetzt starten
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
