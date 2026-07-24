"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const faqContent = {
  en: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is KaarYab free to use?",
        answer:
          "Yes. KaarYab is completely free for job seekers and students.",
      },
      {
        question: "Can I submit opportunities?",
        answer:
          "Yes. Organizations and individuals can submit opportunities using the Add Opportunity page.",
      },
      {
        question: "Does KaarYab support remote jobs?",
        answer:
          "Absolutely! You can find many remote opportunities from international organizations.",
      },
    ],
  },
  fa: {
    title: "سوالات متداول",
    faqs: [
      {
        question: "آیا استفاده از کاریاب رایگان است؟",
        answer:
          "بله. کاریاب برای جویندگان کار و دانشجویان کاملاً رایگان است.",
      },
      {
        question: "آیا می‌توانم فرصت‌های جدید ثبت کنم؟",
        answer:
          "بله. سازمان‌ها و افراد می‌توانند از طریق صفحه «ثبت فرصت» فرصت‌های جدید را ارسال کنند.",
      },
      {
        question: "آیا کاریاب از فرصت‌های کار از راه دور پشتیبانی می‌کند؟",
        answer:
          "بله، شما می‌توانید فرصت‌های شغلی آنلاین و دورکاری از سازمان‌های بین‌المللی را پیدا کنید.",
      },
    ],
  },
};

export default function FAQ() {
  const { language } = useLanguage();
  const t = faqContent[language];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      className="bg-slate-50 py-20 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold text-slate-900 dark:text-white">
          {t.title}
        </h2>

        {t.faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className={`flex w-full items-center justify-between p-6 font-semibold text-slate-900 dark:text-white ${
                language === "fa" ? "text-right" : "text-left"
              }`}
            >
              <span>{faq.question}</span>
              <span>{open === index ? "−" : "+"}</span>
            </button>

            {open === index && (
              <p
                className={`px-6 pb-6 text-slate-600 dark:text-slate-300 ${
                  language === "fa" ? "text-right" : "text-left"
                }`}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}