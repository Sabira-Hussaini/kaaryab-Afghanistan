"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  en: {
    title: "About KaarYab Afghanistan",

    p1: (
      <>
        <strong>KaarYab Afghanistan</strong> is an opportunity finder platform
        designed to help Afghan youth discover jobs, internships,
        scholarships, training programs, remote work, and volunteer
        opportunities.
      </>
    ),

    p2: (
      <>
        Our mission is to connect talented young people with educational and
        professional opportunities that can improve their future.
      </>
    ),

    goals: "Our Goals",

    goalList: [
      "Help students find scholarships.",
      "Provide internship opportunities.",
      "Support job seekers.",
      "Promote remote work opportunities.",
      "Encourage lifelong learning through training programs.",
    ],

    technologies: "Technologies Used",
  },

  fa: {
    title: "درباره کاریاب افغانستان",

    p1: (
      <>
        <strong>کاریاب افغانستان</strong> یک پلتفرم جستجوی فرصت‌ها است که برای
        کمک به جوانان افغانستان طراحی شده تا فرصت‌های شغلی، کارآموزی،
        بورسیه‌ها، برنامه‌های آموزشی، دورکاری و فعالیت‌های داوطلبانه را پیدا
        کنند.
      </>
    ),

    p2: (
      <>
        هدف ما ایجاد ارتباط میان جوانان بااستعداد و فرصت‌های آموزشی و حرفه‌ای
        است تا آینده‌ای بهتر برای آنان فراهم شود.
      </>
    ),

    goals: "اهداف ما",

    goalList: [
      "کمک به دانشجویان برای یافتن بورسیه.",
      "فراهم کردن فرصت‌های کارآموزی.",
      "حمایت از جویندگان کار.",
      "ترویج فرصت‌های دورکاری.",
      "تشویق یادگیری مادام‌العمر از طریق برنامه‌های آموزشی.",
    ],

    technologies: "فناوری‌های استفاده شده",
  },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = text[language];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Recharts",
    "React Hook Form",
    "Zod",
    "LocalStorage",
  ];

  return (
    <main
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <h1
        className={`mb-14 text-5xl font-extrabold text-blue-600 dark:text-blue-400 ${
          language === "fa" ? "text-right" : "text-center"
        }`}
      >
        {t.title}
      </h1>

      <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg dark:border-slate-700 dark:bg-slate-800">
        <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
          {t.p1}
        </p>

        <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
          {t.p2}
        </p>

        <div className="mt-12">
          <h2 className="mb-6 text-3xl font-bold text-blue-600 dark:text-blue-400">
            {t.goals}
          </h2>

          <div className="space-y-4">
            {t.goalList.map((goal) => (
              <div
                key={goal}
                className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 transition hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-700"
              >
                <CheckCircle2
                  className="mt-1 text-green-600"
                  size={22}
                />

                <p className="text-slate-700 dark:text-slate-300">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-3xl font-bold text-blue-600 dark:text-blue-400">
            {t.technologies}
          </h2>

          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-200 bg-blue-100 px-5 py-2 font-medium text-blue-700 transition hover:scale-105 hover:bg-blue-600 hover:text-white dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-200 dark:hover:bg-blue-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}