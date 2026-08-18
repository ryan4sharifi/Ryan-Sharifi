"use client";

import { Box, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { Blocks, Gauge, Globe2, LayoutTemplate, ServerCog, Wrench } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    title: "Custom Business Websites",
    description:
      "Modern, responsive websites for local businesses, professionals, organizations, and individual clients who need a clear web presence.",
    details: ["Next.js", "React", "WordPress", "Responsive design", "SEO", "Deployment"],
    icon: Globe2,
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Custom applications with frontend interfaces, backend APIs, databases, authentication, dashboards, and practical business logic.",
    details: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Supabase"],
    icon: Blocks,
  },
  {
    title: "Website Redesign & Modernization",
    description:
      "Improve older websites with stronger layout, mobile responsiveness, usability, performance, and maintainable page structure.",
    details: ["Responsive layouts", "Usability", "Performance", "Mobile experience"],
    icon: LayoutTemplate,
  },
  {
    title: "WordPress Development",
    description:
      "Custom WordPress websites and content updates for small businesses, informed by work on Sterling Systems Solutions and the in-progress Sweet Rose Pastry site.",
    details: ["WordPress", "HTML/CSS", "Small business websites", "Content structure"],
    icon: Wrench,
  },
  {
    title: "Backend & API Development",
    description:
      "REST APIs, FastAPI services, database integrations, authentication, third-party APIs, and PostgreSQL/Supabase-backed workflows.",
    details: ["REST APIs", "FastAPI", "Authentication", "PostgreSQL", "Supabase"],
    icon: ServerCog,
  },
  {
    title: "Website Performance & SEO",
    description:
      "Technical improvements for metadata, sitemap configuration, structured pages, responsive performance, and search-focused site structure.",
    details: ["Metadata", "Sitemaps", "Structured pages", "Technical SEO", "Performance"],
    icon: Gauge,
  },
];

const projectTypes = [
  "business websites",
  "landing pages",
  "portfolio websites",
  "custom dashboards",
  "internal tools",
  "API integrations",
  "WordPress sites",
  "full-stack applications",
  "existing website improvements",
];

export default function Services() {
  const theme = useTheme();

  return (
    <Box component="section" id="services" sx={{ py: { xs: 10, md: 15 }, px: { xs: 2, md: 3 }, borderTop: 1, borderColor: "divider", backgroundColor: "background.paper" }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ maxWidth: 1200, mx: "auto" }}>
        <SectionHeader
          eyebrow="02 · Services"
          title="Web Development Services"
          intro="I work with local businesses, startups, founders, individuals, and existing development teams that need custom websites, web applications, APIs, or careful improvements to an existing site."
        />

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" }, borderTop: 1, borderLeft: 1, borderColor: "divider" }}>
          {services.map(({ title, description, details, icon: Icon }) => (
            <Box key={title} component="article" sx={{ minHeight: 300, p: { xs: 2.4, md: 3 }, borderRight: 1, borderBottom: 1, borderColor: "divider", backgroundColor: "background.default", display: "flex", flexDirection: "column", gap: 2.2 }}>
              <Box sx={{ width: 38, height: 38, display: "grid", placeItems: "center", border: 1, borderColor: "divider", backgroundColor: alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.1 : 0.06), color: "primary.main" }}>
                <Icon size={18} />
              </Box>
              <Box>
                <Typography component="h3" variant="h3" sx={{ color: "text.primary", fontSize: "1.25rem", mb: 1.2 }}>
                  {title}
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "0.9rem", lineHeight: 1.72 }}>
                  {description}
                </Typography>
              </Box>
              <Typography sx={{ color: "text.secondary", fontSize: "0.7rem", lineHeight: 1.65, mt: "auto" }}>
                {details.join(" · ")}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.78fr 1.22fr" }, gap: { xs: 3, md: 7 }, alignItems: "start", pt: { xs: 1, md: 2 } }}>
          <Typography component="h3" variant="h3" sx={{ color: "text.primary", fontSize: { xs: "1.55rem", md: "2rem" } }}>
            Freelance support without losing engineering depth.
          </Typography>
          <Stack spacing={2.5}>
            <Typography sx={{ color: "text.secondary", fontSize: "1rem", lineHeight: 1.8, maxWidth: 760 }}>
              I can help with focused freelance web development in Houston, Greater Houston, Texas, and remote teams when the work needs both product judgment and hands-on engineering.
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 1 }}>
              {projectTypes.map((type) => (
                <Typography key={type} component="li" sx={{ px: 1.25, py: 0.75, border: 1, borderColor: "divider", color: "text.secondary", fontSize: "0.76rem", backgroundColor: "background.default" }}>
                  {type}
                </Typography>
              ))}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
