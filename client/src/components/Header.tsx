import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { HeartLogo } from "@/components/ui/HeartLogo";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

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
              <HeartLogo className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">Spitex JCare</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("support")} 
              className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium"
            >
              {t('nav.support')}
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium"
            >
              {t('nav.faq')}
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-shadow"
            >
              {t('nav.contact')}
            </Button>
            
            {/* Language switcher */}
            <LanguageSwitcher />
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language switcher */}
            <LanguageSwitcher />
            
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
            {t('nav.support')}
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-gray-700 hover:text-[#E23B3B] block px-3 py-2 text-base font-medium w-full text-left"
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => scrollToSection("faq")} 
            className="text-gray-700 hover:text-[#E23B3B] block px-3 py-2 text-base font-medium w-full text-left"
          >
            {t('nav.faq')}
          </button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white block px-3 py-2 rounded-full text-base font-medium mt-2 w-full"
          >
            {t('nav.contact')}
          </Button>
        </div>
      </div>
    </header>
  );
}
