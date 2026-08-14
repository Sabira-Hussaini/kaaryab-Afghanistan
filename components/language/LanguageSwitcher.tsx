"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lang: "en" | "fa") => {
    setLanguage(lang);
    setOpen(false);
  };

  return (
    <div ref={menuRef} className="relative z-[9999] flex-shrink-0">
      {/* Language Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Change language"
        aria-expanded={open}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          p-2
          text-slate-700
          transition
          hover:bg-slate-100
          dark:text-white
          dark:hover:bg-slate-800
        "
      >
        <Globe className="h-5 w-5" />
      </button>

      {/* Language Dropdown */}
      {open && (
        <div
          className="
            absolute
            bottom-full
            z-[99999]
            mb-2
            w-40
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
            shadow-xl
            dark:border-slate-700
            dark:bg-slate-800
            
            /* Responsive Alignment for LTR & RTL */
            ltr:left-0
            rtl:right-0
            sm:bottom-auto
            sm:top-full
            sm:mt-2
            sm:mb-0
            sm:ltr:left-auto
            sm:ltr:right-0
            sm:rtl:right-auto
            sm:rtl:left-0
          "
        >
          {/* English */}
          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className={`
              flex
              w-full
              items-center
              gap-2
              px-4
              py-3
              text-left
              rtl:text-right
              transition
              hover:bg-slate-100
              dark:hover:bg-slate-700
              ${
                language === "en"
                  ? "font-bold text-blue-600"
                  : "text-slate-700 dark:text-slate-200"
              }
            `}
          >
            🇬🇧 English
          </button>

          {/* Dari */}
          <button
            type="button"
            onClick={() => changeLanguage("fa")}
            className={`
              flex
              w-full
              items-center
              gap-2
              px-4
              py-3
              text-left
              rtl:text-right
              transition
              hover:bg-slate-100
              dark:hover:bg-slate-700
              ${
                language === "fa"
                  ? "font-bold text-blue-600"
                  : "text-slate-700 dark:text-slate-200"
              }
            `}
          >
            🇦🇫 دری
          </button>
        </div>
      )}
    </div>
  );
}