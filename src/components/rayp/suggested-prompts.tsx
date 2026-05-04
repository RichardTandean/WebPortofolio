"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const DEFAULT_PROMPTS = [
  "What AI projects have you built?",
  "Tell me about your experience in Korea",
  "What's your tech stack?",
  "How can I contact you?",
];

interface SuggestedPromptsProps {
  onSelect: (prompt: string) => void;
}

export function SuggestedPrompts({ onSelect }: SuggestedPromptsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {DEFAULT_PROMPTS.map((prompt, index) => (
        <motion.button
          key={prompt}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(prompt)}
          className={cn(
            "px-3 py-2 text-xs text-[#777777] bg-[#141414] border border-[#262626] rounded-full transition-colors",
            "hover:border-[#0055ff] hover:text-[#f0f0eb] cursor-pointer"
          )}
        >
          {prompt}
        </motion.button>
      ))}
    </div>
  );
}
