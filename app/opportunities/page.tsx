"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import OpportunityCard from "@/components/opportunity/OpportunityCard";
import SearchFilter from "@/components/opportunity/SearchFilter";
import CategoryFilter from "@/components/opportunity/CategoryFilter";

import { opportunities as demoData } from "@/data/opportunities";
import { getAllOpportunities } from "@/lib/storage";
import { Opportunity } from "@/types/opportunity";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  en: {
    title: "Explore Opportunities",

    description:
      "Find jobs, internships, scholarships, training programs, online courses and remote opportunities.",

    emptyTitle:
      "No Opportunities Found",

    emptyDescription:
      "Try another search or filter.",

    location:
      "Filter by location",

    type:
      "Filter by type",

    deadline:
      "Expiring within 30 days",

    all: "All",

    remote: "Remote",

    onsite: "On-site",

    hybrid: "Hybrid",

    clear: "Clear Filters",

    loading:
      "Loading opportunities...",
  },

  fa: {
    title:
      "فرصت‌ها را بررسی کنید",

    description:
      "وظایف، کارآموزی، بورسیه، دوره‌های آنلاین، برنامه‌های آموزشی و فرصت‌های دورکاری را پیدا کنید.",

    emptyTitle:
      "هیچ فرصتی یافت نشد",

    emptyDescription:
      "جستجو یا فیلتر دیگری را امتحان کنید.",

    location:
      "جستجو بر اساس موقعیت",

    type:
      "نوع فرصت",

    deadline:
      "فرصت‌های نزدیک به پایان",

    all: "همه",

    remote: "دورکاری",

    onsite: "حضوری",

    hybrid: "ترکیبی",

    clear:
      "پاک کردن فیلترها",

    loading:
      "در حال بارگذاری فرصت‌ها...",
  },
};

export default function OpportunitiesPage() {
  const { language } =
    useLanguage();

  const t = text[language];

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [location, setLocation] =
    useState("");

  const [type, setType] =
    useState("All");

  const [deadline, setDeadline] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [
    allOpportunities,
    setAllOpportunities,
  ] = useState<Opportunity[]>([]);

  useEffect(() => {
    const loadOpportunities = () => {
      const all =
        getAllOpportunities(
          demoData
        );

      setAllOpportunities(all);
      setLoading(false);
    };

    loadOpportunities();

    window.addEventListener(
      "storage",
      loadOpportunities
    );

    return () => {
      window.removeEventListener(
        "storage",
        loadOpportunities
      );
    };
  }, []);

  const filtered = useMemo(() => {
    return allOpportunities.filter(
      (item) => {
        const searchText =
          search.toLowerCase();

        const matchesSearch =
          item.title
            ?.toLowerCase()
            .includes(searchText) ||

          item.titleFa
            ?.toLowerCase()
            .includes(searchText) ||

          item.organization
            ?.toLowerCase()
            .includes(searchText) ||

          item.organizationFa
            ?.toLowerCase()
            .includes(searchText);

        const matchesCategory =
          category === "All" ||
          item.category === category;

        const matchesLocation =
          location === "" ||

          item.location
            ?.toLowerCase()
            .includes(
              location.toLowerCase()
            ) ||

          item.locationFa
            ?.toLowerCase()
            .includes(
              location.toLowerCase()
            );

        const matchesType =
          type === "All" ||
          item.type === type;

        const deadlineTime =
          new Date(
            item.deadline
          ).getTime();

        const now =
          new Date().getTime();

        const thirtyDays =
          30 *
          24 *
          60 *
          60 *
          1000;

        const matchesDeadline =
          !deadline ||
          (
            deadlineTime >= now &&
            deadlineTime - now <=
              thirtyDays
          );

        return (
          matchesSearch &&
          matchesCategory &&
          matchesLocation &&
          matchesType &&
          matchesDeadline
        );
      }
    );
  }, [
    allOpportunities,
    search,
    category,
    location,
    type,
    deadline,
  ]);

  function handleDelete(id: string) {
    setAllOpportunities(
      (previous) =>
        previous.filter(
          (item) =>
            item.id !== id
        )
    );
  }

  function clearFilters() {
    setSearch("");
    setCategory("All");
    setLocation("");
    setType("All");
    setDeadline(false);
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

  return (
    <main
      dir={
        language === "fa"
          ? "rtl"
          : "ltr"
      }
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <div
        className={`mb-10 ${
          language === "fa"
            ? "text-right"
            : "text-left"
        }`}
      >
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          {t.title}
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {t.description}
        </p>
      </div>

      <SearchFilter
        search={search}
        setSearch={setSearch}
      />

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <input
          value={location}
          onChange={(e) =>
            setLocation(
              e.target.value
            )
          }
          placeholder={t.location}
          className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />

        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value)
          }
          className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        >
          <option value="All">
            {t.all}
          </option>

          <option value="Remote">
            {t.remote}
          </option>

          <option value="On-site">
            {t.onsite}
          </option>

          <option value="Hybrid">
            {t.hybrid}
          </option>
        </select>

        <label className="flex items-center gap-3 rounded-xl border p-3 dark:border-slate-600">
          <input
            type="checkbox"
            checked={deadline}
            onChange={(e) =>
              setDeadline(
                e.target.checked
              )
            }
          />

          {t.deadline}
        </label>

        <button
          type="button"
          onClick={clearFilters}
          className="rounded-xl bg-slate-200 px-4 py-3 font-medium text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-white"
        >
          {t.clear}
        </button>
      </div>

      <CategoryFilter
        selected={category}
        setSelected={setCategory}
      />

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-16 text-center dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t.emptyTitle}
          </h2>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            {t.emptyDescription}
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map(
            (item) => (
              <OpportunityCard
                key={item.id}
                opportunity={item}
                onDelete={
                  handleDelete
                }
              />
            )
          )}
        </div>
      )}
    </main>
  );
}