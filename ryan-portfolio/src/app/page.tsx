import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ pt: "80px" }}>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </Box>
  );
}