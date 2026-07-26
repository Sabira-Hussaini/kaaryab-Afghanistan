"use client";

import Link from "next/link";
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
      { title: "Jobs", slug: "Job", icon: Briefcase, color: "text-blue-600" },
      {
        title: "Internships",
        slug: "Internship",
        icon: GraduationCap,
        color: "text-green-600",
      },
      {
        title: "Scholarships",
        slug: "Scholarship",
        icon: BookOpen,
        color: "text-purple-600",
      },
      {
        title: "Remote Work",
        slug: "Remote Work",
        icon: Laptop,
        color: "text-orange-600",
      },
      {
        title: "Training",
        slug: "Training",
        icon: Users,
        color: "text-pink-600",
      },
      {
        title: "Volunteer",
        slug: "Volunteer",
        icon: HeartHandshake,
        color: "text-red-600",
      },
    ],
  },

  fa: {
    heading: "دسته‌بندی فرصت‌ها",
    categories: [
      { title: "وظایف", slug: "Job", icon: Briefcase, color: "text-blue-600" },
      {
        title: "کارآموزی",
        slug: "Internship",
        icon: GraduationCap,
        color: "text-green-600",
      },
      {
        title: "بورسیه",
        slug: "Scholarship",
        icon: BookOpen,
        color: "text-purple-600",
      },
      {
        title: "کار از راه دور",
        slug: "Remote Work",
        icon: Laptop,
        color: "text-orange-600",
      },
      {
        title: "آموزش",
        slug: "Training",
        icon: Users,
        color: "text-pink-600",
      },
      {
        title: "داوطلبی",
        slug: "Volunteer",
        icon: HeartHandshake,
        color: "text-red-600",
      },
    ],
  },
};

export default function Categories() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      aria-labelledby="categories-heading"
      className="bg-slate-50 py-20 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="categories-heading"
          className="mb-12 text-center text-4xl font-bold text-slate-900 dark:text-white"
        >
          {t.heading}
        </h2>

        <div
          role="list"
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6"
        >
          {t.categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                href={`/opportunities?category=${encodeURIComponent(
                  category.slug
                )}`}
                aria-label={category.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-blue-50 dark:bg-slate-700 dark:group-hover:bg-slate-600">
                  <Icon className={`h-8 w-8 ${category.color}`} />
                </div>

                <h3 className="font-semibold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {category.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}