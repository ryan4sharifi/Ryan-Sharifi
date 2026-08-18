"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowDownRight, BriefcaseBusiness, Code2, FileText, Handshake } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { socialLinks } from "@/data/portfolio";

const systemLayers = [
  ["Interface", "React · Next.js · TypeScript"],
  ["Application", "Python · FastAPI · .NET"],
  ["Data", "PostgreSQL · Supabase · SQL Server"],
  ["Beyond web", "Swift · Kotlin · Automation"],
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.48, delay: reduceMotion ? 0 : delay, ease: "easeOut" as const },
  });

  return (
    <Box component="section" aria-labelledby="hero-title" sx={{ minHeight: { xs: 720, md: 760 }, display: "flex", alignItems: "center", px: { xs: 2, md: 3 }, pt: { xs: 14, md: 16 }, pb: { xs: 10, md: 12 }, position: "relative", overflow: "hidden", borderBottom: 1, borderColor: "divider" }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, opacity: 0.42, backgroundImage: (theme) => `linear-gradient(${theme.palette.divider} 1px, transparent 1px), linear-gradient(90deg, ${theme.palette.divider} 1px, transparent 1px)`, backgroundSize: "72px 72px", maskImage: "linear-gradient(to bottom, black, transparent 88%)" }} />

      <Box sx={{ maxWidth: 1200, width: "100%", mx: "auto", display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.2fr) minmax(330px, 0.8fr)" }, gap: { xs: 7, md: 10 }, alignItems: "center", position: "relative" }}>
        <Stack spacing={3.5} sx={{ maxWidth: 760 }}>
          <motion.div {...reveal(0)}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Box sx={{ width: 28, height: "1px", backgroundColor: "primary.main" }} />
              <Typography sx={{ color: "primary.main", fontSize: "0.72rem", fontWeight: 750, letterSpacing: "0.14em", textTransform: "uppercase" }}>Ryan Sharifi · Houston, Texas</Typography>
            </Stack>
          </motion.div>

          <motion.div {...reveal(0.07)}>
            <Typography id="hero-title" component="h1" variant="h1" sx={{ color: "text.primary", fontSize: { xs: "3rem", sm: "4.1rem", lg: "5.35rem" }, maxWidth: 820 }}>
              Full-Stack Software Engineer
            </Typography>
          </motion.div>

          <motion.div {...reveal(0.14)}>
            <Typography sx={{ color: "text.secondary", fontSize: { xs: "1rem", sm: "1.16rem" }, lineHeight: 1.72, maxWidth: 690 }}>
              I build product interfaces in React and TypeScript and backend systems with Python, FastAPI, and PostgreSQL. I am also available for freelance websites and web applications for Houston businesses, startups, founders, and individual clients.
            </Typography>
          </motion.div>

          <motion.div {...reveal(0.21)}>
            <Stack direction={{ xs: "column", sm: "row" }} useFlexGap sx={{ alignItems: { sm: "center" }, flexWrap: "wrap", gap: 1.25 }}>
              <Button component={Link} href="/#projects" variant="contained" endIcon={<ArrowDownRight size={17} />}>View Work</Button>
              <Button component={Link} href="/#contact" variant="outlined" startIcon={<Handshake size={17} />} sx={{ color: "text.primary", borderColor: "primary.main" }}>Hire Me</Button>
              <Button disabled title="Resume file or URL needs to be added" variant="text" startIcon={<FileText size={17} />}>Resume</Button>
              <Button component="a" href={socialLinks.github} target="_blank" rel="noreferrer" variant="outlined" startIcon={<Code2 size={17} />} sx={{ color: "text.primary", borderColor: "divider" }}>GitHub</Button>
              <Button component="a" href={socialLinks.linkedin} target="_blank" rel="noreferrer" variant="text" startIcon={<BriefcaseBusiness size={17} />} sx={{ color: "text.primary" }}>LinkedIn</Button>
            </Stack>
          </motion.div>
        </Stack>

        <motion.div {...reveal(0.18)}>
          <Box sx={{ border: 1, borderColor: "divider", backgroundColor: "background.paper", p: { xs: 2.5, sm: 3 } }}>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", pb: 2.5, borderBottom: 1, borderColor: "divider" }}>
              <Typography sx={{ color: "text.secondary", fontSize: "0.68rem", fontWeight: 750, letterSpacing: "0.13em", textTransform: "uppercase" }}>Engineering range</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                <Box sx={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#64C98A" }} />
                <Typography sx={{ color: "text.secondary", fontSize: "0.72rem" }}>End-to-end product work</Typography>
              </Box>
            </Stack>
            {systemLayers.map(([label, value], index) => (
              <Box key={label} sx={{ py: 2.2, borderBottom: index < systemLayers.length - 1 ? 1 : 0, borderColor: "divider" }}>
                <Typography sx={{ color: "primary.main", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", mb: 0.65 }}>{label}</Typography>
                <Typography sx={{ color: "text.primary", fontSize: { xs: "0.9rem", sm: "0.96rem" }, fontWeight: 580 }}>{value}</Typography>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
