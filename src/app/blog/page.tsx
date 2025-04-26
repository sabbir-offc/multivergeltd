"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs"; // ✅ Correct dynamic import

export default function BlogPage() {
  return (
    <section className="min-h-screen px-6 md:px-20 pt-32 pb-20 bg-[var(--background)] text-[var(--foreground)]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Insights & Updates
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
          Explore technology tips, affiliate marketing hacks, and growth strategies from the experts at Multiverge Ltd.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {blogs.map((blog, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="card-bg p-6 rounded-2xl flex flex-col justify-between shadow-lg transition-all duration-300"
          >
            <div>
              <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
              <h2 className="text-lg md:text-xl font-semibold leading-snug mb-4">
                {blog.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                {blog.description}
              </p>
            </div>

            <div>
              <Link
                href={`/blog/${blog.slug}`} 
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
