"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-sm">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-12 py-4 rule-bottom">
        <Link
          href="/"
          className="text-lg font-display font-bold text-accent tracking-tight py-2 min-h-[44px] flex items-center"
        >
          RT
        </Link>

        {/* Desktop nav — only on lg+ to keep hamburger on tablets */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-mono transition-colors relative pb-1 py-2 min-h-[44px] flex items-center",
                pathname === link.href
                  ? "text-[#f0f0eb] after:absolute after:-bottom-[5px] after:left-0 after:w-full after:h-[2px] after:bg-accent"
                  : "text-[#777777] hover:text-[#f0f0eb]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger — visible on lg:hidden */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#777777] hover:text-[#f0f0eb] transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0d0d0d] border-b border-[#262626]"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block text-base font-mono transition-colors py-3 min-h-[44px] flex items-center",
                    pathname === link.href
                      ? "text-[#f0f0eb]"
                      : "text-[#777777] hover:text-[#f0f0eb]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
