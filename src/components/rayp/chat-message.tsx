"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Message } from "@/lib/chat-store";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex w-full",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-[#1a1a1a] text-[#f0f0eb] rounded-2xl rounded-tr-sm"
            : "text-[#999999]"
        )}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-[#0055ff]/20 flex items-center justify-center">
              <span className="text-[10px] font-mono text-[#0055ff]">R</span>
            </div>
            <span className="text-xs font-mono text-[#555555]">Rayp</span>
          </div>
        )}
        <div className="break-words">{message.content}</div>
      </div>
    </motion.div>
  );
}
