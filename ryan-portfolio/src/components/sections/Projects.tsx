"use client";

import { Box, Typography, Stack, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const selectedProjects = [
  projects.trialfinder,
  projects.ismonetize,
  projects.sterling,
];

export default function Projects() {
  const theme = useTheme();
  const sectionSurface = alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.24 : 0.64);

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 10, md: 16 },
        px: { xs: 2, md: 3 },
        backgroundColor: "background.default",
      }}
    >
      <Stack spacing={{ xs: 5, md: 7 }} sx={{ maxWidth: "1120px", mx: "auto" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
            gap: { xs: 2, md: 6 },
            alignItems: "end",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "primary.main",
                fontWeight: 700,
                mb: 1,
              }}
            >
              Work
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 650,
                letterSpacing: 0,
                fontSize: { xs: "1.9rem", md: "2.45rem" },
                color: "text.primary",
              }}
            >
              Selected Work
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: { md: "540px" },
              fontSize: { xs: "0.98rem", md: "1.05rem" },
              lineHeight: 1.75,
              justifySelf: { md: "end" },
            }}
          >
            Product-focused builds across clinical discovery, creator analytics,
            and client-facing SaaS-style web experiences.
          </Typography>
        </Box>

        <Box
          sx={{
            p: { xs: 1, md: 1.25 },
            borderRadius: 4,
            backgroundColor: sectionSurface,
            border: 1,
            borderColor: "divider",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 1.5, md: 2 },
            }}
          >
            {selectedProjects.map((project) => (
              <Box key={project.slug} sx={{ display: "flex" }}>
                <Box sx={{ flex: 1 }}>
                  <ProjectCard {...project} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
