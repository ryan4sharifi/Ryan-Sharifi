"use client";

import { Box, Stack, Typography } from "@mui/material";
import SectionHeader from "@/components/ui/SectionHeader";
import { secondaryProjects } from "@/data/portfolio";

export default function MoreProjects() {
  return (
    <Box component="section" id="more-projects" sx={{ py: { xs: 10, md: 15 }, px: { xs: 2, md: 3 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ maxWidth: 1200, mx: "auto" }}>
        <SectionHeader eyebrow="04 · More projects" title="Across the stack" intro="A compact view of additional web, database, native iOS, automation, WordPress, and content-platform work." />

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" }, borderTop: 1, borderLeft: 1, borderColor: "divider" }}>
          {secondaryProjects.map((project, index) => (
            <Box component="article" key={project.title} sx={{ minHeight: { sm: 310 }, p: { xs: 2.5, md: 3 }, borderRight: 1, borderBottom: 1, borderColor: "divider", backgroundColor: "background.paper", display: "flex", flexDirection: "column", transition: "background-color 160ms ease", "&:hover": { backgroundColor: "action.hover" } }}>
              <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", gap: 2, mb: 3 }}>
                <Typography sx={{ color: "text.secondary", fontSize: "0.7rem" }}>{String(index + 1).padStart(2, "0")}</Typography>
                {project.status && <Typography sx={{ color: "primary.main", fontSize: "0.66rem", fontWeight: 750, letterSpacing: "0.1em", textTransform: "uppercase" }}>{project.status}</Typography>}
              </Stack>
              <Typography component="h3" variant="h3" sx={{ color: "text.primary", fontSize: "1.32rem", mb: 1.4 }}>{project.title}</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.2 }}>{project.description}</Typography>
              <Box component="ul" sx={{ m: 0, mb: 3, pl: 2, color: "text.secondary" }}>
                {project.details.map((detail) => <Typography component="li" key={detail} sx={{ color: "text.secondary", fontSize: "0.77rem", mb: 0.5 }}>{detail}</Typography>)}
              </Box>
              <Typography sx={{ color: "text.secondary", fontSize: "0.68rem", lineHeight: 1.6, mt: "auto" }}>{project.tech.join(" · ")}</Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
