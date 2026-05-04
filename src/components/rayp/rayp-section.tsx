"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { ChatInterface } from "./chat-interface";

export function RaypSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-20">
      <div className="rule-top pt-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#0055ff]/20 flex items-center justify-center">
            <Bot className="w-5 h-5 text-[#0055ff]" />
          </div>
          <div>
            <p className="text-xs font-mono text-[#555555] uppercase tracking-widest">
              AI Assistant
            </p>
            <h2 className="text-2xl font-display font-bold text-[#f0f0eb] tracking-tight">
              Ask Rayp
            </h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rule-all bg-[#0d0d0d] h-[600px] flex flex-col"
        >
          <div className="flex-1 overflow-hidden">
            <ChatInterface />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
