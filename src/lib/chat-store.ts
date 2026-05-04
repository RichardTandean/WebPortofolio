"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface ChatState {
  // Messages
  messages: Message[];
  lastActivity: number;
  
  // UI State
  isWidgetOpen: boolean;
  isTyping: boolean;
  
  // Actions
  addMessage: (message: Omit<Message, "id" | "timestamp">) => void;
  setTyping: (typing: boolean) => void;
  toggleWidget: () => void;
  openWidget: () => void;
  closeWidget: () => void;
  clearMessages: () => void;
  checkExpiration: () => void;
  getHistoryForAI: () => { role: string; content: string }[];
}

// Auto-clear history after 5 minutes of inactivity
const EXPIRATION_MINUTES = 5;
const EXPIRATION_MS = EXPIRATION_MINUTES * 60 * 1000;

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      // Initial state
      messages: [],
      lastActivity: Date.now(),
      isWidgetOpen: false,
      isTyping: false,

      // Add a message
      addMessage: (message) => {
        const newMessage: Message = {
          ...message,
          id: Math.random().toString(36).substring(7),
          timestamp: Date.now(),
        };
        set((state) => ({
          messages: [...state.messages, newMessage],
          lastActivity: Date.now(),
        }));
      },

      // Set typing state
      setTyping: (typing) => set({ isTyping: typing }),

      // Toggle widget
      toggleWidget: () => set((state) => ({ isWidgetOpen: !state.isWidgetOpen })),
      openWidget: () => set({ isWidgetOpen: true }),
      closeWidget: () => set({ isWidgetOpen: false }),

      // Clear messages manually
      clearMessages: () => set({ messages: [], lastActivity: Date.now() }),

      // Check and clear expired history
      checkExpiration: () => {
        const state = get();
        const now = Date.now();
        const timeSinceLastActivity = now - state.lastActivity;
        
        if (timeSinceLastActivity > EXPIRATION_MS) {
          console.log("[Rayp] History expired, clearing messages");
          set({ messages: [], lastActivity: now });
        }
      },

      // Get formatted history for AI context (last 20 messages for context window)
      getHistoryForAI: () => {
        const state = get();
        // Return last 20 messages to stay within token limits
        return state.messages.slice(-20).map((m) => ({
          role: m.role,
          content: m.content,
        }));
      },
    }),
    {
      name: "rayp-chat-storage",
      partialize: (state) => ({
        messages: state.messages,
        lastActivity: state.lastActivity,
      }),
    }
  )
);
