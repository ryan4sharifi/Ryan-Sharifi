import type { Metadata } from "next";
import { Box } from "@mui/material";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import MoreProjects from "@/components/sections/MoreProjects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { socialLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Ryan Sharifi | Full-Stack & Freelance Web Developer in Houston",
  description:
    "Houston-based full-stack software engineer and freelance web developer building custom websites, web applications, APIs, and technical SEO improvements with React, Next.js, Python, FastAPI, PostgreSQL, and Supabase.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ryan Sharifi | Full-Stack & Freelance Web Developer in Houston",
    description:
      "Software engineering portfolio and freelance web development services for Houston businesses, startups, founders, and product teams.",
    url: "https://ryansharifi.com",
    type: "website",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ryansharifi.com/#person",
        name: "Ryan Sharifi",
        jobTitle: "Full-Stack Software Engineer",
        url: "https://ryansharifi.com",
        email: "hello@ryansharifi.com",
        sameAs: [socialLinks.github, socialLinks.linkedin],
        homeLocation: {
          "@type": "Place",
          name: "Houston, Texas",
        },
        knowsAbout: [
          "Full-stack software engineering",
          "React",
          "Next.js",
          "TypeScript",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "Supabase",
          "WordPress development",
          "Technical SEO",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://ryansharifi.com/#web-development-service",
        name: "Ryan Sharifi Web Development Services",
        url: "https://ryansharifi.com",
        email: "hello@ryansharifi.com",
        founder: {
          "@id": "https://ryansharifi.com/#person",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Houston",
          },
          {
            "@type": "AdministrativeArea",
            name: "Greater Houston",
          },
          {
            "@type": "State",
            name: "Texas",
          },
        ],
        serviceType: [
          "Custom business websites",
          "Full-stack web applications",
          "WordPress development",
          "Backend and API development",
          "Website redesign and modernization",
          "Technical SEO and performance improvements",
        ],
      },
    ],
  };

  return (
    <Box component="main" id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Hero />
      <Projects />
      <Services />
      <Experience />
      <MoreProjects />
      <Skills />
      <About />
      <Contact />
    </Box>
  );
}
