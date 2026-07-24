"use client";

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

  return (
    <main
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mx-auto max-w-6xl px-6 py-16"
    >
      <h1
        className={`mb-8 text-5xl font-bold text-blue-700 dark:text-blue-400 ${
          language === "fa" ? "text-right" : "text-center"
        }`}
      >
        {t.title}
      </h1>

      <div className="rounded-2xl bg-white p-10 shadow-lg dark:bg-slate-800">
        <p className="mb-6 text-lg leading-8 text-gray-700 dark:text-slate-300">
          {t.p1}
        </p>

        <p className="mb-6 text-lg leading-8 text-gray-700 dark:text-slate-300">
          {t.p2}
        </p>

        <h2 className="mb-4 mt-10 text-3xl font-bold text-blue-600 dark:text-blue-400">
          {t.goals}
        </h2>

        <ul className="list-disc space-y-3 pl-6 text-gray-700 dark:text-slate-300">
          {t.goalList.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>

        <h2 className="mb-4 mt-10 text-3xl font-bold text-blue-600 dark:text-blue-400">
          {t.technologies}
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Recharts",
            "React Hook Form",
            "Zod",
            "LocalStorage",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-4 py-2 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}