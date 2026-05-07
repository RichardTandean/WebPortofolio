"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { RoleRotator } from "@/components/role-rotator";
import { ProjectCard } from "@/components/project-card";

import { HomeTechStack } from "@/components/home-tech-stack";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-12 lg:gap-20">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-[#f0f0eb] tracking-tight leading-none max-w-full overflow-hidden"
            >
              Richard
              <br />
              Tandean
            </motion.h1>
            <RoleRotator />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm md:text-base text-[#777777] max-w-lg leading-relaxed"
            >
              I architect AI-powered systems, build automation workflows, and
              create content at scale — bridging software engineering with
              artificial intelligence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 sm:gap-6"
            >
              <Link
                href="/contact"
                className="text-sm font-mono text-[#0055ff] hover:text-[#3b82f6] transition-colors inline-flex items-center gap-1.5 py-2 min-h-[44px]"
              >
                Work with me <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/projects"
                className="text-sm font-mono text-[#777777] hover:text-[#f0f0eb] transition-colors inline-flex items-center gap-1.5 py-2 min-h-[44px]"
              >
                View projects <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-5"
          >
            <div className="rule-all p-4 sm:p-5">
              <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-3">
                About me
              </p>
              <p className="text-sm text-[#999999] leading-relaxed mb-4">
                AI-Driven Software Engineer bridging traditional engineering
                with artificial intelligence — building AI-powered systems,
                automating workflows, and creating content at scale.
              </p>
              <Link
                href="/about"
                className="text-xs font-mono text-[#0055ff] hover:text-[#3b82f6] inline-flex items-center gap-1.5 transition-colors py-1 min-h-[44px]"
              >
                Full bio <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="rule-all p-4 sm:p-5">
              <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-3">
                Connect
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href="https://github.com/RichardTandean"
                  target="_blank"
                  className="text-[#777777] hover:text-[#f0f0eb] transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Github className="w-4 h-4" />
                </Link>
                <Link
                  href="https://linkedin.com/in/richardtandean"
                  target="_blank"
                  className="text-[#777777] hover:text-[#f0f0eb] transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="https://instagram.com/richardtandean_"
                  target="_blank"
                  className="text-[#777777] hover:text-[#f0f0eb] transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-xs text-[#555555] mt-3">
                Stocks & Crypto Enthusiast
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-20">
        <div className="rule-top pt-16">
          <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-8">
            Featured work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {featured.map((project, i) => (
              <div
                key={project.title}
                className={i === 1 ? "md:border-l md:border-[#262626]" : ""}
              >
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-[#262626]">
            {rest.map((project, i) => (
              <div
                key={project.title}
                className={
                  i < rest.length - 1 ? "border-r border-[#262626] h-full" : "h-full"
                }
              >
                <ProjectCard project={project} index={i + 2} compact />
              </div>
            ))}
          </div>
          <div className="pt-6 text-right">
            <Link
              href="/projects"
              className="text-xs font-mono text-[#0055ff] hover:text-[#3b82f6] inline-flex items-center gap-1.5 transition-colors py-2 min-h-[44px]"
            >
              All projects <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack + Traits */}
      <HomeTechStack />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <footer className="rule-top">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#444444]">
            © Richard Tandean
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/RichardTandean"
              target="_blank"
              className="text-xs font-mono text-[#555555] hover:text-[#f0f0eb] transition-colors py-1.5 min-h-[44px] flex items-center"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/richardtandean"
              target="_blank"
              className="text-xs font-mono text-[#555555] hover:text-[#f0f0eb] transition-colors py-1.5 min-h-[44px] flex items-center"
            >
              LinkedIn
            </Link>
            <Link
              href="https://instagram.com/richardtandean_"
              target="_blank"
              className="text-xs font-mono text-[#555555] hover:text-[#f0f0eb] transition-colors py-1.5 min-h-[44px] flex items-center"
            >
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
