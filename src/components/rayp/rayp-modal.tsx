"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X } from "lucide-react";
import { useChatStore } from "@/lib/chat-store";
import { ChatInterface } from "./chat-interface";

export function RaypModal() {
  const isOpen = useChatStore((state) => state.isWidgetOpen);
  const hasSeenPopup = useChatStore((state) => state.hasSeenPopup);
  const toggleWidget = useChatStore((state) => state.toggleWidget);
  const openWidget = useChatStore((state) => state.openWidget);

  return (
    <>
      {/* Welcome Popup */}
      <AnimatePresence>
        {!hasSeenPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="fixed bottom-24 right-4 left-4 z-[60] max-w-[260px] ml-auto"
          >
            <div className="bg-[#1a1a1a] border border-[#333333] rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-sm text-[#f0f0eb] leading-relaxed">
                Hi, I&apos;m Rayp. Richard&apos;s personal assistant. You can ask me anything about him!
              </p>
            </div>
            <div className="flex justify-end mr-5">
              <div className="w-3 h-3 bg-[#1a1a1a] border-r border-b border-[#333333] rotate-45 -mt-[6px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openWidget}
          className="fixed bottom-6 right-4 z-50 w-14 h-14 bg-[#0055ff] hover:bg-[#3b82f6] rounded-full flex items-center justify-center shadow-lg transition-colors"
          aria-label="Open Rayp AI Assistant"
        >
          <Bot className="w-6 h-6 text-white" />
        </motion.button>
      )}

      {/* Bottom Sheet Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleWidget}
              className="fixed inset-0 z-[90] bg-black/60"
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0d0d0d] flex flex-col shadow-2xl"
              style={{ maxHeight: "85vh", borderRadius: "20px 20px 0 0" }}
            >
              {/* Drag Handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-[#333333]" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#262626]">
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
                <button
                  onClick={toggleWidget}
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#555555] hover:text-[#f0f0eb] transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat */}
              <div className="flex-1 overflow-hidden min-h-0">
                <ChatInterface />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}