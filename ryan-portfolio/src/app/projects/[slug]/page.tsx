// FIX: remove useTheme (server component issue)
import { projects } from "@/data/projects";
import { Box, Typography, Chip } from "@mui/material";
import Image from "next/image";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = Object.values(projects).find(
    (p) => p.slug === slug
  );

  if (!project) return <div>Not found</div>;

  return (
    <Box
      sx={{
        maxWidth: "900px",
        mx: "auto",
        px: 2,
        py: { xs: 10, md: 14 },
      }}
    >
      {/* Eyebrow */}
      <Typography
        sx={{
          fontSize: "0.75rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "text.secondary",
          fontWeight: 500,
          mb: 1,
        }}
      >
        Project
      </Typography>

      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          mb: 1,
          lineHeight: 1.2,
          letterSpacing: "-0.3px",
          color: "text.primary",
        }}
      >
        {project.title}
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          color: "text.secondary",
          mb: 4,
          maxWidth: "520px",
          fontSize: "0.95rem",
          lineHeight: 1.7,
        }}
      >
        A closer look at this project, including stack, structure, and design.
      </Typography>

      {/* Image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "220px", md: "380px" },
          borderRadius: "16px",
          overflow: "hidden",
          mb: 5,
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Description */}
      <Typography
        sx={{
          fontSize: "1rem",
          lineHeight: 1.75,
          color: "text.secondary",
          mb: 5,
          maxWidth: "640px",
        }}
      >
        {project.description}
      </Typography>

      {/* Tech Stack */}
      <Box
        sx={{
          p: { xs: 2.5, md: 3 },
          borderRadius: "16px",
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          backdropFilter: "blur(10px)",
          mb: 6,
        }}
      >
        <Typography
          sx={{
            mb: 2,
            fontWeight: 500,
            fontSize: "0.85rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "text.secondary",
          }}
        >
          Tech Stack
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {project.tech.map((tech: string, index: number) => (
            <Chip
              key={index}
              label={tech}
              sx={{
                borderRadius: "999px",
                px: 1.2,
                backgroundColor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "text.primary",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "action.hover",
                  transform: "translateY(-1px)",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
