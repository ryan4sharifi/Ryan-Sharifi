export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  metrics: string[];
};

export type SecondaryProject = {
  title: string;
  description: string;
  details: string[];
  tech: string[];
  status?: "In Progress";
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const socialLinks = {
  github: "https://github.com/ryan4sharifi",
  linkedin: "https://www.linkedin.com/in/ryan4sharifi/",
  email: "mailto:hello@ryansharifi.com",
};

export const experiences: Experience[] = [
  {
    company: "Sterling Systems Solutions",
    role: "Frontend / Full-Stack Engineer",
    period: "Dec 2024 – Present",
    summary:
      "Build and improve customer-facing product experiences for Trial Finder and support Sterling's public web presence.",
    highlights: [
      "React and TypeScript development for Trial Finder",
      "Supabase and PostgreSQL integration",
      "Search, filtering, and dashboard workflows",
      "Responsive interface development and SEO improvements",
      "Contributions to the company WordPress site",
    ],
    metrics: ["25+ React / TypeScript components", "10+ user workflows", "140K+ trial records"],
  },
  {
    company: "Independent Full-Stack Software Engineer",
    role: "Product Engineering",
    period: "Aug 2024 – Present",
    summary:
      "Own full-stack product development across web, backend, database, streaming, and Android/Android TV surfaces, with PersianHub1 as the primary product.",
    highlights: [
      "Next.js, React, TypeScript, FastAPI, PostgreSQL, and Supabase",
      "Authentication, subscriptions, and payment workflows",
      "Media streaming infrastructure and Linux-hosted integrations",
      "Smart TV and browser compatibility work",
      "Android and Android TV contributions with Kotlin and Jetpack Compose",
    ],
    metrics: ["Web, API, database, and mobile scope", "Ongoing independent product ownership"],
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    title: "Volunteer Management Platform",
    description:
      "Full-stack platform for coordinating volunteers and events.",
    details: ["Role-based profiles, matching, and reporting", "FastAPI CRUD APIs with pytest and Jest coverage"],
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Material UI",
      "pytest",
      "Jest",
    ],
  },
  {
    title: "Medical Clinic Web Application",
    description:
      "Role-based medical clinic workflow built with ASP.NET Core and SQL Server.",
    details: ["Patient registration and appointment workflows", "ASP.NET Identity and asynchronous EF Core queries"],
    tech: [
      "C#",
      "ASP.NET Core",
      ".NET 6",
      "Entity Framework Core",
      "SQL Server",
      "Razor",
    ],
  },
  {
    title: "Delbar",
    description:
      "Native iOS dating-app prototype built with SwiftUI.",
    details: ["Authentication, onboarding, and user profiles", "Image uploads, swipe/match logic, and async/await workflows"],
    tech: ["Swift", "SwiftUI", "Supabase", "Xcode"],
  },
  {
    title: "Telegram Soccer Attendance Bot",
    description:
      "Telegram automation for recurring soccer attendance management.",
    details: ["Scheduled polls and live roster updates", "Capacity controls, FIFO waitlist, and automatic promotion"],
    tech: ["Python", "python-telegram-bot", "APScheduler"],
  },
  {
    title: "Sweet Rose Pastry",
    description:
      "An in-progress WordPress website for a pastry business.",
    details: ["Responsive content and presentation", "WordPress-based content management"],
    tech: ["WordPress", "HTML/CSS", "Responsive Design"],
    status: "In Progress",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "C#",
      "Swift",
      "Kotlin",
      "HTML/CSS",
    ],
  },
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "Razor",
      "Responsive Design",
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      "FastAPI",
      "ASP.NET Core",
      ".NET",
      "Entity Framework Core",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
      "SQL Server",
    ],
  },
  {
    label: "Mobile",
    skills: ["SwiftUI", "Xcode", "Kotlin", "Jetpack Compose", "Android TV"],
  },
  {
    label: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Vercel",
      "Railway",
      "Linux",
      "WordPress",
    ],
  },
];
