"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import FloatingTechIcons from "@/components/effects/FloatingTechIcons";
import { useRouter, usePathname } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const pathname = usePathname();

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
        mt: "-80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        background: "radial-gradient(circle at 50% 20%, #1e293b, #0B0F19)",
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
          background:
            "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
      <Stack
        spacing={4}
        sx={{
          maxWidth: "900px",
          mx: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              background: "linear-gradient(90deg, #60A5FA, #A78BFA, #38BDF8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              fontSize: {
                xs: "2.2rem",
                sm: "3rem",
                md: "4rem",
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
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: {
                xs: "0.95rem",
                sm: "1.1rem",
              },
              lineHeight: 1.7,
              maxWidth: "600px",
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
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => handleNavigate("projects")}
              sx={{
                px: 5,
                py: 1.6,
                borderRadius: "999px",
                background: "linear-gradient(90deg, #3B82F6, #6366F1)",
                boxShadow: "0px 10px 40px rgba(59,130,246,0.5)",
                fontWeight: 600,
                letterSpacing: "0.3px",
                transition: "all 0.3s ease",
                ":hover": {
                  transform: "translateY(-3px) scale(1.02)",
                  boxShadow: "0px 18px 60px rgba(59,130,246,0.7)",
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
                px: 5,
                py: 1.6,
                borderRadius: "999px",
                borderColor: "rgba(96,165,250,0.6)",
                color: "#60A5FA",
                fontWeight: 500,
                backdropFilter: "blur(6px)",
                transition: "all 0.3s ease",
                ":hover": {
                  backgroundColor: "rgba(59,130,246,0.1)",
                  borderColor: "#60A5FA",
                  transform: "translateY(-2px)",
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
          background:
            "linear-gradient(to bottom, transparent, #0B0F19)",
          zIndex: 0,
        }}
      />
    </Box>
  );
}