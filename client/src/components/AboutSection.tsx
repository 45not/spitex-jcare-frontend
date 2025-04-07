import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import aboutImage from "@assets/aboutimg.png";

export function AboutSection() {
  const scrollToSupport = () => {
    const supportSection = document.getElementById("support");
    if (supportSection) {
      supportSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative circles for background */}
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#FF9155] opacity-10 blur-xl"></div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#E23B3B] opacity-10 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={aboutImage} 
              alt="Tochter und älterer Vater" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
              Über uns
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>Wir haben diese Seite gegründet, weil pflegende Angehörige oft alles geben – aber selbst kaum wissen, worauf sie Anspruch haben.</p>
              <p>Bei uns geht es nicht um Bürokratie, sondern um Klarheit, Fairness und Menschlichkeit.</p>
              <p>Wir helfen Ihnen zu verstehen, wie das System funktioniert – und sorgen dafür, dass Sie die Unterstützung bekommen, die Ihnen zusteht.</p>
              <p className="font-medium">Ohne Fachchinesisch. Ohne Hürden. Ohne Druck.</p>
            </div>
            <div className="mt-8">
              <Button 
                onClick={scrollToSupport}
                className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white hover:shadow-lg px-6 py-3 rounded-lg font-medium inline-flex items-center transition-all"
              >
                Mehr erfahren
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
