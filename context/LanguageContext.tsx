"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Language = "en" | "fa";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext =
  createContext<LanguageContextType | undefined>(
    undefined
  );

const LANGUAGE_KEY = "language";

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] =
    useState<Language>(() => {
      if (typeof window === "undefined") {
        return "en";
      }

      try {
        const saved =
          localStorage.getItem(
            LANGUAGE_KEY
          );

        if (
          saved === "en" ||
          saved === "fa"
        ) {
          return saved;
        }
      } catch (error) {
        console.error(
          "Failed to load language:",
          error
        );
      }

      return "en";
    });

  const setLanguage = (
    lang: Language
  ) => {
    setLanguageState(lang);

    try {
      localStorage.setItem(
        LANGUAGE_KEY,
        lang
      );
    } catch (error) {
      console.error(
        "Failed to save language:",
        error
      );
    }
  };

  useEffect(() => {
    document.documentElement.lang =
      language;

    document.documentElement.dir =
      language === "fa"
        ? "rtl"
        : "ltr";
  }, [language]);
    return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}