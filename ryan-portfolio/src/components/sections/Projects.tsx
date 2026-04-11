"use client";

import { Box, Typography, Stack } from "@mui/material";
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
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 5, md: 10 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Stack spacing={{ xs: 6, md: 10 }} sx={{ maxWidth: "1100px", mx: "auto" }}>
        {/* Section Title */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              color: "text.secondary",
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            A selection of my recent work, from full-stack platforms to smaller tools.
          </Typography>
        </Box>

        {/* Featured Projects */}
        <Stack spacing={2.5}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Featured Work
          </Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ flexWrap: "wrap", alignItems: "stretch", gap: { xs: "16px", md: "24px" } }}
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
                  minHeight: "260px",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <ProjectCard {...project} />
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>

        {/* Other Projects */}
        <Stack spacing={2.5}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Other Projects
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: "16px", md: "24px" },
            }}
          >
            {otherProjects.map((project, index) => (
              <Box key={index} sx={{ minHeight: "220px", display: "flex" }}>
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