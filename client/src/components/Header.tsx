import { useState } from "react";
import { HeartIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <HeartIcon className="h-8 w-8 text-[#E23B3B]" />
              <span className="ml-2 text-xl font-bold">Spitex JCare</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("support")} className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium">
              Unterstützung
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium">
              Über uns
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium">
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-shadow"
            >
              Kontaktieren Sie uns
            </Button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#E23B3B]"
              aria-label="Menu öffnen"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white shadow-md ${isMenuOpen ? "" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button 
            onClick={() => scrollToSection("support")} 
            className="text-gray-700 hover:text-[#E23B3B] block px-3 py-2 text-base font-medium w-full text-left"
          >
            Unterstützung
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-gray-700 hover:text-[#E23B3B] block px-3 py-2 text-base font-medium w-full text-left"
          >
            Über uns
          </button>
          <button 
            onClick={() => scrollToSection("faq")} 
            className="text-gray-700 hover:text-[#E23B3B] block px-3 py-2 text-base font-medium w-full text-left"
          >
            FAQ
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white block px-3 py-2 rounded-md text-base font-medium mt-2 w-full"
          >
            Kontaktieren Sie uns
          </Button>
        </div>
      </div>
    </header>
  );
}
