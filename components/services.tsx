'use client'

import { motion } from "framer-motion";
import { Element } from "react-scroll";

const services = [
  {
    title: "Website Development",
    description: "Our skilled developers create responsive and beautiful websites designed to fit your business needs. Whether it's a simple landing page or a full corporate site, we make sure it works smoothly on all devices using the latest tools.",
    icon: "🌐",
    color: "from-blue-500 to-blue-600",
    delay: 0.2
  },
  {
    title: "Mobile App Development",
    description: "Connect with your customers anytime with our mobile app development services. We create user-friendly, feature-packed iOS and Android apps to engage your audience and enhance your brand's mobile presence.",
    icon: "📱",
    color: "from-purple-500 to-purple-600",
    delay: 0.4
  },
  {
    title: "UI/UX Design",
    description: "Great design starts with the user. Our UI/UX experts focus on creating designs that are both beautiful and easy to use, striking the perfect balance between style and functionality to drive results.",
    icon: "🎨",
    color: "from-pink-500 to-pink-600",
    delay: 0.6
  },
  {
    title: "Web Application Development",
    description: "Streamline your business with custom web applications. We use modern frameworks and agile methods to create secure, efficient, and dynamic solutions that enhance productivity and simplify workflows.",
    icon: "⚡",
    color: "from-green-500 to-green-600",
    delay: 0.8
  }
];

export default function Services() {
  return (
    <Element name="services">
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
              What we do
            </span>
            <h2 className="mt-4 font-poppins text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-slate-100">
              Our Expert Services
            </h2>
            <p className="mt-4 font-inter text-lg text-slate-600 dark:text-slate-400">
              Custom Solutions Tailored for Your Digital Success
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-slate-800"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
                
                {/* Service content */}
                <div className="relative z-10">
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="mb-3 font-poppins text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {service.title}
                  </h3>
                  <p className="font-inter text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}
