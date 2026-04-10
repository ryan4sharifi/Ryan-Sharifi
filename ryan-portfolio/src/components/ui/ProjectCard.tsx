"use client";

import { Box, Typography, Chip, Stack } from "@mui/material";
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
  return (
    <Link href={`/projects/${slug}`} style={{ textDecoration: "none" }}>
      <motion.div
        whileHover={{ y: -10, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200 }}
        style={{ height: "100%" }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "24px",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            overflow: "hidden",
            transition: "all 0.35s ease",
            cursor: "pointer",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            "&:hover": {
              border: "1px solid rgba(99,102,241,0.5)",
              boxShadow: "0 20px 60px rgba(59,130,246,0.25)",
              "& img": {
                transform: "scale(1.05)",
              },
            },
          }}
        >
          {/* Image */}
          <Box
            sx={{
              height: "160px",
              position: "relative",
              overflow: "hidden",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
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
                  background:
                    "radial-gradient(circle at 50% 20%, rgba(59,130,246,0.25), transparent 70%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}
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
                  color: (theme) =>
                    theme.palette.mode === "dark"
                      ? "#E5E7EB"
                      : "#111827",
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.5,
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
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: "0.7rem",
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
