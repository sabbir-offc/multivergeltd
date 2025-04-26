'use client';

import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function SingleBlogPage({ content }: { content: string }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="prose dark:prose-invert max-w-4xl mx-auto px-4 md:px-8 py-12
                prose-headings:text-[var(--foreground)] prose-p:text-gray-500 dark:prose-p:text-gray-400
                prose-li:marker:text-blue-500 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-blue-500"
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </motion.article>
  );
}
