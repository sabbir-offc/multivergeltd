"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Vision",
    description:
      "To lead the digital frontier by delivering innovation-driven products that shape the future.",
  },
  {
    title: "Mission",
    description:
      "Empowering businesses through technology, creativity, and strategic thinking.",
  },
  {
    title: "Innovation",
    description:
      "We focus on building unique, efficient, and impactful solutions using modern tech.",
  },
];

const AboutPreview = () => {
  return (
    <section id="about"
      className="w-full px-6 md:px-20 py-24"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-3">Who We Are</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Multiverge Ltd is a digital company focused on crafting tomorrow’s
            tech solutions today.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We believe in blending technology with creativity. At Multiverge
              Ltd, we strive to empower modern businesses by building
              future-ready apps, platforms, and IT services that stand out.
            </p>
          </motion.div>

          {/* Right Feature Cards */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
