"use client";

import { Typography, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Stack spacing={2} sx={{ textAlign: "center" }}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          sx={{
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: isDark
              ? "rgba(148,163,184,0.7)"
              : theme.palette.text.secondary,
            fontWeight: 500,
          }}
        >
          {title}
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
          {title}
        </Typography>
      </motion.div>

      {/* Subtitle (optional) */}
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              lineHeight: 1.7,
              maxWidth: "480px",
              mx: "auto",
            }}
          >
            {subtitle}
          </Typography>
        </motion.div>
      )}
    </Stack>
  );
}