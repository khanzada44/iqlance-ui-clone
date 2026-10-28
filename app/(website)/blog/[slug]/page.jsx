
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  blogs,
  getBlogBySlug,
} from "../../../components/pages/blog/data";

// Required for static export with dynamic blog slugs
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const popularPosts = blog.Popular || [];

  return (
    <div className="w-[90%] max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left Side - Blog Content */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl lg:text-4xl font-bold text-[#1E4F91] leading-tight">
            {blog.title}
          </h1>

          {/* Author, Date and Category */}
          <div className="flex flex-wrap items-center gap-1 mt-5 text-lg">
            <span className="text-[#2878ff] font-medium">
              {blog.author}
            </span>

            <span className="text-black">Posted</span>

            <span className="text-[#2878ff]">
              {blog.date}
            </span>

            <span className="text-black">In</span>

            <span className="text-[#2878ff]">
              {blog.category}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-75 sm:h-100 lg:h-137.5 mt-8">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Blog Sections */}
          <div className="mt-12 space-y-10">
            {blog.content?.map((section, index) => (
              <div key={index} className="m-0">

                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1E4F91] mb-4 mt-3">
                    {section.heading}
                  </h2>
                )}

                {section.text && (
                  <div
                    className="text-base sm:text-lg font-semibold leading-7 text-black mb-2"
                    dangerouslySetInnerHTML={{
                      __html: section.text,
                    }}
                  />
                )}

                {section.description && (
                  <div
                    className="text-sm sm:text-base font-semibold leading-6 text-black mb-2"
                    dangerouslySetInnerHTML={{
                      __html: section.description,
                    }}
                  />
                )}

              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Popular Posts */}
        <aside className="min-w-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Popular Post
          </h2>

          <div className="space-y-6">
            {popularPosts.map((post, index) => (
              <Link
                key={post.slug || index}
                href={post.slug ? `/blog/${post.slug}` : "#"}
                className="flex gap-4 pb-6 border-b border-gray-200 hover:opacity-80 transition"
              >
                {/* Popular Post Image */}
                <div className="relative w-24 sm:w-28 h-20 rounded overflow-hidden shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title || "Popular blog post"}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>

                {/* Popular Post Details */}
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-6">
                    {post.title}
                  </h3>

                  {post.date && (
                    <p className="text-sm text-black mt-2">
                      {post.date}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
}
