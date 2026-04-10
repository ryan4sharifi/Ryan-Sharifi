"use client";

import { Box, Typography, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";

const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "MUI"],
  Backend: ["FastAPI", "Node.js", "Supabase"],
  Tools: ["Git", "Docker", "REST APIs"],
};

export default function Skills() {
  return (
    <Box component="section" id="skills" sx={{ py: 12, px: 2 }}>
      <Stack
        spacing={6}
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
          <Typography variant="h2">Skills</Typography>
        </motion.div>

        {/* Skill Groups */}
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Stack spacing={2}>
              <Typography variant="h5">{category}</Typography>

              <Stack
                direction="row"
                spacing={1}
                sx={{
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {items.map((skill) => (
                  <Chip key={skill} label={skill} />
                ))}
              </Stack>
            </Stack>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}