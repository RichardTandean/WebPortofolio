"use client";

import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Github, Linkedin, Instagram, MessageSquare, Mail } from "lucide-react";
import Link from "next/link";
// import axios from "axios";
import { useState } from "react";
import { Toast } from "@/components/ui/toast";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

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
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  //   reset,
  // } = useForm<FormData>({
  //   resolver: zodResolver(formSchema),
  // });

  // const onSubmit = async (data: FormData) => {
  //   try {
  //     await axios.post('/api/messages', data);
  //     reset();
  //     setToastType('success');
  //     setToastMessage('Message sent successfully!');
  //     setShowToast(true);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     setToastType('error');
  //     setToastMessage('Failed to send message. Please try again.');
  //     setShowToast(true);
  //   }
  // };

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2 md:space-y-6"
              >
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 text-white">Contact Information</h2>
                  <p className="text-xs md:text-base text-white/60">
                    Feel free to reach out through any of these platforms
                  </p>
                </div>
                <div className="space-y-0">
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
{/* 
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-6">
                  <div className="space-y-1 md:space-y-2">
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-white">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className="text-white w-full px-4 py-2 text-xs md:text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-xs md:text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className="text-white w-full px-4 py-2 text-xs md:text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-xs md:text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-white">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={5}
                      className="text-white w-full px-4 py-2 text-xs md:text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your message..."
                    />
                    {errors.message && (
                      <p className="text-xs md:text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 text-sm font-medium text-white transition-colors bg-accent hover:bg-accent/90 rounded-full disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </motion.div> */}
            </div>
          </motion.div>
        </section>
      </BackgroundBeamsWithCollision>

      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </main>
  );
} 