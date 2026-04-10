"use client";

import { Box, Typography, Stack, TextField, Button, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <Box component="section" id="contact" sx={{ py: 12, px: 2 }}>
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
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <TextField label="Name" name="name" required fullWidth />

            <TextField label="Email" name="email" type="email" required fullWidth />

            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              required
              fullWidth
            />

            <input type="hidden" name="_subject" value="New Portfolio Message" />

            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: "999px",
                background: "linear-gradient(90deg, #3B82F6, #6366F1)",
                boxShadow: "0px 8px 30px rgba(59,130,246,0.4)",
                ":hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0px 12px 40px rgba(59,130,246,0.6)",
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
                }}
              >
                Message sent successfully! I’ll get back to you soon.
              </Typography>
            )}

            <Typography variant="body2" color="text.secondary">
              Or email me directly at{" "}
              <span style={{ color: "#60A5FA" }}>
                ryan4sharifi@gmail.com
              </span>
              <br />
              Or call/text me at{" "}
              <span style={{ color: "#60A5FA" }}>
                (832) 710-1760
              </span>
            </Typography>
          </Box>
        </motion.div>
      </Stack>
    </Box>
  );
}