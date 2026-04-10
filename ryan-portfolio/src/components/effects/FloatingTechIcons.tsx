"use client";

import { Box } from "@mui/material";
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
            opacity: [0.4, 0.9, 0.4],
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6 + index,
            delay: index * 0.4,
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
              px: 2.5,
              py: 1.2,
              borderRadius: "999px",
              fontSize: "0.75rem",
              letterSpacing: "0.5px",
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(99,102,241,0.1))",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              color: "rgba(255,255,255,0.7)",
              boxShadow: "0 8px 30px rgba(59,130,246,0.15)",
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
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
    </Box>
  );
}