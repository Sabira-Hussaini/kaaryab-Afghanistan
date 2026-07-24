"use client";

import Link from "next/link";
import {
  Heart,
  MapPin,
  Building2,
  Calendar,
  Briefcase,
  Trash2,
  Pencil,
} from "lucide-react";

import { Opportunity } from "@/types/opportunity";
import { useSaved } from "@/context/SavedContext";
import { useLanguage } from "@/context/LanguageContext";
import { deleteOpportunity } from "@/lib/storage";

type Props = {
  opportunity: Opportunity;
};

const text = {
  en: {
    view: "View Details",
    deleteConfirm:
      "Are you sure you want to delete this opportunity?",
    type: "Type",
    deadline: "Deadline",
    categories: {
      Job: "Job",
      Internship: "Internship",
      Scholarship: "Scholarship",
      "Remote Work": "Remote Work",
      Training: "Training",
      Volunteer: "Volunteer",
    },
    types: {
      Remote: "Remote",
      "On-site": "On-site",
      Hybrid: "Hybrid",
    },
  },

  fa: {
    view: "مشاهده جزئیات",
    deleteConfirm:
      "آیا مطمئن هستید که می‌خواهید این فرصت را حذف کنید؟",
    type: "نوع",
    deadline: "آخرین مهلت",
    categories: {
      Job: "وظیفه",
      Internship: "کارآموزی",
      Scholarship: "بورسیه",
      "Remote Work": "دورکاری",
      Training: "آموزش",
      Volunteer: "داوطلبی",
    },
    types: {
      Remote: "دورکاری",
      "On-site": "حضوری",
      Hybrid: "ترکیبی",
    },
  },
};

export default function OpportunityCard({ opportunity }: Props) {
  const { toggleSaved, isSaved } = useSaved();
  const { language } = useLanguage();
  const t = text[language];

  const handleDelete = () => {
    const confirmDelete = confirm(t.deleteConfirm);

    if (!confirmDelete) return;

    deleteOpportunity(opportunity.id);
    window.location.reload();
  };

  const category =
    t.categories[
      opportunity.category as keyof typeof t.categories
    ] || opportunity.category;

  const type =
    t.types[
      opportunity.type as keyof typeof t.types
    ] || opportunity.type;

  return (
    <div
      dir={language === "fa" ? "rtl" : "ltr"}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-blue-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-900">
        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
          {category}
        </span>

        <button
          onClick={() => toggleSaved(opportunity.id)}
          className="transition hover:scale-110"
        >
          <Heart
            size={22}
            className={
              isSaved(opportunity.id)
                ? "fill-red-500 text-red-500"
                : "text-gray-400 dark:text-slate-400"
            }
          />
        </button>
      </div>

      {/* Body */}
      <div
        className={`space-y-4 p-6 ${
          language === "fa" ? "text-right" : "text-left"
        }`}
      >
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          {opportunity.title}
        </h2>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Building2 size={18} />
          <span>{opportunity.organization}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <MapPin size={18} />
          <span>{opportunity.location}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Briefcase size={18} />
          <span>{type}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Calendar size={18} />
          <span>{opportunity.deadline}</span>
        </div>

        <p className="line-clamp-3 text-slate-500 dark:text-slate-400">
          {opportunity.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {opportunity.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            href={`/opportunities/${opportunity.id}`}
            className="flex-1 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            {t.view}
          </Link>

          <Link
            href={`/edit/${opportunity.id}`}
            className="flex items-center justify-center rounded-xl bg-gray-400 px-4 text-white hover:bg-yellow-600"
          >
            <Pencil size={20} />
          </Link>

          <button
            onClick={handleDelete}
            className="rounded-xl bg-red-400 px-4 text-white hover:bg-red-500"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}