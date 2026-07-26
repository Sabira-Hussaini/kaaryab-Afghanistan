"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from "react";


export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const [open, setOpen] = useState(false);

  const menuRef =
    useRef<HTMLDivElement>(null);



  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    }


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);



  const changeLanguage = (
    lang: "en" | "fa"
  ) => {
    setLanguage(lang);
    setOpen(false);
  };



  return (
    <div
      ref={menuRef}
      className="relative"
    >

      <button
        type="button"
        onClick={() =>
          setOpen((prev) => !prev)
        }
        aria-label="Change language"
        aria-expanded={open}
        className="
          rounded-full p-2
          transition
          hover:bg-slate-100
          dark:hover:bg-slate-800
        "
      >
        <Globe
          className="h-5 w-5"
        />
      </button>



      {open && (

        <div
          className={`
            absolute mt-2 w-40
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
            shadow-lg
            transition-all
            dark:border-slate-700
            dark:bg-slate-800

            ${
              language === "fa"
                ? "left-0"
                : "right-0"
            }
          `}
        >

          <button
            type="button"
            onClick={() =>
              changeLanguage("en")
            }
            className={`
              flex w-full items-center
              gap-2 px-4 py-3
              text-left
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



          <button
            type="button"
            onClick={() =>
              changeLanguage("fa")
            }
            className={`
              flex w-full items-center
              gap-2 px-4 py-3
              text-left
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