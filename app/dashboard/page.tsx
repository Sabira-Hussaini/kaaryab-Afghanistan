"use client";

import { useEffect, useState } from "react";
import {
  Briefcase,
  Heart,
  Building2,
  GraduationCap,
} from "lucide-react";

import { getStoredOpportunities } from "@/lib/storage";
import { opportunities as demoData } from "@/data/opportunities";
import DashboardChart from "@/components/dashboard/DashboardChart";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  en: {
    title: "Dashboard",
    total: "Total Opportunities",
    jobs: "Jobs",
    scholarships: "Scholarships",
    internships: "Internships",
  },

  fa: {
    title: "داشبورد",
    total: "مجموع فرصت‌ها",
    jobs: "وظایف",
    scholarships: "بورسیه‌ها",
    internships: "کارآموزی‌ها",
  },
};

export default function DashboardPage() {
  const { language } = useLanguage();
  const t = text[language];

  const [total, setTotal] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [scholarships, setScholarships] = useState(0);
  const [internships, setInternships] = useState(0);

  useEffect(() => {
    const stored = getStoredOpportunities();
    const all = [...demoData, ...stored];

    setTotal(all.length);
    setJobs(all.filter((o) => o.category === "Job").length);
    setScholarships(
      all.filter((o) => o.category === "Scholarship").length
    );
    setInternships(
      all.filter((o) => o.category === "Internship").length
    );
  }, []);

  const formatNumber = (num: number) =>
    language === "fa"
      ? new Intl.NumberFormat("fa-IR").format(num)
      : num.toString();

  return (
    <main
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mx-auto max-w-7xl px-6 py-12"
    >
      <h1
        className={`mb-10 text-4xl font-bold text-slate-900 dark:text-white ${
          language === "fa" ? "text-right" : "text-left"
        }`}
      >
        {t.title}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-blue-600 p-6 text-white">
          <Briefcase size={35} />
          <h2 className="mt-4 text-4xl font-bold">
            {formatNumber(total)}
          </h2>
          <p>{t.total}</p>
        </div>

        <div className="rounded-2xl bg-green-600 p-6 text-white">
          <Building2 size={35} />
          <h2 className="mt-4 text-4xl font-bold">
            {formatNumber(jobs)}
          </h2>
          <p>{t.jobs}</p>
        </div>

        <div className="rounded-2xl bg-purple-600 p-6 text-white">
          <GraduationCap size={35} />
          <h2 className="mt-4 text-4xl font-bold">
            {formatNumber(scholarships)}
          </h2>
          <p>{t.scholarships}</p>
        </div>

        <div className="rounded-2xl bg-red-600 p-6 text-white">
          <Heart size={35} />
          <h2 className="mt-4 text-4xl font-bold">
            {formatNumber(internships)}
          </h2>
          <p>{t.internships}</p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl bg-white p-8 shadow dark:bg-slate-800">
        <DashboardChart />
      </div>
    </main>
  );
}