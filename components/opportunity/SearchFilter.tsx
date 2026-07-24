"use client";

import { useLanguage } from "@/context/LanguageContext";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

const text = {
  en: {
    placeholder: "🔍 Search opportunities...",
  },
  fa: {
    placeholder: "🔍 جستجوی فرصت‌ها...",
  },
};

export default function SearchFilter({
  search,
  setSearch,
}: Props) {
  const { language } = useLanguage();
  const t = text[language];

  return (
    <div
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mb-10"
    >
      <input
        type="text"
        placeholder={t.placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 ${
          language === "fa" ? "text-right" : "text-left"
        }`}
      />
    </div>
  );
}