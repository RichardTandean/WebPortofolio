"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

const MAX_CHARS = 500;

export function ChatInput({ onSend, disabled, placeholder = "Type a message..." }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!message.trim() || disabled) return;
    onSend(message.trim());
    setMessage("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [message]);

  return (
    <div className="relative">
      <div className="rule-all bg-[#0d0d0d] flex items-end gap-2 p-3">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, MAX_CHARS))}
          onKeyDown={handleKeyDown}
          placeholder={disabled ? "Daily limit reached" : placeholder}
          disabled={disabled}
          rows={1}
          className={cn(
            "flex-1 bg-transparent text-sm text-[#f0f0eb] placeholder:text-[#444444] resize-none outline-none min-h-[24px] max-h-[120px]",
            disabled && "cursor-not-allowed opacity-50"
          )}
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          disabled={!message.trim() || disabled}
          className={cn(
            "p-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors",
            message.trim() && !disabled
              ? "text-[#0055ff] hover:text-[#3b82f6]"
              : "text-[#333333] cursor-not-allowed"
          )}
        >
          <Send className="w-4 h-4" />
        </motion.button>
      </div>
      <div className="flex justify-end mt-1 px-1">
        <span className={cn(
          "text-[10px] font-mono",
          message.length >= MAX_CHARS ? "text-red-400" : "text-[#444444]"
        )}>
          {message.length}/{MAX_CHARS}
        </span>
      </div>
    </div>
  );
}
