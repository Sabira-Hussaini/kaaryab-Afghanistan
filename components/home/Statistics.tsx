"use client";

import { useLanguage } from "@/context/LanguageContext";

const statistics = {
  en: [
    { title: "Jobs", value: 120 },
    { title: "Scholarships", value: 45 },
    { title: "Internships", value: 60 },
    { title: "Remote Jobs", value: 90 },
  ],
  fa: [
    { title: "وظایف", value: 120 },
    { title: "بورسیه‌ها", value: 45 },
    { title: "کارآموزی‌ها", value: 60 },
    { title: "کارهای دورکاری", value: 90 },
  ],
};

export default function Statistics() {
  const { language } = useLanguage();
  const stats = statistics[language];

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      className="bg-blue-600 py-16 text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.title}>
            <h2 className="text-4xl font-bold">
              {item.value}+
            </h2>

            <p className="mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}