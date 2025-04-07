import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#FF9155] via-[#FF6A4D] to-[#E23B3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Pflegen Sie einen <br className="hidden md:block" />Angehörigen?
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-medium">Sie verdienen das Beste.</p>
            <div className="mt-6 text-lg">
              <p>Deshalb unterstützen wir Sie – emotional, praktisch und finanziell.</p>
              <p className="mt-2">Wie das alles funktioniert?</p>
              <p className="mt-2">Melden Sie sich ganz unkompliziert und kostenlos bei uns.</p>
            </div>
            <div className="mt-8">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-[#E23B3B] hover:bg-gray-100 px-6 py-3 rounded-full text-lg font-medium shadow-lg inline-flex items-center transition-all"
              >
                Kontaktieren Sie uns
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Hero Images Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
              <div className="col-span-2 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Senior mit Pflegeperson" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581979619577-2d1482efa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Familienunterstützung" 
                  className="rounded-lg shadow-lg w-full h-40 object-cover"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                  alt="Medizinisches Fachpersonal" 
                  className="rounded-lg shadow-lg w-full h-40 object-cover"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300 opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#FF9155] opacity-30 rounded-full blur-xl"></div>
            <svg className="absolute -left-5 top-1/4 h-40 w-40 text-purple-400 opacity-30" viewBox="0 0 100 100">
              <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="1"></path>
              <path d="M10,60 Q25,35 50,60 T90,60" fill="none" stroke="currentColor" strokeWidth="1"></path>
              <path d="M10,70 Q25,45 50,70 T90,70" fill="none" stroke="currentColor" strokeWidth="1"></path>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Diagonal divider */}
      <div className="absolute top-0 right-0 bottom-0 w-1/4 bg-white transform skew-x-[-15deg] translate-x-[10%] z-[1] hidden md:block"></div>
    </section>
  );
}
