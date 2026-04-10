
import { projects } from "@/data/projects";
import { Box, Typography, Chip, Button } from "@mui/material";
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
        maxWidth: "1100px",
        mx: "auto",
        px: 2,
        py: 10,
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 3,
          lineHeight: 1.2,
        }}
      >
        {project.title}
      </Typography>

      {/* Image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "220px", md: "400px" },
          borderRadius: "20px",
          overflow: "hidden",
          mb: 4,
          border: "1px solid rgba(255,255,255,0.08)",
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
          lineHeight: 1.7,
          color: "text.secondary",
          mb: 4,
          maxWidth: "700px",
        }}
      >
        {project.description}
      </Typography>

      {/* Tech Stack */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          mb: 5,
        }}
      >
        {project.tech.map((tech: string, index: number) => (
          <Chip
            key={index}
            label={tech}
            sx={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        ))}
      </Box>

      {/* Actions */}
      <Box sx={{ display: "flex", gap: "16px" }}>
        <Button
          variant="contained"
          href={project.demoUrl}
          sx={{
            borderRadius: "999px",
            px: 4,
            textTransform: "none",
          }}
        >
          Live Demo
        </Button>

        <Button
          variant="outlined"
          href={project.repoUrl}
          sx={{
            borderRadius: "999px",
            px: 4,
            textTransform: "none",
          }}
        >
          View Code
        </Button>
      </Box>
    </Box>
  );
}