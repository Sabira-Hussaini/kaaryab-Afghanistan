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
  onDelete?: (id: string) => void;
};

const text = {
  en: {
    view: "View Details",

    deleteConfirm:
      "Are you sure you want to delete this opportunity?",

    save: "Save opportunity",

    saved:
      "Remove from saved",

    edit: "Edit opportunity",

    delete:
      "Delete opportunity",

    categories: {
      Job: "💼 Job",
      Internship:
        "🎓 Internship",
      Scholarship:
        "🏆 Scholarship",
      "Remote Work":
        "🌍 Remote Work",
      Training:
        "📚 Training",
      Volunteer:
        "🤝 Volunteer",
      "Online Course":
        "💻 Online Course",
    },

    types: {
      Remote: "Remote",
      "On-site": "On-site",
      Hybrid: "Hybrid",
    },
  },

  fa: {
    view:
      "مشاهده جزئیات",

    deleteConfirm:
      "آیا مطمئن هستید که می‌خواهید این فرصت را حذف کنید؟",

    save:
      "ذخیره فرصت",

    saved:
      "حذف از ذخیره‌شده‌ها",

    edit:
      "ویرایش فرصت",

    delete:
      "حذف فرصت",

    categories: {
      Job: "💼 وظیفه",
      Internship:
        "🎓 کارآموزی",
      Scholarship:
        "🏆 بورسیه",
      "Remote Work":
        "🌍 دورکاری",
      Training:
        "📚 آموزش",
      Volunteer:
        "🤝 داوطلبی",
      "Online Course":
        "💻 دوره آنلاین",
    },

    types: {
      Remote:
        "دورکاری",
      "On-site":
        "حضوری",
      Hybrid:
        "ترکیبی",
    },
  },
};

export default function OpportunityCard({
  opportunity,
  onDelete,
}: Props) {
  const {
    toggleSaved,
    isSaved,
  } = useSaved();

  const { language } =
    useLanguage();

  const t = text[language];

  const title =
    language === "fa" &&
    opportunity.titleFa
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

  const category =
    t.categories[
      opportunity.category as keyof typeof t.categories
    ] ||
    opportunity.category;

  const type =
    t.types[
      opportunity.type as keyof typeof t.types
    ] ||
    opportunity.type;

  const formattedDate =
    new Date(
      opportunity.deadline
    ).toLocaleDateString(
      language === "fa"
        ? "fa-IR"
        : "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );

  function handleDelete(): void {
    const result =
      window.confirm(
        t.deleteConfirm
      );

    if (!result) {
      return;
    }

    deleteOpportunity(
      opportunity.id
    );

    onDelete?.(
      opportunity.id
    );
  }

  const saved = isSaved(
    opportunity.id
  );

  return (
    <article
      dir={
        language === "fa"
          ? "rtl"
          : "ltr"
      }
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="flex items-center justify-between border-b border-slate-200 bg-blue-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-900">
        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
          {category}
        </span>

        <button
          type="button"
          aria-label={
            saved
              ? t.saved
              : t.save
          }
          onClick={() =>
            toggleSaved(
              opportunity.id
            )
          }
        >
          <Heart
            size={22}
            className={
              saved
                ? "fill-red-500 text-red-500"
                : "text-slate-400"
            }
          />
        </button>
      </div>

      <div
        className={`space-y-4 p-6 ${
          language === "fa"
            ? "text-right"
            : "text-left"
        }`}
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {title}
        </h2>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Building2 size={18} />
          <span>
            {organization}
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <MapPin size={18} />
          <span>
            {location}
          </span>
        </div>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Briefcase size={18} />
          <span>{type}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Calendar size={18} />
          <span>
            {formattedDate}
          </span>
        </div>

        <p className="line-clamp-3 leading-7 text-slate-500 dark:text-slate-400">
          {description}
        </p>

        {opportunity.tags?.length >
          0 && (
          <div className="flex flex-wrap gap-2">
            {opportunity.tags.map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                >
                  #{tag}
                </span>
              )
            )}
          </div>
        )}

        <div className="mt-6 flex gap-3">
          <Link
            href={`/opportunities/${opportunity.id}`}
            className="flex-1 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            {t.view}
          </Link>

          <Link
            href={`/edit/${opportunity.id}`}
            aria-label={t.edit}
            className="rounded-xl border border-yellow-500 px-4 py-3 text-yellow-600 hover:bg-yellow-500 hover:text-white"
          >
            <Pencil
              size={20}
            />
          </Link>

          <button
            type="button"
            aria-label={t.delete}
            onClick={
              handleDelete
            }
            className="rounded-xl bg-red-600 px-4 text-white hover:bg-red-700"
          >
            <Trash2
              size={20}
            />
          </button>
        </div>
      </div>
    </article>
  );
}