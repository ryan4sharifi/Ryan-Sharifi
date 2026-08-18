import type { Metadata } from "next";
import { Box } from "@mui/material";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import MoreProjects from "@/components/sections/MoreProjects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Ryan Sharifi · Full-Stack Software Engineer",
  description: "Portfolio of Ryan Sharifi, a full-stack software engineer working across React, TypeScript, Python, FastAPI, PostgreSQL, .NET, mobile, and automation.",
};

export default function Home() {
  return (
    <Box component="main" id="main-content">
      <Hero />
      <Projects />
      <Experience />
      <MoreProjects />
      <Skills />
      <About />
      <Contact />
    </Box>
  );
}
