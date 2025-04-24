"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Youtube } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: "food-delivery-app-ui",
    title: "Food Delivery App UI",
    description: "A modern food delivery app UI built with React Native and Reanimated",
    image: "/projects/food-delivery.png",
    tags: ["React Native", "Reanimated", "Tailwind"],
    source: "Youtube",
    link: "https://youtube.com/watch?v=example1"
  },
  {
    id: "expense-tracker-app",
    title: "Expense Tracker App",
    description: "A full-stack expense tracking application with Firebase integration",
    image: "/projects/expense-tracker.png",
    tags: ["React Native", "Firebase", "Tailwind"],
    source: "Youtube",
    link: "https://youtube.com/watch?v=example2"
  },
  {
    id: "ecommerce-app-ui",
    title: "E-commerce App UI",
    description: "A beautiful e-commerce UI built with React Native and Sanity CMS",
    image: "/projects/ecommerce.png",
    tags: ["React Native", "Sanity", "Tailwind"],
    source: "Youtube",
    link: "https://youtube.com/watch?v=example3"
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    description: "A social media platform built with Expo and Supabase",
    image: "/projects/social-media.png",
    tags: ["Expo", "Supabase", "Tailwind"],
    source: "Youtube",
    link: "https://youtube.com/watch?v=example4"
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "A weather application using RapidAPI for weather data",
    image: "/projects/weather.png",
    tags: ["React Native", "RapidAPI", "Tailwind"],
    source: "Youtube",
    link: "https://youtube.com/watch?v=example5"
  }
];

const allTags = ["All", "React Native", "Reanimated", "Firebase", "Tailwind", "Supabase", "Sanity", "RapidAPI", "Expo"];

export function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag === "All" || project.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <section id="projects" className="py-30 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative max-w-7xl mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-black text-white dark:text-slate-900 dark:bg-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded bg-white dark:bg-slate-900 shadow-lg hover:shadow transition-shadow"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                 
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 ">
                    <span className="text-sm text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded flex items-center gap-2"><Youtube />{project.source}</span>
                  </div>
                
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 