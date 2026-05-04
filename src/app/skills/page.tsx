"use client";

import { motion } from "framer-motion";

const technicalSkills = [
  {
    category: "AI & Automation",
    skills: ["n8n", "OpenAI", "Flux", "Whisper", "TTS", "FFMPEG", "Stable Diffusion", "NestJS"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "React Native", "Expo", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MySQL", "PHP", "Python", "Flask"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "Linux", "Firebase"],
  },
];

const professionalTraits = [
  { name: "Problem Solving", description: "Analytical thinking and creative solution finding" },
  { name: "Communication", description: "Clear and effective verbal and written communication" },
  { name: "Adaptability", description: "Quick learning and flexibility in dynamic environments" },
];

const interests = [
  {
    label: "Financial Markets",
    description: "Active follower of stock and crypto markets. Enthusiast in technical analysis and market trend interpretation.",
  },
  {
    label: "AI Content Creation",
    description: "Passionate about leveraging AI for creative content — from image generation to automated multi-platform publishing pipelines.",
  },
];

export default function Skills() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-[#f0f0eb] tracking-tight mb-2">
            Skills
          </h1>
          <p className="text-sm text-[#777777] max-w-xl">
            Technologies, tools, and professional strengths.
          </p>
        </div>

        <div className="rule-top pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px] gap-16 lg:gap-24">
            {/* Technical Skills */}
            <div>
              <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-10">
                Technical
              </p>
              <div className="space-y-10">
                {technicalSkills.map((group, gi) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 }}
                  >
                    <p className="text-xs md:text-[11px] font-mono text-[#444444] uppercase tracking-widest mb-3">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm text-[#777777] font-sans"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Professional + Interests */}
            <div className="space-y-12">
              <div>
                <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-6">
                  Professional Traits
                </p>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                  {professionalTraits.map((trait, i) => (
                    <motion.div
                      key={trait.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="rule-all p-3 sm:p-4"
                    >
                      <h3 className="text-sm font-display font-semibold text-[#f0f0eb] mb-1">
                        {trait.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#777777] leading-relaxed">
                        {trait.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-6">
                  Beyond Code
                </p>
                <div className="space-y-3">
                  {interests.map((interest, i) => (
                    <motion.div
                      key={interest.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="rule-all p-3 sm:p-4"
                    >
                      <h3 className="text-sm font-display font-semibold text-[#f0f0eb] mb-1">
                        {interest.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#777777] leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {interest.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
