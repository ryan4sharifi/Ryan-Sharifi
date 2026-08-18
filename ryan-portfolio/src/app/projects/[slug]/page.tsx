import type { Metadata } from "next";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, type Project } from "@/data/projects";

function getProject(slug: string) {
  return Object.values(projects).find((project): project is Project => project.slug === slug);
}

export function generateStaticParams() {
  return Object.values(projects).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} · Ryan Sharifi`, description: project.description };
}

function BodyText({ children }: { children: React.ReactNode }) {
  return <Typography sx={{ color: "text.secondary", fontSize: { xs: "0.96rem", md: "1.02rem" }, lineHeight: 1.8, maxWidth: 760 }}>{children}</Typography>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none", maxWidth: 780 }}>
      {items.map((item) => (
        <Typography component="li" key={item} sx={{ py: 1.35, borderBottom: 1, borderColor: "divider", color: "text.secondary", fontSize: "0.92rem", lineHeight: 1.65, display: "flex", gap: 1.2 }}>
          <Box component="span" sx={{ color: "primary.main" }}>↳</Box>{item}
        </Typography>
      ))}
    </Box>
  );
}

function CaseStudyRow({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <Box component="section" sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "260px minmax(0, 1fr)" }, gap: { xs: 2, md: 7 }, py: { xs: 4.5, md: 6 }, borderTop: 1, borderColor: "divider" }}>
      <Box>
        <Typography sx={{ color: "primary.main", fontSize: "0.67rem", fontWeight: 750, letterSpacing: "0.12em", textTransform: "uppercase", mb: 0.7 }}>{index}</Typography>
        <Typography component="h2" sx={{ color: "text.primary", fontSize: { xs: "1.35rem", md: "1.55rem" }, fontWeight: 650, letterSpacing: "-0.025em" }}>{title}</Typography>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <Box component="main" id="main-content" sx={{ px: { xs: 2, md: 3 }, pt: { xs: 13, md: 17 }, pb: { xs: 10, md: 14 } }}>
      <Stack spacing={{ xs: 7, md: 10 }} sx={{ maxWidth: 1200, mx: "auto" }}>
        <Box>
          <Button href="/#projects" variant="text" startIcon={<ArrowLeft size={16} />} sx={{ px: 0, mb: { xs: 4, md: 6 }, color: "text.secondary", "&:hover": { backgroundColor: "transparent", color: "text.primary" } }}>Back to selected work</Button>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, gap: { xs: 4, md: 8 }, alignItems: "end" }}>
            <Box>
              <Typography sx={{ color: "primary.main", fontSize: "0.72rem", fontWeight: 750, letterSpacing: "0.13em", textTransform: "uppercase", mb: 1.5 }}>{project.category}</Typography>
              <Typography component="h1" variant="h1" sx={{ color: "text.primary", fontSize: { xs: "3rem", md: "5rem" } }}>{project.title}</Typography>
            </Box>
            <Box>
              <Typography sx={{ color: "text.secondary", fontSize: { xs: "1rem", md: "1.16rem" }, lineHeight: 1.72, mb: 3 }}>{project.outcome}</Typography>
              <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", gap: 1 }}>
                {project.liveUrl && <Button component="a" href={project.liveUrl} target="_blank" rel="noreferrer" variant="contained" endIcon={<ArrowUpRight size={16} />}>Visit product</Button>}
                <Button component="a" href="#case-study" variant="outlined" sx={{ color: "text.primary", borderColor: "divider" }}>Read case study</Button>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box sx={{ position: "relative", width: "100%", aspectRatio: { xs: "4 / 3", md: "16 / 8" }, overflow: "hidden", border: 1, borderColor: "divider", backgroundColor: project.image ? "#FFFFFF" : "#171922" }}>
          {project.image ? (
            <Box sx={{ position: "absolute", inset: { xs: 18, md: 40 } }}>
              <Image src={project.image} alt={`${project.title} product interface`} fill priority sizes="(max-width: 900px) 100vw, 1200px" style={{ objectFit: "contain" }} />
            </Box>
          ) : (
            <Stack sx={{ height: "100%", p: { xs: 3, md: 6 }, color: "#F3F3F1", justifyContent: "space-between" }}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography sx={{ color: "#AEB6E9", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>System architecture</Typography>
                <Typography sx={{ color: "#8E8F98", fontSize: "0.7rem" }}>{project.title}</Typography>
              </Stack>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, borderTop: "1px solid rgba(255,255,255,0.16)", borderLeft: "1px solid rgba(255,255,255,0.16)" }}>
                {project.architecture.stack.slice(0, 8).map((technology, index) => (
                  <Box key={technology} sx={{ p: { xs: 1.5, md: 2.5 }, borderRight: "1px solid rgba(255,255,255,0.16)", borderBottom: "1px solid rgba(255,255,255,0.16)" }}>
                    <Typography sx={{ color: "#8E8F98", fontSize: "0.62rem", mb: 0.5 }}>0{index + 1}</Typography>
                    <Typography sx={{ fontSize: { xs: "0.88rem", md: "1.05rem" }, fontWeight: 600 }}>{technology}</Typography>
                  </Box>
                ))}
              </Box>
            </Stack>
          )}
        </Box>

        <Box id="case-study" sx={{ scrollMarginTop: 100 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, borderTop: 1, borderLeft: 1, borderColor: "divider", mb: { xs: 4, md: 6 } }}>
            {[["What it is", project.overview.product], ["Who it is for", project.overview.audience]].map(([title, body]) => (
              <Box key={title} sx={{ p: { xs: 2.5, md: 3.5 }, borderRight: 1, borderBottom: 1, borderColor: "divider" }}>
                <Typography sx={{ color: "text.primary", fontWeight: 650, mb: 1 }}>{title}</Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>{body}</Typography>
              </Box>
            ))}
          </Box>

          <CaseStudyRow index="01 · Problem" title="The product challenge"><BodyText>{project.problem}</BodyText></CaseStudyRow>
          <CaseStudyRow index="02 · Solution" title="What was built"><BodyText>{project.solution}</BodyText></CaseStudyRow>
          <CaseStudyRow index="03 · Role" title="My contributions"><BulletList items={project.role} /></CaseStudyRow>
          <CaseStudyRow index="04 · Architecture" title="Technical system">
            <Stack spacing={3}>
              <BodyText>{project.architecture.summary}</BodyText>
              <Typography sx={{ color: "text.primary", fontSize: "0.8rem", fontWeight: 650 }}>{project.architecture.stack.join("  ·  ")}</Typography>
            </Stack>
          </CaseStudyRow>
          <CaseStudyRow index="05 · Highlights" title="Product highlights"><BulletList items={project.highlights} /></CaseStudyRow>
          <CaseStudyRow index="06 · Outcome" title="Result and learning">
            <Stack spacing={3}><BodyText>{project.result}</BodyText>{project.liveUrl && <Button component="a" href={project.liveUrl} target="_blank" rel="noreferrer" variant="contained" endIcon={<ArrowUpRight size={16} />} sx={{ alignSelf: "flex-start" }}>Visit product</Button>}</Stack>
          </CaseStudyRow>
        </Box>
      </Stack>
    </Box>
  );
}
