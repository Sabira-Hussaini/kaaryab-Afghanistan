"use client";

import { useLanguage } from "@/context/LanguageContext";

const categories = {
  en: [
    "All",
    "Job",
    "Internship",
    "Scholarship",
    "Remote Work",
    "Training",
    "Volunteer",
    "Online Course",
  ],

  fa: [
    "همه",
    "وظیفه",
    "کارآموزی",
    "بورسیه",
    "دورکاری",
    "آموزش",
    "داوطلبی",
    "دوره آنلاین",
  ],
};

type Props = {
  selected: string;
  setSelected: (value: string) => void;
};

export default function CategoryFilter({
  selected,
  setSelected,
}: Props) {
  const { language } = useLanguage();

  const values = categories.en;
  const labels = categories[language];

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mb-8"
    >
      <h2 className="sr-only">
        {language === "fa"
          ? "فیلتر دسته‌بندی"
          : "Category Filter"}
      </h2>

      <div
        className={`flex flex-wrap gap-3 ${
          language === "fa"
            ? "justify-end"
            : "justify-start"
        }`}
      >
        {values.map((value, index) => {
          const active = selected === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => setSelected(value)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                active
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              }`}
            >
              {labels[index]}
            </button>
          );
        })}
      </div>
    </section>
  );
}