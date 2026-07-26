
"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const footerText = {
  en: {
    title: "KaarYab Afghanistan",

    description:
      "Helping Afghan youth discover jobs, internships, scholarships, remote work, and learning opportunities.",

    copyright: "All rights reserved.",

    demo: "Demo Data • Built for educational purposes.",

    quickLinks: "Quick Links",

    contact: "Contact",

    links: {
      home: "Home",
      opportunities: "Opportunities",
      about: "About",
      contact: "Contact",
    },

    location: "Kabul, Afghanistan",
  },

  fa: {
    title: "کاریاب افغانستان",

    description:
      "کمک به جوانان افغانستان برای یافتن فرصت‌های شغلی، کارآموزی، بورسیه، دورکاری و فرصت‌های آموزشی.",

    copyright: "تمامی حقوق محفوظ است.",

    demo:
      "داده‌های نمایشی • این پروژه صرفاً برای اهداف آموزشی ساخته شده است.",

    quickLinks: "لینک‌های سریع",

    contact: "ارتباط با ما",

    links: {
      home: "خانه",
      opportunities: "فرصت‌ها",
      about: "درباره ما",
      contact: "تماس",
    },

    location: "کابل، افغانستان",
  },
};

export default function Footer() {
  const { language } = useLanguage();

  const t = footerText[language];

  const year = new Date().getFullYear();

  return (
    <footer
      dir={language === "fa" ? "rtl" : "ltr"}
      className="
      border-t border-slate-200
      bg-white
      dark:border-slate-700
      dark:bg-slate-900
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div
          className={`
          grid gap-10 md:grid-cols-3
          ${
            language === "fa"
              ? "text-right"
              : "text-left"
          }
          `}
        >

          {/* Brand */}
          <div>

            <h2 className="
              text-2xl font-bold
              text-blue-600
              dark:text-blue-400
            ">
              {t.title}
            </h2>


            <p className="
              mt-4 max-w-md
              leading-7
              text-slate-600
              dark:text-slate-300
            ">
              {t.description}
            </p>

          </div>



          {/* Quick Links */}
          <nav aria-label="Footer Navigation">

            <h3 className="
              mb-4 text-lg font-semibold
              text-slate-900
              dark:text-white
            ">
              {t.quickLinks}
            </h3>


            <ul className="space-y-3">


              <li>
                <Link
                  href="/"
                  className="
                  text-slate-600
                  transition
                  hover:text-blue-600
                  dark:text-slate-300
                  dark:hover:text-blue-400
                  "
                >
                  {t.links.home}
                </Link>
              </li>



              <li>
                <Link
                  href="/opportunities"
                  className="
                  text-slate-600
                  transition
                  hover:text-blue-600
                  dark:text-slate-300
                  dark:hover:text-blue-400
                  "
                >
                  {t.links.opportunities}
                </Link>
              </li>



              <li>
                <Link
                  href="/about"
                  className="
                  text-slate-600
                  transition
                  hover:text-blue-600
                  dark:text-slate-300
                  dark:hover:text-blue-400
                  "
                >
                  {t.links.about}
                </Link>
              </li>



              <li>
                <Link
                  href="/contact"
                  className="
                  text-slate-600
                  transition
                  hover:text-blue-600
                  dark:text-slate-300
                  dark:hover:text-blue-400
                  "
                >
                  {t.links.contact}
                </Link>
              </li>


            </ul>

          </nav>




          {/* Contact */}
          <div>

            <h3 className="
              mb-4 text-lg font-semibold
              text-slate-900
              dark:text-white
            ">
              {t.contact}
            </h3>


            <ul className="
              space-y-4
              text-slate-600
              dark:text-slate-300
            ">


              <li>
                📧 info@kaaryab.af
              </li>


              <li>
                📞{" "}
                {language === "fa"
                  ? "+۹۳ ۷۰۰ ۰۰۰ ۰۰۰"
                  : "+93 700 000 000"}
              </li>


              <li>
                📍 {t.location}
              </li>


            </ul>

          </div>


        </div>




        {/* Bottom */}
        <div
          className="
          mt-10
          border-t
          border-slate-200
          pt-6
          dark:border-slate-700
          "
        >

          <p
            className="
            text-center
            text-sm
            text-slate-500
            dark:text-slate-400
            "
          >
            © {year} {t.title}. {t.copyright}
          </p>


          <p
            className="
            mt-2
            text-center
            text-xs
            text-slate-400
            dark:text-slate-500
            "
          >
            {t.demo}
          </p>


        </div>


      </div>
    </footer>
  );
}