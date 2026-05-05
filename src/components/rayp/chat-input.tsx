"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";
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

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [message]);

  const canSend = message.trim().length > 0 && !disabled;

  return (
    <div className="px-1">
      <div
        className={cn(
          "flex items-end gap-2 px-3 py-2 rounded-2xl border transition-colors",
          disabled
            ? "border-[#222222] bg-transparent"
            : "border-[#333333] bg-[#141414] focus-within:border-[#444444]"
        )}
      >
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, MAX_CHARS))}
          onKeyDown={handleKeyDown}
          placeholder={disabled ? "" : placeholder}
          disabled={disabled}
          rows={1}
          className={cn(
            "flex-1 bg-transparent text-sm text-[#f0f0eb] placeholder:text-[#555555] resize-none outline-none min-h-[24px] max-h-[120px] py-1",
            disabled && "cursor-not-allowed opacity-50"
          )}
        />

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleSend}
          disabled={!canSend}
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all",
            canSend
              ? "bg-[#0055ff] text-white hover:bg-[#3b82f6]"
              : "bg-[#222222] text-[#444444] cursor-not-allowed"
          )}
          aria-label="Send message"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="flex justify-end mt-1.5 mr-1">
        <span
          className={cn(
            "text-[10px] font-mono transition-colors",
            message.length >= MAX_CHARS ? "text-red-400" : "text-[#333333]"
          )}
        >
          {message.length}/{MAX_CHARS}
        </span>
      </div>
    </div>
  );
}