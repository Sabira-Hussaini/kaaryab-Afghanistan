"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  en: {
    title: "Contact Us",
    getInTouch: "Get in Touch",
    location: "Kabul, Afghanistan",
    name: "Your Name",
    email: "Email Address",
    subject: "Subject",
    message: "Your Message",
    button: "Send Message",
  },

  fa: {
    title: "تماس با ما",
    getInTouch: "با ما در ارتباط باشید",
    location: "کابل، افغانستان",
    name: "نام شما",
    email: "آدرس ایمیل",
    subject: "موضوع",
    message: "پیام شما",
    button: "ارسال پیام",
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  const t = text[language];

  return (
    <main
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <h1
        className={`mb-10 text-5xl font-bold text-blue-700 dark:text-blue-400 ${
          language === "fa" ? "text-right" : "text-center"
        }`}
      >
        {t.title}
      </h1>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            {t.getInTouch}
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <Mail className="text-blue-600" />
              <span>info@kaaryab.af</span>
            </div>

            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <Phone className="text-blue-600" />
             <span>
  {language === "fa"
    ? "+۹۳ ۷۰۰ ۰۰۰ ۰۰۰"
    : "+93 700 000 000"}
</span>
            </div>

            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <MapPin className="text-blue-600" />
              <span>{t.location}</span>
            </div>
          </div>
        </div>

        <form className="space-y-5 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <input
            type="text"
            placeholder={t.name}
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
          />

          <input
            type="email"
            placeholder={t.email}
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
          />

          <input
            type="text"
            placeholder={t.subject}
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
          />

          <textarea
            rows={6}
            placeholder={t.message}
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            {t.button}
          </button>
        </form>
      </div>
    </main>
  );
}