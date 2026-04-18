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
          divider: "rgba(255,255,255,0.08)",
        }
      : {
          background: {
            default: "#F7F9FC",
            paper: "#FFFFFF",
          },
          primary: {
            main: "#3B82F6",
          },
          secondary: {
            main: "#6366F1",
          },
          text: {
            primary: "#0F172A",
            secondary: "#475569",
          },
          divider: "rgba(15,23,42,0.08)",
        }),
  },

  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",

    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      letterSpacing: "-0.03em",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.35,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.7,
    },

    button: {
      textTransform: "none",
      fontWeight: 500,
      letterSpacing: "0.02em",
    },
  },

  shape: {
    borderRadius: 16,
  },
});

export const createAppTheme = (mode: "light" | "dark") =>
  createTheme(getDesignTokens(mode));

export const theme = createTheme(getDesignTokens("light"));