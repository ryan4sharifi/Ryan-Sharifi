"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();
  const imageFirst = index === 2;

  const visual = (
    <Box sx={{ minHeight: { xs: 280, sm: 360, md: index === 0 ? 520 : 430 }, position: "relative", overflow: "hidden", backgroundColor: index === 0 ? "#171922" : "background.default", borderLeft: { md: imageFirst ? 0 : 1 }, borderRight: { md: imageFirst ? 1 : 0 }, borderBottom: { xs: 1, md: 0 }, borderColor: "divider" }}>
      {project.image ? (
        <Box sx={{ position: "absolute", inset: { xs: 20, md: 30 }, overflow: "hidden", border: 1, borderColor: "divider", backgroundColor: "#FFFFFF" }}>
          <Image src={project.image} alt={`${project.title} product interface`} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "contain" }} />
        </Box>
      ) : (
        <Stack sx={{ height: "100%", p: { xs: 3, md: 5 }, justifyContent: "space-between", color: "#F3F3F1" }}>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#AEB6E9" }}>Product system</Typography>
            <Typography sx={{ fontSize: "0.68rem", color: "#8E8F98" }}>Web → TV</Typography>
          </Stack>
          <Stack spacing={0}>
            {["Next.js interface", "FastAPI services", "PostgreSQL data", "Android + TV"].map((layer, layerIndex) => (
              <Box key={layer} sx={{ py: 2.1, borderTop: "1px solid rgba(255,255,255,0.16)", display: "flex", justifyContent: "space-between", gap: 2 }}>
                <Typography sx={{ fontSize: { xs: "1rem", sm: "1.18rem" }, fontWeight: 600 }}>{layer}</Typography>
                <Typography sx={{ color: "#8E8F98", fontSize: "0.78rem" }}>0{layerIndex + 1}</Typography>
              </Box>
            ))}
          </Stack>
          <Typography sx={{ color: "#8E8F98", fontSize: "0.72rem" }}>Authentication · subscriptions · streaming</Typography>
        </Stack>
      )}
    </Box>
  );

  const content = (
    <Stack sx={{ p: { xs: 3, sm: 4, md: 5 }, minHeight: { md: index === 0 ? 520 : 430 }, justifyContent: "space-between" }} spacing={4}>
      <Box>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", gap: 2, mb: 2.5 }}>
          <Typography sx={{ color: "primary.main", fontSize: "0.7rem", fontWeight: 750, letterSpacing: "0.12em", textTransform: "uppercase" }}>{project.category}</Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "0.72rem" }}>0{index + 1}</Typography>
        </Stack>
        <Typography component="h3" variant="h3" sx={{ color: "text.primary", fontSize: { xs: "2rem", md: index === 0 ? "3rem" : "2.5rem" }, mb: 2 }}>{project.title}</Typography>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.72, maxWidth: 570 }}>{project.description}</Typography>
      </Box>

      <Box>
        <Box component="ul" sx={{ m: 0, mb: 3.5, p: 0, listStyle: "none", borderTop: 1, borderColor: "divider" }}>
          {project.highlights.slice(0, 3).map((highlight) => (
            <Typography component="li" key={highlight} sx={{ py: 1.25, borderBottom: 1, borderColor: "divider", color: "text.primary", fontSize: "0.84rem", display: "flex", gap: 1.2 }}>
              <Box component="span" sx={{ color: "primary.main" }}>↳</Box>{highlight}
            </Typography>
          ))}
        </Box>
        <Typography sx={{ color: "text.secondary", fontSize: "0.73rem", mb: 2.5 }}>{project.tech.slice(0, 6).join("  ·  ")}</Typography>
        <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
          <Button component={Link} href={`/projects/${project.slug}`} variant="contained" endIcon={<ArrowUpRight size={16} />}>Read case study</Button>
          {project.liveUrl && <Button component="a" href={project.liveUrl} target="_blank" rel="noreferrer" variant="text" endIcon={<ArrowUpRight size={16} />} sx={{ color: "text.primary" }}>Visit live site</Button>}
        </Stack>
      </Box>
    </Stack>
  );

  return (
    <motion.article initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.46, ease: "easeOut" }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: index === 0 ? "0.92fr 1.08fr" : "1fr 1fr" }, border: 1, borderColor: "divider", backgroundColor: "background.paper", transition: "border-color 160ms ease", "&:hover": { borderColor: "primary.main" } }}>
        {imageFirst ? <>{content}{visual}</> : <>{visual}{content}</>}
      </Box>
    </motion.article>
  );
}
