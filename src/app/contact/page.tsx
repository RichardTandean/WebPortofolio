"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Linkedin, Instagram, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

const directLinks = [
  {
    name: "Email",
    href: "mailto:richard123tandean@gmail.com",
    icon: Mail,
    value: "richard123tandean@gmail.com",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6282372736367",
    icon: MessageSquare,
    value: "+62 823-7273-6367",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/richardtandean",
    icon: Linkedin,
    value: "/in/richardtandean",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/richardtandean_",
    icon: Instagram,
    value: "@richardtandean_",
  },
];

type SubmitState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitState === "error" || submitState === "success") {
      setSubmitState("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Try emailing me directly.");
        setSubmitState("error");
        return;
      }

      setSubmitState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMessage("Network error. Please try again or email me directly.");
      setSubmitState("error");
    }
  };

  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-20">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-[#f0f0eb] tracking-tight mb-2">
            Contact
          </h1>
          <p className="text-sm text-[#777777] max-w-xl">
            Have a project in mind? Let&apos;s build something great.
          </p>
        </div>

        <div className="rule-top pt-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-1.5">
                <label className="text-xs md:text-[11px] font-mono text-[#555555] uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-[#262626] py-3 text-sm text-[#f0f0eb] placeholder:text-[#666666] focus:outline-none focus:border-[#0055ff] focus:ring-1 focus:ring-[#0055ff]/30 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs md:text-[11px] font-mono text-[#555555] uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b border-[#262626] py-3 text-sm text-[#f0f0eb] placeholder:text-[#666666] focus:outline-none focus:border-[#0055ff] focus:ring-1 focus:ring-[#0055ff]/30 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs md:text-[11px] font-mono text-[#555555] uppercase tracking-widest">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-transparent border-b border-[#262626] py-3 text-sm text-[#f0f0eb] placeholder:text-[#666666] focus:outline-none focus:border-[#0055ff] focus:ring-1 focus:ring-[#0055ff]/30 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs md:text-[11px] font-mono text-[#555555] uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-[#262626] py-3 text-sm text-[#f0f0eb] placeholder:text-[#666666] focus:outline-none focus:border-[#0055ff] focus:ring-1 focus:ring-[#0055ff]/30 transition-colors resize-none"
                />
              </div>

              {submitState === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-green-500"
                >
                  <CheckCircle className="w-4 h-4" />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {submitState === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle className="w-4 h-4" />
                  {errorMessage}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={submitState === "sending"}
                className="inline-flex items-center gap-1.5 text-sm font-mono text-[#0055ff] hover:text-[#3b82f6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed py-2 min-h-[44px]"
              >
                {submitState === "sending" ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </motion.form>

            {/* Direct Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-5"
            >
              <p className="text-xs font-mono text-[#555555] uppercase tracking-widest">
                Or reach me directly
              </p>
              <div className="space-y-3">
                {directLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3.5 min-h-[44px] border-b border-[#262626] hover:border-[#444444] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-3.5 h-3.5 text-[#555555] group-hover:text-[#f0f0eb] transition-colors" />
                        <span className="text-xs font-mono text-[#777777] group-hover:text-[#f0f0eb] transition-colors">
                          {link.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-[11px] text-[#555555] truncate max-w-[160px]">
                          {link.value}
                        </span>
                        <ArrowRight className="w-3 h-3 text-[#444444] group-hover:text-[#f0f0eb] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
