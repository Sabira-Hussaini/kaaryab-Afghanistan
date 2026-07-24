"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
        aria-label="Change language"
      >
        <Globe className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
          <button
            onClick={() => {
              setLanguage("en");
              setOpen(false);
            }}
            className={`block w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 ${
              language === "en" ? "font-semibold text-blue-600" : ""
            }`}
          >
            🇬🇧 English
          </button>

          <button
            onClick={() => {
              setLanguage("fa");
              setOpen(false);
            }}
            className={`block w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 ${
              language === "fa" ? "font-semibold text-blue-600" : ""
            }`}
          >
            🇦🇫 دری
          </button>
        </div>
      )}
    </div>
  );
}