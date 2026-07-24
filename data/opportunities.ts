import { Opportunity } from "@/types/opportunity";

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "Frontend Developer Internship",
    organization: "Kabul Tech Community",
    category: "Internship",
    location: "Kabul",
    type: "Remote",
    deadline: "2026-08-20",
    description:
      "A beginner-friendly internship for students interested in React and Next.js.",
    requirements: [
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ],
    applyLink: "https://example.com/apply",
    tags: ["React", "Frontend", "Internship"]
  },

  {
    id: "2",
    title: "Women in Tech Scholarship",
    organization: "Global Learning Foundation",
    category: "Scholarship",
    location: "Online",
    type: "Remote",
    deadline: "2026-09-10",
    description:
      "Scholarship program for women interested in technology.",
    requirements: [
      "English",
      "Motivation Letter"
    ],
    applyLink: "https://example.com/scholarship",
    tags: ["Women", "Scholarship"]
  },

  {
    id: "3",
    title: "Backend Developer",
    organization: "Afghan Software House",
    category: "Job",
    location: "Herat",
    type: "On-site",
    deadline: "2026-08-15",
    description:
      "Backend developer with Node.js experience.",
    requirements: [
      "Node.js",
      "MongoDB",
      "Git"
    ],
    applyLink: "https://example.com/job",
    tags: ["Node", "Backend"]
  },

  {
    id: "4",
    title: "Digital Marketing Training",
    organization: "SkillUp Afghanistan",
    category: "Training",
    location: "Kabul",
    type: "Hybrid",
    deadline: "2026-08-30",
    description:
      "Free digital marketing training program.",
    requirements: [
      "Laptop",
      "Basic Computer Skills"
    ],
    applyLink: "https://example.com/training",
    tags: ["Marketing"]
  },

  {
    id: "5",
    title: "Remote UI/UX Designer",
    organization: "Creative Studio",
    category: "Job",
    location: "Remote",
    type: "Remote",
    deadline: "2026-09-01",
    description:
      "Design websites and mobile applications remotely.",
    requirements: [
      "Figma",
      "UI Design"
    ],
    applyLink: "https://example.com/uiux",
    tags: ["Figma", "Design"]
  },

  {
    id: "6",
    title: "Volunteer English Teacher",
    organization: "Hope Education",
    category: "Volunteer",
    location: "Bamyan",
    type: "On-site",
    deadline: "2026-09-15",
    description:
      "Volunteer opportunity for teaching English.",
    requirements: [
      "English",
      "Teaching"
    ],
    applyLink: "https://example.com/volunteer",
    tags: ["Volunteer"]
  }
];