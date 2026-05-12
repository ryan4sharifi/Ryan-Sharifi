"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { createAppTheme } from "@/theme/theme";
import { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header toggleTheme={toggleTheme} mode={mode} />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}