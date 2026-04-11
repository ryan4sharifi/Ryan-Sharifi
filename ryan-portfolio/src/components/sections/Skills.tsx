"use client";

import { Box, Typography, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";

const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "MUI"],
  Backend: ["FastAPI", "Node.js", "Supabase"],
  Tools: ["Git", "Docker", "REST APIs"],
};

export default function Skills() {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 5, md: 8 }, px: { xs: 2, md: 3 } }}>
      <Stack
        spacing={{ xs: 5, md: 7 }}
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Skills
          </Typography>
        </motion.div>

        {/* Skill Groups */}
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Stack spacing={2}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {category}
              </Typography>

              <Stack
                direction="row"
                spacing={1.2}
                sx={{
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {items.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      borderRadius: "999px",
                      px: 1,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "0.75rem",
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}