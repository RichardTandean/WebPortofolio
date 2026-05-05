"use client";

import { useRef, useEffect } from "react";
import { Bot } from "lucide-react";
import { useChatStore } from "@/lib/chat-store";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { TypingIndicator } from "./typing-indicator";
import { SuggestedPrompts } from "./suggested-prompts";

export function ChatInterface() {
  const messages = useChatStore((state) => state.messages);
  const isTyping = useChatStore((state) => state.isTyping);
  const addMessage = useChatStore((state) => state.addMessage);
  const setTyping = useChatStore((state) => state.setTyping);
  const getHistoryForAI = useChatStore((state) => state.getHistoryForAI);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat messages to bottom (scoped to container only)
  useEffect(() => {
    const container = containerRef.current?.querySelector(".overflow-y-auto");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (content: string) => {
    // Add user message
    addMessage({ role: "user", content });
    setTyping(true);
    
    try {
      // Get conversation history for context
      const history = getHistoryForAI();
      
      // Call API with full conversation context
      const response = await fetch("/api/rayp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: content,
          history: history, // Send full conversation history
        }),
      });

      const data = await response.json();
      
      if (response.ok && data.response) {
        addMessage({
          role: "assistant",
          content: data.response,
        });
      } else {
        addMessage({
          role: "assistant",
          content: "Sorry, I couldn't process your request. Please try again.",
        });
      }
    } catch {
      addMessage({
        role: "assistant",
        content: "Sorry, I'm having trouble connecting. Please try again later.",
      });
    } finally {
      setTyping(false);
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <div ref={containerRef} className="flex flex-col h-full">
      {/* Messages Area - Scrollable */}
      <div className="flex-1 overflow-y-auto space-y-4 px-4 py-4 min-h-0">
        {!hasMessages ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#0055ff]/10 flex items-center justify-center">
              <Bot className="w-6 h-6 text-[#0055ff]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-display font-semibold text-[#f0f0eb]">
                Hi! I&apos;m Rayp
              </h3>
              <p className="text-sm text-[#777777] max-w-sm">
                Richard&apos;s AI assistant. I can tell you about his projects, experience, or skills. What would you like to know?
              </p>
            </div>
            <SuggestedPrompts onSelect={handleSend} />
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && (
              <div className="pl-4">
                <TypingIndicator />
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-[#262626] px-3 py-3 flex-shrink-0">
        <ChatInput
          onSend={handleSend}
          disabled={isTyping}
          placeholder={isTyping ? "Rayp is typing..." : "Ask Rayp anything..."}
        />
      </div>
    </div>
  );
}
