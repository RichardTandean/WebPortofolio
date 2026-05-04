"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const techByCategory = {
  "AI & Automation": ["n8n", "OpenAI", "Flux", "Whisper", "TTS", "FFMPEG", "Stable Diffusion", "NestJS"],
  Frontend: ["React", "Next.js", "TypeScript", "React Native", "Expo", "JavaScript", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express", "MySQL", "PHP", "Python", "Flask"],
  "Tools & DevOps": ["Git", "Docker", "Linux", "Firebase"],
};

const traits = [
  "Problem Solving",
  "Communication",
  "Adaptability",
];

export function HomeTechStack() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-20">
      <div className="rule-top pt-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_300px] gap-12 lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-8"
            >
              Tech stack
            </motion.p>
            <div className="space-y-8">
              {Object.entries(techByCategory).map(([category, techs], i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 1) * 0.1 }}
                >
                  <p className="text-xs md:text-[10px] font-mono text-[#444444] uppercase tracking-widest mb-3">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1.5">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm text-[#777777] font-sans"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-6"
            >
              <Link
                href="/skills"
                className="text-xs font-mono text-[#0055ff] hover:text-[#3b82f6] inline-flex items-center gap-1.5 transition-colors py-2 min-h-[44px]"
              >
                Full skills <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-8"
            >
              Traits
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-sm text-[#777777] py-1"
                >
                  {trait}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
