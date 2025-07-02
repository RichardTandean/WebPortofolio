"use client";

import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AuroraText } from "@/components/magicui/aurora-text";
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaGitAlt, 
  FaLinux,
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiExpo,
  SiBootstrap,
  SiFirebase,
  SiMysql,
  SiPhp,
  SiPython,
  SiFlask,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const technicalSkills = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: TbBrandReactNative },
      { name: "Expo", icon: SiExpo },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MySQL", icon: SiMysql },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Docker", icon: FaDocker },
      { name: "Linux", icon: FaLinux },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
];

const softSkills = [
  {
    name: "Leadership",
    description: "Leading teams and projects with clear vision and direction",
  },
  {
    name: "Problem Solving",
    description: "Analytical thinking and creative solution finding",
  },
  {
    name: "Communication",
    description: "Clear and effective verbal and written communication",
  },
  {
    name: "Teamwork",
    description: "Collaborative work and team synergy building",
  },
  {
    name: "Time Management",
    description: "Efficient prioritization and deadline management",
  },
  {
    name: "Adaptability",
    description: "Quick learning and flexibility in dynamic environments",
  },
];

function SkillIcon({ skill, index }: { skill: any; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col items-center gap-2"
    >
      <div className="relative w-12 h-12 bg-white/5 rounded-xl p-2.5 group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110">
        <Icon className="w-full h-full text-accent" />
      </div>
      <span className="text-xs text-white/60 group-hover:text-white transition-colors text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

function CategorySection({ category, index }: { category: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="space-y-6"
    >
      <h2 className="text-lg font-semibold text-accent">{category.name}</h2>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
        {category.skills.map((skill: any, skillIndex: number) => (
          <SkillIcon
            key={skill.name}
            skill={skill}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SoftSkillCard({ skill, index }: { skill: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-accent/5 transition-colors duration-300"
    >
      <h3 className="text-base font-medium text-white mb-2">{skill.name}</h3>
      <p className="text-sm text-white/60">{skill.description}</p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <BackgroundBeamsWithCollision>
        <section className="w-full px-4 md:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto space-y-16"
          >
            {/* Technical Skills Section */}
            <div>
              <div className="text-center space-y-2 mb-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-bold text-white"
                >
                  Technical <AuroraText>Skills</AuroraText>
                </motion.h2>
                <p className="text-sm md:text-base text-white/60">
                  Technologies and tools I work with
                </p>
              </div>

              <div className="space-y-12">
                {technicalSkills.map((category, index) => (
                  <CategorySection key={category.name} category={category} index={index} />
                ))}
              </div>
            </div>

            {/* Soft Skills Section */}
            <div>
              <div className="text-center space-y-2 mb-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-bold text-white"
                >
                  Professional <AuroraText>Traits</AuroraText>
                </motion.h2>
                <p className="text-sm md:text-base text-white/60">
                  Core strengths and characteristics
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {softSkills.map((skill, index) => (
                  <SoftSkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </BackgroundBeamsWithCollision>
    </main>
  );
} 