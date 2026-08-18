"use client";

import { Box, Stack, Typography } from "@mui/material";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 10, md: 15 }, px: { xs: 2, md: 3 }, backgroundColor: "background.paper" }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ maxWidth: 1200, mx: "auto" }}>
        <SectionHeader eyebrow="02 · Experience" title="Professional work" intro="Product engineering experience across clinical research software, independent product development, and production systems." />

        <Box sx={{ borderTop: 1, borderColor: "divider" }}>
          {experiences.map((experience, index) => (
            <Box component="article" key={experience.company} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "180px minmax(0, 1fr) 220px" }, gap: { xs: 2, md: 5 }, py: { xs: 4, md: 5 }, borderBottom: 1, borderColor: "divider" }}>
              <Box>
                <Typography sx={{ color: "primary.main", fontSize: "0.72rem", fontWeight: 700, mb: 0.7 }}>0{index + 1}</Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "0.78rem" }}>{experience.period}</Typography>
              </Box>

              <Box>
                <Typography component="h3" variant="h3" sx={{ color: "text.primary", fontSize: { xs: "1.45rem", md: "1.8rem" }, mb: 0.7 }}>{experience.role}</Typography>
                <Typography sx={{ color: "primary.main", fontWeight: 650, fontSize: "0.9rem", mb: 1.8 }}>{experience.company}</Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.72, maxWidth: 660, mb: 2.5 }}>{experience.summary}</Typography>
                <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1.1 }}>
                  {experience.highlights.map((highlight) => (
                    <Typography component="li" key={highlight} variant="body2" sx={{ color: "text.secondary", display: "flex", gap: 1, pr: 2 }}>
                      <Box component="span" sx={{ color: "primary.main" }}>↳</Box>{highlight}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Stack spacing={1.25} sx={{ pt: { md: 0.5 } }}>
                {experience.metrics?.map((metric) => (
                  <Box key={metric} sx={{ py: 1.2, borderTop: 1, borderColor: "divider" }}>
                    <Typography sx={{ color: "text.primary", fontSize: "0.78rem", fontWeight: 650 }}>{metric}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
