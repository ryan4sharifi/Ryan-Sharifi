import { createTheme, type ThemeOptions } from "@mui/material/styles";

const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          background: { default: "#0A0A0B", paper: "#111113" },
          primary: { main: "#9AA8FF", contrastText: "#0A0A0B" },
          secondary: { main: "#D5DBFF" },
          text: { primary: "#F3F3F1", secondary: "#A0A0A8" },
          divider: "rgba(255,255,255,0.12)",
        }
      : {
          background: { default: "#F5F5F2", paper: "#FFFFFF" },
          primary: { main: "#415CCE", contrastText: "#FFFFFF" },
          secondary: { main: "#263B91" },
          text: { primary: "#18181A", secondary: "#64646B" },
          divider: "rgba(24,24,26,0.14)",
        }),
  },
  typography: {
    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: { fontWeight: 650, letterSpacing: "-0.055em", lineHeight: 0.98 },
    h2: { fontWeight: 620, letterSpacing: "-0.04em", lineHeight: 1.06 },
    h3: { fontWeight: 620, letterSpacing: "-0.025em", lineHeight: 1.2 },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.9rem", lineHeight: 1.65 },
    button: { textTransform: "none", fontWeight: 650, letterSpacing: "-0.01em" },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          minHeight: 42,
          borderRadius: 8,
          paddingInline: 18,
          transition: "background-color 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease",
          "&:focus-visible": { outline: "3px solid currentColor", outlineOffset: 3 },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: { root: { borderRadius: 8, "&:focus-visible": { outline: "3px solid currentColor", outlineOffset: 3 } } },
    },
    MuiLink: {
      styleOverrides: { root: { "&:focus-visible": { outline: "3px solid currentColor", outlineOffset: 3 } } },
    },
    MuiTextField: { defaultProps: { variant: "outlined" } },
  },
});

export const createAppTheme = (mode: "light" | "dark") => createTheme(getDesignTokens(mode));
export const theme = createTheme(getDesignTokens("light"));
