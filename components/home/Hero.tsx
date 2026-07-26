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
      className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-28">
        {/* Text */}
        <div className={language === "fa" ? "text-right" : "text-left"}>
          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            {t.badge}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {t.title1}
            </span>
            <br />
            {t.title2}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
            {t.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/opportunities"
              aria-label={t.explore}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
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
              aria-label={t.post}
              className="rounded-xl border border-white px-6 py-3 font-semibold transition duration-200 hover:bg-white hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
            >
              {t.post}
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <Image
            src="/images/hero.svg"
            alt="Illustration of people discovering career opportunities through KaarYab Afghanistan"
            width={550}
            height={550}
            priority
            sizes="(max-width: 768px) 100vw, 550px"
            className="h-auto w-full max-w-md lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}