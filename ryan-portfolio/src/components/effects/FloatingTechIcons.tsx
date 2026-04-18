"use client";

import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const icons = [
  { label: "Next.js", top: "10%", left: "15%" },
  { label: "React", top: "15%", left: "75%" },
  { label: "FastAPI", top: "70%", left: "20%" },
  { label: "Supabase", top: "75%", left: "75%" },
  { label: "TypeScript", top: "5%", left: "50%" },
  { label: "Node.js", top: "50%", left: "90%" },
];

export default function FloatingTechIcons() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.25, 0.5, 0.25],
            y: [0, -10, 0],
            x: [0, 6, 0],
          }}
          transition={{
            duration: 5 + index,
            delay: index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: icon.top,
            left: icon.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            sx={{
              px: 2,
              py: 0.9,
              borderRadius: "999px",
              fontSize: "0.7rem",
              letterSpacing: "0.04em",
              background: isDark
                ? "rgba(255,255,255,0.04)"
                : theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              backdropFilter: "blur(6px)",
              color: isDark
                ? "rgba(226,232,240,0.7)"
                : theme.palette.text.secondary,
              boxShadow: isDark
                ? "0 6px 20px rgba(0,0,0,0.3)"
                : "0 4px 12px rgba(0,0,0,0.05)",
              transition: "all 0.2s ease",
            }}
          >
            {icon.label}
          </Box>
        </motion.div>
      ))}

      {/* subtle background glow */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "700px",
          height: "700px",
          transform: "translate(-50%, -50%)",
          background: isDark
            ? "radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
    </Box>
  );
}