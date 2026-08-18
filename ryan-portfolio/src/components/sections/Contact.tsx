"use client";

import { Box, Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { ArrowUpRight, BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { useState } from "react";
import { socialLinks } from "@/data/portfolio";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const fieldSx = { "& .MuiOutlinedInput-root": { borderRadius: 1, backgroundColor: "background.default", "& fieldset": { borderColor: "divider" }, "&:hover fieldset": { borderColor: "text.secondary" }, "&.Mui-focused fieldset": { borderColor: "primary.main", borderWidth: 2 } } };

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 10, md: 15 }, px: { xs: 2, md: 3 }, borderTop: 1, borderColor: "divider", backgroundColor: "background.paper" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, gap: { xs: 6, md: 12 } }}>
        <Stack sx={{ justifyContent: "space-between" }} spacing={6}>
          <Box>
            <Typography sx={{ color: "primary.main", fontSize: "0.72rem", fontWeight: 750, letterSpacing: "0.14em", textTransform: "uppercase", mb: 1.5 }}>06 · Contact</Typography>
            <Typography component="h2" variant="h2" sx={{ color: "text.primary", fontSize: { xs: "2.4rem", md: "3.6rem" }, mb: 2.5 }}>Let’s build something useful.</Typography>
            <Typography sx={{ color: "text.secondary", maxWidth: 500, fontSize: "1rem", lineHeight: 1.75 }}>Have a software engineering role, product, or technical problem to discuss? Send a message or reach out directly.</Typography>
          </Box>
          <Box>
            <Button component="a" href={socialLinks.email} variant="text" endIcon={<ArrowUpRight size={18} />} sx={{ px: 0, color: "text.primary", fontSize: { xs: "1rem", sm: "1.15rem" }, "&:hover": { backgroundColor: "transparent", color: "primary.main" } }}>hello@ryansharifi.com</Button>
            <Stack direction="row" useFlexGap sx={{ mt: 2, flexWrap: "wrap", gap: 1 }}>
              <Button component="a" href={socialLinks.github} target="_blank" rel="noreferrer" variant="outlined" startIcon={<Code2 size={16} />} sx={{ color: "text.primary", borderColor: "divider" }}>GitHub</Button>
              <Button component="a" href={socialLinks.linkedin} target="_blank" rel="noreferrer" variant="outlined" startIcon={<BriefcaseBusiness size={16} />} sx={{ color: "text.primary", borderColor: "divider" }}>LinkedIn</Button>
            </Stack>
          </Box>
        </Stack>

        <Box
          component="form"
          onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault(); setLoading(true); setSuccess(false); setError(false);
            const form = event.currentTarget;
            try {
              const response = await fetch("https://formspree.io/f/mdabbglv", { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
              if (response.ok) { setSuccess(true); form.reset(); } else { setError(true); }
            } catch { setError(true); } finally { setLoading(false); }
          }}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Name" name="name" autoComplete="name" required fullWidth sx={fieldSx} />
          <TextField label="Email" name="email" type="email" autoComplete="email" required fullWidth sx={fieldSx} />
          <TextField label="Message" name="message" multiline minRows={5} required fullWidth sx={fieldSx} />
          <input type="hidden" name="_subject" value="New Portfolio Message" />
          <Button type="submit" disabled={loading} variant="contained" size="large" startIcon={!loading && <Mail size={17} />} sx={{ alignSelf: { sm: "flex-start" }, minWidth: 170 }}>
            {loading ? <CircularProgress size={22} color="inherit" /> : "Send message"}
          </Button>
          <Box aria-live="polite" sx={{ minHeight: 28 }}>
            {success && <Typography sx={{ color: "success.main", fontSize: "0.86rem", fontWeight: 650 }}>Message sent successfully. I’ll get back to you soon.</Typography>}
            {error && <Typography sx={{ color: "error.main", fontSize: "0.86rem", fontWeight: 650 }}>The message could not be sent. Please email hello@ryansharifi.com instead.</Typography>}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
