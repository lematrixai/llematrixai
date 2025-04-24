"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link as ScrollLink } from "react-scroll";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden max-md:pt-0 max-sm:pt-35 max-xl:pt-0 max-2xl:pt-20 pt-20">
      {/* Background elements */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-blue-50/50 dark:from-slate-950 dark:to-blue-950/20" />
      <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20 md:h-[600px] md:w-[600px]" />
      <div className="absolute -left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20 md:h-[600px] md:w-[600px]" /> */}

      <div className="container relative mx-auto flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
          >
            🎯 Your Vision, Our Expertise
          </motion.div>

          {/* Main heading */}
          <h1 className="font-poppins relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-7xl dark:text-slate-100">
            {"Transforming Ideas into Digital Masterpieces"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="font-inter relative z-10 mx-auto mt-6 max-w-2xl text-center text-base font-normal leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
          >
            At lematrixai, we blend creativity with technology to bring your digital dreams to life. From pixel-perfect designs to scalable solutions. Let&apos;s build something extraordinary together.
          </motion.p>

           {/* CTA Buttons */}
           <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
            >
              <Button
              onClick={() => {
                window.location.href = "/contact";
              }}
                size="lg"
                className="w-full bg-black px-6 py-5 text-base font-semibold text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              >
                Contact
              </Button>
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-100}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full border-black px-6 py-5 text-base font-semibold text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              >
                Discover Our Services
              </Button>
            </ScrollLink>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <div className="flex flex-col items-center rounded-lg bg-white/50 p-4 shadow-sm dark:bg-slate-900/50">
              <span className="mb-2 text-2xl">🎨</span>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Design</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Beautiful, intuitive interfaces</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white/50 p-4 shadow-sm dark:bg-slate-900/50">
              <span className="mb-2 text-2xl">⚡</span>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Build</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Robust, scalable solutions</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white/50 p-4 shadow-sm dark:bg-slate-900/50">
              <span className="mb-2 text-2xl">🚀</span>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">Deploy</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Seamless, reliable delivery</p>
            </div>
          </motion.div>

         

          
        </motion.div>
      </div>
    </section>
  );
}

