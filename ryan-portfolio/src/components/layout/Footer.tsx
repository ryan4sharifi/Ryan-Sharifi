"use client";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, px: { xs: 2, md: 3 }, borderTop: 1, borderColor: "divider" }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ maxWidth: 1200, mx: "auto", justifyContent: "space-between", alignItems: { sm: "center" } }}>
        <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} Ryan Sharifi · Full-stack software engineer in Houston, Texas</Typography>
        <Stack direction="row" spacing={2.5}>
          <Typography component={Link} href={socialLinks.github} target="_blank" rel="noreferrer" sx={{ color: "text.secondary", textDecoration: "none", fontSize: "0.78rem", "&:hover": { color: "text.primary" } }}>GitHub</Typography>
          <Typography component={Link} href={socialLinks.linkedin} target="_blank" rel="noreferrer" sx={{ color: "text.secondary", textDecoration: "none", fontSize: "0.78rem", "&:hover": { color: "text.primary" } }}>LinkedIn</Typography>
          <Typography component={Link} href={socialLinks.email} sx={{ color: "text.secondary", textDecoration: "none", fontSize: "0.78rem", "&:hover": { color: "text.primary" } }}>Email</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
