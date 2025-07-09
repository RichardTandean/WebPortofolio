"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, Users, Code, Timer, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ImagesSlider } from "@/components/ui/images-slider";
import { useState } from "react";

interface ProjectStats {
  users: string;
  stars: string;
  commits: string;
  duration: string;
}

interface ProjectTestimonial {
  text: string;
  author: string;
  role: string;
}

interface Project {
  title: string;
  subtitle?: string;
  category: string[];
  description: string;
  images: string[];
  tech: string[];
  features?: string[];
  stats?: ProjectStats;
  role?: string;
  responsibilities?: string[];
  challenges?: string[];
  learnings?: string[];
  github?: string;
  demo?: string;
  testimonial?: ProjectTestimonial;
}

const projects: Project[] = [
  {
    title: "EPICS In IEEE",
    subtitle: "An AIoT Based Smart Agricultural System for Pests Detection",
    category: ["Web Apps", "Backend", "IoT"],
    description: "EPICS (Engineering Projects in Community Service) is a global service-learning program by IEEE, the world’s largest technical organization focused on using technology to benefit humanity. The program empowers students to develop real-world engineering skills through collaboration with professionals and communities. In this project, we partnered with the Faculty of Agriculture at UGM to help salak farmers in Sleman, Yogyakarta encounter pest issues, especially fruit flies. We used IoT sensors to monitor temperature, humidity, light, and rainfall, and applied machine learning to predict weather and pest outbreaks. We also developed MySalak, a PWA web app that displays sensor data, prediction results, and weekly fly trap counts (FTD) across all farming areas.",
    images: ["/images/epic/epic1.webp", "/images/epic/epic2.webp", "/images/epic/epic3.webp", "/images/epic/epic4.webp", "/images/epic/epic5.webp"],
    tech: ["ReactJS", "Node.Js", "MySQL", "Firebase", "Arduino", "ESP32", "LoRa"],
    role: "Full Stack Developer & IoT Engineer",
    responsibilities: [
      "Participated in designing and building an IoT device for environmental sensing used in this project.",
      "Conducted site surveys and installed 7 IoT sensors across 3 different plantation locations.",
      "Participated in developing the MySalak application and implemented the notification feature in the app."
    ],
    demo: "https://mysalak.com",
  },
  {
    title: "BirdTec",
    subtitle: "Agile Technica",
    category: ["Mobile Apps"],
    description: "A mobile application that is used to help chicken farmers to manage operationals like feed stock, live and dead chickens, and more",
    images: ["/images/birdtec/birdtec1.webp"],
    tech: ["React Native", "TypeScript", "Zustand", "Expo", "NativeBase"],
    features: [
      "Daily Unit Operation Management",
      "Plasma Management",
      "Feed Stock Management",
    ],
    role: "Frontend Developer",
    responsibilities: [
      "Implemented core features for the plasma module, enabling effective registration and management of partner farms",
      "Worked closely with backend developers to ensure seamless API integration and data consistency across the plasma module",
      "Identified and fixed bugs to enhance app stability and user experience on both Android and iOS devices",
      "Actively contributed to Agile workflows through daily stand-ups, sprint planning, and regular retrospectives"
    ]
  },
  {
    title: "TemanHR",
    subtitle: "Agile Technica",
    category: ["Mobile Apps"],
    description: "A cloud base mobile application to help companies simplify their HR and payroll processes.",
    images: ["/images/temanhr/temanhr1.webp", "/images/temanhr/temanhr2.webp"],
    tech: ["React Native", "TypeScript", "Zustand", "Expo", "NativeBase"],
    features: [
      "Employee Attendance",
      "Overtime Management",
      "Timesheets Management",
      "Employee Leaderboards",
      "Automatic Payroll",
    ],
    role: "Frontend Developer",
    responsibilities: [
      "Implemented new UI components and screens based on design specifications using React Native and TypeScript",
      "Collaborated closely with backend developers and project managers to ensure seamless integration of features",
      "Debugged and resolved issues to ensure smooth functionality across both Android and iOS platforms",
      "Participated in Agile ceremonies including daily stand-ups, sprint planning, and retrospectives"
    ]
  },
];

const categories = ["All", "Web Apps", "Mobile Apps", "Backend", "IoT"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" ? true : project.category.includes(selectedCategory)
  );

  return (
    <main className="flex min-h-screen flex-col items-center">
      <BackgroundBeamsWithCollision>
        <section className="w-full px-4 md:px-6 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto space-y-8 md:space-y-16"
          >
            {/* Hero Section */}
            <div className="text-center space-y-2 md:space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-6xl font-bold text-white"
              >
                My <AuroraText>Personal Portfolio</AuroraText>
              </motion.h1>
              <p className="text-sm md:text-base text-white/60 max-w-3xl mx-auto">
                Showcasing my journey through code and creativity. Each project represents a unique challenge and solution.
              </p>
            </div>

            {/* Project Categories */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-white">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-2 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors
                    border border-white/10 backdrop-blur-sm
                    ${selectedCategory === category 
                      ? 'bg-accent text-white border-accent' 
                      : 'bg-white/5 hover:bg-accent hover:text-white'
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="space-y-8 md:space-y-12">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  {/* Project Header */}
                  <div className="text-center mb-4 md:mb-12 space-y-4">
                    <h2 className="text-sm md:text-3xl font-bold text-white mb-0">{project.title}</h2>
                    <span className="text-accent text-sm font-medium">{project.subtitle}</span>
                  </div>

                  {/* Project Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
                    {/* Left Column - Image and Quick Stats */}
                    <div className="space-y-4 md:space-y-8">
                      <div className="relative aspect-video rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                        <ImagesSlider 
                          images={project.images}
                          autoplay={true}
                          direction="down"
                          className="absolute inset-0 w-full h-full rounded-2xl"
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-transparent mix-blend-overlay z-50" />
                        </ImagesSlider>
                      </div>

                      {/* Quick Stats */}
                      {project.stats && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                            <Users className="w-5 h-5 text-accent mb-2" />
                            <p className="text-xs md:text-sm text-white/60">Active Users</p>
                            <p className="text-lg font-semibold text-white">{project.stats.users}</p>
                          </div>
                          <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                            <Star className="w-5 h-5 text-accent mb-2" />
                            <p className="text-xs md:text-sm text-white/60">Github Stars</p>
                            <p className="text-lg font-semibold text-white">{project.stats.stars}</p>
                          </div>
                          <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                            <Code className="w-5 h-5 text-accent mb-2" />
                            <p className="text-xs md:text-sm text-white/60">Commits</p>
                            <p className="text-lg font-semibold text-white">{project.stats.commits}</p>
                          </div>
                          <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                            <Timer className="w-5 h-5 text-accent mb-2" />
                            <p className="text-xs md:text-sm text-white/60">Duration</p>
                            <p className="text-lg font-semibold text-white">{project.stats.duration}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column - Project Details */}
                    <div className="space-y-4 md:space-y-8">
                      <div className="prose prose-invert">
                        <p className="text-xs md:text-base text-white/80">{project.description}</p>
                      </div>

                      {/* Role & Responsibilities */}
                      {project.role && project.responsibilities && (
                        <div className="space-y-2 md:space-y-4">
                          <h3 className="text-sm md:text-xl font-semibold text-white">Role & Responsibilities</h3>
                          <p className="text-xs md:text-base text-accent font-medium">{project.role}</p>
                          <ul className="text-xs md:text-base list-disc list-inside space-y-1 md:space-y-2 text-white/80">
                            {project.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="space-y-4">
                        <h3 className="text-sm md:text-xl font-semibold text-white">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium bg-accent/10 text-accent border border-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      {project.features && (
                        <div className="space-y-4">
                          <h3 className="text-sm md:text-xl font-semibold text-white">Key Features</h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.features?.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0 md:mt-0.5" />
                                <span className="text-xs md:text-base text-white/80">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Testimonial */}
                      {project.testimonial && (
                        <div className="bg-white/5 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-white/10">
                          <p className="text-xs md:text-lg italic text-white/80 mb-4">"{project.testimonial.text}"</p>
                          <div>
                            <p className="font-medium text-xs md:text-base text-white">{project.testimonial.author}</p>
                            <p className="text-xs md:text-sm text-white/60">{project.testimonial.role}</p>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      {(project.github || project.demo) && (
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                          {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs md:text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                          >
                            <Github className="w-4 h-4 md:w-5 md:h-5" />
                            View Source Code
                          </Link>
                          )}
                          {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs md:text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-full transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                            Live Demo
                          </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Challenges & Learnings */}
                  <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.challenges && (
                      <div className="bg-white/5 rounded-2xl p-4 md:p-8 backdrop-blur-sm border border-white/10">
                        <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-6 text-white">Challenges Faced</h3>
                        <ul className="space-y-2 md:space-y-4">
                          {project.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-4 h-4 md:w-6 md:h-6 text-xs md:text-base rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                                {i + 1}
                              </span>
                              <span className="text-xs md:text-base text-white/80">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.learnings && (
                      <div className="bg-white/5 rounded-2xl p-4 md:p-8 backdrop-blur-sm border border-white/10">
                        <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-6 text-white">Key Learnings</h3>
                        <ul className="space-y-2 md:space-y-4">
                          {project.learnings.map((learning, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-4 h-4 md:w-6 md:h-6 text-xs md:text-base rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                                {i + 1}
                              </span>
                              <span className="text-xs md:text-base text-white/80">{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </BackgroundBeamsWithCollision>
    </main>
  );
} 