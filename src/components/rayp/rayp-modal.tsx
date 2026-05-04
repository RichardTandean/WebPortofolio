"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, ArrowLeft } from "lucide-react";
import { useChatStore } from "@/lib/chat-store";
import { ChatInterface } from "./chat-interface";

export function RaypModal() {
  const isOpen = useChatStore((state) => state.isWidgetOpen);
  const toggleWidget = useChatStore((state) => state.toggleWidget);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0d0d0d] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#262626] safe-area-top">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleWidget}
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#555555] hover:text-[#f0f0eb] transition-colors -ml-2"
                aria-label="Back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0055ff]/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#0055ff]" />
                </div>
                <div>
                  <h3 className="text-sm font-display font-semibold text-[#f0f0eb]">
                    Rayp
                  </h3>
                  <p className="text-[10px] text-[#555555]">Richard&apos;s AI Assistant</p>
                </div>
              </div>
            </div>
            <button
              onClick={toggleWidget}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#555555] hover:text-[#f0f0eb] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat */}
          <div className="flex-1 overflow-hidden">
            <ChatInterface />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
