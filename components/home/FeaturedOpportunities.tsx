"use client";

import OpportunityCard from "@/components/opportunity/OpportunityCard";
import { opportunities } from "@/data/opportunities";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  en: {
    title: "Featured Opportunities",
    description:
      "Explore the latest featured opportunities for Afghan youth.",
  },
  fa: {
    title: "فرصت‌های ویژه",
    description:
      "جدیدترین فرصت‌های ویژه برای جوانان افغانستان را مشاهده کنید.",
  },
};

export default function FeaturedOpportunities() {
  const { language } = useLanguage();
  const t = text[language];

  const featured = opportunities.filter(
    (opportunity) => opportunity.featured
  );

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div
        className={`mb-10 ${
          language === "fa" ? "text-right" : "text-left"
        }`}
      >
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          {t.title}
        </h2>

        <p className="mt-2 text-slate-600 dark:text-slate-300">
          {t.description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            opportunity={opportunity}
          />
        ))}
      </div>
    </section>
  );
}