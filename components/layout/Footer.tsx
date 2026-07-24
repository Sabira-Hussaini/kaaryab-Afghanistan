"use client";

import { useLanguage } from "@/context/LanguageContext";

const footerText = {
  en: {
    title: "KaarYab Afghanistan",
    description:
      "Find jobs, internships, scholarships and remote opportunities.",
    copyright: "© 2026 KaarYab. All rights reserved.",
  },
  fa: {
    title: "کاریاب افغانستان",
    description:
      "فرصت‌های شغلی، کارآموزی، بورسیه و فرصت‌های دورکاری را پیدا کنید.",
    copyright: "© ۲۰۲۶ کاریاب. تمامی حقوق محفوظ است.",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = footerText[language];

  return (
    <footer
      dir={language === "fa" ? "rtl" : "ltr"}
      className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
    >
      <div
        className={`mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 md:flex-row md:items-center ${
          language === "fa"
            ? "md:flex-row-reverse md:justify-between text-right"
            : "md:justify-between text-left"
        }`}
      >
        <div>
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            {t.title}
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {t.description}
          </p>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t.copyright}
        </p>
      </div>
    </footer>
  );
}