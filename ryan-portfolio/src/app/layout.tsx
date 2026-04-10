"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { createAppTheme } from "@/theme/theme";
import { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header toggleTheme={toggleTheme} mode={mode} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}