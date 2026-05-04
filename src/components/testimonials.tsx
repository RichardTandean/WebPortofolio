"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

const testimonials = projects
  .filter((p) => p.testimonial)
  .map((p) => ({
    text: p.testimonial!.text,
    author: p.testimonial!.author,
    role: p.testimonial!.role,
  }));

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-20">
      <div className="rule-top pt-16">
        <p className="text-xs font-mono text-[#555555] uppercase tracking-widest mb-12 text-center">
          What People Say
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rule-all p-6 ${i % 2 !== 0 ? "md:border-l-0" : ""}`}
            >
              <p className="text-sm text-[#999999] leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-display font-semibold text-[#f0f0eb]">
                  {t.author}
                </p>
                <p className="text-xs text-[#555555]">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
