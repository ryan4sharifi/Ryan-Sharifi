"use client";

import { Box, Typography, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        px: 2,
      }}
    >
      <Stack
        spacing={4}
        sx={{
          maxWidth: "720px",
          mx: "auto",
          textAlign: "center",
          px: { xs: 1, md: 0 },
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
                : "rgba(71,85,105,0.7)",
              fontWeight: 500,
            }}
          >
            About
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
            About Me
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              color: isDark
                ? "rgba(226,232,240,0.7)"
                : theme.palette.text.secondary,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.75,
            }}
          >
            I’m a full-stack developer focused on building modern, scalable,
            and high-performance web applications. I enjoy creating products
            that are not only functional but also visually refined and
            intuitive to use.
          </Typography>
        </motion.div>

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

        {/* Second paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              color: isDark
                ? "rgba(226,232,240,0.7)"
                : theme.palette.text.secondary,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.75,
            }}
          >
            My experience includes working on real-world platforms like
            TrialFinder and building full-stack applications using Next.js,
            FastAPI, and Supabase. I’m passionate about clean architecture,
            performance, and creating products that stand out.
          </Typography>
        </motion.div>
      </Stack>
    </Box>
  );
}