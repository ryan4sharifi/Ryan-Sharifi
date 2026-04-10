

"use client";

import { Box, Typography, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        textAlign: "center",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Ryan Sharifi. All rights reserved.
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Built with Next.js, MUI, and passion.
        </Typography>
      </Stack>
    </Box>
  );
}