import { blogs } from '@/data/blogs';
import SingleBlogPage from '@/components/SingleBlogPage';
import Link from 'next/link';
import { Metadata } from 'next';

// generateStaticParams for building pages statically
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// generateMetadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Multiverge Ltd',
      description: 'Sorry, the blog you are looking for was not found.',
    };
  }

  return {
    title: `${blog.title} | Multiverge Ltd Blog`,
    description: blog.description,
  };
}

// ✅ MAIN FIX: async default export function
// @ts-expect-error Async typing bug in Next.js 15
export default async function BlogDetailsPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold mb-4">404 - Blog Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Sorry, we couldn&apos;t find the blog you&apos;re looking for.
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
        >
          Back to Blog Home
        </Link>
      </div>
    );
  }

  const relatedPosts = blogs.filter((b) => b.slug !== params.slug).slice(0, 2);

  return (
    <main className="pt-28 pb-20 px-6 md:px-20 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-4xl mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{blog.date}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">{blog.description}</p>
        </div>

        {/* Blog Content */}
        <SingleBlogPage content={blog.content} />
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-24 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Related Posts</h2>

          <div className="grid md:grid-cols-2 gap-10 px-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-bg p-6 rounded-2xl flex flex-col justify-between hover:shadow-2xl transition-transform hover:-translate-y-1"
              >
                <div>
                  <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold leading-snug mb-2">{post.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{post.description}</p>
                </div>
                <div className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold">
                  Read More →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
