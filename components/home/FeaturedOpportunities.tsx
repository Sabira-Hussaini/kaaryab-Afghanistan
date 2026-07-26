"use client";

import OpportunityCard from "@/components/opportunity/OpportunityCard";
import { opportunities } from "@/data/opportunities";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  en: {
    title: "Featured Opportunities",
    description:
      "Explore the latest featured opportunities for Afghan youth.",
    empty: "No featured opportunities available at the moment.",
  },
  fa: {
    title: "فرصت‌های ویژه",
    description:
      "جدیدترین فرصت‌های ویژه برای جوانان افغانستان را مشاهده کنید.",
    empty: "در حال حاضر فرصت ویژه‌ای موجود نیست.",
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
      aria-labelledby="featured-opportunities-heading"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <header
        className={`mb-10 ${
          language === "fa" ? "text-right" : "text-left"
        }`}
      >
        <h2
          id="featured-opportunities-heading"
          className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl"
        >
          {t.title}
        </h2>

        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {t.description}
        </p>
      </header>

      {featured.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-300">
            {t.empty}
          </p>
        </div>
      )}
    </section>
  );
}