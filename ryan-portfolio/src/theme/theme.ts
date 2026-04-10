import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          background: {
            default: "#0B0F19",
            paper: "#111827",
          },
          primary: {
            main: "#3B82F6",
          },
          secondary: {
            main: "#6366F1",
          },
          text: {
            primary: "#E5E7EB",
            secondary: "#9CA3AF",
          },
        }
      : {
          background: {
            default: "#F9FAFB",
            paper: "#FFFFFF",
          },
          primary: {
            main: "#2563EB",
          },
          secondary: {
            main: "#4F46E5",
          },
          text: {
            primary: "#111827",
            secondary: "#4B5563",
          },
        }),
  },

  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },

  shape: {
    borderRadius: 16,
  },
});

export const createAppTheme = (mode: "light" | "dark") =>
  createTheme(getDesignTokens(mode));