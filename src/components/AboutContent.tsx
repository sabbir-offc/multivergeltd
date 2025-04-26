'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function AboutContent() {
  return (
    <section className="px-6 md:px-20 py-24 w-full bg-[var(--background)] text-[var(--foreground)]">

      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12"
      >
        About <span className="text-blue-600 dark:text-blue-400">Multiverge Ltd</span>
      </motion.h1>

      {/* Story Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          At Multiverge Ltd., we believe in shaping the future through innovation. Our passion lies in empowering businesses with transformative technology solutions that drive growth, scalability, and success. Starting as GlobalTec IT in 2021 and evolving into Multiverge Ltd. in 2025, we continue to expand our reach and productivity through affiliate marketing and beyond.
        </p>
      </motion.div>

      {/* Vision and Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-8 bg-white dark:bg-white/5 rounded-2xl shadow-md hover:shadow-xl transition-all"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To be a global leader in digital innovation, inspiring businesses to grow beyond limits through creativity, technology, and excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8 bg-white dark:bg-white/5 rounded-2xl shadow-md hover:shadow-xl transition-all"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To deliver future-ready solutions that empower organizations to grow, adapt, and thrive in a dynamic digital world.
          </p>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {['Customer Focus', 'Excellence', 'Creativity', 'Passion', 'Growth'].map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-4 p-6 bg-white dark:bg-white/5 rounded-2xl shadow hover:shadow-lg transition-all"
            >
              <CheckCircle className="text-blue-600 dark:text-blue-400" size={32} />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">{value}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Why Choose Multiverge Ltd?
        </motion.h2>

        <div className="space-y-6">
          {["Affiliate Marketing Excellence", "Tailored Digital Strategies", "Futuristic Technology Solutions", "Client Success Focus"].map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <CheckCircle className="text-blue-600 dark:text-blue-400" size={24} />
              <p className="text-gray-700 dark:text-gray-300">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-5xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Journey
        </motion.h2>

        <div className="border-l-2 border-blue-600 dark:border-blue-400 pl-6 space-y-12">
          {[
            { year: '2021', event: 'Founded as GlobalTec IT' },
            { year: '2025', event: 'Rebranded as Multiverge Ltd' },
            { year: '2025+', event: 'Expanding to boost productivity and future technology' },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{item.year}</h3>
              <p className="text-gray-700 dark:text-gray-300">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
        >
          Let’s Work Together
        </a>
      </motion.div>

    </section>
  );
}