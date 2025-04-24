"use client";

import { motion } from "framer-motion";
import { Youtube, Github } from "lucide-react";

import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  source: string;
  youtubeLink?: string;
  githubLink?: string;
  availability: string;
}

const project: Project = {
  id: "wallpaper-app",
  title: "Wallpaper App",
  description: "Build fully functional Wallpaper App in React Native",
  longDescription:
    "In this course, you'll build a fully functional wallpaper app using React Native. Learn about Expo Router, Reanimated, responsive layouts, masonry grids, modals, image caching, media sharing, and cross-platform techniques.",
  image: "/projects/wallpaper-app.png",
  tags: ["React Native", "Reanimated", "Expo"],
  source: "YouTube",
  youtubeLink: "https://youtube.com/watch?v=example",
  githubLink: "https://github.com/example/wallpaper-app",
  availability: "Available on YouTube. Coming soon to this platform."
};

// ========== Reusable Styled Components ==========

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-slate-50 dark:bg-slate-900 rounded-xl transition-all duration-300 hover:shadow-xl hover:bg-slate-100 dark:hover:bg-slate-800 ${className}`}
  >
    {children}
  </div>
);

const Tag = ({ label }: { label: string }) => (
  <span className="px-3 py-1 text-sm font-medium rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors duration-300 hover:bg-slate-300 dark:hover:bg-slate-700">
    {label}
  </span>
);

// ========== Sections ==========

const ProjectImage = () => (
  <div className="relative aspect-video rounded-xl  overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
    <Image
      src={project.image}
      alt={`${project.title} preview`}
      fill
      className="object-cover transition-transform duration-500 hover:scale-105"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
  </div>
);

const ProjectSummary = () => (
  <div className="flex flex-col gap-6">
 <Card
  className="p-8 cursor-pointer bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors rounded-xl shadow-md hover:shadow-xl"
>
  <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
    {project.availability}
  </h1>
  <p className="text-base text-slate-600 dark:text-slate-400 mb-4">
    This course is only available on YouTube for now. It&apos;ll be added here soon.
  </p>
  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 text-center text-slate-600 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
    Watch on YouTube
  </div>
</Card>

    <Card className="p-6 flex items-center justify-center">
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Source Code on GitHub"
        className="flex flex-col items-center gap-2 group"
      >
        <Github className="w-6 h-6 text-slate-900 dark:text-white group-hover:scale-110 transition-transform duration-300" />
        <span className="text-base font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
          Source Code
        </span>
      </a>
    </Card>
  </div>
);

const ProjectTags = () => (
  <div className="flex flex-wrap gap-2">
    {project.tags.map((tag) => (
      <Tag key={tag} label={tag} />
    ))}
  </div>
);

const AboutSection = () => (
  <Card className="lg:col-span-2 p-8 shadow-md">
    <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
      <Youtube className="w-5 h-5" />
      YouTube
    </div>
    <h2 className="text-xl font-semibold text-slate-900 dark:text-white my-4">
      {project.title}
    </h2>
    <p className="text-base text-slate-600 dark:text-slate-400 mb-6">
      {project.longDescription}
    </p>
    <ProjectTags />
  </Card>
);

// ========== Page Component ==========

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-white mt-35 py-5 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto space-y-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectImage />
            <ProjectSummary />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AboutSection />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
