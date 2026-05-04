"use client";

import { motion } from "framer-motion";

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 text-[#555555]">
      <div className="flex items-center gap-1">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#0055ff]"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#0055ff]"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#0055ff]"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        />
      </div>
      <span className="text-xs font-mono">Rayp is typing...</span>
    </div>
  );
}
