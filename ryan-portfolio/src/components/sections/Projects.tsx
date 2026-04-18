"use client";

import { Box, Typography, Stack, useTheme } from "@mui/material";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const featuredProjects = [
  projects.trialfinder,
  projects.persianhub,
];

const otherProjects = [
  projects.ismonetize,
  projects.sterling,
  projects.telegramBots,
  projects.volunteerApp,
  projects.clinicApp,
  projects.cyberBot,
];

export default function Projects() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ maxWidth: "1000px", mx: "auto" }}>
        {/* Section Title */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: isDark
                ? "rgba(148,163,184,0.7)"
                : theme.palette.text.secondary,
              fontWeight: 500,
            }}
          >
            Work
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              letterSpacing: "-0.3px",
              mt: 1,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              color: isDark ? "#E2E8F0" : theme.palette.text.primary,
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              color: isDark
                ? "rgba(226,232,240,0.7)"
                : theme.palette.text.secondary,
              maxWidth: "480px",
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.7,
            }}
          >
            A selection of my recent work, from full-stack platforms to smaller tools.
          </Typography>
        </Box>

        {/* Featured Projects */}
        <Stack spacing={2}>
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: isDark
                ? "rgba(148,163,184,0.7)"
                : theme.palette.text.secondary,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontWeight: 500,
            }}
          >
            Featured
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ flexWrap: "wrap", alignItems: "stretch", gap: { xs: "12px", md: "20px" } }}
          >
            {featuredProjects.map((project, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flex: {
                    xs: "1 1 100%",
                    md: "1 1 calc(50% - 24px)",
                  },
                  minHeight: "240px",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <ProjectCard {...project} />
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>

        <Box
          sx={{
            width: "40px",
            height: "1px",
            mx: "auto",
            background: isDark
              ? "rgba(148,163,184,0.2)"
              : theme.palette.divider,
            borderRadius: "999px",
          }}
        />

        {/* Other Projects */}
        <Stack spacing={2}>
          <Typography
            sx={{
              fontSize: "0.9rem",
              color: isDark
                ? "rgba(148,163,184,0.7)"
                : theme.palette.text.secondary,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontWeight: 500,
            }}
          >
            More Work
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: "12px", md: "20px" },
            }}
          >
            {otherProjects.map((project, index) => (
              <Box key={index} sx={{ minHeight: "200px", display: "flex" }}>
                <Box sx={{ flex: 1 }}>
                  <ProjectCard {...project} />
                </Box>
              </Box>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}