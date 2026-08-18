"use client";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useMemo, useState } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { createAppTheme } from "@/theme/theme";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => {
      const nextMode = prev === "dark" ? "light" : "dark";
      document.documentElement.style.colorScheme = nextMode;
      return nextMode;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "fixed",
          top: 8,
          left: 8,
          zIndex: 2000,
          px: 2,
          py: 1,
          backgroundColor: "background.paper",
          color: "text.primary",
          border: 1,
          borderColor: "primary.main",
          transform: "translateY(-160%)",
          "&:focus": { transform: "translateY(0)" },
        }}
      >
        Skip to content
      </Box>
      <Header toggleTheme={toggleTheme} mode={mode} />
      {children}
      <Analytics />
      <SpeedInsights />
      <Footer />
    </ThemeProvider>
  );
}
