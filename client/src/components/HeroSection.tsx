import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import heroImage from "@assets/heroimg.png";
import { useState, useEffect } from "react";

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Decorative circles that will appear and fade
  const [circles, setCircles] = useState<{ x: number; y: number; size: number; opacity: number; color: string }[]>([]);
  
  // Create decorative circles effect
  useEffect(() => {
    const colors = ['#FF9155', '#FF6A4D', '#F94C3D', '#E23B3B'];
    const newCircles = Array(5).fill(0).map(() => ({
      x: Math.random() * 40,
      y: Math.random() * 100,
      size: 40 + Math.random() * 60,
      opacity: 0.1 + Math.random() * 0.2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setCircles(newCircles);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
        {/* Colored section (40% width) */}
        <div className="absolute top-0 left-0 h-full w-[40%] md:block bg-gradient-to-r from-[#FF9155] via-[#FF6A4D] to-[#E23B3B] z-0 clip-path-diagonal">
          {/* Decorative circles */}
          {circles.map((circle, i) => (
            <div 
              key={i}
              className="absolute rounded-full opacity-30 z-0" 
              style={{
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                left: `${circle.x}%`,
                top: `${circle.y}%`,
                backgroundColor: circle.color,
                opacity: circle.opacity,
                filter: 'blur(10px)'
              }}
            />
          ))}
          
          {/* Curved pattern element */}
          <svg className="absolute left-[5%] top-[20%] h-48 w-48 text-white opacity-20" viewBox="0 0 100 100">
            <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2"></path>
            <path d="M10,60 Q25,35 50,60 T90,60" fill="none" stroke="currentColor" strokeWidth="2"></path>
            <path d="M10,70 Q25,45 50,70 T90,70" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
          
          {/* Hero image grid - similar to screenshot */}
          <div className="relative z-10 h-full flex items-center">
            <div className="grid grid-cols-2 gap-3 px-6 py-12 max-w-[90%] mx-auto">
              <div className="col-span-2">
                <img 
                  src={heroImage} 
                  alt="Spitex JCare Hero" 
                  className="w-full rounded-lg shadow-lg object-cover h-32 md:h-48"
                />
              </div>
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
