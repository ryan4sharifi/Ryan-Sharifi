"use client";

import { Box, Stack, Typography } from "@mui/material";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillGroups } from "@/data/portfolio";

const primarySkills = new Set(["TypeScript", "JavaScript", "Python", "SQL", "React", "Next.js", "FastAPI", "PostgreSQL", "Supabase"]);

export default function Skills() {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 10, md: 15 }, px: { xs: 2, md: 3 }, backgroundColor: "background.paper" }}>
      <Stack spacing={{ xs: 6, md: 8 }} sx={{ maxWidth: 1200, mx: "auto" }}>
        <SectionHeader eyebrow="05 · Skills" title="Tools with purpose" intro="My primary stack centers on modern full-stack web development, supported by experience in .NET, relational databases, mobile platforms, WordPress, automation, and deployment." />

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.72fr 1.28fr" }, gap: { xs: 5, md: 10 } }}>
          <Box>
            <Typography sx={{ color: "text.secondary", fontSize: "0.7rem", fontWeight: 750, letterSpacing: "0.12em", textTransform: "uppercase", mb: 2 }}>Primary focus</Typography>
            <Typography sx={{ color: "text.primary", fontSize: { xs: "1.45rem", md: "1.75rem" }, lineHeight: 1.42, letterSpacing: "-0.025em" }}>
              React + TypeScript interfaces, Python + FastAPI services, and PostgreSQL-backed product systems.
            </Typography>
          </Box>

          <Box sx={{ borderTop: 1, borderColor: "divider" }}>
            {skillGroups.map((group) => (
              <Box key={group.label} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "170px 1fr" }, gap: { xs: 1, sm: 3 }, py: 2.5, borderBottom: 1, borderColor: "divider" }}>
                <Typography sx={{ color: "text.primary", fontSize: "0.8rem", fontWeight: 700 }}>{group.label}</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: 1.6, rowGap: 0.7 }}>
                  {group.skills.map((skill) => (
                    <Typography component="span" key={skill} sx={{ color: primarySkills.has(skill) ? "primary.main" : "text.secondary", fontSize: primarySkills.has(skill) ? "0.88rem" : "0.8rem", fontWeight: primarySkills.has(skill) ? 700 : 450 }}>
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
