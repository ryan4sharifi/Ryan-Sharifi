"use client";

import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 12,
        px: 2,
      }}
    >
      <Stack
        spacing={4}
        sx={{
          maxWidth: "900px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2">About Me</Typography>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography variant="body1" color="text.secondary">
            I’m a full-stack developer focused on building modern, scalable,
            and high-performance web applications. I enjoy creating products
            that are not only functional but also visually refined and
            intuitive to use.
          </Typography>
        </motion.div>

        {/* Second paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Typography variant="body1" color="text.secondary">
            My experience includes working on real-world platforms like
            TrialFinder and building full-stack applications using Next.js,
            FastAPI, and Supabase. I’m passionate about clean architecture,
            performance, and creating products that stand out.
          </Typography>
        </motion.div>
      </Stack>
    </Box>
  );
}