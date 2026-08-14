"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import {
  MapPin,
  Briefcase,
  Calendar,
  Building2,
  Pencil,
  Trash2,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { opportunities as demoData } from "@/data/opportunities";
import {
  getAllOpportunities,
  deleteOpportunity,
} from "@/lib/storage";

import { Opportunity } from "@/types/opportunity";

const text = {
  en: {
    location: "Location",
    type: "Type",
    deadline: "Deadline",
    organization: "Organization",
    description: "Description",
    requirements: "Requirements",
    tags: "Tags",

    apply: "Apply Now",
    back: "← Back to Opportunities",

    edit: "Edit Opportunity",
    delete: "Delete Opportunity",

    deleteConfirm:
      "Are you sure you want to delete this opportunity?",

    loading: "Loading opportunity...",

    notFound: "Opportunity not found",

    categories: {
      Job: "💼 Job",
      Internship: "🎓 Internship",
      Scholarship: "🏆 Scholarship",
      "Remote Work": "🌍 Remote Work",
      Training: "📚 Training",
      Volunteer: "🤝 Volunteer",
      "Online Course": "💻 Online Course",
    },

    types: {
      Remote: "Remote",
      "On-site": "On-site",
      Hybrid: "Hybrid",
    },
  },

  fa: {
    location: "موقعیت",
    type: "نوع",
    deadline: "آخرین مهلت",
    organization: "سازمان",
    description: "توضیحات",
    requirements: "شرایط و مهارت‌ها",
    tags: "برچسب‌ها",

    apply: "درخواست",
    back: "← بازگشت به فرصت‌ها",

    edit: "ویرایش فرصت",
    delete: "حذف فرصت",

    deleteConfirm:
      "آیا مطمئن هستید که می‌خواهید این فرصت را حذف کنید؟",

    loading: "در حال بارگذاری فرصت...",

    notFound: "فرصت مورد نظر یافت نشد",

    categories: {
      Job: "💼 وظیفه",
      Internship: "🎓 کارآموزی",
      Scholarship: "🏆 بورسیه",
      "Remote Work": "🌍 دورکاری",
      Training: "📚 آموزش",
      Volunteer: "🤝 داوطلبی",
      "Online Course": "💻 دوره آنلاین",
    },

    types: {
      Remote: "دورکاری",
      "On-site": "حضوری",
      Hybrid: "ترکیبی",
    },
  },
};

export default function OpportunityDetailsPage() {
  const params = useParams();

  const router = useRouter();

  const id = params.id as string;

  const { language } = useLanguage();

  const t = text[language];

  const [opportunity, setOpportunity] =
    useState<Opportunity | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const all =
      getAllOpportunities(demoData);

    const found = all.find(
      (item) => item.id === id
    );

    setOpportunity(found ?? null);

    setLoading(false);
  }, [id]);

  function handleDelete() {
    const confirmDelete = confirm(
      t.deleteConfirm
    );

    if (!confirmDelete) return;

    deleteOpportunity(id);

    router.push("/opportunities");
  }

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p className="text-xl font-semibold text-slate-700 dark:text-white">
          {t.loading}
        </p>
      </main>
    );
  }

  if (!opportunity) {
    return (
      <main
        dir={language === "fa" ? "rtl" : "ltr"}
        className="mx-auto max-w-5xl px-6 py-16"
      >
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {t.notFound}
        </h1>

        <Link
          href="/opportunities"
          className="mt-6 inline-block text-blue-600 hover:underline"
        >
          {t.back}
        </Link>
      </main>
    );
  }

  const title =
    language === "fa" && opportunity.titleFa
      ? opportunity.titleFa
      : opportunity.title;

  const organization =
    language === "fa" &&
    opportunity.organizationFa
      ? opportunity.organizationFa
      : opportunity.organization;

  const location =
    language === "fa" &&
    opportunity.locationFa
      ? opportunity.locationFa
      : opportunity.location;

  const description =
    language === "fa" &&
    opportunity.descriptionFa
      ? opportunity.descriptionFa
      : opportunity.description;

  const requirements =
    language === "fa" &&
    opportunity.requirementsFa
      ? opportunity.requirementsFa
      : opportunity.requirements;

  const category =
    t.categories[
      opportunity.category as keyof typeof t.categories
    ] || opportunity.category;

  const type =
    t.types[
      opportunity.type as keyof typeof t.types
    ] || opportunity.type;

  return (
    <main
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <Link
        href="/opportunities"
        className="mb-8 inline-block text-blue-600 hover:underline dark:text-blue-400"
      >
        {t.back}
      </Link>

      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
        {category}
      </span>

      <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
        {title}
      </h1>

      <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
        {organization}
      </p>

      <div className="mt-8 grid gap-6 rounded-2xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:grid-cols-2">
        <Info
          icon={<MapPin size={20} />}
          label={t.location}
          value={location}
        />

        <Info
          icon={<Briefcase size={20} />}
          label={t.type}
          value={type}
        />

        <Info
          icon={<Calendar size={20} />}
          label={t.deadline}
          value={new Date(
            opportunity.deadline
          ).toLocaleDateString(
            language === "fa"
              ? "fa-IR"
              : "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        />

        <Info
          icon={<Building2 size={20} />}
          label={t.organization}
          value={organization}
        />
      </div>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          {t.description}
        </h2>

        <p className="leading-8 text-slate-700 dark:text-slate-300">
          {description}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          {t.requirements}
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
          {requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          {t.tags}
        </h2>

        <div className="flex flex-wrap gap-2">
          {opportunity.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-700 dark:text-white"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={opportunity.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
        >
          {t.apply}
        </a>

        <Link
          href={`/edit/${opportunity.id}`}
          className="flex items-center gap-2 rounded-xl border border-yellow-500 px-6 py-3 text-yellow-600 hover:bg-yellow-500 hover:text-white"
        >
          <Pencil size={18} />
          {t.edit}
        </Link>

        <button
          onClick={handleDelete}
          className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-white hover:bg-red-700"
        >
          <Trash2 size={18} />
          {t.delete}
        </button>
      </div>
    </main>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
        {icon}
      </div>

      <div>
        <p className="font-semibold text-slate-900 dark:text-white">
          {label}
        </p>

        <p className="text-slate-600 dark:text-slate-300">
          {value}
        </p>
      </div>
    </div>
  );
}