"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      dir={language === "fa" ? "rtl" : "ltr"}
      aria-labelledby="faq-heading"
      className="bg-slate-50 py-20 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2
          id="faq-heading"
          className="mb-10 text-center text-4xl font-bold text-slate-900 dark:text-white"
        >
          {t.title}
        </h2>

        <div className="space-y-4">
          {t.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all dark:border-slate-700 dark:bg-slate-800"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-button-${index}`}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className={`flex w-full items-center justify-between p-6 text-lg font-semibold text-slate-900 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:hover:bg-slate-700 ${
                    language === "fa" ? "text-right" : "text-left"
                  }`}
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`px-6 pb-6 leading-7 text-slate-600 dark:text-slate-300 ${
                        language === "fa"
                          ? "text-right"
                          : "text-left"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}