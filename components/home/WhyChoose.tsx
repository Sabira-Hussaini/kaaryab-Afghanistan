"use client";

import { ShieldCheck, Search, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    title: "Why Choose KaarYab?",
    subtitle:
      "We help Afghan youth discover the best opportunities in one place.",
    features: [
      {
        icon: Search,
        title: "Easy Search",
        description:
          "Quickly search jobs, scholarships, internships, and remote opportunities.",
      },
      {
        icon: ShieldCheck,
        title: "Trusted Opportunities",
        description:
          "We collect opportunities from trusted organizations and institutions.",
      },
      {
        icon: Globe,
        title: "Accessible Anywhere",
        description:
          "Access opportunities from anywhere in Afghanistan and beyond.",
      },
    ],
  },

  fa: {
    title: "چرا کاریاب را انتخاب کنیم؟",
    subtitle:
      "ما به جوانان افغانستان کمک می‌کنیم تا بهترین فرصت‌ها را در یک مکان پیدا کنند.",
    features: [
      {
        icon: Search,
        title: "جستجوی آسان",
        description:
          "به‌سرعت فرصت‌های شغلی، بورسیه‌ها، کارآموزی‌ها و فرصت‌های دورکاری را جستجو کنید.",
      },
      {
        icon: ShieldCheck,
        title: "فرصت‌های معتبر",
        description:
          "ما فرصت‌ها را از سازمان‌ها و نهادهای معتبر جمع‌آوری و منتشر می‌کنیم.",
      },
      {
        icon: Globe,
        title: "دسترسی از هرجا",
        description:
          "از هر نقطه افغانستان و حتی خارج از کشور به فرصت‌ها دسترسی داشته باشید.",
      },
    ],
  },
};

export default function WhyChoose() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      aria-labelledby="why-choose-heading"
      className="bg-slate-50 py-20 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header
          className={`mb-14 ${
            language === "fa" ? "text-right" : "text-center"
          }`}
        >
          <h2
            id="why-choose-heading"
            className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white"
          >
            {t.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            {t.subtitle}
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {t.features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 ${
                  language === "fa" ? "text-right" : "text-left"
                }`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <Icon
                    className="h-7 w-7 text-blue-600 dark:text-blue-400"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}