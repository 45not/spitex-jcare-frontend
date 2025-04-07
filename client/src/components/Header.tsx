import { useState } from "react";
import { MenuIcon, GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import heartLogo from "@assets/Jcare heart.jpg";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'de' | 'en' | 'fr'>('de');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lang: 'de' | 'en' | 'fr') => {
    setCurrentLanguage(lang);
    // In a real application, this would trigger language change functionality
    // For now, we'll just change the state
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
              <img src={heartLogo} alt="JCare Heart Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold">Spitex JCare</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("support")} className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium">
              {currentLanguage === 'de' && "Unterstützung"}
              {currentLanguage === 'en' && "Support"}
              {currentLanguage === 'fr' && "Soutien"}
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium">
              {currentLanguage === 'de' && "Über uns"}
              {currentLanguage === 'en' && "About us"}
              {currentLanguage === 'fr' && "À propos"}
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium">
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-shadow"
            >
              {currentLanguage === 'de' && "Kontaktieren Sie uns"}
              {currentLanguage === 'en' && "Contact us"}
              {currentLanguage === 'fr' && "Contactez-nous"}
            </Button>
            
            {/* Language switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-700 hover:text-[#E23B3B]">
                  <GlobeIcon className="h-5 w-5 mr-1" />
                  <span className="uppercase font-medium">{currentLanguage}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('de')} className={currentLanguage === 'de' ? 'bg-gray-100 font-medium' : ''}>
                  Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('en')} className={currentLanguage === 'en' ? 'bg-gray-100 font-medium' : ''}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('fr')} className={currentLanguage === 'fr' ? 'bg-gray-100 font-medium' : ''}>
                  Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-700 hover:text-[#E23B3B]">
                  <GlobeIcon className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('de')} className={currentLanguage === 'de' ? 'bg-gray-100 font-medium' : ''}>
                  Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('en')} className={currentLanguage === 'en' ? 'bg-gray-100 font-medium' : ''}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('fr')} className={currentLanguage === 'fr' ? 'bg-gray-100 font-medium' : ''}>
                  Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
            {currentLanguage === 'de' && "Unterstützung"}
            {currentLanguage === 'en' && "Support"}
            {currentLanguage === 'fr' && "Soutien"}
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-gray-700 hover:text-[#E23B3B] block px-3 py-2 text-base font-medium w-full text-left"
          >
            {currentLanguage === 'de' && "Über uns"}
            {currentLanguage === 'en' && "About us"}
            {currentLanguage === 'fr' && "À propos"}
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
            {currentLanguage === 'de' && "Kontaktieren Sie uns"}
            {currentLanguage === 'en' && "Contact us"}
            {currentLanguage === 'fr' && "Contactez-nous"}
          </Button>
        </div>
      </div>
    </header>
  );
}
