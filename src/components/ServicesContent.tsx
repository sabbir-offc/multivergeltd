'use client';

import { motion } from 'framer-motion';
import { Briefcase, Rocket, Code, ShieldCheck, TrendingUp, Cloud } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp size={40} />,
    title: 'Affiliate Marketing Growth',
    description: 'Expand your business reach with our proven affiliate marketing strategies and expert partnerships.',
  },
  {
    icon: <Briefcase size={40} />,
    title: 'Digital Strategy Consulting',
    description: 'Tailored digital roadmaps designed to maximize ROI, brand visibility, and long-term success.',
  },
  {
    icon: <Code size={40} />,
    title: 'Web Development',
    description: 'We build scalable, responsive websites optimized for performance and brand impact.',
  },
  {
    icon: <Rocket size={40} />,
    title: 'SEO & Content Optimization',
    description: 'Drive organic traffic and visibility through strategic SEO and optimized content solutions.',
  },
  {
    icon: <Cloud size={40} />,
    title: 'Cloud Solutions',
    description: 'Secure, scalable cloud hosting and infrastructure tailored for growing businesses.',
  },
  {
    icon: <ShieldCheck size={40} />,
    title: 'Cybersecurity Consulting',
    description: 'Protect your digital assets with modern cybersecurity assessments and defense strategies.',
  },
];

export default function ServicesContent() {
  return (
    <section className="px-6 md:px-20 py-24 w-full bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center mb-16"
      >
        Our <span className="text-blue-600 dark:text-blue-400">Services</span>
      </motion.h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
        {services.map((service, index) => (
    <motion.div
    key={service.title}
    className="card-bg p-8 transition-all flex flex-col gap-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="text-blue-600">{service.icon}</div>
    <h3 className="text-2xl font-bold">{service.title}</h3>
    <p>{service.description}</p>
  </motion.div>
  
       
        ))}
      </div>

      {/* Why Work With Us */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Why Work With <span className="text-blue-600 dark:text-blue-400">Multiverge Ltd?</span>
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-100">
        We combine cutting-edge technology, strategic expertise, and a passion for innovation to deliver solutions that drive real results.
        </p>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
        >
          Let’s Start Your Project
        </a>
      </motion.div>
    </section>
  );
}
