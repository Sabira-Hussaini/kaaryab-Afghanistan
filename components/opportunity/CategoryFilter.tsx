"use client";

import { useLanguage } from "@/context/LanguageContext";

const categories = {
  en: [
    "All",
    "Job",
    "Internship",
    "Scholarship",
    "Remote",
    "Training",
  ],
  fa: [
    "همه",
    "وظیفه",
    "کارآموزی",
    "بورسیه",
    "دورکاری",
    "آموزش",
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

  // English values used for filtering
  const values = categories.en;

  // Text displayed to the user
  const labels = categories[language];

  return (
    <div
      dir={language === "fa" ? "rtl" : "ltr"}
      className={`mb-8 flex flex-wrap gap-3 ${
        language === "fa" ? "justify-end" : ""
      }`}
    >
      {values.map((value, index) => (
        <button
          key={value}
          onClick={() => setSelected(value)}
          className={`rounded-full px-5 py-2 transition ${
            selected === value
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          }`}
        >
          {labels[index]}
        </button>
      ))}
    </div>
  );
}