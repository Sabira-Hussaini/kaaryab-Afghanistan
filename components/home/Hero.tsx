"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const heroText = {
  en: {
    badge: "🌍 Empowering Afghan Youth",
    title1: "Find Your Future",
    title2: "Starts Here",
    description:
      "Discover jobs, internships, scholarships, remote work, online courses, and training opportunities—all in one place.",
    explore: "Explore Opportunities",
    post: "Post Opportunity",
  },
  fa: {
    badge: "🌍 توانمندسازی جوانان افغانستان",
    title1: "آینده خود را",
    title2: "از اینجا بسازید",
    description:
      "فرصت‌های شغلی، کارآموزی، بورسیه، کار از راه دور، دوره‌های آنلاین و برنامه‌های آموزشی را در یک مکان پیدا کنید.",
    explore: "مشاهده فرصت‌ها",
    post: "ثبت فرصت",
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const t = heroText[language];

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-9 py-24 lg:grid-cols-2">
        {/* Text */}
        <div className={language === "fa" ? "text-right" : "text-left"}>
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            {t.badge}
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
            {t.title1}
            <br />
            {t.title2}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-blue-100">
            {t.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/opportunities"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105"
            >
              {t.explore}
              {language === "fa" ? (
                <ArrowLeft size={18} />
              ) : (
                <ArrowRight size={18} />
              )}
            </Link>

            <Link
              href="/add-opportunity"
              className="rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-700"
            >
              {t.post}
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/hero.svg"
            alt="Hero"
            width={550}
            height={550}
            priority
          />
        </div>
      </div>
    </section>
  );
}