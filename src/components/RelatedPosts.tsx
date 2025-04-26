// src/components/RelatedPosts.tsx

import Link from "next/link";
import { posts } from "@/content/blogs/posts";

export default function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = posts.filter(post => post.slug !== currentSlug).slice(0, 2); // pick 2 random

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {related.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-5 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition"
          >
            <h4 className="text-lg font-semibold">{post.title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
