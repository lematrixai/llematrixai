"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Banner() {
  return (
      <section id="banner" className="relative py-20 overflow-hidden">
        {/* Background elements */}
        {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900" />
        <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute -left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20" /> */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-5xl p-10 bg-black dark:bg-slate-900"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl dark:bg-blue-500/20" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl dark:bg-purple-500/20" />

            {/* Content */}
            <div className="relative z-10">
             
              <h2 className="mt-4 font-poppins text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl dark:text-slate-100">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="mt-4 font-inter text-lg text-slate-300 dark:text-slate-400">
                Bring your vision to life with lematrixai. Collaborate with our experts and create your next successful project today!
              </p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Button
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                  size="lg"
                  className="bg-white text-black px-8 py-6 text-lg font-semibold  hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  Let&apos;s Contact
                </Button>
              </motion.div>

           
            </div>
          </motion.div>
        </div>
      </section>
  );
} 