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
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="space-y-4 text-lg">
              <p>Wir haben diese Seite gegründet, weil pflegende Angehörige oft alles geben – aber selbst kaum wissen, worauf sie Anspruch haben.</p>
              <p>Bei uns geht es nicht um Bürokratie, sondern um Klarheit, Fairness und Menschlichkeit.</p>
              <p>Wir helfen Ihnen zu verstehen, wie das System funktioniert – und sorgen dafür, dass Sie die Unterstützung bekommen, die Ihnen zusteht.</p>
              <p className="font-medium">Ohne Fachchinesisch. Ohne Hürden. Ohne Druck.</p>
            </div>
            <div className="mt-8">
              <Button 
                onClick={scrollToSupport}
                variant="outline" 
                className="text-[#5A9A9A] border-2 border-[#5A9A9A] hover:bg-[#5A9A9A] hover:text-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-all"
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
