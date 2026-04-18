"use client";

import { Box, Typography, Stack, Chip, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "MUI"],
  Backend: ["FastAPI", "Node.js", "Supabase"],
  Tools: ["Git", "Docker", "REST APIs"],
};

export default function Skills() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box component="section" id="skills" sx={{ py: { xs: 10, md: 14 }, px: { xs: 2, md: 3 } }}>
      <Stack
        spacing={{ xs: 5, md: 6 }}
        sx={{
          maxWidth: "720px",
          mx: "auto",
          textAlign: "center",
          px: { xs: 1, md: 0 },
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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
            Expertise
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              letterSpacing: "-0.3px",
              mt: 1,
              mb: 1,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              color: isDark ? "#E2E8F0" : theme.palette.text.primary,
            }}
          >
            Skills
          </Typography>
        </motion.div>

        {/* Skill Groups */}
        {Object.entries(skills).map(([category, items], index) => (
          <Box key={category}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  borderRadius: "14px",
                  p: 2,
                  background: isDark
                    ? "rgba(255,255,255,0.01)"
                    : theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Stack spacing={1.5}>
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
                    {category}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
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
                          px: 1.2,
                          py: 0.3,
                          background: isDark ? "rgba(255,255,255,0.02)" : "#FFFFFF",
                          border: `1px solid ${theme.palette.divider}`,
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: isDark ? "rgba(226,232,240,0.8)" : theme.palette.text.primary,
                          transition: "all 0.2s ease",
                          "&:hover": {
                            background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                            transform: "translateY(-1px)",
                            borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.2)",
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </motion.div>
            {index !== Object.entries(skills).length - 1 && (
              <Box
                sx={{
                  width: "40px",
                  height: "1px",
                  mx: "auto",
                  background: isDark
                    ? "rgba(148,163,184,0.2)"
                    : theme.palette.divider,
                  borderRadius: "999px",
                  mt: 2,
                }}
              />
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}