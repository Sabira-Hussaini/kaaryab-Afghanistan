"use client";

import Link from "next/link";
import { HeartCrack } from "lucide-react";

import OpportunityCard from "@/components/opportunity/OpportunityCard";
import { useSaved } from "@/context/SavedContext";
import { useLanguage } from "@/context/LanguageContext";
import { opportunities } from "@/data/opportunities";

const text = {
  en: {
    title: "Saved Opportunities",
    emptyTitle: "No Saved Opportunities Yet",
    emptyDescription:
      "Save opportunities by clicking the ❤️ icon on any opportunity card.",
    browse: "Browse Opportunities",
  },

  fa: {
    title: "فرصت‌های ذخیره‌شده",
    emptyTitle: "هنوز فرصتی ذخیره نشده است",
    emptyDescription:
      "با کلیک روی آیکون ❤️ فرصت‌های مورد علاقه خود را ذخیره کنید.",
    browse: "مشاهده فرصت‌ها",
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
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <h1
        className={`mb-12 text-5xl font-extrabold text-blue-600 dark:text-blue-400 ${
          language === "fa" ? "text-right" : "text-left"
        }`}
      >
        {t.title}
      </h1>

      {saved.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-8 py-16 text-center transition dark:border-slate-700 dark:bg-slate-800">
          <HeartCrack
            size={70}
            className="mx-auto mb-6 text-red-500"
          />

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {t.emptyTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-slate-600 dark:text-slate-300">
            {t.emptyDescription}
          </p>

          <Link
            href="/opportunities"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            {t.browse}
          </Link>
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