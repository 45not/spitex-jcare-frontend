import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BackgroundBubbles } from "@/components/ui/background-bubbles";
import { Helmet } from "react-helmet";

type Category = "general" | "caregivers" | "needs";

const colorPalette: Record<Category, { base: string; active: string }> = {
  general: { base: "#FF9155", active: "#FF6A4D" },
  caregivers: { base: "#FF6A4D", active: "#F94C3D" },
  needs: { base: "#F94C3D", active: "#E23B3B" },
};

export function FAQSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<Category>("general");

  // ✅ Force German for debugging (you can remove this later if needed)
  useEffect(() => {
    i18n.changeLanguage("de");
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const faqData: Record<Category, { label: string; faqs: { question: string; answer: string }[] }> = {
    general: {
      label: t("faq.general.label"),
      faqs: Object.keys(t("faq.general.faqs", { returnObjects: true })).map((key) => ({
        question: t(`faq.general.faqs.${key}.question`),
        answer: t(`faq.general.faqs.${key}.answer`),
      })),
    },
    caregivers: {
      label: t("faq.caregivers.label"),
      faqs: Object.keys(t("faq.caregivers.faqs", { returnObjects: true })).map((key) => ({
        question: t(`faq.caregivers.faqs.${key}.question`),
        answer: t(`faq.caregivers.faqs.${key}.answer`),
      })),
    },
    needs: {
      label: t("faq.needs.label"),
      faqs: Object.keys(t("faq.needs.faqs", { returnObjects: true })).map((key) => ({
        question: t(`faq.needs.faqs.${key}.question`),
        answer: t(`faq.needs.faqs.${key}.answer`),
      })),
    },
  };

  // Gather all FAQs for structured data
  const allFaqs = ([] as { question: string; answer: string }[]).concat(
    ...Object.values(faqData).map((cat) => cat.faqs)
  );

  // Build JSON-LD for FAQPage
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24 relative overflow-hidden">
      <Helmet>
        <title>{t("faq.title")} | Spitex JCare</title>
        <meta name="description" content={t("faq.subtitle") + ' - Häufig gestellte Fragen zu Spitex JCare, Pflege, Betreuung und Unterstützung für Angehörige.'} />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <BackgroundBubbles density="medium" opacity="low" className="z-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#FF9155] to-[#E23B3B] bg-clip-text text-transparent">
          {t("faq.title")}
        </h2>
        <p className="text-center text-xl text-gray-700 mb-12">{t("faq.subtitle")}</p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {(Object.keys(faqData) as Category[]).map((key) => {
            const isActive = activeCategory === key;
            const baseColor = colorPalette[key].base;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className="px-4 py-2 rounded-full font-semibold border-2 transition-colors duration-300"
                style={{
                  backgroundColor: isActive ? baseColor : "transparent",
                  color: isActive ? "white" : baseColor,
                  borderColor: baseColor,
                }}
              >
                {faqData[key].label}
              </button>
            );
          })}
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqData[activeCategory].faqs.map((faq, index) => {
            const baseColor = colorPalette[activeCategory].base;
            const activeColor = colorPalette[activeCategory].active;
            return (
              <AccordionItem
                key={`${activeCategory}-${index}`}
                value={`item-${activeCategory}-${index}`}
                className="border rounded-lg overflow-hidden mb-4"
              >
                <AccordionTrigger
                  className="p-4 text-left font-semibold text-lg transition-colors duration-300"
                  style={{
                    color: "white",
                    border: `2px solid ${baseColor}`,
                    backgroundColor: baseColor,
                  }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="p-4 bg-white"
                  style={{
                    color: activeColor,
                    border: `2px solid ${activeColor}`,
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <div className="mt-12 text-center">
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#FF9155] to-[#E23B3B] text-white hover:shadow-lg px-6 py-3 rounded-full text-lg font-medium inline-flex items-center transition-all"
          >
            {t("hero.button")}
            <ChevronRightIcon className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
