import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "wouter";
import heartLogo from "@assets/Jcare heart.png";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export function LegalPageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const [_, navigate] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Navigate back to main page and scroll to section
  const goToSection = (id: string) => {
    navigate("/");
    // Wait for navigation to complete before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }, 100);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img src={heartLogo} alt="JCare Heart Logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold">Spitex JCare</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button 
              onClick={() => goToSection("support")} 
              className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium"
              variant="ghost"
            >
              {t('nav.support')}
            </Button>
            <Button 
              onClick={() => goToSection("about")} 
              className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium"
              variant="ghost"
            >
              {t('nav.about')}
            </Button>
            <Button 
              onClick={() => goToSection("faq")} 
              className="text-gray-700 hover:text-[#E23B3B] px-3 py-2 text-sm font-medium"
              variant="ghost"
            >
              {t('nav.faq')}
            </Button>
            <Button 
              onClick={() => goToSection("contact")}
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
          <Button 
            onClick={() => goToSection("support")} 
            className="text-gray-700 hover:text-[#E23B3B] block px-3 py-2 text-base font-medium w-full text-left"
            variant="ghost"
          >
            {t('nav.support')}
          </Button>
          <Button 
            onClick={() => goToSection("about")} 
            className="text-gray-700 hover:text-[#E23B3B] block px-3 py-2 text-base font-medium w-full text-left"
            variant="ghost"
          >
            {t('nav.about')}
          </Button>
          <Button 
            onClick={() => goToSection("faq")} 
            className="text-gray-700 hover:text-[#E23B3B] block px-3 py-2 text-base font-medium w-full text-left"
            variant="ghost"
          >
            {t('nav.faq')}
          </Button>
          <Button 
            onClick={() => goToSection("contact")}
            className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white block px-3 py-2 rounded-full text-base font-medium mt-2 w-full"
          >
            {t('nav.contact')}
          </Button>
        </div>
      </div>
    </header>
  );
}