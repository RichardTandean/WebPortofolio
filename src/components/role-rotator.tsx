"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingRoles = [
  "AI-Driven Software Engineer",
  "Automation Expert",
  "AI Content Creator",
];

export function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.6em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="block text-[#0055ff] font-mono text-sm md:text-base tracking-wide whitespace-nowrap"
        >
          {rotatingRoles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
