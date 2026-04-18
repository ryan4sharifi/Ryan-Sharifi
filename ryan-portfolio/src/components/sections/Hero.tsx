"use client";

import { Box, Typography, Button, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import FloatingTechIcons from "@/components/effects/FloatingTechIcons";
import { useRouter, usePathname } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const handleNavigate = (id: string) => {
    router.push(`/#${id}`);

    if (pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "calc(100vh - 80px)",
        pt: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        background: isDark
          ? "linear-gradient(180deg, #0B0F19 0%, #0F172A 100%)"
          : "linear-gradient(180deg, #F7F9FC 0%, #EEF2F7 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <FloatingTechIcons />
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background: isDark
            ? "radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)",
          filter: "blur(160px)",
          zIndex: 0,
        }}
      />
      <Stack
        spacing={3}
        sx={{
          maxWidth: "900px",
          mx: "auto",
          position: "relative",
          zIndex: 1,
          px: { xs: 2, md: 0 },
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h1"
            sx={{
              color: isDark ? "#E2E8F0" : theme.palette.text.primary,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.3px",
              fontSize: {
                xs: "2rem",
                sm: "2.6rem",
                md: "3.2rem",
              },
            }}
          >
            I build high-performance
            <br />
            web applications
          </Typography>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: isDark
                ? "rgba(226,232,240,0.7)"
                : theme.palette.text.secondary,
              fontSize: {
                xs: "0.95rem",
                sm: "1.1rem",
              },
              lineHeight: 1.7,
              maxWidth: "520px",
              mx: "auto",
            }}
          >
            Full-stack developer specializing in modern, scalable, and elegant
            web experiences using Next.js, FastAPI, and Supabase.
          </Typography>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => handleNavigate("projects")}
              sx={{
                px: 4,
                py: 1.3,
                borderRadius: "999px",
                backgroundColor: theme.palette.primary.main,
                boxShadow: "0px 6px 20px rgba(59,130,246,0.25)",
                fontWeight: 500,
                textTransform: "none",
                transition: "all 0.2s ease",
                ":hover": {
                  backgroundColor: theme.palette.primary.dark || "#2563EB",
                  transform: "translateY(-1px)",
                  boxShadow: "0px 10px 30px rgba(59,130,246,0.35)",
                },
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => handleNavigate("contact")}
              sx={{
                px: 4,
                py: 1.3,
                borderRadius: "999px",
                borderColor: theme.palette.divider,
                color: isDark ? "#CBD5F5" : theme.palette.text.primary,
                fontWeight: 500,
                textTransform: "none",
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.02)"
                  : theme.palette.background.paper,
                backdropFilter: "blur(4px)",
                transition: "all 0.2s ease",
                ":hover": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.04)",
                  borderColor: isDark
                    ? "rgba(148,163,184,0.5)"
                    : "rgba(15,23,42,0.2)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              Contact Me
            </Button>
          </Stack>
        </motion.div>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "120px",
          background: isDark
            ? "linear-gradient(to bottom, transparent, rgba(11,15,25,0.9))"
            : "linear-gradient(to bottom, transparent, #F7F9FC)",
          zIndex: 0,
        }}
      />
    </Box>
  );
}