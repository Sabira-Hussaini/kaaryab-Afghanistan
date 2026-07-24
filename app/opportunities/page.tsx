"use client";

import { useEffect, useMemo, useState } from "react";

import OpportunityCard from "@/components/opportunity/OpportunityCard";
import SearchFilter from "@/components/opportunity/SearchFilter";
import CategoryFilter from "@/components/opportunity/CategoryFilter";

import { opportunities as demoData } from "@/data/opportunities";
import { getStoredOpportunities } from "@/lib/storage";
import { Opportunity } from "@/types/opportunity";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  en: {
    title: "Explore Opportunities",
    description:
      "Find jobs, internships, scholarships, training programs and remote opportunities.",
    emptyTitle: "No Opportunities Found",
    emptyDescription: "Try another search or category.",
  },

  fa: {
    title: "فرصت‌ها را بررسی کنید",
    description:
      "وظایف، کارآموزی، بورسیه‌ها، برنامه‌های آموزشی و فرصت‌های دورکاری را پیدا کنید.",
    emptyTitle: "هیچ فرصتی یافت نشد",
    emptyDescription: "جستجو یا دسته‌بندی دیگری را امتحان کنید.",
  },
};

export default function OpportunitiesPage() {
  const { language } = useLanguage();
  const t = text[language];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [allOpportunities, setAllOpportunities] = useState<Opportunity[]>([]);

  useEffect(() => {
    const stored = getStoredOpportunities();

    const merged = [...demoData];

    stored.forEach((item) => {
      if (!merged.find((d) => d.id === item.id)) {
        merged.push(item);
      }
    });

    setAllOpportunities(merged);
  }, []);

  const filtered = useMemo(() => {
    return allOpportunities.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [allOpportunities, search, category]);

  return (
    <main
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <div
        className={`mb-10 ${
          language === "fa" ? "text-right" : "text-left"
        }`}
      >
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {t.title}
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {t.description}
        </p>
      </div>

      <SearchFilter
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        selected={category}
        setSelected={setCategory}
      />

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-16 text-center dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t.emptyTitle}
          </h2>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            {t.emptyDescription}
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <OpportunityCard
              key={item.id}
              opportunity={item}
            />
          ))}
        </div>
      )}
    </main>
  );
}