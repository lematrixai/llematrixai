"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-blue-50/50 dark:from-slate-950 dark:to-blue-950/20" />
      <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
      <div className="absolute -left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:flex lg:flex-row">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-poppins text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                Get in touch.
              </h2>
              <p className="font-inter text-lg text-slate-600 dark:text-slate-400">
                We&apos;d love to hear from you. Fill in the form and we&apos;ll get back to you shortly.
              </p>
            </div>

            <form className="relative space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="font-inter block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white/95 px-4 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800/95 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-inter block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white/95 px-4 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800/95 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-inter block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    placeholder="07XXX or +2557XXX"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white/95 px-4 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800/95 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-inter block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-slate-300 bg-white/95 px-4 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800/95 dark:text-slate-100"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-poppins text-xl font-semibold text-slate-900 dark:text-slate-100">
                Tanzania
              </h3>
              <p className="font-inter text-slate-600 dark:text-slate-400">
                Dar es Salaam
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-poppins text-xl font-semibold text-slate-900 dark:text-slate-100">
                Email Us
              </h3>
              <a
                href="mailto:info@lematrixai.com"
                className="font-inter text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                info@lematrixai.com
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="font-poppins text-xl font-semibold text-slate-900 dark:text-slate-100">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://twitter.com/lematrixai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com/lematrixai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  Instagram
                </a>
                <a
                  href="https://github.com/lematrixai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  Github
                </a>
                <a
                  href="https://linkedin.com/company/lematrixai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 