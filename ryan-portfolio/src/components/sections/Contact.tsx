"use client";

import { Box, Typography, Stack, TextField, Button, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 3 } }}>
      <Stack
        spacing={6}
        sx={{ maxWidth: "700px", mx: "auto", textAlign: "center" }}
      >
        <SectionTitle
          title="Contact"
          subtitle="Have a project or opportunity? Let’s connect."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              borderRadius: "20px",
              p: { xs: 2.5, md: 4 },
              background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
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
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.02)",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3B82F6",
                    },
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
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.02)",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3B82F6",
                    },
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
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.02)",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3B82F6",
                    },
                  },
                }}
              />

              <input type="hidden" name="_subject" value="New Portfolio Message" />

              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  py: 1.3,
                  borderRadius: "999px",
                  background: "#3B82F6",
                  boxShadow: "none",
                  transition: "all 0.25s ease",
                  ":hover": {
                    background: "#2563EB",
                    transform: "translateY(-1px)",
                  },
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
                    color: "success.main",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                  }}
                >
                  Message sent successfully! I’ll get back to you soon.
                </Typography>
              )}

              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                Or email me at{" "}
                <span style={{ color: "#60A5FA" }}>
                  ryan4sharifi@gmail.com
                </span>
                <br />
                Or call/text at{" "}
                <span style={{ color: "#60A5FA" }}>
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