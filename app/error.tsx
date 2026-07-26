"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  const { language } = useLanguage();


  useEffect(() => {
    console.error(error);
  }, [error]);



  const text = {
    en: {
      title: "Something went wrong",
      description:
        "An unexpected error happened. Please try again.",
      button:
        "Try Again",
    },

    fa: {
      title:
        "مشکلی رخ داده است",
      description:
        "یک خطای غیرمنتظره رخ داد. دوباره تلاش کنید.",
      button:
        "تلاش دوباره",
    },
  };


  const t = text[language];


  return (

    <main

      dir={
        language === "fa"
          ? "rtl"
          : "ltr"
      }

      className="
      flex
      min-h-[60vh]
      items-center
      justify-center
      px-6
      "

    >

      <div
        className="
        max-w-lg
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-10
        text-center
        shadow-lg

        dark:border-slate-700
        dark:bg-slate-800
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          text-slate-900
          dark:text-white
          "
        >
          {t.title}
        </h1>


        <p
          className="
          mt-4
          text-slate-600
          dark:text-slate-300
          "
        >
          {t.description}
        </p>



        <button

          onClick={() => reset()}

          className="
          mt-8
          rounded-xl
          bg-blue-600
          px-8
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          "

        >

          {t.button}

        </button>


      </div>


    </main>

  );
}