"use client";

import { Button } from "./ui/button";
import { NavbarLogo } from "./ui/resizable-navbar";
import { Link } from "react-scroll"
import { Twitter, Instagram, Github, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Web Development", href: "web" },
    { name: "App Development", href: "app" },
    { name: "Hybrid Apps", href: "hybrid" },
    { name: "UI/UX Design", href: "uiux" },
  ],
  company: [
    { name: "Contact Us", href: "contact" },
    { name: "Projects", href: "projects" },
  ],
  connect: [
    { name: "Twitter", href: "https://x.com/lematrixai", icon: <Twitter className="size-4" /> },
    { name: "Instagram", href: "https://www.instagram.com/lematrixai", icon: <Instagram className="size-4" /> },
    { name: "Github", href: "https://github.com/lematrixai", icon: <Github className="size-4" /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/lematrixai", icon: <Linkedin className="size-4" /> },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-slate-900 overflow-hidden ">
      {/* Background elements */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900" />
      <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
      <div className="absolute -left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20" /> */}

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <NavbarLogo />             
            </div>
          </div>

          {/* Services */}
          <div className="z-30">
            <h3 className="font-poppins text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Services
            </h3>
            <ul className="mt-4 space-y-2 cursor-pointer">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="font-inter text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="z-30">
            <h3 className="font-poppins text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="font-inter text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="z-30 col-span-2">
            <h3 className="font-poppins text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Newsletter
            </h3>
            <p className="mt-4 font-inter text-sm text-slate-600 dark:text-slate-400">
              Subscribe to get the latest design news, articles, resources and inspiration.
            </p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500"
              />
              <Button
                type="submit"
                className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Connect Links */}
       <div className=" cursor-pointer">
       <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800">
          <div className="flex items-center gap-4 z-30">
            {footerLinks.connect.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-inter flex text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                <span className="mr-1">{link.icon}</span>
              </a>
            ))}
          </div>
          <p className="font-inter text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} - lematrixai
          </p>
        </div>
       </div>
      </div>
    </footer>
  );
} 