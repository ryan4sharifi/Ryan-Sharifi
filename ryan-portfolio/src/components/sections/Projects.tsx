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
        py: 10,
        px: 2,
      }}
    >
      <Stack spacing={12} sx={{ maxWidth: "1000px", mx: "auto" }}>
        {/* Section Title */}
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Projects
        </Typography>

        {/* Featured Projects */}
        <Stack spacing={3}>
          <Typography variant="h5">Featured Work</Typography>
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ flexWrap: "wrap", alignItems: "stretch", gap: "24px" }}
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
                  minHeight: "280px",
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
        <Stack spacing={3}>
          <Typography variant="h5">Other Projects</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: "24px",
            }}
          >
            {otherProjects.map((project, index) => (
              <Box key={index} sx={{ minHeight: "240px", display: "flex" }}>
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