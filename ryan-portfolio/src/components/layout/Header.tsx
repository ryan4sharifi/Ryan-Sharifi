"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
} from "@mui/material";
import Link from "next/link";
import { Sun, Moon, Folder, User, Wrench, Mail, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { label: "Projects", id: "projects", icon: Folder },
  { label: "About", id: "about", icon: User },
  { label: "Skills", id: "skills", icon: Wrench },
  { label: "Contact", id: "contact", icon: Mail },
];

export default function Header({
  toggleTheme,
  mode,
}: {
  toggleTheme: () => void;
  mode: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navItems.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [pathname]);

  const handleScroll = (id: string) => {
    // Always update URL with hash
    router.push(`/#${id}`);

    // If already on homepage, also perform smooth scroll
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
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background:
          mode === "dark"
            ? "linear-gradient(180deg, rgba(11,15,25,0.85), rgba(11,15,25,0.6))"
            : "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.6))",
        backdropFilter: "blur(14px)",
        borderBottom:
          mode === "dark"
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid rgba(0,0,0,0.06)",
        zIndex: (theme) => theme.zIndex.drawer + 10,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: "1100px",
          mx: "auto",
          width: "100%",
          px: { xs: 2, md: 3 },
        }}
      >
        {/* Logo / Name */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: "0.3px",
              background:
                mode === "dark"
                  ? "linear-gradient(90deg, #60A5FA, #A78BFA)"
                  : "linear-gradient(90deg, #2563EB, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              cursor: "pointer",
            }}
          >
            Ryan Sharifi
          </Typography>
        </Link>

        {/* Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "16px",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.id}
              color="inherit"
              onClick={() => handleScroll(item.id)}
              sx={{
                textTransform: "none",
                color:
                  active === item.id
                    ? mode === "dark"
                      ? "#60A5FA"
                      : "#2563EB"
                    : mode === "dark"
                    ? "rgba(255,255,255,0.85)"
                    : "rgba(0,0,0,0.75)",
                position: "relative",
                fontWeight: 500,
                "&:after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -2,
                  width: active === item.id ? "100%" : "0%",
                  height: "2px",
                  background: "#60A5FA",
                  transition: "width 0.3s ease",
                },
                "&:hover": {
                  color: mode === "dark" ? "#60A5FA" : "#2563EB",
                },
                "&:hover:after": {
                  width: "100%",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </Box>
            </Button>
          ))}
          <IconButton
            onClick={toggleTheme}
            sx={{
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.15)",
              p: 1,
              color: mode === "dark" ? "#fff" : "#111",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(59,130,246,0.1)",
                transform: "rotate(10deg) scale(1.05)",
              },
            }}
          >
            {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </IconButton>
        </Box>

        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            display: { xs: "flex", md: "none" },
            color: mode === "dark" ? "#fff" : "#111",
          }}
        >
          <Menu />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => {
                handleScroll(item.id);
                setOpen(false);
              }}
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                color: "text.primary",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <item.icon size={18} />
                <span>{item.label}</span>
              </Box>
            </Button>
          ))}

          <IconButton
            onClick={toggleTheme}
            sx={{
              mt: 2,
              alignSelf: "flex-start",
            }}
          >
            {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
        </Box>
      </Drawer>
    </AppBar>
  );
}