import { Box, Typography } from "@mui/material";

type SectionHeaderProps = { eyebrow: string; title: string; intro?: string };

export default function SectionHeader({ eyebrow, title, intro }: SectionHeaderProps) {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: intro ? "0.9fr 1.1fr" : "1fr" }, gap: { xs: 2, md: 6 }, alignItems: "end" }}>
      <Box>
        <Typography sx={{ color: "primary.main", fontSize: "0.72rem", fontWeight: 750, letterSpacing: "0.14em", textTransform: "uppercase", mb: 1.5 }}>
          {eyebrow}
        </Typography>
        <Typography component="h2" variant="h2" sx={{ color: "text.primary", fontSize: { xs: "2.15rem", md: "3.15rem" } }}>
          {title}
        </Typography>
      </Box>
      {intro && (
        <Typography sx={{ color: "text.secondary", maxWidth: 590, justifySelf: { md: "end" }, fontSize: { xs: "0.98rem", md: "1.05rem" }, lineHeight: 1.75 }}>
          {intro}
        </Typography>
      )}
    </Box>
  );
}
