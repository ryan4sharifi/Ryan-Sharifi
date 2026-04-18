"use client";

import { Box, Typography, Chip, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  slug: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  slug,
}: ProjectCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Link href={`/projects/${slug}`} style={{ textDecoration: "none" }}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        style={{ height: "100%" }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "16px",
            background: isDark
              ? "rgba(255,255,255,0.02)"
              : theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            backdropFilter: "blur(10px)",
            overflow: "hidden",
            transition: "all 0.2s ease",
            cursor: "pointer",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: isDark
                ? "0 10px 30px rgba(0,0,0,0.4)"
                : "0 8px 20px rgba(0,0,0,0.08)",
            },
          }}
        >
          {/* Image */}
          <Box
            sx={{
              height: "160px",
              position: "relative",
              overflow: "hidden",
              borderBottom: `1px solid ${theme.palette.divider}`,
              flexShrink: 0,
            }}
          >
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  background: isDark
                    ? "radial-gradient(circle at 50% 20%, rgba(59,130,246,0.2), transparent 70%)"
                    : "linear-gradient(180deg, #F1F5F9, #E2E8F0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: isDark ? "rgba(255,255,255,0.4)" : theme.palette.text.secondary, fontSize: "0.8rem" }}
                >
                  Project Preview
                </Typography>
              </Box>
            )}
          </Box>

          {/* Content */}
          <Box
            sx={{
              p: 2.5,
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  letterSpacing: "0.2px",
                  color: isDark ? "#E2E8F0" : theme.palette.text.primary,
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.6,
                  fontSize: "0.9rem",
                  mt: 1,
                }}
              >
                {description}
              </Typography>
            </Box>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: "wrap",
                pt: 2,
              }}
            >
              {tech.map((t, i) => (
                <Chip
                  key={i}
                  label={t}
                  size="small"
                  sx={{
                    borderRadius: "999px",
                    background: isDark ? "rgba(255,255,255,0.04)" : "#FFFFFF",
                    border: `1px solid ${theme.palette.divider}`,
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: isDark ? "rgba(226,232,240,0.8)" : theme.palette.text.primary,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                      transform: "translateY(-1px)",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </motion.div>
    </Link>
  );
}
