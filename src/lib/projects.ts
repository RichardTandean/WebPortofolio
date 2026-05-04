export interface ProjectStats {
  users?: string;
  stars?: string;
  commits?: string;
  duration?: string;
}

export interface ProjectTestimonial {
  text: string;
  author: string;
  role: string;
}

export interface Project {
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

export const projects: Project[] = [
  {
    title: "Crypto Void",
    subtitle: "AI-Powered Crypto Media Automation",
    category: ["AI & Automation", "Backend"],
    description: "An automated crypto media pipeline that fetches latest crypto news, generates AI images via Flux, creates media-style posts, and auto-publishes to Instagram and Threads. Built with a NestJS backend service orchestrating n8n workflows for end-to-end content automation.",
    images: [],
    tech: ["n8n", "NestJS", "Flux", "TypeScript", "Instagram API"],
    role: "AI Automation Engineer",
    responsibilities: [
      "Architected end-to-end content automation pipeline from news ingestion to social media publishing",
      "Integrated Flux image generation models for contextually relevant crypto visuals",
      "Built NestJS backend service to orchestrate n8n workflows and handle API integrations",
      "Implemented automatic scheduling and posting to Instagram and Threads platforms",
    ],
    challenges: [
      "Managing API rate limits across multiple social platforms while maintaining posting schedules",
      "Optimizing Flux generation costs while maintaining image quality and relevance to crypto news",
      "Handling diverse content formats (images, captions, hashtags) across Instagram and Threads",
    ],
    learnings: [
      "Designing fault-tolerant automation pipelines that gracefully handle API failures",
      "Orchestrating multiple AI services (image generation, news fetching) into a cohesive workflow",
      "Cost optimization strategies for AI API usage in production systems",
    ],
  },
  {
    title: "AI Video Generation Pipeline",
    subtitle: "Automated Content Factory",
    category: ["AI & Automation"],
    description: "A fully automated pipeline that generates AI-powered videos from scratch — combining AI image generation, text-to-speech synthesis, Whisper transcription, and FFMPEG rendering — then auto-uploads the final video to YouTube without human intervention.",
    images: [],
    tech: ["Python", "FFMPEG", "Whisper", "TTS", "Stable Diffusion"],
    role: "AI Pipeline Architect",
    responsibilities: [
      "Designed and built a modular pipeline for automated video content generation",
      "Integrated multiple AI models (TTS, Whisper, image generation) into a cohesive workflow",
      "Orchestrated FFMPEG-based video rendering with synchronized audio and visuals",
      "Implemented automatic YouTube upload with metadata management",
    ],
    challenges: [
      "Ensuring audio-visual synchronization across different AI model outputs",
      "Managing long-running FFMPEG render jobs efficiently without resource exhaustion",
      "Designing a pipeline that gracefully handles failures at any stage without losing progress",
    ],
    learnings: [
      "Architecting multi-stage AI pipelines with failure recovery at each step",
      "Optimizing FFMPEG rendering for batch processing at scale",
      "Integrating diverse AI models (vision, speech, language) into a unified output",
    ],
  },
  {
    title: "EPICS In IEEE",
    subtitle: "An AIoT Based Smart Agricultural System for Pests Detection",
    category: ["Web Apps", "Backend", "IoT"],
    description: "EPICS (Engineering Projects in Community Service) is a global service-learning program by IEEE. We partnered with the Faculty of Agriculture at UGM to help salak farmers in Sleman, Yogyakarta encounter pest issues. We used IoT sensors to monitor temperature, humidity, light, and rainfall, and applied machine learning to predict weather and pest outbreaks. We also developed MySalak, a PWA web app that displays sensor data, prediction results, and weekly fly trap counts (FTD) across all farming areas.",
    images: ["/images/epic/epic1.webp", "/images/epic/epic2.webp", "/images/epic/epic3.webp", "/images/epic/epic4.webp", "/images/epic/epic5.webp"],
    tech: ["ReactJS", "Node.Js", "MySQL", "Firebase", "Arduino", "ESP32", "LoRa"],
    role: "Full Stack Developer & IoT Engineer",
    responsibilities: [
      "Participated in designing and building an IoT device for environmental sensing used in this project.",
      "Conducted site surveys and installed 7 IoT sensors across 3 different plantation locations.",
      "Participated in developing the MySalak application and implemented the notification feature in the app.",
    ],
    stats: {
      duration: "1 year (2023-2024)",
    },
    learnings: [
      "Deploying IoT sensors in real agricultural environments with LoRa communication",
      "Building PWAs that serve farmers with limited connectivity in rural areas",
      "Cross-disciplinary collaboration between engineers and agricultural scientists",
    ],
    testimonial: {
      text: "Richard demonstrated strong technical skills and dedication throughout the EPICS project. His work on the IoT sensors and the MySalak web app was instrumental to our success in helping local farmers.",
      author: "EPICS IEEE Team",
      role: "Project Partners",
    },
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
      "Actively contributed to Agile workflows through daily stand-ups, sprint planning, and regular retrospectives",
    ],
    learnings: [
      "Building offline-first mobile experiences for agricultural field workers",
      "Managing complex state in React Native with Zustand across multiple modules",
    ],
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
      "Participated in Agile ceremonies including daily stand-ups, sprint planning, and retrospectives",
    ],
    learnings: [
      "Building enterprise-grade HR systems with complex business logic on mobile",
      "Designing responsive UI that handles large datasets (employee records, timesheets)",
    ],
  },
  {
    title: "Superfreak Studio",
    subtitle: "3D Printed Furniture & Printing Service",
    category: ["Web Apps"],
    description: "A landing page for Superfreak Studio, a 3d printed furniture and 3d printing service me and my friend started at April 2025.",
    images: ["/images/superfreak/hero-page.webp", "/images/superfreak/superfreak-faq.webp", "/images/superfreak/superfreak-originals.webp"],
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Shadcn UI"],
    role: "Web Developer",
    responsibilities: [
      "Designed and implemented the landing page for Superfreak Studio using Next.js and Tailwind CSS",
    ],
    learnings: [
      "Shipping a production landing page from idea to launch",
      "Optimizing for SEO and performance with Next.js static generation",
    ],
    demo: "https://superfreakstudio.com",
  },
];

export const categories = ["All", "AI & Automation", "Web Apps", "Mobile Apps", "Backend", "IoT"];
