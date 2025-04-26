"use client";

import { motion } from "framer-motion";
import { Code, PenTool, Cloud, Shield } from "lucide-react";

const services = [
  {
    icon: <Code size={36} />,
    title: "Web Development",
    description: "Building responsive, dynamic, and modern websites tailored to your business needs.",
  },
  {
    icon: <PenTool size={36} />,
    title: "UI/UX Design",
    description: "Crafting beautiful and user-friendly interfaces for web and mobile platforms.",
  },
  {
    icon: <Cloud size={36} />,
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and services to empower your digital journey.",
  },
  {
    icon: <Shield size={36} />,
    title: "Cybersecurity",
    description: "Protecting your digital assets with robust, cutting-edge security strategies.",
  },
];

const ServicesPreview = () => {
  return (
    <section
      className="w-full px-6 md:px-20 py-24"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-3">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Solutions built for the future.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="mb-4 text-purple-500 group-hover:text-purple-600">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
