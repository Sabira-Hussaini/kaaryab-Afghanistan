"use client";

import { useLanguage } from "@/context/LanguageContext";

const statistics = {
  en: {
    heading: "Platform Statistics",
    subtitle: "Helping Afghan youth discover opportunities every day.",
    items: [
      { title: "Jobs", value: 120 },
      { title: "Scholarships", value: 45 },
      { title: "Internships", value: 60 },
      { title: "Remote Jobs", value: 90 },
    ],
  },
  fa: {
    heading: "آمار پلتفرم",
    subtitle: "کمک به جوانان افغانستان برای یافتن فرصت‌های بهتر.",
    items: [
      { title: "وظایف", value: 120 },
      { title: "بورسیه‌ها", value: 45 },
      { title: "کارآموزی‌ها", value: 60 },
      { title: "کارهای دورکاری", value: 90 },
    ],
  },
};

export default function Statistics() {
  const { language } = useLanguage();
  const t = statistics[language];

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      aria-labelledby="statistics-heading"
      className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-20 text-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2
            id="statistics-heading"
            className="text-3xl font-bold sm:text-4xl"
          >
            {t.heading}
          </h2>

          <p className="mt-3 text-blue-100">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {t.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/20"
            >
              <h3 className="text-4xl font-extrabold">
                {item.value}+
              </h3>

              <p className="mt-3 text-blue-100">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}