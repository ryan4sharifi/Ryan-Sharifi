export type Project = {
  slug: string;
  title: string;
  category: string;
  outcome: string;
  description: string;
  overview: {
    product: string;
    audience: string;
  };
  problem: string;
  solution: string;
  role: string[];
  architecture: {
    summary: string;
    stack: string[];
  };
  highlights: string[];
  result: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
};

export const projects = {
  persianhub1: {
    slug: "persianhub1",
    title: "PersianHub1",
    category: "Independent Product",
    outcome:
      "A full-stack Persian media platform spanning web, backend APIs, subscriptions, streaming infrastructure, and Android/Android TV experiences.",
    description:
      "Independent full-stack media platform across web, backend, streaming, and Android/Android TV.",
    overview: {
      product:
        "PersianHub1 is a media platform developed across web, backend, database, streaming, and Android/Android TV surfaces.",
      audience:
        "Built for Persian-language audiences accessing media through browsers, Smart TVs, Android devices, and Android TV.",
    },
    problem:
      "A media product operating across browsers, Smart TVs, mobile devices, and television interfaces requires coordinated authentication, subscription, payment, playback, API, and infrastructure behavior.",
    solution:
      "Developed the product as an integrated full-stack system using Next.js and React for web experiences, FastAPI for backend APIs, Supabase/PostgreSQL for application data, Kotlin and Jetpack Compose for Android surfaces, and Linux-hosted services for streaming integrations.",
    role: [
      "Own full-stack development across web, backend APIs, database integration, streaming services, and production troubleshooting.",
      "Implemented authentication, subscriptions, and payment workflows.",
      "Worked on media streaming and Smart TV/browser compatibility.",
      "Contributed to Android and Android TV experiences using Kotlin and Jetpack Compose.",
    ],
    architecture: {
      summary:
        "Next.js, React, and TypeScript power the web experience; FastAPI provides backend APIs; Supabase/PostgreSQL stores application data; Kotlin and Jetpack Compose support Android and Android TV; and Linux-hosted services support streaming integrations.",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "FastAPI",
        "Supabase",
        "PostgreSQL",
        "Kotlin",
        "Jetpack Compose",
        "Linux",
      ],
    },
    highlights: [
      "Authentication and subscription workflows",
      "Payment flows",
      "Media streaming services",
      "Smart TV and browser compatibility",
      "Android and Android TV development",
      "Backend APIs and PostgreSQL/Supabase integration",
      "Linux production troubleshooting",
    ],
    result:
      "Ongoing independent engineering work spanning product development and production troubleshooting across web, mobile, backend, database, and Linux-hosted streaming services.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Kotlin",
      "Jetpack Compose",
      "Linux",
    ],
  },

  trialfinder: {
    slug: "trialfinder",
    title: "Trial Finder",
    category: "Professional Work · Sterling Systems Solutions",
    outcome:
      "A clinical trial discovery product serving search, filtering, dashboard, and study-detail workflows across more than 140,000 clinical trial records.",
    description:
      "Professional React and TypeScript work on clinical-trial search, filtering, dashboards, and study workflows at Sterling Systems Solutions.",
    overview: {
      product:
        "Trial Finder helps patients and caregivers search and evaluate clinical trials through structured, accessible product workflows.",
      audience:
        "Built for patients, caregivers, and clinical research teams navigating a dataset of more than 140,000 clinical trial records.",
    },
    problem:
      "Clinical trial information is dense and difficult to navigate. The product needs to expose a large structured dataset through clear search, filtering, dashboard, and study-detail workflows.",
    solution:
      "Contributed React and TypeScript interfaces, reusable components, search and filtering experiences, dashboards, and Supabase/PostgreSQL-backed workflows while improving responsive behavior and SEO.",
    role: [
      "Completed this work professionally as a Frontend / Full-Stack Engineer at Sterling Systems Solutions.",
      "Developed more than 25 React and TypeScript components.",
      "Contributed to more than 10 user workflows across search, filtering, dashboards, and trial information.",
      "Integrated product interfaces with Supabase/PostgreSQL data and worked on responsive behavior and SEO improvements.",
    ],
    architecture: {
      summary:
        "React and TypeScript power the product interface, while Supabase/PostgreSQL supports structured clinical trial data used by search, filtering, dashboards, and detail workflows.",
      stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "SEO"],
    },
    highlights: [
      "25+ React and TypeScript components",
      "10+ product workflows",
      "140K+ clinical trial records",
      "Search and filtering interfaces",
      "Dashboard and trial-detail workflows",
      "Responsive interface and SEO improvements",
    ],
    result:
      "Professional product work that made a large clinical-trial dataset accessible through reusable interfaces and focused user workflows.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "SEO"],
    image: "/projects/trialfinder.png",
    liveUrl: "https://trial-finder.com",
  },

  ismonetize: {
    slug: "ismonetize",
    title: "IsMonetized.com",
    category: "Independent Creator Tool",
    outcome:
      "A full-stack workflow for evaluating public YouTube channel signals and presenting clear monetization analysis.",
    description:
      "YouTube monetization analysis built with Next.js, TypeScript, FastAPI, Supabase, and the YouTube Data API.",
    overview: {
      product:
        "IsMonetized is a creator-facing tool for analyzing public YouTube channel signals and presenting an understandable monetization estimate.",
      audience:
        "Built for creators, channel operators, researchers, and small teams evaluating channel activity and monetization signals.",
    },
    problem:
      "Creators often have to combine channel statistics, platform requirements, and public activity signals manually when evaluating monetization readiness.",
    solution:
      "Built a full-stack analysis flow that accepts channel identifiers, retrieves YouTube Data API information, processes monetization-related signals, and presents the result in a focused product interface.",
    role: [
      "Built the product with Next.js, React, and TypeScript.",
      "Developed FastAPI-backed analysis workflows and Supabase integration.",
      "Integrated the YouTube Data API for channel lookup and public channel signals.",
      "Designed the user flow around fast input, clear status feedback, and readable results.",
    ],
    architecture: {
      summary:
        "Next.js, React, and TypeScript provide the product interface; FastAPI handles analysis workflows; Supabase supports application data; and the YouTube Data API provides public channel information.",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "FastAPI",
        "Supabase",
        "YouTube Data API",
      ],
    },
    highlights: [
      "Flexible channel lookup",
      "YouTube Data API integration",
      "Monetization analysis workflows",
      "Clear result and confidence states",
      "Full-stack React, FastAPI, and Supabase integration",
    ],
    result:
      "A live full-stack product that turns public channel data into a focused, understandable monetization analysis workflow.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "YouTube Data API",
    ],
    image: "/projects/ismonetize.png",
    liveUrl: "https://ismonetized.com",
  },

  sterling: {
    slug: "sterling",
    title: "Sterling Systems Solutions",
    category: "Company Website",
    outcome:
      "A responsive WordPress presence for Sterling Systems Solutions and its product portfolio.",
    description:
      "Company WordPress website supporting Sterling Systems Solutions' public web presence.",
    overview: {
      product:
        "The Sterling Systems Solutions website presents the company's products, principles, and public positioning.",
      audience:
        "Built for prospective clients, partners, and stakeholders evaluating the company and its products.",
    },
    problem:
      "The company needed a clear public website for communicating its products and principles across desktop and mobile devices.",
    solution:
      "Supported the company WordPress site with responsive presentation and organized product and company content.",
    role: [
      "Contributed to the Sterling Systems Solutions WordPress website.",
      "Supported responsive company and product presentation.",
    ],
    architecture: {
      summary:
        "The current company website is implemented with WordPress and responsive web content.",
      stack: ["WordPress", "HTML/CSS", "Responsive Design"],
    },
    highlights: [
      "Company and product presentation",
      "Responsive web experience",
      "WordPress content structure",
    ],
    result:
      "The route is retained for backward compatibility, while Sterling is now represented primarily as professional experience on the homepage.",
    tech: ["WordPress", "HTML/CSS", "Responsive Design"],
    image: "/projects/sterling.png",
    liveUrl: "https://sterling-systems-solutions.com",
  },
} satisfies Record<string, Project>;

export const featuredProjects: Project[] = [
  projects.persianhub1,
  projects.trialfinder,
  projects.ismonetize,
];
