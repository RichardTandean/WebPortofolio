"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasDetails = !!(
    project.role ||
    project.responsibilities ||
    project.challenges ||
    project.features
  );

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="rule-all p-3 sm:p-5 h-full flex flex-col"
      >
        <p className="text-xs font-mono text-[#0055ff] mb-2">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="text-sm font-display font-semibold text-[#f0f0eb] mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-[#777777] leading-relaxed mb-3 line-clamp-2">
          {project.subtitle}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[10px] sm:text-[11px] font-mono text-[#555555]"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rule-all"
    >
      {project.images.length > 0 ? (
        <div className="relative aspect-video sm:aspect-[21/9]">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="aspect-video sm:aspect-[21/9] bg-[#141414] flex items-center justify-center">
          <span className="text-sm font-mono text-[#444444]">{project.title}</span>
        </div>
      )}
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-mono text-[#0055ff]">
            {String(index + 1).padStart(2, "0")}
          </p>
          <span className="text-[10px] sm:text-[11px] font-mono text-[#555555] uppercase tracking-widest">
            {project.category[0]}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-display font-bold text-[#f0f0eb] mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-[#777777] mb-2">{project.subtitle}</p>
        <p className="text-sm text-[#999999] leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-[#777777] bg-[#141414] px-1.5 sm:px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        {hasDetails && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0055ff] hover:text-[#3b82f6] transition-colors py-1.5 min-h-[44px]"
            >
              {expanded ? "Collapse" : "View details"}
              <ChevronDown
                className={`w-3 h-3 transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={false}
              animate={{ height: expanded ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div ref={contentRef} className="pt-6 space-y-4">
                {project.role && (
                  <div>
                    <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-1">
                      Role
                    </p>
                    <p className="text-sm text-[#f0f0eb]">{project.role}</p>
                  </div>
                )}
                {project.responsibilities && (
                  <div>
                    <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-2">
                      Responsibilities
                    </p>
                    <ul className="space-y-1.5">
                      {project.responsibilities.map((r, i) => (
                        <li
                          key={i}
                          className="text-sm text-[#999999] flex items-start gap-2"
                        >
                          <span className="text-[#0055ff] mt-1.5 block w-1 h-1 rounded-full flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.features && (
                  <div>
                    <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-2">
                      Key Features
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((f, i) => (
                        <li
                          key={i}
                          className="text-sm text-[#999999] flex items-center gap-2"
                        >
                          <ArrowRight className="w-3 h-3 text-[#0055ff] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.challenges && (
                  <div>
                    <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-2">
                      Challenges
                    </p>
                    <ul className="space-y-1.5">
                      {project.challenges.map((c, i) => (
                        <li
                          key={i}
                          className="text-sm text-[#999999] flex items-start gap-2"
                        >
                          <span className="text-[#0055ff] font-mono text-xs mt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.learnings && (
                  <div>
                    <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-2">
                      Key Learnings
                    </p>
                    <ul className="space-y-1.5">
                      {project.learnings.map((l, i) => (
                        <li
                          key={i}
                          className="text-sm text-[#999999] flex items-start gap-2"
                        >
                          <span className="text-[#0055ff] font-mono text-xs mt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.stats && (
                  <div>
                    <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-2">
                      Project Stats
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {project.stats.users && (
                        <span className="text-sm text-[#999999]">
                          <span className="text-[#f0f0eb] font-mono">{project.stats.users}</span> users
                        </span>
                      )}
                      {project.stats.duration && (
                        <span className="text-sm text-[#999999]">
                          <span className="text-[#f0f0eb] font-mono">{project.stats.duration}</span>
                        </span>
                      )}
                    </div>
                  </div>
                )}
                {(project.github || project.demo) && (
                  <div className="flex gap-4 pt-2">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0055ff] hover:text-[#3b82f6] transition-colors py-1 min-h-[44px]"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0055ff] hover:text-[#3b82f6] transition-colors py-1 min-h-[44px]"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                        Live Demo
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
}
