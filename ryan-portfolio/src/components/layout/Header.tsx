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
import { Sun, Moon, Folder, User, Wrench, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

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

  useEffect(() => {
    setOpen(false);
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
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",
        maxWidth: "1100px",
        borderRadius: "999px",
        background:
          mode === "dark"
            ? "rgba(11,15,25,0.7)"
            : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(20px)",
        border:
          mode === "dark"
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(0,0,0,0.08)",
        boxShadow:
          mode === "dark"
            ? "0 10px 40px rgba(0,0,0,0.5)"
            : "0 10px 30px rgba(0,0,0,0.08)",
        zIndex: (theme) => theme.zIndex.drawer + 10,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: "1100px",
          mx: "auto",
          width: "100%",
          px: { xs: 2, md: 4 },
          minHeight: "64px",
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
          onClick={() => setOpen((prev) => !prev)}
          sx={{
            display: { xs: "flex", md: "none" },
            color: mode === "dark" ? "#fff" : "#111",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            p: 1,
            transition: "all 0.25s ease",
            "&:hover": {
              background: "rgba(59,130,246,0.1)",
            },
          }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        hideBackdrop={false}
        sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
        transitionDuration={{ enter: 250, exit: 200 }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(4px)",
            },
          },
          paper: {
            sx: {
              width: "100%",
              height: "100%",
              borderRadius: 0,
              background:
                mode === "dark"
                  ? "rgba(11,15,25,0.96)"
                  : "rgba(255,255,255,0.98)",
              backdropFilter: "blur(20px)",
            },
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Box
            sx={{
              p: 2,
              pt: 8,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 24,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <IconButton
                onClick={() => setOpen(false)}
                sx={{
                  color: mode === "dark" ? "#fff" : "#111",
                }}
              >
                <X size={20} />
              </IconButton>
            </Box>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => handleScroll(item.id), 100);
                }}
                sx={{
                  justifyContent: "center",
                  textTransform: "none",
                  borderRadius: "12px",
                  px: 2,
                  py: 1.2,
                  color: mode === "dark" ? "#fff" : "#111",
                  background: "transparent",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  textAlign: "center",
                  width: "100%",
                  "&:hover": {
                    background: "rgba(59,130,246,0.12)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </Box>
              </Button>
            ))}

            <IconButton
              onClick={toggleTheme}
              sx={{
                mt: "auto",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.15)",
                p: 1,
                alignSelf: "center",
              }}
            >
              {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>
          </Box>
        </motion.div>
      </Drawer>
    </AppBar>
  );
}