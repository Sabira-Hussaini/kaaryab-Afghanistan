"use client";

import Link from "next/link";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LanguageSwitcher from "@/components/language/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];

  const links = [
    { name: t.home, href: "/" },
    { name: t.opportunities, href: "/opportunities" },
    { name: t.saved, href: "/saved" },
    { name: t.dashboard, href: "/dashboard" },
    { name: t.about, href: "/about" },
    { name: t.contact, href: "/contact" },
  ];

  return (
    <header
      dir={language === "fa" ? "rtl" : "ltr"}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90"
    >
      <div
        className={`mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-8 ${
          language === "fa"
            ? "flex-row-reverse justify-between"
            : "justify-between"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          KaarYab
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-slate-700 transition hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <ThemeToggle />

          <Link
            href="/add-opportunity"
            className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
          >
            {t.post}
          </Link>
        </div>
      </div>
    </header>
  );
}