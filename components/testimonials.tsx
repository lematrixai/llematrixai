"use client";

import { motion } from "framer-motion";
import { Element } from "react-scroll";

export default function Testimonials() {
  return (
    <Element name="testimonials">
      <section className="relative py-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900" />
        <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute -left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              Client Success Stories
            </span>
            <h2 className="mt-4 font-poppins text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-slate-100">
              What Our Clients Say
            </h2>
            <p className="mt-4 font-inter text-lg text-slate-600 dark:text-slate-400">
              Real experiences from our valued partners
            </p>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-3xl"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 text-6xl text-blue-500/20 dark:text-blue-400/20">
              "
            </div>

            {/* Testimonial Content */}
            <div className="relative rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
              <div className="relative z-10">
                <p className="font-inter text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  "We approached lematrixai with an idea for our mobile app, and their work has been truly outstanding. We love working with their team and are always impressed by the quality of their work. They consistently deliver on time and exceed our expectations with their attention to detail and professionalism. Thank you for making every project such a smooth and enjoyable experience!"
                </p>

                {/* Client Info */}
                <div className="mt-8 flex items-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-slate-800">
                      <span className="text-2xl">👨‍💼</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-poppins text-lg font-semibold text-slate-900 dark:text-slate-100">
                      Masoud Mpanzi
                    </h4>
                    <p className="font-inter text-sm text-slate-600 dark:text-slate-400">
                      Chief Technology Officer, Upzelo
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl dark:bg-blue-500/20" />
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl dark:bg-purple-500/20" />
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-600 dark:text-slate-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-inter">5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="font-inter">99% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-inter">10+ Projects</span>
            </div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
} 