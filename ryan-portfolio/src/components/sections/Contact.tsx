"use client";

import { Box, Typography, Stack, TextField, Button, CircularProgress, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 10, md: 14 }, px: { xs: 2, md: 3 } }}>
      <Stack
        spacing={5}
        sx={{ maxWidth: "640px", mx: "auto", textAlign: "center" }}
      >
        <SectionTitle
          title="Contact"
          subtitle="Have a project or opportunity? Let’s connect."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              borderRadius: "16px",
              p: { xs: 2.5, md: 3.5 },
              background: isDark ? "rgba(255,255,255,0.02)" : theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              backdropFilter: "blur(10px)",
            }}
          >
            <Box
              component="form"
              onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setLoading(true);

                const form = e.currentTarget;
                const formData = new FormData(form);

                try {
                  const res = await fetch("https://formspree.io/f/xovdpppr", {
                    method: "POST",
                    body: formData,
                    headers: {
                      Accept: "application/json",
                    },
                  });

                  if (res.ok) {
                    setSuccess(true);
                    form.reset();
                  }
                } catch (err) {
                  console.error(err);
                } finally {
                  setLoading(false);
                }
              }}
              sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
            >
              <TextField
                label="Name"
                name="name"
                required
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    background: isDark ? "rgba(255,255,255,0.015)" : "#FFFFFF",
                    transition: "all 0.2s ease",
                    "& fieldset": {
                      borderColor: theme.palette.divider,
                    },
                    "&:hover fieldset": {
                      borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(15,23,42,0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3B82F6",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: isDark ? "rgba(226,232,240,0.6)" : theme.palette.text.secondary,
                    fontSize: "0.9rem",
                  },
                }}
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                required
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    background: isDark ? "rgba(255,255,255,0.015)" : "#FFFFFF",
                    transition: "all 0.2s ease",
                    "& fieldset": {
                      borderColor: theme.palette.divider,
                    },
                    "&:hover fieldset": {
                      borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(15,23,42,0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3B82F6",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: isDark ? "rgba(226,232,240,0.6)" : theme.palette.text.secondary,
                    fontSize: "0.9rem",
                  },
                }}
              />

              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                required
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    background: isDark ? "rgba(255,255,255,0.015)" : "#FFFFFF",
                    transition: "all 0.2s ease",
                    "& fieldset": {
                      borderColor: theme.palette.divider,
                    },
                    "&:hover fieldset": {
                      borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(15,23,42,0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3B82F6",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: isDark ? "rgba(226,232,240,0.6)" : theme.palette.text.secondary,
                    fontSize: "0.9rem",
                  },
                }}
              />

              <input type="hidden" name="_subject" value="New Portfolio Message" />

              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  py: 1.2,
                  borderRadius: "999px",
                  backgroundColor: "#3B82F6",
                  boxShadow: "0px 6px 20px rgba(59,130,246,0.25)",
                  fontWeight: 500,
                  textTransform: "none",
                  transition: "all 0.2s ease",
                  ":hover": {
                    backgroundColor: "#2563EB",
                    transform: "translateY(-1px)",
                    boxShadow: "0px 10px 30px rgba(59,130,246,0.35)",
                  },
                  color: "#fff",
                }}
                type="submit"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Send Message"}
              </Button>

              {success && (
                <Typography
                  sx={{
                    mt: 2,
                    color: isDark ? "#22C55E" : "#16A34A",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                  }}
                >
                  Message sent successfully! I’ll get back to you soon.
                </Typography>
              )}

              <Box
                sx={{
                  width: "40px",
                  height: "1px",
                  mx: "auto",
                  mt: 2,
                  background: isDark ? "rgba(148,163,184,0.2)" : theme.palette.divider,
                  borderRadius: "999px",
                }}
              />

              <Typography variant="body2" sx={{ color: isDark ? "rgba(226,232,240,0.6)" : theme.palette.text.secondary, mt: 2, fontSize: "0.9rem", lineHeight: 1.6 }}>
                Or email me at{" "}
                <span style={{ color: theme.palette.primary.main }}>
                  ryan4sharifi@gmail.com
                </span>
                <br />
                Or call/text at{" "}
                <span style={{ color: theme.palette.primary.main }}>
                  (832) 710-1760
                </span>
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Stack>
    </Box>
  );
}