import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

function CaseStudySection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      component="section"
      sx={{
        p: { xs: 2.5, md: 4 },
        borderRadius: 3,
        border: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
        boxShadow: 0,
      }}
    >
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
        {eyebrow}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "text.primary",
          fontSize: { xs: "1.25rem", md: "1.55rem" },
          fontWeight: 650,
          lineHeight: 1.25,
          letterSpacing: 0,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        color: "text.secondary",
        fontSize: { xs: "0.98rem", md: "1.02rem" },
        lineHeight: 1.8,
      }}
    >
      {children}
    </Typography>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <Stack component="ul" spacing={1.25} sx={{ listStyle: "none", m: 0, p: 0 }}>
      {items.map((item) => (
        <Box
          component="li"
          key={item}
          sx={{
            display: "grid",
            gridTemplateColumns: "10px 1fr",
            gap: 1.5,
            alignItems: "start",
            color: "text.secondary",
            fontSize: "0.96rem",
            lineHeight: 1.7,
          }}
        >
          <Box
            aria-hidden
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              mt: "0.72rem",
              backgroundColor: "primary.main",
            }}
          />
          <span>{item}</span>
        </Box>
      ))}
    </Stack>
  );
}

function OverviewCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <Box
      sx={{
        p: { xs: 2.25, md: 3 },
        borderRadius: 2.5,
        border: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        sx={{
          color: "text.primary",
          fontWeight: 650,
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
        {body}
      </Typography>
    </Box>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = Object.values(projects).find(
    (p): p is Project => p.slug === slug
  );

  if (!project) notFound();

  return (
    <Box
      component="main"
      sx={{
        px: { xs: 2, md: 3 },
        pt: { xs: 12, md: 15 },
        pb: { xs: 10, md: 14 },
        backgroundColor: "background.default",
      }}
    >
      <Stack spacing={{ xs: 4, md: 6 }} sx={{ maxWidth: "1120px", mx: "auto" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.82fr 1.18fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          <Stack spacing={2.5}>
            <Box>
              <Typography
                sx={{
                  color: "primary.main",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                {project.category}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: "text.primary",
                  fontSize: { xs: "2.15rem", md: "3.4rem" },
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: 0,
                }}
              >
                {project.title}
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.05rem", md: "1.18rem" },
                lineHeight: 1.75,
                maxWidth: "620px",
              }}
            >
              {project.outcome}
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
              <Button
                component="a"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                size="large"
                endIcon={<ExternalLink size={16} />}
                sx={{
                  borderRadius: 999,
                  alignSelf: { xs: "stretch", sm: "flex-start" },
                  boxShadow: 0,
                }}
              >
                Visit Product
              </Button>
              <Button
                href="#case-study"
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: 999,
                  alignSelf: { xs: "stretch", sm: "flex-start" },
                  borderColor: "divider",
                  color: "text.primary",
                }}
              >
                Read Case Study
              </Button>
            </Stack>
          </Stack>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 10",
              borderRadius: 4,
              overflow: "hidden",
              border: 1,
              borderColor: "divider",
              backgroundColor: "background.paper",
              boxShadow: 10,
            }}
          >
            <Image
              src={project.image}
              alt={`${project.title} product screenshot`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 56vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>

        <Box
          id="case-study"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: 2, md: 2.5 },
            scrollMarginTop: "120px",
          }}
        >
          <OverviewCard title="What It Is" body={project.overview.product} />
          <OverviewCard title="Who It Is For" body={project.overview.audience} />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" },
            gap: { xs: 2, md: 2.5 },
            alignItems: "start",
          }}
        >
          <Stack spacing={{ xs: 2, md: 2.5 }}>
            <CaseStudySection eyebrow="Problem" title="The Product Challenge">
              <BodyText>{project.problem}</BodyText>
            </CaseStudySection>

            <CaseStudySection eyebrow="Role" title="My Contributions">
              <BulletList items={project.role} />
            </CaseStudySection>
          </Stack>

          <Stack spacing={{ xs: 2, md: 2.5 }}>
            <CaseStudySection eyebrow="Solution" title="What Was Built">
              <BodyText>{project.solution}</BodyText>
            </CaseStudySection>

            <CaseStudySection eyebrow="Architecture" title="Tech Architecture">
              <Stack spacing={2}>
                <BodyText>{project.architecture.summary}</BodyText>
                <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
                  {project.architecture.stack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        borderRadius: 999,
                        border: 1,
                        borderColor: "divider",
                        backgroundColor: "background.paper",
                        color: "text.primary",
                        fontWeight: 600,
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </CaseStudySection>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            gap: { xs: 2, md: 2.5 },
            alignItems: "start",
          }}
        >
          <CaseStudySection eyebrow="Highlights" title="Product Highlights">
            <BulletList items={project.highlights} />
          </CaseStudySection>

          <CaseStudySection eyebrow="Outcome" title="Result And Learning">
            <Stack spacing={2.5}>
              <BodyText>{project.result}</BodyText>
              <Button
                component="a"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                endIcon={<ExternalLink size={16} />}
                sx={{
                  borderRadius: 999,
                  alignSelf: "flex-start",
                  boxShadow: 0,
                }}
              >
                Visit Product
              </Button>
            </Stack>
          </CaseStudySection>
        </Box>
      </Stack>
    </Box>
  );
}
