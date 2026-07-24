"use client";

import { useLanguage } from "@/context/LanguageContext";

const testimonialData = {
  en: {
    title: "Success Stories",
    description:
      "Hear from people who found opportunities through KaarYab.",
    testimonials: [
      {
        name: "Ahmad",
        role: "Computer Science Student",
        text: "KaarYab helped me find my first internship in just two weeks.",
      },
      {
        name: "Fatima",
        role: "Scholarship Winner",
        text: "I discovered an international scholarship through KaarYab that changed my future.",
      },
      {
        name: "Ali",
        role: "Frontend Developer",
        text: "The platform made it easy to find remote work opportunities.",
      },
    ],
  },

  fa: {
    title: "داستان‌های موفقیت",
    description:
      "تجربه افرادی را بخوانید که از طریق کاریاب فرصت‌های ارزشمندی پیدا کرده‌اند.",
    testimonials: [
      {
        name: "احمد",
        role: "دانشجوی علوم کامپیوتر",
        text: "کاریاب به من کمک کرد تا تنها در دو هفته اولین فرصت کارآموزی خود را پیدا کنم.",
      },
      {
        name: "فاطمه",
        role: "برنده بورسیه",
        text: "از طریق کاریاب یک بورسیه بین‌المللی پیدا کردم که آینده من را تغییر داد.",
      },
      {
        name: "علی",
        role: "توسعه‌دهنده فرانت‌اند",
        text: "این پلتفرم پیدا کردن فرصت‌های دورکاری را برای من بسیار آسان کرد.",
      },
    ],
  },
};

export default function Testimonials() {
  const { language } = useLanguage();
  const t = testimonialData[language];

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      className="bg-white py-20 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mb-12 ${
            language === "fa" ? "text-right" : "text-center"
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            {t.title}
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {t.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {t.testimonials.map((item) => (
            <div
              key={item.name}
              className={`rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 ${
                language === "fa" ? "text-right" : "text-left"
              }`}
            >
              <p className="italic text-slate-600 dark:text-slate-300">
                "{item.text}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}