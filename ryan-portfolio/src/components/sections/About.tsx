"use client";

import { Box, Stack, Typography } from "@mui/material";
import SectionHeader from "@/components/ui/SectionHeader";

const facts = [
  ["Education", "University of Houston · Computer Science"],
  ["Primary work", "Full-stack product engineering"],
  ["Range", "Web · APIs · Data · Mobile · Automation"],
];

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 10, md: 15 }, px: { xs: 2, md: 3 } }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ maxWidth: 1200, mx: "auto" }}>
        <SectionHeader eyebrow="05 · About" title="End-to-end thinking" />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.75fr 1.25fr" }, gap: { xs: 4, md: 10 } }}>
          <Box sx={{ borderTop: 1, borderColor: "divider" }}>
            {facts.map(([label, value]) => (
              <Box key={label} sx={{ py: 2.1, borderBottom: 1, borderColor: "divider" }}>
                <Typography sx={{ color: "primary.main", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", mb: 0.7 }}>{label}</Typography>
                <Typography sx={{ color: "text.primary", fontSize: "0.86rem" }}>{value}</Typography>
              </Box>
            ))}
          </Box>
          <Typography sx={{ color: "text.primary", fontSize: { xs: "1.3rem", md: "1.75rem" }, lineHeight: 1.55, letterSpacing: "-0.02em" }}>
            I’m a University of Houston Computer Science graduate and full-stack engineer strongest in React and TypeScript on the frontend and Python, FastAPI, and PostgreSQL on the backend. I enjoy owning products end to end and have worked across web interfaces, APIs, relational databases, native mobile development, streaming systems, and automation.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
