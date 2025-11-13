"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, MessageSquare, Mail } from "lucide-react";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:richard123tandean@gmail.com",
    icon: Mail,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6282372736367",
    icon: MessageSquare,
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
  }
];

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <BackgroundBeamsWithCollision>
        <section className="w-full px-4 md:px-6 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Get in Touch</h1>
              <p className="text-sm md:text-base text-white/60">Let's work together</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 text-white">Contact Information</h2>
                <p className="text-xs md:text-base text-white/60">
                  Feel free to reach out through any of these platforms
                </p>
              </div>
              <div className="space-y-0 flex flex-col items-center">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/60 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-xs md:text-base">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </section>
      </BackgroundBeamsWithCollision>
    </main>
  );
} 