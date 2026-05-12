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
  image: string;
  liveUrl: string;
  demoUrl: string;
  repoUrl: string;
};

export const projects = {
  trialfinder: {
    slug: "trialfinder",
    title: "TrialFinder.com",
    category: "Clinical Platform",
    outcome:
      "A patient-centered clinical trial discovery product built around fast search, structured eligibility flows, and scalable study data.",
    description:
      "Clinical trial discovery platform for patients, caregivers, and research teams.",
    overview: {
      product:
        "TrialFinder is a clinical trial finder platform that helps people discover relevant studies through a focused web experience instead of dense registry-style search.",
      audience:
        "Built for patients, caregivers, and clinical research teams that need a clearer path from condition-based search to trial evaluation.",
    },
    problem:
      "Clinical trial discovery is often fragmented, technical, and difficult to navigate. Users need to understand eligibility, location, and relevance quickly, while the product needs to handle structured medical data with reliability.",
    solution:
      "Built a full-stack discovery experience with searchable trial data, filtering flows, matching-oriented UX, and product pages designed to make complex study information easier to scan and compare.",
    role: [
      "Designed and implemented the core product experience across landing, search, filtering, and trial detail flows.",
      "Built the full-stack foundation using Next.js for the interface and FastAPI-backed services for data access and application logic.",
      "Modeled trial data in Supabase/PostgreSQL and shaped the UI around eligibility, condition, location, and study metadata.",
      "Focused on responsive UX, clean information hierarchy, and a product feel suitable for a healthcare-adjacent platform.",
    ],
    architecture: {
      summary:
        "Next.js powers the product UI, FastAPI handles backend application logic, and Supabase/PostgreSQL stores structured trial and user-facing product data. The system is organized around search, filtering, and detail-page retrieval so the interface can stay fast and clear as the dataset grows.",
      stack: ["Next.js", "FastAPI", "Supabase", "PostgreSQL", "APIs"],
    },
    highlights: [
      "Condition and keyword-based trial search",
      "Filtering flows for narrowing relevant studies",
      "Structured trial detail pages with readable clinical information",
      "Matching-oriented product flows for patient discovery",
      "Responsive SaaS-style UI with healthcare-grade clarity",
    ],
    result:
      "The project strengthened the product foundation for a scalable clinical discovery experience and clarified how complex medical data can be translated into a simpler patient-facing workflow.",
    tech: ["Next.js", "FastAPI", "Supabase", "PostgreSQL"],
    image: "/projects/trialfinder.png",
    liveUrl: "https://trial-finder.com",
    demoUrl: "https://trial-finder.com",
    repoUrl: "#",
  },

  ismonetize: {
    slug: "ismonetize",
    title: "IsMonetized.com",
    category: "Creator Tool",
    outcome:
      "A focused creator analytics product for checking YouTube monetization eligibility and estimating revenue potential.",
    description:
      "YouTube monetization checker and revenue estimation tool for creators.",
    overview: {
      product:
        "IsMonetize is a creator-facing product that helps users evaluate YouTube monetization signals and understand revenue potential through a direct, decision-oriented interface.",
      audience:
        "Built for YouTube creators, channel operators, and small teams that want a faster way to understand eligibility and monetization readiness.",
    },
    problem:
      "Creators often have to piece together monetization requirements, public channel signals, and revenue assumptions manually. That makes it hard to understand whether a channel is ready, what might be missing, and what the upside could look like.",
    solution:
      "Built a streamlined web tool that turns channel inputs into clear monetization checks, eligibility context, and revenue estimation outputs without forcing users through a complex dashboard.",
    role: [
      "Designed and built the product interface around fast input, clear status feedback, and readable monetization results.",
      "Integrated YouTube API data into the product flow and shaped the UI around creator-friendly eligibility checks.",
      "Created the revenue-estimation experience so users could move from channel lookup to actionable insight quickly.",
      "Focused on SEO-ready page structure, performance, and a conversion-oriented landing experience.",
    ],
    architecture: {
      summary:
        "Next.js provides the product shell, landing pages, and result experience. YouTube API integrations support channel lookup and monetization-related signals, while the UI organizes the response into compact summaries, explanatory states, and revenue-estimation views.",
      stack: ["Next.js", "YouTube API", "SEO", "Analytics UI"],
    },
    highlights: [
      "Creator-friendly channel lookup flow",
      "Monetization eligibility checks",
      "Revenue potential estimation",
      "SEO-oriented content structure",
      "Clear status states for complex platform rules",
    ],
    result:
      "The product turned a research-heavy creator workflow into a simpler tool experience and sharpened the balance between utility, SEO, and product clarity.",
    tech: ["Next.js", "YouTube API", "SEO"],
    image: "/projects/ismonetize.png",
    liveUrl: "https://ismonetized.com",
    demoUrl: "https://ismonetized.com",
    repoUrl: "#",
  },

  sterling: {
    slug: "sterling",
    title: "SterlingSystemsSolutions.com",
    category: "Client Website",
    outcome:
      "A polished business-services web presence built to communicate trust, innovation, and clear service positioning.",
    description:
      "Client-facing business website for a systems and solutions brand.",
    overview: {
      product:
        "Sterling Systems Solutions is a professional web presence for a business-services firm, built to present its solutions, values, and service positioning with credibility.",
      audience:
        "Built for prospective clients, partners, and stakeholders evaluating the company's capabilities and approach.",
    },
    problem:
      "The brand needed a site that felt credible and modern without becoming visually noisy. The experience had to make services easy to understand while communicating a polished, trustworthy technology posture.",
    solution:
      "Built a responsive marketing website with focused service sections, clear navigation, brand-aligned messaging, and a refined visual system for presenting the firm's work and principles.",
    role: [
      "Led the front-end implementation and UI/UX direction for the client-facing website.",
      "Translated business positioning into a cleaner site structure with stronger hierarchy and more polished presentation.",
      "Implemented responsive layouts, visual sections, and service-oriented content blocks.",
      "Focused on professional polish, readability, and conversion-friendly paths to key service information.",
    ],
    architecture: {
      summary:
        "The site uses a React-based front end with reusable visual sections, responsive layouts, and static content architecture optimized for fast loading and simple maintenance.",
      stack: ["React", "Responsive UI", "SEO", "Client Website"],
    },
    highlights: [
      "Professional brand and service presentation",
      "Responsive section layouts",
      "Clear service and principles hierarchy",
      "Conversion-oriented navigation",
      "Lightweight client-site architecture",
    ],
    result:
      "The project created a more credible productized presence for the business and improved the clarity of its service story across desktop and mobile.",
    tech: ["React", "UI/UX", "SEO"],
    image: "/projects/sterling.png",
    liveUrl: "https://sterling-systems-solutions.com",
    demoUrl: "https://sterling-systems-solutions.com",
    repoUrl: "#",
  },
} satisfies Record<string, Project>;
