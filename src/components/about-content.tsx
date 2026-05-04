"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    year: "Jul 2025 — Now",
    title: "AI Automation for Content Creation and Software Developer",
    company: "Global Investment Research Lab (Korea)",
    companyUrl: "https://www.glirlb.com/",
    description:
      "Develop an end to end content creation automation for YouTube Shorts and a web app untuk memantau kinerja automation.",
  },
  {
    year: "Dec 2024 — Mar 2025",
    title: "Full Stack Developer",
    company: "PT. Maro Anugrah Jaya",
    companyUrl: "https://www.instagram.com/ptmaroanugrahjaya/",
    description:
      "Developed MIRA App, a CRM mobile application used by PT. Maro Anugrah Jaya's Sales and Marketing Team.",
  },
  {
    year: "May 2024 — Oct 2024",
    title: "Frontend Developer",
    company: "Agile Technica",
    companyUrl: "https://www.agiletechnica.com/",
    description:
      "Developed and maintained BirdTec and TemanHR mobile applications using Expo React Native in an Agile development environment.",
  },
  {
    year: "Mar 2024 — Apr 2024",
    title: "Quality Assurance Part Time",
    company: "Avows Technology Indonesia",
    companyUrl: "https://avowstech.com/",
    description:
      "Performed manual testing on a new quiz feature of BRISMART Learning Management System in an Agile development environment.",
  },
];

const education = {
  degree: "Bachelor of Engineering",
  university: "Universitas Multimedia Nusantara",
  year: "2021 — 2025",
  achievements: [
    "Graduated with 3.54 GPA",
    "Part of EPICS In IEEE Project (International)",
    "BEM UMN Gen 13",
    "President of STUKM 2023",
    "PIC OMB UMN 2022 & 2023",
    "Part of Teater Katak 2022 - 2023",
  ],
};

const values = [
  {
    title: "AI-First Thinking",
    description:
      "Leveraging artificial intelligence as a force multiplier — always looking for smarter ways to solve problems.",
  },
  {
    title: "Quality",
    description:
      "Committed to writing clean, maintainable code and delivering polished products.",
  },
  {
    title: "Collaboration",
    description:
      "Believe in the power of teamwork and open communication.",
  },
];

interface AboutContentProps {
  cvPath: string;
  cvFilename: string;
}

export function AboutContent({ cvPath, cvFilename }: AboutContentProps) {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-20">
        {/* Hero: Photo + Bio */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rule-all overflow-hidden max-h-[320px] sm:max-h-none"
            style={{ aspectRatio: '3/4' }}
          >
            <Image
              src="/images/Richard Tandean1.webp"
              alt="Richard Tandean"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 380px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#f0f0eb] tracking-tight">
              About
            </h1>
            <p className="text-sm md:text-base text-[#999999] leading-relaxed max-w-xl">
              Hi! I&apos;m Richard Tandean, a Computer Engineering graduate
              from Universitas Multimedia Nusantara. I&apos;m an AI-Driven
              Software Engineer who bridges traditional software engineering
              with artificial intelligence — building AI-powered systems,
              automating workflows, and creating content at scale. From IoT
              sensors in the field to AI pipelines in the cloud, I ship
              solutions that work.
            </p>
            <p className="text-sm md:text-base text-[#999999] leading-relaxed max-w-xl">
              Beyond code, I&apos;m passionate about AI experimentation,
              automation, and finding ways to make technology work harder. I
              follow crypto and stock markets closely and enjoy analyzing
              market trends. When I&apos;m not at my desk, you&apos;ll find
              me at the gym or exploring new food spots with friends.
            </p>
            <div>
              <a
                href={cvPath}
                download={cvFilename}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#0055ff] hover:text-[#3b82f6] transition-colors py-2 min-h-[44px]"
              >
                <FileDown className="w-3.5 h-3.5" />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Experience + Education */}
        <div className="rule-top pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-8">
                Experience
              </p>
              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-6 border-l border-[#262626]"
                  >
                    <div className="absolute left-0 top-0 w-1.5 h-1.5 -translate-x-[3px] bg-[#0055ff]" />
                    <span className="text-xs md:text-[11px] font-mono text-[#555555]">
                      {exp.year}
                    </span>
                    <h3 className="text-base font-display font-semibold text-[#f0f0eb] mt-1 mb-0.5">
                      {exp.title}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#777777] hover:text-[#0055ff] transition-colors inline-block py-1"
                    >
                      {exp.company}
                    </a>
                    <p className="text-sm text-[#999999] leading-relaxed mt-2">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-8">
                Education
              </p>
              <div className="rule-all p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-display font-semibold text-[#f0f0eb]">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-[#777777]">{education.university}</p>
                  <p className="text-xs font-mono text-[#555555] mt-1">
                    {education.year}
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {education.achievements.map((a, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#999999] flex items-start gap-2"
                    >
                      <span className="text-[#0055ff] mt-1.5 block w-1 h-1 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="rule-top mt-16 pt-16">
          <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-8 text-center">
            Values
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rule-all p-6 ${i > 0 ? "sm:border-l-0" : ""} ${
                  i >= 2 ? "lg:border-l-0" : ""
                }`}
              >
                <p className="text-[11px] font-mono text-[#555555] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-base font-display font-semibold text-[#f0f0eb] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#999999] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
