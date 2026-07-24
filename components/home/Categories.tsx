"use client";

import {
  Briefcase,
  GraduationCap,
  Laptop,
  HeartHandshake,
  BookOpen,
  Users,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const translations = {
  en: {
    heading: "Browse by Category",
    categories: [
      { title: "Jobs", icon: Briefcase, color: "text-blue-600" },
      { title: "Internships", icon: GraduationCap, color: "text-green-600" },
      { title: "Scholarships", icon: BookOpen, color: "text-purple-600" },
      { title: "Remote Work", icon: Laptop, color: "text-orange-600" },
      { title: "Training", icon: Users, color: "text-pink-600" },
      { title: "Volunteer", icon: HeartHandshake, color: "text-red-600" },
    ],
  },
  fa: {
    heading: "دسته‌بندی فرصت‌ها",
    categories: [
      { title: "وظایف", icon: Briefcase, color: "text-blue-600" },
      { title: "کارآموزی", icon: GraduationCap, color: "text-green-600" },
      { title: "بورسیه", icon: BookOpen, color: "text-purple-600" },
      { title: "کار از راه دور", icon: Laptop, color: "text-orange-600" },
      { title: "آموزش", icon: Users, color: "text-pink-600" },
      { title: "داوطلبی", icon: HeartHandshake, color: "text-red-600" },
    ],
  },
};

export default function Categories() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <h2 className="mb-12 text-center text-4xl font-bold text-slate-900 dark:text-white">
        {t.heading}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {t.categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <Icon className={`mx-auto mb-4 h-10 w-10 ${category.color}`} />

              <h3 className="font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}