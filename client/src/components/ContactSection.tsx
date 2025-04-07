import { ContactForm } from "@/components/ui/contact-form";
import { PhoneIcon, MailIcon, CheckIcon } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Form Side */}
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Bitte rufen Sie mich an</h2>
              <p className="text-gray-600 mb-8">
                Hinterlassen Sie uns Ihre Kontaktdaten, und wir melden uns innerhalb eines Werktages bei Ihnen.
              </p>
              
              <ContactForm />
            </div>
            
            {/* Info Side */}
            <div className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8">Wir freuen uns auf Ihren Anruf</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 mt-1 mr-4" />
                    <div>
                      <p className="font-medium text-lg">Telefonisch erreichen Sie uns unter:</p>
                      <p className="text-2xl font-bold mt-2">+41 800 247 247</p>
                      <p className="text-sm mt-1">zwischen 8:00 - 17:00 Uhr CET</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MailIcon className="h-6 w-6 mt-1 mr-4" />
                    <div>
                      <p className="font-medium text-lg">Per E-Mail:</p>
                      <p className="text-xl mt-2">info@spitex-jcare.ch</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="text-lg font-medium mb-4">Wir unterstützen Sie in den folgenden Bereichen:</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    Antragsstellung und Behördengänge
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    Pflegetipps und -schulungen
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    Emotionale Unterstützung
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 mr-3" />
                    Finanzielle Beratung
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
