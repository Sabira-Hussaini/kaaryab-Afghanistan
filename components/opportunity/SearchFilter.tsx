"use client";

import { Search, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

const text = {
  en: {
    placeholder: "Search by title or organization...",
    clear: "Clear search",
    search: "Search opportunities",
  },

  fa: {
    placeholder: "جستجو بر اساس عنوان یا سازمان...",
    clear: "پاک کردن جستجو",
    search: "جستجوی فرصت‌ها",
  },
};

export default function SearchFilter({
  search,
  setSearch,
}: Props) {

  const { language } = useLanguage();

  const t = text[language];


  return (

    <section
      dir={
        language === "fa"
          ? "rtl"
          : "ltr"
      }
      aria-label={t.search}
      className="mb-8"
    >

      <div className="relative">


        <Search
          size={20}
          aria-hidden="true"
          className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${
            language === "fa"
              ? "right-4"
              : "left-4"
          }`}
        />



        <input

          type="search"

          value={search}

          onChange={(e)=>
            setSearch(e.target.value)
          }

          placeholder={t.placeholder}

          autoComplete="off"

          aria-label={t.search}

          className={`
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          py-4
          text-lg
          text-slate-900
          shadow-sm
          outline-none
          transition

          focus:border-blue-600
          focus:ring-4
          focus:ring-blue-200

          dark:border-slate-700
          dark:bg-slate-800
          dark:text-white
          dark:placeholder:text-slate-400

          ${
            language==="fa"
            ?
            "pr-12 pl-12 text-right"
            :
            "pl-12 pr-12 text-left"
          }

          `}
        />




        {
          search && (

          <button

            type="button"

            onClick={()=>
              setSearch("")
            }

            aria-label={t.clear}

            title={t.clear}

            className={`
            absolute
            top-1/2
            -translate-y-1/2
            rounded-full
            p-2
            text-slate-400

            hover:bg-slate-100
            hover:text-red-500

            dark:hover:bg-slate-700

            ${
              language==="fa"
              ?
              "left-3"
              :
              "right-3"
            }

            `}
          >

            <X size={18}/>

          </button>

          )
        }



      </div>

    </section>

  );
}