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
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <h1
        className={`mb-14 text-5xl font-extrabold text-blue-600 dark:text-blue-400 ${
          language === "fa" ? "text-right" : "text-center"
        }`}
      >
        {t.title}
      </h1>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
            {t.getInTouch}
          </h2>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                <Mail className="text-blue-600" />
              </div>

              <span className="text-slate-700 dark:text-slate-300">
                info@kaaryab.af
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                <Phone className="text-blue-600" />
              </div>

              <span className="text-slate-700 dark:text-slate-300">
                {language === "fa"
                  ? "+۹۳ ۷۰۰ ۰۰۰ ۰۰۰"
                  : "+93 700 000 000"}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                <MapPin className="text-blue-600" />
              </div>

              <span className="text-slate-700 dark:text-slate-300">
                {t.location}
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:shadow-xl dark:border-slate-700 dark:bg-slate-800">
          <input
            required
            type="text"
            placeholder={t.name}
            aria-label={t.name}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
          />

          <input
            required
            type="email"
            placeholder={t.email}
            aria-label={t.email}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
          />

          <input
            required
            type="text"
            placeholder={t.subject}
            aria-label={t.subject}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
          />

          <textarea
            required
            rows={6}
            placeholder={t.message}
            aria-label={t.message}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-400"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 active:scale-95"
          >
            {t.button}
          </button>
        </form>
      </div>
    </main>
  );
}