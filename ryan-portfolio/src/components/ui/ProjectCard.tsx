"use client";

import { Box, Typography, Chip, Stack, Button, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image?: string;
  slug: string;
  liveUrl: string;
};

export default function ProjectCard({
  title,
  category,
  description,
  tech,
  image,
  slug,
  liveUrl,
}: ProjectCardProps) {
  const theme = useTheme();
  const surface = alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.72 : 0.96);
  const subtleSurface = alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.12 : 0.08);
  const hoverSurface = alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.16 : 0.1);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      style={{ height: "100%" }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: 3,
          background: surface,
          border: 1,
          borderColor: "divider",
          backdropFilter: "blur(14px)",
          overflow: "hidden",
          transition: theme.transitions.create(["box-shadow", "border-color", "transform"], {
            duration: theme.transitions.duration.shorter,
          }),
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: 0,
          "&:hover": {
            borderColor: "primary.main",
            boxShadow: 8,
          },
          "&:hover .project-card-image": {
            transform: "scale(1.03)",
          },
        }}
      >
        <Box
          sx={{
            height: { xs: 180, md: 188 },
            position: "relative",
            overflow: "hidden",
            borderBottom: 1,
            borderColor: "divider",
            flexShrink: 0,
            backgroundColor: subtleSurface,
          }}
        >
          {image ? (
            <Image
              className="project-card-image"
              src={image}
              alt={title}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              style={{
                objectFit: "cover",
                transition: theme.transitions.create("transform", {
                  duration: theme.transitions.duration.complex,
                }),
              }}
            />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Product Preview
              </Typography>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            p: { xs: 2.5, md: 3 },
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            gap: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              {category}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 650,
                letterSpacing: 0,
                color: "text.primary",
                lineHeight: 1.25,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 1.65,
                mt: 1,
              }}
            >
              {description}
            </Typography>
          </Box>

          <Stack
            direction="row"
            useFlexGap
            sx={{
              flexWrap: "wrap",
              gap: 1,
              mt: "auto",
            }}
          >
            {tech.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  borderRadius: 999,
                  backgroundColor: "background.paper",
                  border: 1,
                  borderColor: "divider",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "text.secondary",
                }}
              />
            ))}
          </Stack>

          <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
            <Button
              component={Link}
              href={`/projects/${slug}`}
              variant="contained"
              size="small"
              sx={{
                borderRadius: 999,
                textTransform: "none",
                boxShadow: 0,
              }}
            >
              Case Study
            </Button>
            <Button
              component="a"
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              variant="text"
              size="small"
              endIcon={<ExternalLink size={14} />}
              sx={{
                borderRadius: 999,
                color: "text.primary",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: hoverSurface,
                },
              }}
            >
              View Live
            </Button>
          </Stack>
        </Box>
      </Box>
    </motion.article>
  );
}
