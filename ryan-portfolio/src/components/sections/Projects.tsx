"use client";

import { Box, Stack } from "@mui/material";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { featuredProjects } from "@/data/projects";

export default function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 10, md: 16 }, px: { xs: 2, md: 3 }, scrollMarginTop: 8 }}>
      <Stack spacing={{ xs: 6, md: 9 }} sx={{ maxWidth: 1200, mx: "auto" }}>
        <SectionHeader eyebrow="01 · Selected work" title="Products with depth" intro="Independent and professional work across media, clinical research, and creator tooling—each shaped by real product constraints and end-to-end engineering decisions." />
        <Stack spacing={{ xs: 3, md: 4 }}>
          {featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </Stack>
      </Stack>
    </Box>
  );
}
