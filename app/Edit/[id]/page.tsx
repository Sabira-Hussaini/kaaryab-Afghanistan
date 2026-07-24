"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getStoredOpportunities, updateOpportunity } from "@/lib/storage";
import { Opportunity } from "@/types/opportunity";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  en: {
    notFound: "Opportunity Not Found",
    title: "Edit Opportunity",
    alert: "Opportunity Updated Successfully!",
    titlePlaceholder: "Title",
    organization: "Organization",
    location: "Location",
    description: "Description",
    requirements: "Requirements",
    applyLink: "Apply Link",
    save: "Save Changes",
  },

  fa: {
    notFound: "فرصت مورد نظر یافت نشد",
    title: "ویرایش فرصت",
    alert: "فرصت با موفقیت به‌روزرسانی شد!",
    titlePlaceholder: "عنوان",
    organization: "سازمان",
    location: "موقعیت",
    description: "توضیحات",
    requirements: "شرایط و الزامات",
    applyLink: "لینک درخواست",
    save: "ذخیره تغییرات",
  },
};

export default function EditOpportunityPage() {
  const { id } = useParams();
  const router = useRouter();

  const { language } = useLanguage();
  const t = text[language];

  const [formData, setFormData] = useState<Opportunity | null>(null);

  useEffect(() => {
    const opportunities = getStoredOpportunities();

    const opportunity = opportunities.find((item) => item.id === id);

    if (opportunity) {
      setFormData(opportunity);
    }
  }, [id]);

  if (!formData) {
    return (
      <main
        dir={language === "fa" ? "rtl" : "ltr"}
        className="mx-auto max-w-4xl p-10"
      >
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          {t.notFound}
        </h1>
      </main>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "requirements"
          ? e.target.value.split(",")
          : e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateOpportunity(formData);

    alert(t.alert);

    router.push("/opportunities");
  };

  return (
    <main
      dir={language === "fa" ? "rtl" : "ltr"}
      className="mx-auto max-w-4xl px-6 py-12"
    >
      <h1
        className={`mb-8 text-4xl font-bold text-slate-900 dark:text-white ${
          language === "fa" ? "text-right" : "text-left"
        }`}
      >
        {t.title}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800"
      >
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder={t.titlePlaceholder}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        <input
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          placeholder={t.organization}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder={t.location}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          placeholder={t.description}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        <textarea
          name="requirements"
          value={formData.requirements.join(", ")}
          onChange={handleChange}
          rows={4}
          placeholder={t.requirements}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        <input
          name="applyLink"
          value={formData.applyLink}
          onChange={handleChange}
          placeholder={t.applyLink}
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
        >
          {t.save}
        </button>
      </form>
    </main>
  );
}