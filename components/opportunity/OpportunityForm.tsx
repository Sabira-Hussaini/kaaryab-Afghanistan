"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addOpportunity } from "@/lib/storage";
import { useLanguage } from "@/context/LanguageContext";

import {
  opportunitySchema,
  OpportunityFormData,
} from "@/lib/validation";

const text = {
  en: {
    title: "Title",
    organization: "Organization",
    category: "Category",
    location: "Location",
    type: "Type",
    deadline: "Deadline",
    description: "Description",
    requirements: "Requirements",
    applyLink: "Apply Link",
    submit: "Add Opportunity",
    success: "Opportunity Added Successfully!",

    selectCategory: "Select Category",
    selectType: "Select Type",

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

    requirementsPlaceholder: "React, Next.js, Git",
    applyPlaceholder: "https://example.com",
  },

  fa: {
    title: "عنوان",
    organization: "سازمان",
    category: "دسته‌بندی",
    location: "موقعیت",
    type: "نوع",
    deadline: "آخرین مهلت",
    description: "توضیحات",
    requirements: "شرایط و مهارت‌ها",
    applyLink: "لینک درخواست",
    submit: "ثبت فرصت",
    success: "فرصت با موفقیت ثبت شد!",

    selectCategory: "دسته‌بندی را انتخاب کنید",
    selectType: "نوع را انتخاب کنید",

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

    requirementsPlaceholder: "React، Next.js، Git",
    applyPlaceholder: "https://example.com",
  },
};

export default function OpportunityForm() {
  const { language } = useLanguage();
  const t = text[language];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OpportunityFormData>({
    resolver: zodResolver(opportunitySchema),
  });

  const onSubmit = (data: OpportunityFormData) => {
    const newOpportunity = {
      id: crypto.randomUUID(),
      title: data.title,
      organization: data.organization,
      category: data.category,
      location: data.location,
      type: data.type,
      deadline: data.deadline,
      description: data.description,
      requirements: data.requirements
        .split(",")
        .map((item) => item.trim()),
      applyLink: data.applyLink,
      tags: [],
    };

    addOpportunity(newOpportunity);

    alert(t.success);

    reset();
  };

  return (
    <form
      dir={language === "fa" ? "rtl" : "ltr"}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800"
    >
      {/* Title */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t.title}
        </label>

        <input
          {...register("title")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.title && (
          <p className="mt-1 text-sm text-red-500">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Organization */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t.organization}
        </label>

        <input
          {...register("organization")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.organization && (
          <p className="mt-1 text-sm text-red-500">
            {errors.organization.message}
          </p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t.category}
        </label>

        <select
          {...register("category")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        >
          <option value="">{t.selectCategory}</option>
          <option value="Job">{t.categories.Job}</option>
          <option value="Internship">{t.categories.Internship}</option>
          <option value="Scholarship">{t.categories.Scholarship}</option>
          <option value="Remote Work">
            {t.categories["Remote Work"]}
          </option>
          <option value="Training">{t.categories.Training}</option>
          <option value="Volunteer">{t.categories.Volunteer}</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t.location}
        </label>

        <input
          {...register("location")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.location && (
          <p className="mt-1 text-sm text-red-500">
            {errors.location.message}
          </p>
        )}
      </div>

      {/* Type */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t.type}
        </label>

        <select
          {...register("type")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        >
          <option value="">{t.selectType}</option>
          <option value="Remote">{t.types.Remote}</option>
          <option value="On-site">{t.types["On-site"]}</option>
          <option value="Hybrid">{t.types.Hybrid}</option>
        </select>
      </div>

      {/* Deadline */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t.deadline}
        </label>

        <input
          type="date"
          {...register("deadline")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.deadline && (
          <p className="mt-1 text-sm text-red-500">
            {errors.deadline.message}
          </p>
        )}
      </div>      {/* Description */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t.description}
        </label>

        <textarea
          rows={5}
          {...register("description")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Requirements */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t.requirements}
        </label>

        <textarea
          rows={4}
          placeholder={t.requirementsPlaceholder}
          {...register("requirements")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.requirements && (
          <p className="mt-1 text-sm text-red-500">
            {errors.requirements.message}
          </p>
        )}
      </div>

      {/* Apply Link */}
      <div>
        <label className="mb-2 block font-semibold text-slate-900 dark:text-white">
          {t.applyLink}
        </label>

        <input
          type="url"
          placeholder={t.applyPlaceholder}
          {...register("applyLink")}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        {errors.applyLink && (
          <p className="mt-1 text-sm text-red-500">
            {errors.applyLink.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        {t.submit}
      </button>
    </form>
  );
}