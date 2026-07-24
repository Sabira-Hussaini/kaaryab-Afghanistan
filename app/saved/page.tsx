"use client";

import OpportunityCard from "@/components/opportunity/OpportunityCard";
import { useSaved } from "@/context/SavedContext";
import { useLanguage } from "@/context/LanguageContext";
import { opportunities } from "@/data/opportunities";

const text = {
  en: {
    title: "Saved Opportunities",
    emptyTitle: "No Saved Opportunities",
    emptyDescription: "Save opportunities by clicking the ❤️ icon.",
  },

  fa: {
    title: "فرصت‌های ذخیره‌شده",
    emptyTitle: "هیچ فرصتی ذخیره نشده است",
    emptyDescription: "با کلیک روی آیکون ❤️ فرصت‌ها را ذخیره کنید.",
  },
};

export default function SavedPage() {
  const { savedIds } = useSaved();
  const { language } = useLanguage();
  const t = text[language];

  const saved = opportunities.filter((item) =>
    savedIds.includes(item.id)
  );

  return (
    <main
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <h1
        className={`mb-8 text-4xl font-bold ${
          language === "fa" ? "text-right" : "text-left"
        }`}
      >
        {t.title}
      </h1>

      {saved.length === 0 ? (
        <div className="rounded-xl border border-dashed p-12 text-center">
          <h2 className="text-2xl font-semibold">
            {t.emptyTitle}
          </h2>

          <p className="mt-3 text-slate-500">
            {t.emptyDescription}
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {saved.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
            />
          ))}
        </div>
      )}
    </main>
  );
}