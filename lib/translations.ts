export const translations = {
  en: {
    home: "Home",
    opportunities: "Opportunities",
    saved: "Saved",
    dashboard: "Dashboard",
    about: "About",
    contact: "Contact",
    post: "Post Opportunity",
  },

  fa: {
    home: "خانه",
    opportunities: "فرصت‌ها",
    saved: "ذخیره شده‌ها",
    dashboard: "داشبورد",
    about: "درباره ما",
    contact: "تماس",
    post: "ثبت فرصت",
  },
} as const;



export type Language = keyof typeof translations;

export type Translation =
  typeof translations.en;