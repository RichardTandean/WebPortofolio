"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";

const experiences = [
  {
    year: "Dec 2024 - Mar 2025",
    title: "Full Stack Developer",
    company: "PT. Maro Anugrah Jaya",
    description: "Developed MIRA App, a CRM mobile application used by PT. Maro Anugrah Jaya's Sales and Marketing Team."
  },
  {
    year: "May 2024 - Oct 2024",
    title: "Frontend Developer",
    company: "Agile Technica",
    description: "Developed and maintained BirdTec and TemanHR mobile applications using Expo React Native in an Agile development environment."
  },
  {
    year: "Mar 2024 - April 2024",
    title: "Quality Assurance Part Time",
    company: "Avows Technology Indonesia",
    description: "Performed manual testing on a new quiz feature of BRISMART Learning Management System in an Agile development environment."
  }
];

const education = {
  degree: "Bachelor of Engineering",
  university: "Universitas Multimedia Nusantara",
  year: "2021 - 2025",
  achievements: [
    "Graduated with 3.54 GPA",
    "Part of EPICS In IEEE Project (International)",
    "BEM UMN Gen 13",
    "President of STUKM 2023",
    "PIC OMB UMN 2022 & 2023",
    "Part of Teater Katak 2022 - 2023",
  ]
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <BackgroundBeamsWithCollision>
        <section className="w-full px-4 md:px-6 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                  About Me
                </h1>
                <p className="text-sm md:text-xl text-white/80 leading-relaxed">
                  Hi! I'm Richard Tandean, a fresh graduate of Computer Engineering from Universitas Multimedia Nusantara.
                  I'm a <AuroraText>Full Stack Developer</AuroraText> which has the speciality on both Mobile and Web Development,
                  but i also have some experience on IoT Development.
                  I love to learn and believe that i can learn anything just by consistent repetition.
                </p>
                <div className="flex gap-4">
                  <a
                    href="/file/CV_Richard Tandean.pdf"
                    download="CV_Richard Tandean.pdf"
                    className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-sm font-medium text-white transition-colors bg-accent hover:bg-accent/90 rounded-full"
                  >
                    <FileDown className="w-4 h-4" />
                    Download CV
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative aspect-square max-w-md mx-auto lg:ml-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-transparent rounded-3xl -rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-accent/30 to-transparent rounded-3xl rotate-6"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/Richard Tandean1.webp"
                    alt="Richard Tandean"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Journey Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
            >
              {/* Professional Experience */}
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-accent">Professional Journey</h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="relative pl-8 border-l border-accent/30"
                    >
                      <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-accent"></div>
                      <div className="space-y-2">
                        <span className="text-sm text-accent">{exp.year}</span>
                        <h3 className="text-base md:text-lg font-medium text-white mb-0">{exp.title}</h3>
                        <p className="text-sm md:text-base text-white/60">{exp.company}</p>
                        <p className="text-xs md:text-sm text-white/80">{exp.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education & Skills */}
              <div className="space-y-8">
                <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6">Education</h2>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-white">{education.degree}</h3>
                    <p className="text-white/60">{education.university}</p>
                    <p className="text-sm text-accent">{education.year}</p>
                    <ul className="list-disc list-inside text-sm text-white/80 space-y-2">
                      {education.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6">What I Love</h2>
                  <p className="text-white/80 leading-relaxed">
                    Beyond coding, I'm passionate about creating intuitive user experiences and solving complex technical challenges. I thrive in collaborative environments and enjoy mentoring fellow developers. When I'm not coding, you can find me [Your Hobbies/Interests].
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-accent">My Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Innovation",
                    description: "Always exploring new technologies and approaches to create better solutions."
                  },
                  {
                    title: "Quality",
                    description: "Committed to writing clean, maintainable code and delivering polished products."
                  },
                  {
                    title: "Collaboration",
                    description: "Believe in the power of teamwork and open communication."
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                  >
                    <h3 className="text-xl font-medium mb-3 text-white">{value.title}</h3>
                    <p className="text-sm text-white/80">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
      </BackgroundBeamsWithCollision>
    </main>
  );
} 