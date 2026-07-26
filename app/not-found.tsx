"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  en: {
    code: "404",
    title: "Page Not Found",
    description: "The page you are looking for doesn't exist.",
    button: "Back to Home",
  },

  fa: {
    code: "۴۰۴",
    title: "صفحه پیدا نشد",
    description: "صفحه‌ای که به دنبال آن هستید وجود ندارد.",
    button: "بازگشت به صفحه اصلی",
  },
};

export default function NotFound() {
  const { language } = useLanguage();
  const t = text[language];

  return (
    <main
      dir={language === "fa" ? "rtl" : "ltr"}
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="text-7xl font-bold text-blue-600">
        {t.code}
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
        {t.title}
      </h2>

      <p className="mt-3 max-w-md text-slate-600 dark:text-slate-300">
        {t.description}
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        {t.button}
      </Link>
    </main>
  );
}