"use client";

import { AppBar, Box, Button, Drawer, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "more-projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Header({ toggleTheme, mode }: { toggleTheme: () => void; mode: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-42% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const navLinkSx = { position: "relative", color: "text.secondary", fontSize: "0.84rem", minWidth: 0, minHeight: 36, px: 1.1, "&:hover": { color: "text.primary", backgroundColor: "transparent" } } as const;

  return (
    <AppBar component="header" position="fixed" elevation={0} color="transparent" sx={{ borderBottom: 1, borderColor: "divider", backgroundColor: (theme) => alpha(theme.palette.background.default, 0.88), backdropFilter: "blur(16px)" }}>
      <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", px: { xs: 2, md: 3 }, minHeight: "68px !important" }}>
        <Link href="/" style={{ textDecoration: "none" }} aria-label="Ryan Sharifi home">
          <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
            <Box aria-hidden sx={{ width: 29, height: 29, display: "grid", placeItems: "center", border: 1, borderColor: "divider", backgroundColor: "background.paper", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "-0.04em" }}>RS</Box>
            <Typography sx={{ color: "text.primary", fontWeight: 700, fontSize: "0.92rem", letterSpacing: "-0.02em" }}>Ryan Sharifi</Typography>
          </Stack>
        </Link>

        <Box component="nav" aria-label="Primary navigation" sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", ml: "auto", mr: 1.5 }}>
          {navItems.map((item) => (
            <Button component={Link} href={`/#${item.id}`} key={item.id} aria-current={active === item.id ? "location" : undefined} sx={{ ...navLinkSx, color: active === item.id ? "text.primary" : "text.secondary", "&::after": { content: '""', position: "absolute", left: 9, right: 9, bottom: 1, height: "1px", backgroundColor: active === item.id ? "primary.main" : "transparent" } }}>
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"} onClick={toggleTheme} sx={{ ml: { xs: "auto", lg: 0 }, border: 1, borderColor: "divider", color: "text.primary", width: 38, height: 38 }}>
          {mode === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </IconButton>
        <IconButton aria-label="Open navigation menu" aria-expanded={open} onClick={() => setOpen(true)} sx={{ display: { xs: "inline-flex", lg: "none" }, ml: 1, color: "text.primary", width: 38, height: 38 }}>
          <Menu size={20} />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { sx: { width: "min(340px, 100%)", backgroundColor: "background.default", borderLeft: 1, borderColor: "divider" } } }}>
        <Box sx={{ p: 2.5, minHeight: "100%", display: "flex", flexDirection: "column" }}>
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", pb: 4 }}>
            <Typography sx={{ fontWeight: 700 }}>Navigation</Typography>
            <IconButton aria-label="Close navigation menu" onClick={() => setOpen(false)} sx={{ color: "text.primary" }}><X size={20} /></IconButton>
          </Stack>
          <Box component="nav" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <Button component={Link} href={`/#${item.id}`} key={item.id} onClick={() => setOpen(false)} fullWidth sx={{ justifyContent: "space-between", px: 0, py: 1.8, borderRadius: 0, borderTop: index === 0 ? 1 : 0, borderBottom: 1, borderColor: "divider", color: "text.primary", fontSize: "1.15rem", "&:hover": { backgroundColor: "transparent", color: "primary.main" } }}>
                {item.label}<Typography component="span" sx={{ color: "text.secondary", fontSize: "0.72rem" }}>0{index + 1}</Typography>
              </Button>
            ))}
          </Box>
          <Typography variant="body2" sx={{ mt: "auto", pt: 4, color: "text.secondary" }}>Full-stack software engineer</Typography>
        </Box>
      </Drawer>
    </AppBar>
  );
}
