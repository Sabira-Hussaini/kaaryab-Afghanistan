import { Opportunity } from "@/types/opportunity";

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Frontend Developer Internship",
    titleFa: "کارآموزی توسعه‌دهنده فرانت‌اند",

    organization: "Kabul Tech Community",
    organizationFa: "جامعه تکنالوژی کابل",

    category: "Internship",

    location: "Kabul",
    locationFa: "کابل",

    type: "Remote",

    deadline: "2026-08-20",

    description:
      "A beginner-friendly internship for students interested in React and Next.js.",
    descriptionFa:
      "یک کارآموزی مناسب برای دانشجویانی که به React و Next.js علاقه دارند.",

    requirements: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
    requirementsFa: [
  "اچ‌تی‌ام‌ال",
  "سی‌اس‌اس",
  "جاوااسکریپت",
  "ری‌اکت",
],

    applyLink: "https://example.com/apply",

    tags: ["React", "Frontend", "Internship"],

    featured: true,
  },

  {
    id: "2",
    title: "Women in Tech Scholarship",
    titleFa: "بورسیه زنان در تکنالوژی",

    organization: "Global Learning Foundation",
    organizationFa: "بنیاد آموزش جهانی",

    category: "Scholarship",

    location: "Online",
    locationFa: "آنلاین",

    type: "Remote",

    deadline: "2026-09-10",

    description:
      "Scholarship program for women interested in technology.",
    descriptionFa:
      "برنامه بورسیه برای زنانی که به تکنالوژی علاقه‌مند هستند.",

    requirements: [
      "English",
      "Motivation Letter",
    ],

    applyLink: "https://example.com/scholarship",

    tags: ["Women", "Scholarship"],

    featured: true,
  },

  {
    id: "3",
    title: "Backend Developer",
    titleFa: "توسعه‌دهنده بک‌اند",

    organization: "Afghan Software House",
    organizationFa: "شرکت نرم‌افزاری افغان",

    category: "Job",

    location: "Herat",
    locationFa: "هرات",

    type: "On-site",

    deadline: "2026-08-15",

    description:
      "Backend developer with Node.js experience.",
    descriptionFa:
      "فرصت کاری برای توسعه‌دهنده بک‌اند با تجربه Node.js.",

    requirements: [
      "Node.js",
      "MongoDB",
      "Git",
    ],

    applyLink: "https://example.com/job",

    tags: ["Node", "Backend"],

    featured: true,
  },

  {
    id: "4",
    title: "Digital Marketing Training",
    titleFa: "آموزش بازاریابی دیجیتال",

    organization: "SkillUp Afghanistan",
    organizationFa: "اسکیل‌آپ افغانستان",

    category: "Training",

    location: "Kabul",
    locationFa: "کابل",

    type: "Hybrid",

    deadline: "2026-08-30",

    description:
      "Free digital marketing training program.",
    descriptionFa:
      "برنامه آموزشی رایگان بازاریابی دیجیتال.",

    requirements: [
      "Laptop",
      "Basic Computer Skills",
    ],

    applyLink: "https://example.com/training",

    tags: ["Marketing"],

    featured: false,
  },

  {
    id: "5",
    title: "Remote UI/UX Designer",
    titleFa: "طراح رابط و تجربه کاربری دورکاری",

    organization: "Creative Studio",
    organizationFa: "استودیوی خلاقیت",

    category: "Job",

    location: "Remote",
    locationFa: "دورکاری",

    type: "Remote",

    deadline: "2026-09-01",

    description:
      "Design websites and mobile applications remotely.",
    descriptionFa:
      "طراحی وب‌سایت‌ها و برنامه‌های موبایل به صورت دورکاری.",

    requirements: [
      "Figma",
      "UI Design",
    ],

    applyLink: "https://example.com/uiux",

    tags: ["Figma", "Design"],

    featured: false,
  },

  {
    id: "6",
    title: "Volunteer English Teacher",
    titleFa: "معلم داوطلب زبان انگلیسی",

    organization: "Hope Education",
    organizationFa: "آموزش امید",

    category: "Volunteer",

    location: "Bamyan",
    locationFa: "بامیان",

    type: "On-site",

    deadline: "2026-09-15",

    description:
      "Volunteer opportunity for teaching English.",
    descriptionFa:
      "فرصت داوطلبانه برای تدریس زبان انگلیسی.",

    requirements: [
      "English",
      "Teaching",
    ],

    applyLink: "https://example.com/volunteer",

    tags: ["Volunteer"],

    featured: false,
  },
  {
  id: "7",

  title: "Web Development Online Course",
  titleFa: "دوره آنلاین توسعه وب",

  organization: "Afghan Digital Academy",
  organizationFa: "آکادمی دیجیتال افغانستان",

  category: "Online Course",

  location: "Online",
  locationFa: "آنلاین",

  type: "Remote",

  deadline: "2026-10-01",

  description:
    "Free online web development course for beginners.",

  descriptionFa:
    "دوره آنلاین رایگان توسعه وب برای افراد مبتدی.",

  requirements: [
    "Internet Access",
    "Basic Computer Skills",
  ],

  requirementsFa: [
    "دسترسی به اینترنت",
    "مهارت‌های ابتدایی کمپیوتر",
  ],

  applyLink:
    "https://example.com/course",

  tags: [
    "Web Development",
    "Online Course",
  ],

  featured: false,
}
];
