"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, MessageSquare } from "lucide-react";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { WordRotate } from "@/components/magicui/word-rotate";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/RichardTandean",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/richardtandean",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/richardtandean_",
    icon: Instagram,
  },
];

const technologies = [
  "React", "Next.js", "ReactJS", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MySQL", "Docker"
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0b0924]">
      <BackgroundBeamsWithCollision>
        <section className="flex flex-col items-center justify-center min-h-screen w-full px-4 md:px-6 py-12 md:py-24">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 text-center"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white pt-8 sm:pt-0 mb-0">
                Hi, I'm <span className="text-accent">Richard Tandean</span>
              </h1>
              <WordRotate 
                words={["Fullstack Developer", "React Native Developer"]} 
                duration={4000}
                className="text-lg md:text-xl lg:text-3xl text-white/80"
              />
              <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto mb-2">
                I build exceptional digital experiences that combine elegant design with powerful functionality.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <InteractiveHoverButton
                  className="bg-purple-600 w-[50%] sm:w-full sm:w-auto px-4 md:px-8 py-2 md:py-4 text-sm md:text-base font-medium text-white transition-colors border border-white/20 hover:bg-purple-700/50 rounded-full"
                >
                  <Link 
                    href="/contact"
                  >
                    Get in Touch
                  </Link>
                </InteractiveHoverButton>
                <InteractiveHoverButton
                  className="w-[50%] sm:w-full sm:w-auto px-4 md:px-8 py-2 md:py-4 text-sm md:text-base font-medium text-white transition-colors border border-white/20 hover:bg-white/30 rounded-full"
                >
                  <Link
                    href="/projects"
                  >
                    View Projects
                  </Link>
                </InteractiveHoverButton>
              </div>

              <Dock>
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <DockIcon key={link.name}>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-white/60 hover:text-white transition-colors"
                      >
                        <Icon className="w-6 h-6" />
                      </Link>
                    </DockIcon>
                  );
                })}
              </Dock>

              <div>
                <h3 className="text-sm md:text-base text-white/40 mb-0">Tech Stack</h3>
                <InfiniteMovingCards
                  items={technologies.map((tech) => ({
                    tech: tech,
                  }))}
                  direction="right"
                  speed="slow"
                  pauseOnHover={true}
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </BackgroundBeamsWithCollision>
    </main>
  );
}
