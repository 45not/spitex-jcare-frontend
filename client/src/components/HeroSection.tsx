import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import heroImage from "@assets/heroimg.png";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
        {/* Colored section (40% width) */}
        <div className="absolute top-0 left-0 h-full w-[40%] md:block bg-gradient-to-r from-[#FF9155] via-[#FF6A4D] to-[#E23B3B] z-0 clip-path-diagonal">
          {/* Background bubbles */}
          <BackgroundBubbles density="medium" opacity="medium" />
          
          {/* Hero image - larger without box/shadow */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="px-6 py-12 w-full">
              <img 
                src={heroImage} 
                alt="Spitex JCare Hero" 
                className="w-full object-contain h-auto md:h-64 lg:h-80"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Empty area for the colored section (40%) */}
          <div className="col-span-5 md:block hidden"></div>
          
          {/* Text content (60%) */}
          <div className="col-span-12 md:col-span-7 text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Pflegen Sie einen <br className="hidden md:block" />Angehörigen?
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-medium text-gray-800">Sie verdienen das Beste.</p>
            <div className="mt-6 text-lg text-gray-700">
              <p>Deshalb unterstützen wir Sie – emotional, praktisch und finanziell.</p>
              <p className="mt-2">Wie das alles funktioniert?</p>
              <p className="mt-2">Melden Sie sich ganz unkompliziert und kostenlos bei uns.</p>
            </div>
            <div className="mt-8">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white hover:shadow-lg px-6 py-3 rounded-full text-lg font-medium shadow-md inline-flex items-center transition-all"
              >
                Kontaktieren Sie uns
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
